import { motion } from 'framer-motion';
import Button from './ui/Button.jsx';
import SectionLabel from './ui/SectionLabel.jsx';

export default function CTA() {
  return (
    <motion.section
      className="panel cta"
      id="contato"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div>
        <SectionLabel>Vamos conversar?</SectionLabel>
        <h2>Vamos construir algo incrível juntos?</h2>
        <p>
          Conte sobre seu projeto e descubra como podemos transformar sua ideia em um sistema
          poderoso.
        </p>
        <Button href="https://wa.me/5516988589448">Falar com especialista</Button>
      </div>
    </motion.section>
  );
}
