import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Menu from './components/Menu'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Global light background */}
      <div className="absolute inset-0 -z-20 bg-[#fafafa]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(40rem_40rem_at_80%_-10%,rgba(251,191,36,0.12),transparent_60%),radial-gradient(50rem_50rem_at_10%_10%,rgba(14,165,233,0.06),transparent_60%)]" />

      <Navbar />
      <main>
        <Hero />
        <Features />
        <Menu />
        <CTA />

        {/* Minimal footer */}
        <footer id="visit" className="py-16 text-center text-slate-600">
          <div className="mx-auto max-w-6xl px-6">
            <p className="font-['IBM Plex Sans']">123 Spice Street, Downtown • Tue–Sun 5pm–10pm</p>
            <p className="mt-2 text-slate-400 text-sm">© {new Date().getFullYear()} Masala Nation</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
