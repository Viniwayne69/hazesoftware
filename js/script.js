const body = document.body;
const nav = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const header = document.querySelector("[data-header]");
const internalLinks = document.querySelectorAll('a[href^="#"]');
const revealItems = document.querySelectorAll(".reveal");

function closeMenu() {
  if (!nav || !menuToggle) return;
  nav.classList.remove("is-open");
  menuToggle.classList.remove("is-active");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  body.classList.remove("menu-open");
}

function scrollToSection(targetId) {
  const target = document.querySelector(targetId);
  if (!target) return;

  const headerHeight = header ? header.offsetHeight : 0;
  const top = target.getBoundingClientRect().top + window.scrollY - headerHeight + 1;

  window.scrollTo({
    top,
    behavior: "smooth"
  });
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    menuToggle.classList.toggle("is-active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    body.classList.toggle("menu-open", isOpen);
  });
}

internalLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");

    if (!href || href === "#") return;

    event.preventDefault();
    closeMenu();
    scrollToSection(href);
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: "0px 0px -60px 0px"
});

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 45, 360)}ms`;
  revealObserver.observe(item);
});

document.querySelectorAll(".project-card, .glass-card, .list-panel, .btn").forEach((element) => {
  element.addEventListener("pointermove", (event) => {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    element.style.setProperty("--light-x", `${x}px`);
    element.style.setProperty("--light-y", `${y}px`);
  });
});

function initProfileCards() {
  const cards = document.querySelectorAll("[data-profile-card]");
  const clampValue = (value, min = 0, max = 100) => Math.min(Math.max(value, min), max);
  const roundValue = (value, precision = 3) => Number.parseFloat(value.toFixed(precision));
  const adjustRange = (value, fromMin, fromMax, toMin, toMax) => {
    return roundValue(toMin + ((toMax - toMin) * (value - fromMin)) / (fromMax - fromMin));
  };

  cards.forEach((card) => {
    const shell = card.querySelector(".profile-card-shell");
    if (!shell) return;

    let rafId = null;
    let currentX = shell.clientWidth / 2;
    let currentY = shell.clientHeight / 2;
    let targetX = currentX;
    let targetY = currentY;

    function setCardVars(x, y) {
      const width = shell.clientWidth || 1;
      const height = shell.clientHeight || 1;
      const percentX = clampValue((100 / width) * x);
      const percentY = clampValue((100 / height) * y);
      const centerX = percentX - 50;
      const centerY = percentY - 50;

      card.style.setProperty("--pointer-x", `${percentX}%`);
      card.style.setProperty("--pointer-y", `${percentY}%`);
      card.style.setProperty("--background-x", `${adjustRange(percentX, 0, 100, 35, 65)}%`);
      card.style.setProperty("--background-y", `${adjustRange(percentY, 0, 100, 35, 65)}%`);
      card.style.setProperty("--pointer-from-center", `${clampValue(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`);
      card.style.setProperty("--pointer-from-top", `${percentY / 100}`);
      card.style.setProperty("--pointer-from-left", `${percentX / 100}`);
      card.style.setProperty("--rotate-x", `${roundValue(-(centerX / 6))}deg`);
      card.style.setProperty("--rotate-y", `${roundValue(centerY / 5)}deg`);
    }

    function animate() {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      setCardVars(currentX, currentY);

      if (Math.abs(targetX - currentX) > 0.08 || Math.abs(targetY - currentY) > 0.08) {
        rafId = requestAnimationFrame(animate);
      } else {
        rafId = null;
        if (!card.classList.contains("active")) {
          setCardVars(shell.clientWidth / 2, shell.clientHeight / 2);
        }
      }
    }

    function setTarget(x, y) {
      targetX = x;
      targetY = y;
      if (!rafId) rafId = requestAnimationFrame(animate);
    }

    setCardVars(currentX, currentY);
    setTarget(shell.clientWidth - 70, 60);
    window.setTimeout(() => setTarget(shell.clientWidth / 2, shell.clientHeight / 2), 260);

    shell.addEventListener("pointerenter", (event) => {
      const rect = shell.getBoundingClientRect();
      card.classList.add("active");
      setTarget(event.clientX - rect.left, event.clientY - rect.top);
    });

    shell.addEventListener("pointermove", (event) => {
      const rect = shell.getBoundingClientRect();
      setTarget(event.clientX - rect.left, event.clientY - rect.top);
    });

    shell.addEventListener("pointerleave", () => {
      card.classList.remove("active");
      setTarget(shell.clientWidth / 2, shell.clientHeight / 2);
    });
  });
}

initProfileCards();

function createShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.warn(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

function createProgram(gl, vertexSource, fragmentSource) {
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexSource);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);

  if (!vertexShader || !fragmentShader) return null;

  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.warn(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return null;
  }

  return program;
}

function initGalaxyBackground() {
  const container = document.querySelector("[data-galaxy]");
  if (!container || !window.WebGLRenderingContext) return;

  const canvas = document.createElement("canvas");
  const gl = canvas.getContext("webgl", {
    alpha: true,
    antialias: false,
    premultipliedAlpha: false
  });

  if (!gl) {
    container.classList.add("is-static");
    return;
  }

  const vertexSource = `
    attribute vec2 position;
    varying vec2 vUv;

    void main() {
      vUv = position * 0.5 + 0.5;
      gl_Position = vec4(position, 0.0, 1.0);
    }
  `;

  const fragmentSource = `
    precision highp float;

    uniform float uTime;
    uniform vec2 uResolution;
    uniform vec2 uMouse;
    uniform float uMouseActive;
    uniform float uReducedMotion;

    varying vec2 vUv;

    #define NUM_LAYER 4.0
    #define MAT45 mat2(0.7071, -0.7071, 0.7071, 0.7071)
    #define PERIOD 3.0

    float hash21(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }

    float tri(float x) {
      return abs(fract(x) * 2.0 - 1.0);
    }

    float tris(float x) {
      float t = fract(x);
      return 1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0));
    }

    float trisn(float x) {
      float t = fract(x);
      return 2.0 * (1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0))) - 1.0;
    }

    vec3 hsv2rgb(vec3 c) {
      vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
      vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
      return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    float star(vec2 uv, float flare) {
      float d = max(length(uv), 0.001);
      float m = 0.035 / d;
      float rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 900.0));
      m += rays * flare * 0.34;
      uv *= MAT45;
      rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 900.0));
      m += rays * flare * 0.14;
      m *= smoothstep(1.0, 0.18, d);
      return m;
    }

    vec3 starLayer(vec2 uv) {
      vec3 col = vec3(0.0);
      vec2 gv = fract(uv) - 0.5;
      vec2 id = floor(uv);

      for (int y = -1; y <= 1; y++) {
        for (int x = -1; x <= 1; x++) {
          vec2 offset = vec2(float(x), float(y));
          vec2 si = id + offset;
          float seed = hash21(si);
          float size = fract(seed * 345.32);
          float shimmer = mix(1.0, tri(uTime / (PERIOD * seed + 1.0)), 1.0 - uReducedMotion);
          float flareSize = smoothstep(0.91, 1.0, size) * shimmer;

          float red = smoothstep(0.2, 1.0, hash21(si + 1.0)) + 0.2;
          float blu = smoothstep(0.2, 1.0, hash21(si + 3.0)) + 0.2;
          float grn = min(red, blu) * seed;
          vec3 base = vec3(red, grn, blu);

          float hue = atan(base.g - base.r, base.b - base.r) / 6.28318 + 0.5;
          hue = fract(hue + 0.57);
          float sat = length(base - vec3(dot(base, vec3(0.299, 0.587, 0.114)))) * 0.72;
          float val = max(max(base.r, base.g), base.b);
          base = hsv2rgb(vec3(hue, sat, val));

          vec2 drift = vec2(
            tris(seed * 34.0 + uTime / 10.0),
            tris(seed * 38.0 + uTime / 30.0)
          ) - 0.5;
          drift *= 1.0 - uReducedMotion;

          float s = star(gv - offset - drift, flareSize);
          float twinkle = trisn(uTime + seed * 6.2831) * 0.5 + 1.0;
          s *= mix(1.0, twinkle, 0.26 * (1.0 - uReducedMotion));
          col += s * size * base;
        }
      }

      return col;
    }

    void main() {
      vec2 uv = (vUv * uResolution - 0.5 * uResolution) / uResolution.y;
      vec2 mouseUv = (uMouse * uResolution - 0.5 * uResolution) / uResolution.y;
      float dist = length(uv - mouseUv);
      vec2 repulsion = normalize(uv - mouseUv + 0.0001) * (1.35 / (dist + 0.18));
      uv += repulsion * 0.032 * uMouseActive * (1.0 - uReducedMotion);

      float angle = uTime * 0.035 * (1.0 - uReducedMotion);
      mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
      uv = rot * uv;

      vec3 col = vec3(0.0);

      for (float i = 0.0; i < 1.0; i += 1.0 / NUM_LAYER) {
        float depth = fract(i + uTime * 0.018 * (1.0 - uReducedMotion));
        float scale = mix(24.0, 0.75, depth);
        float fade = depth * smoothstep(1.0, 0.9, depth);
        col += starLayer(uv * scale + i * 453.32) * fade;
      }

      col *= vec3(0.52, 0.82, 1.18);
      float alpha = smoothstep(0.01, 0.32, length(col));
      gl_FragColor = vec4(col, min(alpha, 0.72));
    }
  `;

  const program = createProgram(gl, vertexSource, fragmentSource);
  if (!program) return;

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    -1, -1,
    3, -1,
    -1, 3
  ]), gl.STATIC_DRAW);

  const positionLocation = gl.getAttribLocation(program, "position");
  const uniforms = {
    time: gl.getUniformLocation(program, "uTime"),
    resolution: gl.getUniformLocation(program, "uResolution"),
    mouse: gl.getUniformLocation(program, "uMouse"),
    mouseActive: gl.getUniformLocation(program, "uMouseActive"),
    reducedMotion: gl.getUniformLocation(program, "uReducedMotion")
  };

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pointer = {
    targetX: 0.5,
    targetY: 0.5,
    x: 0.5,
    y: 0.5,
    active: 0,
    targetActive: 0
  };

  function resizeGalaxy() {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.75);
    const width = Math.max(1, Math.floor(container.clientWidth * pixelRatio));
    const height = Math.max(1, Math.floor(container.clientHeight * pixelRatio));

    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
    }
  }

  function movePointer(event) {
    pointer.targetX = event.clientX / window.innerWidth;
    pointer.targetY = 1 - event.clientY / window.innerHeight;
    pointer.targetActive = 1;
  }

  function leavePointer() {
    pointer.targetActive = 0;
  }

  function render(time) {
    resizeGalaxy();
    pointer.x += (pointer.targetX - pointer.x) * 0.045;
    pointer.y += (pointer.targetY - pointer.y) * 0.045;
    pointer.active += (pointer.targetActive - pointer.active) * 0.045;

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.uniform1f(uniforms.time, time * 0.001);
    gl.uniform2f(uniforms.resolution, canvas.width, canvas.height);
    gl.uniform2f(uniforms.mouse, pointer.x, pointer.y);
    gl.uniform1f(uniforms.mouseActive, pointer.active);
    gl.uniform1f(uniforms.reducedMotion, prefersReducedMotion.matches ? 1 : 0);
    gl.drawArrays(gl.TRIANGLES, 0, 3);

    requestAnimationFrame(render);
  }

  container.appendChild(canvas);
  window.addEventListener("resize", resizeGalaxy);
  window.addEventListener("pointermove", movePointer);
  window.addEventListener("pointerleave", leavePointer);
  requestAnimationFrame(render);
}

initGalaxyBackground();
