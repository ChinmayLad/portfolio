import { useReveal } from '../hooks/useReveal'

export default function About({ about }) {
  const labelRef = useReveal()
  const metaRef  = useReveal()
  const bioRef   = useReveal()

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-label reveal" ref={labelRef}>
          <span className="num">01 —</span>
          <h2>About</h2>
        </div>

        <div className="about-grid">
          <div className="about-meta reveal" ref={metaRef}>
            {about.meta.map(m => (
              <div className="meta-block" key={m.label}>
                <label>{m.label}</label>
                {m.tags
                  ? <div className="tag-list">{m.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
                  : <p>{m.value}</p>
                }
              </div>
            ))}
          </div>

          <div className="about-bio reveal" ref={bioRef}>
            {about.bio.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </div>
      </div>
    </section>
  )
}
