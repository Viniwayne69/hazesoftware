import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Philosophy from './components/Philosophy.jsx';
import Solutions from './components/Solutions.jsx';
import Projects from './components/Projects.jsx';
import Process from './components/Process.jsx';
import About from './components/About.jsx';
import Numbers from './components/Numbers.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';
import PartnersPage from './pages/PartnersPage.jsx';
import SolutionsPage from './pages/SolutionsPage.jsx';

const partnerNavItems = [
  ['Início', '#inicio'],
  ['Como funciona', '#como-funciona'],
  ['Serviços', '#servicos'],
  ['Ganhos', '#ganhos'],
  ['Processo', '#processo'],
  ['Contato', '#contato']
];

const solutionsNavItems = [
  ['Serviços', '#servicos'],
  ['Sob medida', '#sob-medida'],
  ['Contato', '#contato'],
  ['Voltar ao site', '/']
];

function getRouteKey() {
  return `${window.location.pathname}${window.location.hash}`;
}

function isPartnersPage(routeKey) {
  const path = window.location.pathname.replace(/\/$/, '');
  return path.endsWith('/parceiros') || path.endsWith('/parceiros.html') || routeKey.includes('#parceiros');
}

function isSolutionsPage() {
  const path = window.location.pathname.replace(/\/$/, '');
  return path.endsWith('/solucoes') || path.endsWith('/solucoes.html');
}

export default function App() {
  const [routeKey, setRouteKey] = useState(getRouteKey);

  useEffect(() => {
    function updateRoute() {
      setRouteKey(getRouteKey());
      window.scrollTo(0, 0);
    }

    window.addEventListener('hashchange', updateRoute);
    window.addEventListener('popstate', updateRoute);
    return () => {
      window.removeEventListener('hashchange', updateRoute);
      window.removeEventListener('popstate', updateRoute);
    };
  }, []);

  if (isPartnersPage(routeKey)) {
    return (
      <>
        <Header
          items={partnerNavItems}
          ctaText="Quero ser parceiro"
          ctaHref="https://wa.me/5516988589448?text=Quero%20conversar%20sobre%20a%20parceria%20com%20a%20Haze"
          logoHref="/"
        />
        <PartnersPage />
        <Footer />
      </>
    );
  }

  if (isSolutionsPage()) {
    return (
      <>
        <Header
          items={solutionsNavItems}
          ctaText="Falar com a Haze"
          ctaHref="https://wa.me/5516988589448?text=Quero%20conversar%20sobre%20as%20solucoes%20da%20Haze"
          logoHref="/"
        />
        <SolutionsPage />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="site-stack">
        <Hero />
        <Solutions />
        <Philosophy />
        <Projects />
        <Process />
        <About />
        <Numbers />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
