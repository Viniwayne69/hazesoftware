import {
  BadgeDollarSign,
  Blocks,
  BriefcaseBusiness,
  CheckCircle2,
  CircleDollarSign,
  ClipboardList,
  Handshake,
  Layers3,
  MessagesSquare,
  Rocket,
  Share2,
  Sparkles,
  Store,
  UsersRound,
  Workflow
} from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button.jsx';
import Card from '../components/ui/Card.jsx';
import IconBadge from '../components/ui/IconBadge.jsx';
import SectionLabel from '../components/ui/SectionLabel.jsx';

const whatsappLink =
  'https://wa.me/5516988589448?text=Quero%20conversar%20sobre%20a%20parceria%20com%20a%20Haze';

const partnerFlow = [
  {
    icon: Sparkles,
    title: 'Você identifica a oportunidade',
    text: 'Sua agência percebe que um cliente precisa de uma página comercial, site, sistema de agendamento, formulário, cardápio digital, CRM ou painel de gestão.'
  },
  {
    icon: Blocks,
    title: 'A Haze estrutura a solução',
    text: 'Nós cuidamos da parte técnica, do desenvolvimento, da publicação, da hospedagem, da manutenção e dos ajustes necessários para a entrega.'
  },
  {
    icon: Store,
    title: 'O cliente recebe mais valor',
    text: 'A empresa atendida ganha uma solução digital profissional, feita para melhorar sua presença, organização, atendimento ou conversão.'
  },
  {
    icon: CircleDollarSign,
    title: 'A parceria gera receita',
    text: 'A agência ganha junto com a Haze por meio da implantação e da mensalidade recorrente, criando uma nova fonte de faturamento.'
  }
];

const services = [
  ['Haze Link', 'Página comercial para bio do Instagram, criada para apresentar a marca com mais autoridade, reunir vídeo comercial, botões de contato, redes sociais, serviços e WhatsApp em uma experiência personalizada.'],
  ['Haze Page', 'Página de venda criada para divulgar uma oferta específica de um comércio, como uma promoção, produto, serviço, matrícula, pacote ou campanha.'],
  ['Haze Site', 'Site institucional profissional para empresas que querem fortalecer sua presença oficial na internet, apresentar serviços, diferenciais, história, localização e canais de contato com mais credibilidade.'],
  ['Haze Menu', 'Cardápio digital ou catálogo comercial personalizado para restaurantes, docerias, lojas, salões, cosméticos e negócios que vendem produtos ou serviços.'],
  ['Haze Agenda', 'Sistema de agendamento personalizado para profissionais e empresas que trabalham com horário marcado.'],
  ['Haze Form', 'Página personalizada de captação e qualificação de clientes, com perguntas estratégicas e painel administrativo para acompanhar respostas, status dos leads e informações comerciais.'],
  ['Haze CRM', 'Sistema comercial para organizar leads, clientes e oportunidades de venda.'],
  ['Haze Flow', 'Painel de gestão financeira e operacional para empresas que querem acompanhar vendas, despesas, faturamento, lucro, clientes e desempenho do negócio com mais clareza.']
];

const benefits = [
  {
    icon: Layers3,
    title: 'Você aumenta o valor da sua entrega',
    text: 'Além de comunicação e conteúdo, sua agência passa a oferecer soluções digitais que impactam presença, vendas, atendimento e organização.'
  },
  {
    icon: BadgeDollarSign,
    title: 'Você cria receita recorrente',
    text: 'Os projetos deixam de ser apenas entregas pontuais e passam a gerar mensalidade para manter as soluções ativas, atualizadas e funcionando.'
  },
  {
    icon: BriefcaseBusiness,
    title: 'Você não precisa contratar desenvolvedores',
    text: 'A Haze cuida da parte técnica, da publicação e da manutenção, permitindo que sua agência foque no relacionamento e na estratégia.'
  },
  {
    icon: UsersRound,
    title: 'Você fortalece o vínculo com seus clientes',
    text: 'Quando sua agência resolve mais problemas, o cliente percebe mais valor, confia mais e tende a permanecer por mais tempo.'
  }
];

const partnerProfiles = [
  'Agências de social media',
  'Gestores de tráfego',
  'Designers de identidade visual',
  'Produtoras de vídeo',
  'Fotógrafos comerciais',
  'Consultores de marketing',
  'Consultores comerciais',
  'Agências pequenas que precisam de um braço técnico'
];

