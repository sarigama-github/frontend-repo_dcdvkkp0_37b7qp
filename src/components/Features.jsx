import React from 'react'

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
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur">
              <h3 className="text-lg font-semibold mb-2 font-['Manrope']">{it.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed font-['Inter']">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_50%,rgba(255,255,255,0.05),transparent)]" />
    </section>
  )
}

export default Features
