import { motion } from 'framer-motion'
import { Code2, Globe, Database, Wrench, Brain } from 'lucide-react'
import Section from './Section'
import { skills } from '../data/portfolio'
const icons = { Code2, Globe, Database, Wrench, Brain }
export default function Skills() {
  return (
    <Section id="skills" title="Skills" sub="Technologies and strengths I work with.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => {
          const Icon = icons[s.icon]
          return (
            <motion.div key={s.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -6 }} className="glass p-6 transition-shadow hover:shadow-indigo-500/20">
              <div className="mb-4 flex items-center gap-3"><span className="rounded-xl bg-indigo-500/15 p-2.5 text-indigo-500"><Icon size={20} /></span><h3 className="font-bold text-slate-900 dark:text-white">{s.category}</h3></div>
              <div className="flex flex-wrap gap-2">{s.items.map((t) => <span key={t} className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm transition hover:bg-indigo-500 hover:text-white">{t}</span>)}</div>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
