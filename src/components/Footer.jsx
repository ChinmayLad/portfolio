export default function Footer({ name, stack }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <span>© {new Date().getFullYear()} {name}</span>
          <span>{stack}</span>
        </div>
      </div>
    </footer>
  )
}
