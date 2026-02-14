import { useReveal } from '../hooks/useReveal'

export default function Experience({ experience }) {
  const labelRef   = useReveal()
  const timelineRef = useReveal()

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-label reveal" ref={labelRef}>
          <span className="num">02 —</span>
          <h2>Experience</h2>
        </div>

        <div className="timeline reveal-stagger" ref={timelineRef}>
          {experience.map((job, i) => (
            <div className="timeline-item" key={i}>
              <div className="tl-left">
                <div className="tl-dates">{job.dates}</div>
                <div className="tl-company">{job.company}</div>
              </div>
              <div className="tl-right">
                <div className="tl-role">{job.role}</div>
                <p className="tl-desc">{job.desc}</p>
                <ul className="tl-highlights">
                  {job.highlights.map((h, j) => <li key={j}>{h}</li>)}
                </ul>
                <div className="tl-tech">
                  {job.tech.map(t => <span key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