const processSteps = [
  ['01', 'Conversa inicial', 'Entendemos o perfil da sua agência, os tipos de clientes que vocês atendem e quais soluções fazem mais sentido para a parceria.'],
  ['02', 'Definição dos produtos', 'Escolhemos quais serviços serão oferecidos primeiro, começando pelos que têm maior chance de venda para sua carteira atual.'],
  ['03', 'Apresentação ao cliente', 'Sua agência apresenta a solução ao cliente ou nos coloca na conversa para explicar a parte técnica e comercial.'],
  ['04', 'Desenvolvimento pela Haze', 'A Haze cria a solução, organiza a entrega, publica o projeto e cuida da estrutura técnica.'],
  ['05', 'Receita compartilhada', 'A agência participa da implantação e da mensalidade, conforme o modelo combinado para cada serviço.']
];

const processIcons = [MessagesSquare, ClipboardList, Share2, Workflow, Handshake];

const faq = [
  ['Preciso saber programar para ser parceiro da Haze?', 'Não, sua agência cuida do relacionamento, da estratégia comercial e dos materiais do cliente, enquanto a Haze cuida da parte técnica e do desenvolvimento.'],
  ['Posso vender os serviços da Haze para meus próprios clientes?', 'Sim, a ideia é que sua agência possa oferecer as soluções da Haze para clientes que já atende ou para novos clientes que precisem de estrutura digital.'],
  ['A parceria pode gerar mensalidade recorrente?', 'Sim, vários serviços trabalham com implantação e mensalidade, criando uma fonte de receita contínua para a agência e para a Haze.'],
  ['A Haze aparece para o cliente final?', 'Isso pode ser combinado conforme o modelo da parceria, em alguns casos a Haze atua como parceira visível, em outros atua nos bastidores como braço técnico da agência.'],
  ['Por onde começamos?', 'O caminho mais indicado é começar pelo Haze Link, validar a oferta com os clientes da agência e depois expandir para Haze Page, Haze Site, Haze Agenda, Haze Form e outras soluções.']
];

