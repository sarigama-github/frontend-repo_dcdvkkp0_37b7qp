import React from 'react'
import { motion } from 'framer-motion'

const items = [
  {
    title: 'Ingredient-first cooking',
    desc: 'We source locally and grind spices in-house. Every element is intentional.',
  },
  {
    title: 'Refined yet comforting',
    desc: 'Modern techniques meet nostalgic flavors from across the subcontinent.',
  },
  {
    title: 'Tasting and à la carte',
    desc: 'Choose our seasonal tasting or enjoy à la carte favorites and small plates.',
  },
]

function Features() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ staggerChildren: 0.12 }}
        >
          {items.map((it, i) => (
            <motion.div 
              key={i} 
              initial={{ y: 16, opacity: 0, scale: 0.98 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-2 font-['Manrope']">{it.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-['Inter']">{it.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_50%,rgba(251,191,36,0.08),transparent)]" />
    </section>
  )
}

export default Features
