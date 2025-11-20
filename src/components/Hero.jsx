import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b0b0b] via-[#111111] to-[#0b0b0b]" />
        <div className="absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[36rem] w-[36rem] rounded-full bg-amber-500/10 blur-3xl" />
          <div className="absolute -bottom-40 right-1/3 h-[28rem] w-[28rem] rounded-full bg-rose-500/10 blur-3xl" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.06),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.04),transparent_30%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div 
            className="lg:col-span-7"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ staggerChildren: 0.08 }}
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur text-white/80 mb-6">
              <span className="text-amber-400">New</span>
              <span className="text-xs tracking-wide">Chef ranked Top 5 on MasterChef</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-semibold tracking-tight text-white">
              <span className="font-[\'Manrope\']">Masala</span> <span className="text-white/80 font-light">Nation</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-5 text-lg text-white/70 max-w-xl leading-relaxed font-[\'Inter\']">
              A modern Indian kitchen celebrating bold flavors, seasonal ingredients, and refined technique.
              Crafted by our award-winning chef — a MasterChef Top 5 finalist.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3">
              <a href="#reserve" className="px-5 py-3 rounded-full bg-amber-500 text-black font-medium hover:bg-amber-400 transition-colors">Reserve a table</a>
              <a href="#menu" className="px-5 py-3 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur transition-colors">View menu</a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex items-center gap-6 text-white/60 text-sm">
              <div className="flex -space-x-3">
                <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=80&auto=format&fit=crop" className="w-10 h-10 rounded-full object-cover ring-2 ring-black/20" />
                <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=80&auto=format&fit=crop" className="w-10 h-10 rounded-full object-cover ring-2 ring-black/20" />
                <img src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=80&auto=format&fit=crop" className="w-10 h-10 rounded-full object-cover ring-2 ring-black/20" />
              </div>
              <p className="font-[\'IBM Plex Sans\']">“Exceptional food. Clean, modern, and absolutely delicious.”</p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <motion.div 
                aria-hidden 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-amber-500/20 via-white/5 to-transparent blur-2xl" 
              />
              <motion.img
                src="https://images.unsplash.com/photo-1604909052743-89e532b16a35?q=80&w=1200&auto=format&fit=crop"
                alt="Signature dish"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="w-full aspect-[4/5] object-cover rounded-3xl border border-white/10 shadow-2xl"
              />
              <motion.div 
                initial={{ y: 16, opacity: 0 }} 
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-black/60 border border-white/10 text-white rounded-2xl p-4 backdrop-blur"
              >
                <p className="text-sm">MasterChef Top 5</p>
                <p className="text-xs text-white/70">Our chef brings competition-level precision to every plate.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