export default function PartnersPage() {
  return (
    <main className="site-stack partners-page">
      <section className="panel partners-hero" id="inicio">
        <div className="partners-hero__content">
          <SectionLabel>Programa de parceiros</SectionLabel>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            Seja parceiro da Haze e ofereça tecnologia aos seus clientes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            A Haze desenvolve páginas, sites, sistemas e soluções digitais para os clientes da
            sua agência, enquanto você mantém o relacionamento, amplia sua entrega e cria uma nova
            fonte de receita recorrente.
          </motion.p>
          <div className="partners-hero__actions">
            <Button href={whatsappLink}>Quero ser parceiro</Button>
            <Button href="#como-funciona" variant="secondary">
              Ver como funciona
            </Button>
          </div>
          <p className="partners-hero__note">
            Sua agência vende, a Haze desenvolve, o cliente recebe uma solução profissional e os
            dois crescem juntos.
          </p>
        </div>
      </section>

      <section className="panel partners-intro">
        <div>
          <SectionLabel>Parceria estratégica</SectionLabel>
          <h2>Sua agência já tem os clientes, a Haze entra com a tecnologia</h2>
        </div>
        <div className="partners-copy">
          <p>
            Muitas agências atendem empresas que precisam de páginas, sites, formulários, cardápios
            digitais, agendas e sistemas, mas nem sempre possuem uma equipe técnica para desenvolver
            essas soluções com qualidade.
          </p>
          <p>
            A Haze nasce para ser esse braço de tecnologia, criando produtos digitais sob medida
            para os clientes que sua agência já atende.
          </p>
          <p>
            Você fortalece sua entrega, aumenta o valor percebido pelos clientes e passa a oferecer
            soluções digitais sem precisar montar uma estrutura de desenvolvimento.
          </p>
        </div>
      </section>

      <section className="panel side-section" id="como-funciona">
        <SectionLabel>Como funciona</SectionLabel>
        <h2>Uma parceria simples para transformar demanda em entrega profissional</h2>
        <div className="partner-flow-grid">
          {partnerFlow.map((item, index) => (
            <Card className="partner-card" key={item.title}>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <IconBadge icon={item.icon} />
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            </Card>
          ))}
        </div>
      </section>

      <section className="panel side-section" id="servicos">
        <SectionLabel>Serviços</SectionLabel>
        <h2>O que sua agência pode oferecer com a Haze</h2>
        <p>
          Uma linha de soluções digitais criadas para empresas que querem vender melhor, organizar
          processos e transmitir mais profissionalismo.
        </p>
        <div className="partners-services-grid">
          {services.map(([title, text]) => (
            <article className="partner-service" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel partners-revenue" id="ganhos">
        <div>
          <SectionLabel>Recorrência</SectionLabel>
          <h2>Um modelo pensado para gerar recorrência</h2>
          <p>
            A parceria com a Haze permite que sua agência crie novas fontes de faturamento sem
            precisar desenvolver tecnologia internamente.
          </p>
          <p>
            Cada solução pode ser vendida com valor de implantação e mensalidade, permitindo que
            sua agência ganhe no início do projeto e continue participando da receita enquanto o
            cliente permanecer ativo.
          </p>
        </div>
        <strong>
          Mais valor para o cliente, mais receita para sua agência, mais estrutura para todos os
          lados.
        </strong>
      </section>

      <section className="panel side-section">
        <SectionLabel>Ganhos para agência</SectionLabel>
        <h2>Por que isso é bom para sua agência</h2>
        <div className="partner-benefits-grid">
          {benefits.map((benefit) => (
            <Card className="partner-card" key={benefit.title}>
              <div>
                <IconBadge icon={benefit.icon} />
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="panel partners-profiles">
        <div>
          <SectionLabel>Para quem é</SectionLabel>
          <h2>Para quem é essa parceria</h2>
          <p>
            A parceria com a Haze é ideal para agências e profissionais que já atendem empresas e
            querem ampliar sua entrega com tecnologia.
          </p>
        </div>
        <div className="partners-profile-list">
          {partnerProfiles.map((profile) => (
            <span key={profile}>
              <CheckCircle2 size={18} aria-hidden="true" />
              {profile}
            </span>
          ))}
        </div>
      </section>

      <section className="panel process partners-process" id="processo">
        <SectionLabel>Processo</SectionLabel>
        <h2>O processo é claro do início ao fim</h2>
        <div className="process__line">
          {processSteps.map(([number, title, text], index) => {
            const StepIcon = processIcons[index];

            return (
              <motion.article
                className="process-step"
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="process-step__icon">
                  <StepIcon size={24} strokeWidth={1.8} />
                </div>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="panel partners-offer">
        <div>
          <SectionLabel>Produto de entrada</SectionLabel>
          <h2>Comece pelo Haze Link</h2>
          <p>
            Para iniciar a parceria com agências, o Haze Link é o produto de entrada ideal. Ele é
            fácil de apresentar, tem valor acessível para o cliente, gera mensalidade recorrente e
            pode ser oferecido para praticamente qualquer empresa que usa Instagram como canal
            comercial.
          </p>
        </div>
        <Card className="partners-price-card">
          <div>
            <span>Oferta base</span>
            <strong>R$ 370</strong>
            <p>Implantação</p>
            <strong>R$ 60</strong>
            <p>Mensalidade</p>
          </div>
        </Card>
        <div className="partners-includes">
          {[
            'Página comercial personalizada',
            'Vídeo comercial inserido na página',
            'Botões para WhatsApp e redes sociais',
            'Apresentação dos serviços',
            'Publicação online',
            'Hospedagem e manutenção técnica',
            'Ajustes pontuais conforme o plano'
          ].map((item) => (
            <span key={item}>
              <CheckCircle2 size={18} aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="panel side-section partners-faq">
        <SectionLabel>Dúvidas frequentes</SectionLabel>
        <h2>A Haze cuida da tecnologia, sua agência amplia o valor entregue</h2>
        <p>
          Você não precisa recusar demandas digitais, improvisar soluções ou depender de ferramentas
          genéricas. Com a Haze, sua agência passa a ter uma parceira de tecnologia para transformar
          ideias em páginas, sistemas e experiências digitais profissionais.
        </p>
        <div className="faq-list">
          {faq.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="panel partners-final-cta" id="contato">
        <SectionLabel>Vamos conversar?</SectionLabel>
        <h2>Vamos criar uma nova fonte de receita para sua agência?</h2>
        <p>
          Se sua agência já atende empresas e quer oferecer soluções digitais com mais valor, a Haze
          pode ser o braço de tecnologia que faltava para transformar demandas em projetos
          profissionais e recorrentes.
        </p>
        <Button href={whatsappLink}>Quero conversar sobre parceria</Button>
        <small>
          Uma conversa rápida para entender sua agência, seus clientes e as melhores oportunidades
          de colaboração.
        </small>
      </section>
    </main>
  );
}
