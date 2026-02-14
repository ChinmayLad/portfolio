import { useReveal } from '../hooks/useReveal'
import { GitHub, ExternalLink } from './Icons'

const LINK_CONFIG = {
  github: { label: 'Source', Icon: GitHub },
  demo:   { label: 'Demo',   Icon: ExternalLink },
  paper:  { label: 'Paper',  Icon: ExternalLink },
}

export default function Projects({ projects }) {
  const labelRef = useReveal()
  const gridRef  = useReveal()

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-label reveal" ref={labelRef}>
          <span className="num">03 —</span>
          <h2>Projects</h2>
        </div>

        <div className="projects-grid reveal-stagger" ref={gridRef}>
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <div className="project-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="project-title">{p.title}</div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tech">
                {p.tech.map(t => <span key={t}>{t}</span>)}
              </div>
              <div className="project-links">
                {Object.entries(p.links)
                  .filter(([, v]) => v)
                  .map(([key, href]) => {
                    const { label, Icon } = LINK_CONFIG[key] || { label: key, Icon: ExternalLink }
                    return (
                      <a key={key} href={href} target="_blank" rel="noreferrer">
                        <Icon /> {label}
                      </a>
                    )
                  })
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
