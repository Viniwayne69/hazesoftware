import {
  CalendarRange,
  FileText,
  LayoutPanelTop,
  Link2,
  ListTree,
  MessageSquareText,
  PanelTop,
  ShoppingBag,
  UsersRound
} from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button.jsx';
import Card from '../components/ui/Card.jsx';
import IconBadge from '../components/ui/IconBadge.jsx';
import SectionLabel from '../components/ui/SectionLabel.jsx';

const whatsappLink =
  'https://wa.me/5516988589448?text=Quero%20conversar%20sobre%20as%20solucoes%20da%20Haze';

const services = [
  {
    icon: Link2,
    title: 'Haze Link',
    category: 'Presença e contato',
    description:
      'Página comercial para bio, criada para apresentar a marca com mais profissionalismo e transformar visitantes do Instagram em contatos pelo WhatsApp.',
    details:
      'Reúne vídeo comercial, botões de contato, redes sociais, serviços, informações principais e uma estrutura visual personalizada.',
    implementation: 'R$ 370',
    monthly: 'R$ 60'
  },
  {
    icon: FileText,
    title: 'Haze Page',
    category: 'Vendas e campanhas',
    description:
      'Página de vendas criada para divulgar uma oferta específica de um comércio, como uma promoção, serviço, produto, matrícula, pacote ou campanha.',
    details:
      'Apresenta a oferta, explica os benefícios, valoriza diferenciais, responde objeções e conduz o cliente para uma ação direta.',
    implementation: 'R$ 497 a R$ 997',
    monthly: 'R$ 70 a R$ 97'
  },
  {
    icon: LayoutPanelTop,
    title: 'Haze Site',
    category: 'Site institucional',
    description:
      'Site institucional profissional para empresas que querem construir presença oficial na internet, transmitir credibilidade e apresentar sua marca com autoridade.',
    details:
      'Pode incluir página inicial, sobre a empresa, serviços, diferenciais, depoimentos, localização, formulário de contato e botões para WhatsApp.',
    implementation: 'R$ 997 a R$ 2.500',
    monthly: 'R$ 97 a R$ 197'
  },
  {
    icon: ShoppingBag,
    title: 'Haze Menu',
    category: 'Catálogo e cardápio',
    description:
      'Cardápio digital ou catálogo comercial personalizado para restaurantes, hamburguerias, docerias, lojas, salões, cosméticos e negócios que vendem produtos ou serviços.',
    details:
      'Organiza categorias, produtos, preços, descrições, fotos e botões de pedido pelo WhatsApp, tornando a apresentação mais profissional.',
    implementation: 'R$ 370 a R$ 697',
    monthly: 'R$ 60 a R$ 97'
  },
  {
    icon: CalendarRange,
    title: 'Haze Agenda',
    category: 'Agendamento',
    description:
      'Sistema de agendamento personalizado para profissionais e empresas que trabalham com horários marcados.',
    details:
      'Permite que o cliente escolha serviço, dia e horário, envie seus dados e tenha o agendamento registrado em uma estrutura organizada.',
    implementation: 'R$ 770 a R$ 1.470',
    monthly: 'R$ 97 a R$ 147'
  },
  {
    icon: UsersRound,
    title: 'Haze CRM',
    category: 'Comercial e atendimento',
    description:
      'Sistema comercial para organizar leads, clientes e oportunidades de venda.',
    details:
      'Permite acompanhar cada contato, registrar observações, definir status da negociação, visualizar o funil comercial e evitar perdas no WhatsApp ou Instagram.',
    implementation: 'R$ 997 a R$ 1.970',
    monthly: 'R$ 147 a R$ 297'
  },
  {
    icon: PanelTop,
    title: 'Haze Flow',
    category: 'Gestão e números',
    description:
      'Painel de gestão financeira e operacional para empresas que querem acompanhar vendas, despesas, faturamento, lucro, clientes e desempenho do negócio com mais clareza.',
    details:
      'Ajuda o empresário a visualizar os principais números da empresa em um painel organizado, facilitando decisões e trazendo mais controle para a rotina.',
    implementation: 'R$ 997 a R$ 1.970',
    monthly: 'R$ 147 a R$ 297'
  },
  {
    icon: MessageSquareText,
    title: 'Haze Form',
    category: 'Captação e qualificação',
    description:
      'Página personalizada de captação e qualificação de clientes, criada para receber orçamentos, avaliações, matrículas, briefings, inscrições ou solicitações comerciais.',
    details:
      'As respostas podem ficar salvas em um painel administrativo próprio, com status, anotações e início de atendimento pelo WhatsApp.',
    implementation: 'R$ 370 a R$ 997',
    monthly: 'R$ 60 a R$ 147'
  }
];

export default function SolutionsPage() {
  return (
    <main className="site-stack solutions-page">
      <section className="panel solutions-hero" id="inicio">
        <div className="solutions-hero__content">
          <SectionLabel>Soluções Haze</SectionLabel>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Páginas, sistemas e ferramentas para vender, organizar e crescer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            A Haze cria soluções digitais para empresas que precisam transformar presença,
            atendimento, vendas e gestão em uma experiência mais profissional.
          </motion.p>
          <div className="solutions-hero__actions">
            <Button href={whatsappLink}>Falar sobre uma solução</Button>
            <Button href="/" variant="secondary">
              Voltar ao site
            </Button>
          </div>
        </div>
      </section>

      <section className="panel side-section solutions-catalog" id="servicos">
        <div className="section-topline">
          <div>
            <SectionLabel>Serviços</SectionLabel>
            <h2>Todas as soluções da Haze</h2>
          </div>
          <a href={whatsappLink} className="text-link">
            Conversar agora
          </a>
        </div>

        <div className="solutions-catalog__grid">
          {services.map((service, index) => (
            <Card className="solution-detail-card" key={service.title}>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
              >
                <IconBadge icon={service.icon} />
                <span>{service.category}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <p>{service.details}</p>
                <div className="solution-price-row">
                  <div>
                    <small>Implantação</small>
                    <strong>{service.implementation}</strong>
                  </div>
                  <div>
                    <small>Mensalidade</small>
                    <strong>{service.monthly}</strong>
                  </div>
                </div>
              </motion.div>
            </Card>
          ))}
        </div>
      </section>

      <section className="panel solutions-custom" id="sob-medida">
        <div>
          <SectionLabel>Projetos sob medida</SectionLabel>
          <h2>Quando a solução precisa nascer do seu jeito</h2>
          <p>
            Além das soluções da Haze, também desenvolvemos sistemas web, SaaS personalizados,
            automações e painéis específicos para empresas que precisam de algo mais particular.
          </p>
        </div>
        <Card className="solutions-custom-card">
          <div>
            <IconBadge icon={ListTree} />
            <h3>Construção personalizada</h3>
            <p>
              Entendemos a operação, desenhamos a estrutura e criamos uma solução digital alinhada
              ao fluxo real da empresa.
            </p>
            <Button href={whatsappLink}>Conversar com a Haze</Button>
          </div>
        </Card>
      </section>

      <section className="panel partners-final-cta" id="contato">
        <SectionLabel>Vamos conversar?</SectionLabel>
        <h2>Qual solução faz mais sentido para o seu negócio?</h2>
        <p>
          Se você quer vender melhor, organizar atendimentos, captar clientes ou criar uma presença
          digital mais profissional, a Haze pode ajudar a escolher o melhor caminho.
        </p>
        <Button href={whatsappLink}>Falar com a Haze</Button>
        <small>Uma conversa simples para entender sua necessidade e indicar a solução certa.</small>
      </section>
    </main>
  );
}
