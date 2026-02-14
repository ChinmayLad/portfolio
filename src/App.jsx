import { useTheme }    from './hooks/useTheme'
import { DATA }        from './data'

import Nav        from './components/Nav'
import Hero       from './components/Hero'
import About      from './components/About'
import Experience from './components/Experience'
import Projects   from './components/Projects'
import Skills     from './components/Skills'
import Writing    from './components/Writing'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <Nav
        initials={DATA.initials}
        theme={theme}
        onToggleTheme={toggle}
      />
      <Hero       data={DATA} />
      <About      about={DATA.about} />
      <Experience experience={DATA.experience} />
      <Projects   projects={DATA.projects} />
      <Skills     skills={DATA.skills} />
      <Writing    posts={DATA.posts} />
      <Contact    contact={DATA.contact} />
      <Footer     name={DATA.name} stack={DATA.footer.stack} />
    </>
  )
}
