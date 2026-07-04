import { motion } from 'framer-motion';
import Button from './ui/Button.jsx';
import SplashCursor from './SplashCursor.jsx';
import SectionLabel from './ui/SectionLabel.jsx';

export default function Hero() {
  return (
    <section className="hero panel panel--hero" id="inicio">
      <SplashCursor
        className="hero__splash"
        SIM_RESOLUTION={96}
        DYE_RESOLUTION={768}
        DENSITY_DISSIPATION={3.2}
        VELOCITY_DISSIPATION={2.4}
        PRESSURE_ITERATIONS={14}
        CURL={4}
        SPLAT_RADIUS={0.18}
        SPLAT_FORCE={4200}
        COLOR_UPDATE_SPEED={5}
        RAINBOW_MODE={false}
        COLOR="#7c5cff"
      />
      <div className="container hero__grid">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel>Software que funciona</SectionLabel>
          <h1>Software que cresce com a sua empresa.</h1>
          <p>
            Desenvolvemos sistemas, SaaS e automações para empresas que valorizam qualidade,
            clareza e resultado.
          </p>
          <div className="hero__actions">
            <Button href="#contato">Falar com especialista</Button>
            <Button href="#solucoes" variant="secondary">
              Ver soluções
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
