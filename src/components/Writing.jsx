import { useReveal } from '../hooks/useReveal'

export default function Writing({ posts }) {
  const labelRef = useReveal()
  const listRef  = useReveal()

  return (
    <section id="writing" className="section">
      <div className="container">
        <div className="section-label reveal" ref={labelRef}>
          <span className="num">05 —</span>
          <h2>Writing</h2>
        </div>

        {posts.length === 0 ? (
          <div className="posts-empty reveal" ref={listRef}>
            // Posts coming soon — check back later.
          </div>
        ) : (
          <div className="posts-list reveal-stagger" ref={listRef}>
            {posts.map((post, i) => (
              <a className="post-item" href={post.href} key={i} target ="_blank">
                <span className="post-date">{post.date}</span>
                <span className="post-title">{post.title}</span>
                <span className="post-tag">{post.tag}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
