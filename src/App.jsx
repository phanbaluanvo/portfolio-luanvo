import Navbar    from './components/Navbar/Navbar'
import Hero      from './components/Hero/Hero'
import Stats     from './components/Stats/Stats'
import About     from './components/About/About'
import Experience from './components/Experience/Experience'
import Education  from './components/Education/Education'
import Projects   from './components/Projects/Projects'
import Contact    from './components/Contact/Contact'
import Footer     from './components/Footer/Footer'
import BackToTop  from './components/BackToTop/BackToTop'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  )
}
