import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', use_case: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('pending')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed to submit')
      const data = await res.json()
      setStatus('success')
      setForm({ name: '', email: '', company: '', use_case: '' })
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">Talk to our team</h2>
          <p className="mt-4 text-slate-300/80 max-w-xl">Share your use case and we’ll help you design and launch a production-ready voice agent.</p>
          <ul className="mt-6 space-y-2 text-slate-300/80 text-sm">
            <li>• White-glove onboarding</li>
            <li>• SIP/PSTN ready</li>
            <li>• Global coverage</li>
            <li>• Analytics & QA tooling</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-100">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-300">Name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-lg bg-slate-900/70 border border-white/10 p-3 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-lg bg-slate-900/70 border border-white/10 p-3 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="jane@company.com" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Company</label>
              <input name="company" value={form.company} onChange={handleChange} className="mt-1 w-full rounded-lg bg-slate-900/70 border border-white/10 p-3 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Acme Inc." />
            </div>
            <div>
              <label className="text-sm text-slate-300">Use case</label>
              <input name="use_case" value={form.use_case} onChange={handleChange} className="mt-1 w-full rounded-lg bg-slate-900/70 border border-white/10 p-3 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Inbound support, sales assistant, ..." />
            </div>
          </div>

          <button type="submit" disabled={status==='pending'} className="mt-6 w-full rounded-lg bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-500 px-5 py-3 text-white font-medium shadow hover:opacity-90 transition-opacity">
            {status === 'pending' ? 'Submitting...' : 'Request a demo'}
          </button>

          {status === 'success' && (
            <p className="mt-3 text-emerald-400 text-sm">Thanks! Well be in touch.</p>
          )}
          {status === 'error' && (
            <p className="mt-3 text-rose-400 text-sm">Something went wrong. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  )
}
