import { Instagram, Linkedin, MessageCircle } from 'lucide-react';

const footerLinks = {
  Navegação: [
    ['Início', '#inicio'],
    ['Soluções', '#solucoes'],
    ['Projetos', '#projetos'],
    ['Processo', '#processo'],
    ['Sobre', '#sobre'],
    ['Contato', '#contato']
  ],
  Soluções: [
    ['Haze Link', '/solucoes'],
    ['Haze Page', '/solucoes'],
    ['Haze Agenda', '/solucoes'],
    ['Haze CRM', '/solucoes']
  ]
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#inicio" className="logo">
            HAZE
          </a>
          <p>Software sob medida para empresas que querem crescer com clareza.</p>
          <div className="footer__social">
            <a href="https://www.instagram.com/haze.software/" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://wa.me/5516988589448" aria-label="WhatsApp">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, items]) => (
          <div className="footer__column" key={title}>
            <h3>{title}</h3>
            {items.map(([item, href]) => (
              <a href={href} key={item}>
                {item}
              </a>
            ))}
          </div>
        ))}

        <div className="footer__column">
          <h3>Contato</h3>
          <a href="mailto:sejahaze@gmail.com">sejahaze@gmail.com</a>
          <span>Recife, PE</span>
        </div>

        <div className="footer__newsletter">
          <h3>Newsletter</h3>
          <p>Receba insights sobre tecnologia e crescimento empresarial.</p>
          <form>
            <label className="sr-only" htmlFor="newsletter-email">
              Seu melhor e-mail
            </label>
            <input id="newsletter-email" type="email" placeholder="Seu melhor e-mail" />
            <button type="submit" aria-label="Enviar e-mail">
              →
            </button>
          </form>
          <small>© 2026 Haze Software, todos os direitos reservados.</small>
        </div>
      </div>
    </footer>
  );
}
