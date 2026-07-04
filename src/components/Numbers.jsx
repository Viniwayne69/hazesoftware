import { motion } from 'framer-motion';
import Card from './ui/Card.jsx';
import SectionLabel from './ui/SectionLabel.jsx';

const numbers = [
  ['+20', 'Projetos entregues'],
  ['100%', 'Foco em qualidade'],
  ['∞', 'Compromisso contínuo'],
  ['+30', 'Clientes satisfeitos']
];

export default function Numbers() {
  return (
    <motion.section
      className="panel side-section"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <SectionLabel>Números que importam</SectionLabel>
      <h2>Resultados que falam por si.</h2>
      <div className="numbers-grid">
        {numbers.map(([value, label], index) => (
          <Card className="number-card" key={label}>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <strong>{value}</strong>
              <span>{label}</span>
            </motion.div>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
