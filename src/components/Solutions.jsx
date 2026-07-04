import { ArrowRight, Boxes, CalendarRange, Workflow, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from './ui/Card.jsx';
import IconBadge from './ui/IconBadge.jsx';
import SectionLabel from './ui/SectionLabel.jsx';

const solutions = [
  {
    icon: Boxes,
    title: 'Sistemas Web',
    text: 'Soluções completas para gestão, operação, atendimento e vendas.'
  },
  {
    icon: Zap,
    title: 'SaaS Personalizado',
    text: 'Plataformas escaláveis para transformar ideias em produtos digitais.'
  },
  {
    icon: Workflow,
    title: 'Automações',
    text: 'Reduza tarefas manuais e aumente a produtividade com inteligência.'
  },
  {
    icon: CalendarRange,
    title: 'CRM e Agendamento',
    text: 'Organize clientes, funil de vendas e agendamentos em um só lugar.'
  }
];

export default function Solutions() {
  return (
    <motion.section
      className="panel side-section"
      id="solucoes"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <SectionLabel>O que fazemos</SectionLabel>
      <h2>Soluções digitais que simplificam e potencializam.</h2>
      <div className="solution-grid">
        {solutions.map((solution, index) => (
          <Card className="solution-card" key={solution.title}>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
            >
              <IconBadge icon={solution.icon} />
              <h3>{solution.title}</h3>
              <p>{solution.text}</p>
              <ArrowRight className="card-arrow" size={18} aria-hidden="true" />
            </motion.div>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
