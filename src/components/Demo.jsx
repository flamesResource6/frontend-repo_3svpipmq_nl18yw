import { useEffect, useRef, useState } from 'react'
import { Mic, Square, Waveform, Phone } from 'lucide-react'

export default function Demo() {
  const mediaRef = useRef(null)
  const [recording, setRecording] = useState(false)
  const [audioUrl, setAudioUrl] = useState(null)
  const [chunks, setChunks] = useState([])
  const recorderRef = useRef(null)

  useEffect(() => {
    return () => {
      if (recorderRef.current && recorderRef.current.state !== 'inactive') {
        recorderRef.current.stop()
      }
    }
  }, [])

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mediaRecorder = new MediaRecorder(stream)
      recorderRef.current = mediaRecorder
      setChunks([])
      mediaRecorder.ondataavailable = (e) => setChunks((prev) => [...prev, e.data])
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/webm' })
        setAudioUrl(URL.createObjectURL(blob))
      }
      mediaRecorder.start()
      setRecording(true)
    } catch (e) {
      alert('Microphone permission is required to record audio.')
    }
  }

  const stopRecording = () => {
    if (recorderRef.current && recorderRef.current.state !== 'inactive') {
      recorderRef.current.stop()
      setRecording(false)
    }
  }

  return (
    <section id="demo" className="relative py-20 sm:py-28 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">Try the live voice agent demo</h2>
          <p className="mt-4 text-slate-300/80 max-w-xl">Press record, ask a question, and see how the agent would process audio. This demo records locally to respect your privacy.</p>

          <div className="mt-8 flex items-center gap-3">
            {!recording ? (
              <button onClick={startRecording} className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-white font-medium shadow hover:bg-emerald-600 transition-colors">
                <Mic size={18} /> Start Recording
              </button>
            ) : (
              <button onClick={stopRecording} className="inline-flex items-center gap-2 rounded-lg bg-rose-500 px-5 py-3 text-white font-medium shadow hover:bg-rose-600 transition-colors">
                <Square size={18} /> Stop Recording
              </button>
            )}

            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 px-5 py-3 text-white font-medium border border-white/10">
              <Phone size={18} /> Book a demo call
            </a>
          </div>

          {audioUrl && (
            <div className="mt-6 p-4 rounded-xl border border-white/10 bg-white/5">
              <p className="text-slate-200 text-sm mb-2">Your recorded sample:</p>
              <audio controls src={audioUrl} className="w-full" />
            </div>
          )}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="rounded-xl bg-slate-900/80 border border-white/10 p-6">
            <div className="flex items-center gap-2 text-slate-300 text-sm">
              <Waveform size={16} />
              Realtime processing pipeline
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {['ASR', 'NLU', 'Planner', 'Tools', 'TTS', 'Analytics'].map((s, i) => (
                <div key={i} className="rounded-lg bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-amber-500/20 border border-white/10 p-4 text-white">
                  <div className="text-sm font-semibold">{s}</div>
                  <div className="text-xs text-slate-300/80 mt-1">Low latency stream</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
