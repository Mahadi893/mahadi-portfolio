import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, ChevronDown, Layers } from 'lucide-react'
import Section from './Section'
import { projects } from '../data/portfolio'
function Card({ p }) {
  const [open, setOpen] = useState(false)
  const link = (href, label, Icon) => href
    ? <a href={href} target="_blank" rel="noreferrer" className="btn-ghost !px-3 !py-1.5"><Icon size={14} /> {label}</a>
    : <span className="btn !px-3 !py-1.5 cursor-not-allowed border border-dashed border-slate-300 opacity-50 dark:border-white/20" title="Link not available yet"><Icon size={14} /> {label} (soon)</span>
  return (
    <motion.article whileHover={{ y: -6 }} className="glass flex flex-col overflow-hidden">
      <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-indigo-600/40 via-purple-600/30 to-sky-500/30">
        {p.image ? <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover" /> : <Layers size={44} className="opacity-60" />}
        <span className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">{p.status}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{p.name}</h3>
        <p className="mt-2 text-sm">{p.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">{p.stack.map((t) => <span key={t} className="rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-xs text-indigo-500">{t}</span>)}</div>
        <AnimatePresence initial={false}>{open && <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pt-3 text-sm text-slate-500 dark:text-slate-400">{p.details}</motion.p>}</AnimatePresence>
        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {link(p.github, 'GitHub', Github)}{link(p.demo, 'Demo', ExternalLink)}
          <button onClick={() => setOpen(!open)} aria-expanded={open} className="btn-primary !px-3 !py-1.5">View Details <ChevronDown size={14} className={open ? 'rotate-180 transition' : 'transition'} /></button>
        </div>
      </div>
    </motion.article>
  )
}
export default function Projects() {
  return (
    <Section id="projects" title="Projects" sub="Draft and placeholder projects are clearly labelled until they are finished.">
      <div className="grid gap-6 md:grid-cols-2">{projects.map((p) => <Card key={p.name} p={p} />)}</div>
    </Section>
  )
}
