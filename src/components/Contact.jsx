import { useState } from 'react'
import { Mail, Copy, Check, Github, Linkedin, Send } from 'lucide-react'
import Section from './Section'
import { profile } from '../data/portfolio'
export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [f, setF] = useState({ name: '', message: '' })
  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 2000) }
    catch { window.prompt('Copy my email:', profile.email) }
  }
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent('Portfolio contact from ' + (f.name || 'a visitor'))}&body=${encodeURIComponent(f.message)}`
  const field = 'w-full rounded-xl border border-slate-300 bg-transparent px-4 py-3 text-sm outline-none focus:border-indigo-500 dark:border-white/15'
  return (
    <Section id="contact" title="Get In Touch" sub="Open to internships and learning opportunities.">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="glass space-y-4 p-6">
          <p className="flex items-center gap-2 break-all font-semibold text-slate-900 dark:text-white"><Mail size={18} className="text-indigo-500" /> {profile.email}</p>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="btn-primary"><Mail size={16} /> Email Me</a>
            <button onClick={copy} className="btn-ghost">{copied ? <Check size={16} /> : <Copy size={16} />} {copied ? 'Copied!' : 'Copy Email'}</button>
          </div>
          <div className="flex gap-3 pt-2">
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-ghost"><Github size={16} /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-ghost"><Linkedin size={16} /> LinkedIn</a>
          </div>
        </div>
        <div className="glass space-y-3 p-6">
          <input aria-label="Your name" placeholder="Your name" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} className={field} />
          <textarea aria-label="Message" rows="4" placeholder="Your message" value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} className={field} />
          <a href={mailto} className="btn-primary w-full"><Send size={16} /> Open in Email App</a>
          <p className="text-xs text-slate-500">This opens your own email app with the message pre-filled. Nothing is stored or sent from this site.</p>
        </div>
      </div>
    </Section>
  )
}
