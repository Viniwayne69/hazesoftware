export default function IconBadge({ icon: Icon, className = '' }) {
  return (
    <span className={`icon-badge ${className}`.trim()}>
      <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
    </span>
  );
}
