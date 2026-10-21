import Section from './Section'
import { profile } from '../data/portfolio'
export default function About() {
  return (
    <Section id="about" title="About Me" sub={profile.university}>
      <div className="grid items-center gap-10 md:grid-cols-[320px_1fr]">
        <img src={profile.photo2} alt="Mahadi Islam outdoors" loading="lazy" width="320" height="400" className="glass mx-auto aspect-[4/5] w-64 object-cover object-top p-2 md:w-full" />
        <div className="space-y-4 leading-relaxed">
          {profile.about.map((p) => <p key={p}>{p}</p>)}
          <div className="grid grid-cols-3 gap-3 pt-4">
            {profile.highlights.map(([v, l]) => (
              <div key={l} className="glass p-4 text-center"><div className="grad-text text-2xl font-extrabold sm:text-3xl">{v}</div><div className="mt-1 text-xs sm:text-sm">{l}</div></div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
