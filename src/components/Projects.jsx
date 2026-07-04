import { ArrowRight, BarChart3, CalendarDays, Link2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Card from './ui/Card.jsx';
import IconBadge from './ui/IconBadge.jsx';
import SectionLabel from './ui/SectionLabel.jsx';

const projects = [
  {
    icon: CalendarDays,
    category: 'Agendamento',
    title: 'Agenda Explosiva',
    text: 'Sistema de agendamento para profissionais da estética.'
  },
  {
    icon: BarChart3,
    category: 'Financeiro',
    title: 'HazeFlow',
    text: 'Painel financeiro e operacional para empresas.'
  },
  {
    icon: Link2,
    category: 'Apresentação',
    title: 'HazeLink',
    text: 'Página profissional de apresentação e conversão.'
  }
];

export default function Projects() {
  return (
    <motion.section
      className="panel side-section"
      id="projetos"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-topline">
        <div>
          <SectionLabel>Projetos</SectionLabel>
          <h2>Sistemas que geram resultados reais.</h2>
        </div>
        <a href="#contato" className="text-link">
          Ver todos os projetos <ArrowRight size={15} />
        </a>
      </div>

      <div className="project-list">
        {projects.map((project, index) => (
          <Card className="project-card" key={project.title}>
            <motion.div
              className="project-card__inner"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
            >
              <IconBadge icon={project.icon} />
              <div>
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
              </div>
              <button aria-label={`Ver projeto ${project.title}`}>
                <ArrowRight size={18} />
              </button>
            </motion.div>
          </Card>
        ))}
      </div>
    </motion.section>
  );
}
