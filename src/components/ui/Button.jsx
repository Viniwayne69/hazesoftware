import { ArrowRight } from 'lucide-react';

export default function Button({ children, href = '#contato', variant = 'primary', className = '' }) {
  return (
    <a className={`button button--${variant} ${className}`.trim()} href={href}>
      <span>{children}</span>
      <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
    </a>
  );
}
