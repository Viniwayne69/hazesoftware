import { Braces, FileCode2, Headphones, PenTool, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionLabel from './ui/SectionLabel.jsx';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Diagnóstico',
    text: 'Entendemos seu negócio, seus desafios e seus objetivos.'
  },
  {
    icon: FileCode2,
    number: '02',
    title: 'Planejamento',
    text: 'Definimos estratégia, arquitetura e escopo com clareza.'
  },
  {
    icon: PenTool,
    number: '03',
    title: 'Design',
    text: 'Criamos interfaces intuitivas, elegantes e funcionais.'
  },
  {
    icon: Braces,
    number: '04',
    title: 'Desenvolvimento',
    text: 'Transformamos a ideia em código limpo, seguro e performático.'
  },
  {
    icon: Headphones,
    number: '05',
    title: 'Entrega e Suporte',
    text: 'Implantamos, ajustamos e acompanhamos a evolução do sistema.'
  }
];

export default function Process() {
  return (
    <motion.section
      className="panel process"
      id="processo"
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <SectionLabel>Processo</SectionLabel>
      <h2>Da ideia ao sistema funcionando.</h2>

      <div className="process__line">
        {steps.map((step, index) => (
          <motion.article
            className="process-step"
            key={step.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div className="process-step__icon">
              <step.icon size={24} strokeWidth={1.8} />
            </div>
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
