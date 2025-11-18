import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Demo from './components/Demo'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Demo />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="max-w-6xl mx-auto px-6 py-10 text-slate-400 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Voice Agent Platform</p>
          <div className="flex items-center gap-6">
            <a href="#features" className="hover:text-slate-200">Features</a>
            <a href="#demo" className="hover:text-slate-200">Demo</a>
            <a href="#contact" className="hover:text-slate-200">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
