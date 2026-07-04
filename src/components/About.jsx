import { BookOpen, Heart, ShieldCheck, UserRoundCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from './ui/Card.jsx';
import IconBadge from './ui/IconBadge.jsx';
import SectionLabel from './ui/SectionLabel.jsx';

const values = [
  ['Foco em resultado', Heart],
  ['Código com propósito', BookOpen],
  ['Parceria de verdade', ShieldCheck],
  ['Suporte contínuo', UserRoundCheck]
];

export default function About() {
  return (
    <motion.section
      className="panel side-section"
      id="sobre"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <SectionLabel>A Haze</SectionLabel>
      <h2>Qualidade em cada detalhe, propósito em cada linha de código.</h2>
      <p>
        A Haze nasce para construir software com estética, estratégia e precisão, unindo
        tecnologia, experiência e resultado para empresas que querem crescer com clareza.
      </p>

      <div className="value-grid">
        {values.map(([label, Icon], index) => (
          <Card className="value-card" key={label}>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <IconBadge icon={Icon} />
              <h3>{label}</h3>
            </motion.div>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
