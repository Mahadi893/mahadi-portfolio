import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Download, Mail, FolderGit2 } from 'lucide-react'
import { profile } from '../data/portfolio'
function useTyping(words) {
  const [text, setText] = useState('')
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setText(words[0]); return }
    let w = 0, c = 0, del = false, t
    const tick = () => {
      const word = words[w]
      c += del ? -1 : 1
      setText(word.slice(0, c))
      let delay = del ? 40 : 90
      if (!del && c === word.length) { del = true; delay = 1400 }
      else if (del && c === 0) { del = false; w = (w + 1) % words.length; delay = 300 }
      t = setTimeout(tick, delay)
    }
    tick()
    return () => clearTimeout(t)
  }, [])
  return text
}
export default function Hero() {
  const typed = useTyping(profile.typed)
  const up = (d) => ({ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: d } })
  return (
    <section id="home" className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-5 pb-16 pt-32 md:grid-cols-[1.2fr_1fr]">
      <div>
        <motion.p {...up(0)} className="mb-3 font-semibold text-indigo-500">Welcome to my portfolio 👋</motion.p>
        <motion.h1 {...up(0.1)} className="text-4xl font-extrabold leading-tight text-slate-900 dark:text-white sm:text-6xl">Hi, I'm <span className="grad-text">{profile.name}</span></motion.h1>
        <motion.p {...up(0.2)} className="mt-4 h-8 text-xl font-semibold text-slate-600 dark:text-slate-300" aria-label={profile.title}>{typed}<span className="animate-pulse">|</span></motion.p>
        <motion.p {...up(0.3)} className="mt-4 max-w-xl text-slate-500 dark:text-slate-400">{profile.title}</motion.p>
        <motion.div {...up(0.4)} className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn-primary"><FolderGit2 size={16} /> View Projects</a>
          <a href={profile.cv} download className="btn-ghost"><Download size={16} /> Download CV</a>
          <a href="#contact" className="btn-ghost"><Mail size={16} /> Contact Me</a>
        </motion.div>
        <motion.div {...up(0.5)} className="mt-8 flex gap-3">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="glass p-3 transition hover:-translate-y-1 hover:text-indigo-500"><Github size={20} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="glass p-3 transition hover:-translate-y-1 hover:text-indigo-500"><Linkedin size={20} /></a>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="mx-auto w-64 sm:w-80">
        <div className="rounded-[2rem] bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-400 p-1.5 shadow-2xl shadow-indigo-500/30">
          <img src={profile.photo} alt="Portrait of Mahadi Islam" width="640" height="800" className="aspect-[4/5] w-full rounded-[1.75rem] object-cover object-top" />
        </div>
      </motion.div>
    </section>
  )
}
