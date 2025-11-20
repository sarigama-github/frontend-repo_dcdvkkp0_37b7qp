import React from 'react'

function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <a href="#" className="group inline-flex items-baseline gap-2">
          <span className="text-xl tracking-widest text-amber-500">MASALA</span>
          <span className="text-xl text-white/90 group-hover:text-white transition-colors">Nation</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#dishes" className="hover:text-white transition-colors">Signature</a>
          <a href="#visit" className="hover:text-white transition-colors">Visit</a>
          <a href="#reserve" className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur transition-colors">Reserve</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
