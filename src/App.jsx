import { useEffect, useState } from 'react'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import CompetitiveProgramming from './components/CompetitiveProgramming'
import Contact from './components/Contact'
import Footer from './components/Footer'
export default function App() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch {}
  }, [dark])
  return (
    <MotionConfig reducedMotion="user">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="blob absolute -left-24 top-10 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="blob absolute -right-24 top-1/2 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" style={{ animationDelay: '-6s' }} />
      </div>
      <Navbar dark={dark} toggle={() => setDark(!dark)} />
      <main><Hero /><About /><Skills /><Education /><Projects /><CompetitiveProgramming /><Contact /></main>
      <Footer />
    </MotionConfig>
  )
}
