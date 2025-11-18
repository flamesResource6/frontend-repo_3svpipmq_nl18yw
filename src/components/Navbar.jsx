import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50 bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src="/flame-icon.svg" alt="Logo" className="w-8 h-8" />
          <span className="text-white font-semibold tracking-tight">Voice Agent</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-200/90">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#demo" className="hover:text-white transition-colors">Live Demo</a>
          <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="#demo" className="ml-4 inline-flex items-center rounded-lg bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-500 px-4 py-2 text-white font-medium shadow hover:opacity-90 transition-opacity">Try the Agent</a>
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 px-6 py-4 bg-slate-900/80">
          <div className="flex flex-col gap-3 text-slate-200">
            <a href="#features" onClick={() => setOpen(false)}>Features</a>
            <a href="#demo" onClick={() => setOpen(false)}>Live Demo</a>
            <a href="#solutions" onClick={() => setOpen(false)}>Solutions</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
