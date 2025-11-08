import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuoteCard from './components/QuoteCard'
import Footer from './components/Footer'

function App() {
  const [started, setStarted] = useState(false)

  const handleGetStarted = () => {
    // For now, simply toggle state; next step will navigate to the advice flow page
    setStarted(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-lime-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <Navbar />
        {!started ? (
          <>
            <Hero onGetStarted={handleGetStarted} />
            <QuoteCard />
          </>
        ) : (
          <section className="max-w-3xl mx-auto text-center py-24">
            <h2 className="text-3xl sm:text-4xl font-bold">Welcome to KisaanMitra</h2>
            <p className="mt-4 text-gray-700">
              We will guide you step-by-step with real-time advice. Next, we'll set up the advice page where you can select your crop and location.
            </p>
          </section>
        )}
        <Footer />
      </div>
    </div>
  )
}

export default App
