import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.2),transparent_50%)] pointer-events-none" />
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/80 text-xs mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Realtime voice AI for support, sales, and ops
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white drop-shadow-[0_6px_40px_rgba(99,102,241,0.35)]">
          Build your own Voice Agent in minutes
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-slate-200/90 max-w-2xl mx-auto">
          Route calls, answer FAQs, qualify leads, and complete tasks with natural conversations. Easy to configure, secure, and scalable.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#demo" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-amber-500 px-5 py-3 text-white font-medium shadow hover:opacity-90 transition-opacity">
            Try the Live Demo
          </a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/15 px-5 py-3 text-white font-medium border border-white/10">
            Talk to Sales
          </a>
        </div>
      </div>
    </section>
  )
}
