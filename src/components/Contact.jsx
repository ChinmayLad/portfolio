import { useReveal } from '../hooks/useReveal'
import { Icon, Arrow } from './Icons'

export default function Contact({ contact }) {
  const leftRef  = useReveal()
  const rightRef = useReveal()

  // heading: first and last words normal, middle word italic+accent
  const [w0, w1, w2] = contact.heading

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-inner">
          <div className="reveal" ref={leftRef}>
            <h2 className="contact-heading">
              {w0} <em>{w1}</em> {w2}
            </h2>
            <p className="contact-sub">{contact.sub}</p>
            <a href={contact.cta.href} className="btn btn-primary">
              {contact.cta.label}
            </a>
          </div>

          <div className="contact-links reveal-stagger" ref={rightRef}>
            {contact.links.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="contact-link"
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                <span className="contact-link-icon">
                  <Icon name={link.icon} />
                </span>
                <span className="contact-link-meta">
                  <span className="contact-link-label">{link.label}</span>
                  <span className="contact-link-value">{link.value}</span>
                </span>
                <Arrow className="contact-link-arrow" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
