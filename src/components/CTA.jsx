import React from 'react'

function CTA() {
  return (
    <section id="reserve" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-transparent p-10 text-white backdrop-blur">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold leading-tight mb-3 font-['Manrope']">Book your table</h2>
              <p className="text-white/80 font-['Inter']">Open for dinner Tuesday–Sunday. Limited seats for the tasting menu. Walk-ins welcome at the bar.</p>
            </div>
            <div className="md:text-right">
              <a href="#" className="inline-flex items-center px-6 py-3 rounded-full bg-amber-500 text-black font-medium hover:bg-amber-400 transition-colors">Reserve now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
