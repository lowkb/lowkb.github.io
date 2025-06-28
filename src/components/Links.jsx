export function Links({ links }) {
  return (
    <nav className="links" aria-label="Social media links">
      {links.map(({ href, label }) => (
        <a key={href} href={href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      ))}
    </nav>
  );
}
