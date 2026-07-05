import { ArrowRight, CalendarRange, FileText, Link2, UsersRound } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from './ui/Card.jsx';
import IconBadge from './ui/IconBadge.jsx';
import SectionLabel from './ui/SectionLabel.jsx';

const solutions = [
  {
    icon: Link2,
    title: 'Haze Link',
    text: 'Página comercial para Instagram e WhatsApp, criada para apresentar sua marca com mais profissionalismo.'
  },
  {
    icon: FileText,
    title: 'Haze Page',
    text: 'Página de vendas para divulgar ofertas, serviços, produtos, campanhas ou matrículas.'
  },
  {
    icon: CalendarRange,
    title: 'Haze Agenda',
    text: 'Sistema de agendamento para organizar horários, clientes, serviços e atendimentos.'
  },
  {
    icon: UsersRound,
    title: 'Haze CRM',
    text: 'Sistema comercial para organizar leads, negociações e oportunidades de venda.'
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
      <div className="section-topline">
        <div>
          <SectionLabel>O que fazemos</SectionLabel>
          <h2>Soluções digitais que simplificam e potencializam.</h2>
        </div>
        <a href="/solucoes" className="text-link">
          Ver todas as soluções <ArrowRight size={15} />
        </a>
      </div>
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
