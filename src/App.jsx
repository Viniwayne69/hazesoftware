import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Philosophy from './components/Philosophy.jsx';
import Solutions from './components/Solutions.jsx';
import Projects from './components/Projects.jsx';
import Process from './components/Process.jsx';
import About from './components/About.jsx';
import Numbers from './components/Numbers.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';
import PartnersPage from './pages/PartnersPage.jsx';

const partnerNavItems = [
  ['Início', '#inicio'],
  ['Como funciona', '#como-funciona'],
  ['Serviços', '#servicos'],
  ['Ganhos', '#ganhos'],
  ['Processo', '#processo'],
  ['Contato', '#contato']
];

function isPartnersPage() {
  const path = window.location.pathname.replace(/\/$/, '');
  return path.endsWith('/parceiros') || path.endsWith('/parceiros.html') || window.location.hash === '#parceiros';
}

export default function App() {
  if (isPartnersPage()) {
    return (
      <>
        <Header
          items={partnerNavItems}
          ctaText="Quero ser parceiro"
          ctaHref="https://wa.me/5516988589448?text=Quero%20conversar%20sobre%20a%20parceria%20com%20a%20Haze"
          logoHref="./"
        />
        <PartnersPage />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="site-stack">
        <Hero />
        <Solutions />
        <Philosophy />
        <Projects />
        <Process />
        <About />
        <Numbers />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
