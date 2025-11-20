import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function CTA() {
  return (
    <section id="reserve" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-amber-200 bg-gradient-to-r from-amber-100 via-amber-50 to-white p-10 text-slate-900"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold leading-tight mb-3 font-['Manrope']">Book your table</h2>
              <p className="text-slate-700 font-['Inter']">Open for dinner Tuesday–Sunday. Limited seats for the tasting menu. Walk-ins welcome at the bar.</p>
            </div>
            <div className="md:text-right">
              <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }} className="inline-block">
                <Link 
                  to="/reserve"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-amber-500 text-black font-medium hover:bg-amber-400 transition-colors"
                >
                  Reserve now
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
