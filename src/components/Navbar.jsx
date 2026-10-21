import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { navLinks } from '../data/portfolio'
const hrefOf = (l) => '#' + l.toLowerCase()
export default function Navbar({ dark, toggle }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3">
      <nav aria-label="Main" className="glass mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#home" className="text-lg font-extrabold text-slate-900 dark:text-white">Mahadi<span className="grad-text">.dev</span></a>
        <ul className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((l) => <li key={l}><a href={hrefOf(l)} className="transition hover:text-indigo-500">{l}</a></li>)}
        </ul>
        <div className="flex items-center gap-2">
          <button onClick={toggle} aria-label="Toggle light/dark mode" className="rounded-full p-2 transition hover:bg-indigo-500/10">{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open} className="rounded-full p-2 md:hidden">{open ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="glass mx-auto mt-2 max-w-6xl p-3 md:hidden">
            {navLinks.map((l) => <li key={l}><a href={hrefOf(l)} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 font-medium hover:bg-indigo-500/10">{l}</a></li>)}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
