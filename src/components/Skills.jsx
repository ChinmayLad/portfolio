import { useReveal } from '../hooks/useReveal'

export default function Skills({ skills }) {
  const labelRef = useReveal()
  const gridRef  = useReveal()

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-label reveal" ref={labelRef}>
          <span className="num">04 —</span>
          <h2>Skills</h2>
        </div>

        <div className="skills-grid reveal-stagger" ref={gridRef}>
          {skills.map(group => (
            <div className="skill-group" key={group.category}>
              <label>{group.category}</label>
              <div className="skill-items">
                {group.items.map(item => (
                  <div className="skill-item" key={item}>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
