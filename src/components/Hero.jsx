import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero({ onGetStarted }) {
  return (
    <section className="relative overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-lime-100" />
      <div className="relative max-w-6xl mx-auto px-4 py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Real-time farming guidance
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Empowering Farmers with live advice
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            KisaanMitra brings weather-aware, crop-specific tips to your fingertips —
            designed for the heroes who feed the world.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <button onClick={onGetStarted} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold shadow-lg shadow-green-600/30 transition">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
            <span className="text-sm text-gray-600">No sign-up needed to begin</span>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1500937386664-56f4b2f0d89f?q=80&w=1600&auto=format&fit=crop"
              alt="Farmer in a lush green field"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur rounded-2xl p-4 shadow-xl border border-white/60">
            <p className="text-sm font-medium text-gray-800">Trusted by farming communities</p>
            <p className="text-xs text-gray-600">Across 1,000+ villages</p>
          </div>
        </div>
      </div>
    </section>
  )
}
