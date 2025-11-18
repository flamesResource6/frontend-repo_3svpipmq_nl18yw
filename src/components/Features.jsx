import { Sparkles, PhoneCall, Bot, Brain, ShieldCheck, Zap, Globe2 } from 'lucide-react'

const features = [
  {
    icon: PhoneCall,
    title: 'Smart call handling',
    desc: 'Route, hold, transfer, and summarize calls with AI-driven workflows.',
  },
  {
    icon: Bot,
    title: 'Natural conversations',
    desc: 'Low-latency streaming TTS/ASR and LLMs for fluid, human-like dialogues.',
  },
  {
    icon: Brain,
    title: 'Knowledge grounding',
    desc: 'Connect your docs, CRM, and ticketing data for accurate answers.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise security',
    desc: 'Role-based access, audit logs, PII redaction, and SOC2-ready.',
  },
  {
    icon: Zap,
    title: 'Integrations',
    desc: 'Out-of-the-box connectors for Salesforce, Zendesk, Slack, and more.',
  },
  {
    icon: Globe2,
    title: 'Omnichannel',
    desc: 'Voice, chat, and messaging in one platform with consistent context.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/80 text-xs mb-4">
            <Sparkles size={14} />
            Platform highlights
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">Everything you need to deploy a voice agent</h2>
          <p className="mt-4 text-slate-300/80 max-w-2xl mx-auto">Built for speed, reliability, and control — from first call to global scale.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-100 hover:bg-white/10 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-500 flex items-center justify-center text-white shadow mb-4">
                <f.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-slate-300/80 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
