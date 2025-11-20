import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between"
      >
        <Link to="/" className="group inline-flex items-baseline gap-2">
          <span className="text-xl tracking-widest text-amber-600">MASALA</span>
          <span className="text-xl text-slate-900 group-hover:text-black transition-colors">Nation</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#menu" className="hover:text-slate-900 transition-colors">Menu</a>
          <a href="#visit" className="hover:text-slate-900 transition-colors">Visit</a>
          <Link to="/reserve" className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500 hover:bg-amber-400 text-black transition-colors">Reserve</Link>
        </nav>
      </motion.div>
    </header>
  )
}

export default Navbar
