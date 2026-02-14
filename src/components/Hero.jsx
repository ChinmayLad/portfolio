export default function Hero({ data }) {
  const { location, tagline, status, hero } = data

  return (
    <section id="hero" className="hero">
      <div className="hero-bg-number" aria-hidden="true">SDE</div>

      <div className="container">
        <div className="status-badge">
          <span className="status-dot" />
          {status}
        </div>

        <div className="hero-tag">{location} · {tagline}</div>

        <h1 className="hero-name">
          {hero.displayName[0]}
          <br />
          <em>{hero.displayName[1]}</em>
        </h1>

        <p className="hero-desc">{hero.desc}</p>

        <div className="hero-links">
          {hero.links.map(link => (
            <a
              key={link.label}
              href={link.href}
              className={`btn ${link.primary ? 'btn-primary' : 'btn-ghost'}`}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">Scroll</div>
    </section>
  )
}
