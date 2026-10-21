import { motion } from 'framer-motion'
export default function Section({ id, title, sub, children }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white sm:text-4xl">{title} <span className="grad-text">.</span></h2>
        {sub && <p className="mt-2 text-slate-500 dark:text-slate-400">{sub}</p>}
        <div className="mt-10">{children}</div>
      </motion.div>
    </section>
  )
}
