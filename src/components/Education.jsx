import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import Section from './Section'
import { education } from '../data/portfolio'
export default function Education() {
  return (
    <Section id="education" title="Education" sub="My academic journey.">
      <ol className="relative ml-4 border-l-2 border-indigo-500/30">
        {education.map((e, i) => (
          <motion.li key={e.school} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="mb-8 ml-8">
            <span className="absolute -left-[17px] flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white"><GraduationCap size={16} /></span>
            <div className="glass p-5">
              <p className="text-sm font-semibold text-indigo-500">{e.year}</p>
              <h3 className="mt-1 font-bold text-slate-900 dark:text-white">{e.degree}</h3>
              <p>{e.school}</p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{e.note}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </Section>
  )
}
