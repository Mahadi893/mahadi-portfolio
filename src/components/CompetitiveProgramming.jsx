import { Trophy, Cpu, Network, ExternalLink } from 'lucide-react'
import Section from './Section'
import { cp } from '../data/portfolio'
export default function CompetitiveProgramming() {
  return (
    <Section id="coding" title="Competitive Programming" sub="Practising problem-solving on international coding platforms.">
      <div className="grid gap-5 md:grid-cols-3">
        <div className="glass p-6 text-center"><Trophy className="mx-auto mb-2 text-indigo-500" /><div className="grad-text text-5xl font-extrabold">{cp.solved}</div><p className="mt-1">Problems solved</p></div>
        <div className="glass p-6"><Cpu className="mb-2 text-indigo-500" /><h3 className="font-bold text-slate-900 dark:text-white">Focus</h3><ul className="mt-2 list-inside list-disc text-sm">{cp.focus.map((f) => <li key={f}>{f}</li>)}</ul></div>
        <div className="glass p-6"><Network className="mb-2 text-indigo-500" /><h3 className="font-bold text-slate-900 dark:text-white">Platforms</h3>
          <div className="mt-3 flex flex-col gap-2">{cp.platforms.map((p) => p.url
            ? <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className="btn-primary !justify-between">{p.name} <ExternalLink size={14} /></a>
            : <span key={p.name} className="btn cursor-not-allowed border border-dashed border-slate-300 !justify-between opacity-60 dark:border-white/20">{p.name} <small>link coming soon</small></span>)}</div>
        </div>
      </div>
    </Section>
  )
}
