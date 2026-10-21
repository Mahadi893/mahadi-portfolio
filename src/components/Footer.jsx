import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { profile } from '../data/portfolio'
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 sm:flex-row">
        <p className="text-sm">© {new Date().getFullYear()} {profile.name}. Built with React, Tailwind & Framer Motion.</p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-indigo-500"><Github size={18} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-indigo-500"><Linkedin size={18} /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-indigo-500"><Mail size={18} /></a>
          <a href="#home" aria-label="Back to top" className="glass p-2 hover:text-indigo-500"><ArrowUp size={16} /></a>
        </div>
      </div>
    </footer>
  )
}
