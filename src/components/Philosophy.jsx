import { motion } from 'framer-motion';
import SectionLabel from './ui/SectionLabel.jsx';

export default function Philosophy() {
  return (
    <motion.section
      className="panel philosophy"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div>
        <SectionLabel>Nossa filosofia</SectionLabel>
        <h2>A tecnologia trabalha em silêncio, seu negócio aparece com força.</h2>
        <p>
          Criamos software para reduzir complexidade, organizar processos e transformar operação
          em crescimento real.
        </p>
      </div>
    </motion.section>
  );
}
