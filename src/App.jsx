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

export default function App() {
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
