import { useState } from 'react';
import Button from './ui/Button.jsx';

const navItems = [
  ['Início', '#inicio'],
  ['Soluções', '#solucoes'],
  ['Projetos', '#projetos'],
  ['Processo', '#processo'],
  ['Sobre', '#sobre'],
  ['Contato', '#contato']
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="logo" href="#inicio" onClick={closeMenu} aria-label="Haze Software, início">
          HAZE
        </a>

        <nav className={`nav ${isOpen ? 'nav--open' : ''}`} aria-label="Navegação principal">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>

        <div className="header__cta">
          <Button href="#contato" variant="ghost">
            Fale conosco
          </Button>
        </div>

        <button
          className={`menu-toggle ${isOpen ? 'menu-toggle--open' : ''}`}
          type="button"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
