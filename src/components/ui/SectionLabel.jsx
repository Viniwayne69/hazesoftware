export default function SectionLabel({ children }) {
  return (
    <span className="section-label">
      <span aria-hidden="true"></span>
      {children}
    </span>
  );
}
