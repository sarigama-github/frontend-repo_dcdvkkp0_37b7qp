import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Global background */}
      <div className="absolute inset-0 -z-20 bg-[#0a0a0a]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_30%),radial-gradient(40rem_40rem_at_80%_-10%,rgba(251,191,36,0.06),transparent_60%)]" />

      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />

        {/* Minimal footer */}
        <footer id="visit" className="py-16 text-center text-white/60">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-['IBM Plex Sans']">123 Spice Street, Downtown • Tue–Sun 5pm–10pm</p>
            <p className="mt-2 text-white/40 text-sm">© {new Date().getFullYear()} Masala Nation</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
