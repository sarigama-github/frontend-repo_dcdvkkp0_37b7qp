import React from 'react'
import { motion } from 'framer-motion'

const dishes = [
  {
    name: 'Tandoori Cauliflower',
    desc: 'charred florets, smoked yogurt, pickled chili',
    price: 14,
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Pani Puri Trio',
    desc: 'tamarind, mint-coriander, jalapeño buttermilk',
    price: 12,
    img: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Butter Chicken',
    desc: 'tomato fenugreek makhani, kasuri methi, cultured butter',
    price: 22,
    img: 'https://images.unsplash.com/photo-1604908554049-6514d6b38f0a?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Goan Fish Curry',
    desc: 'coconut, kokum, mustard seed, curry leaf',
    price: 24,
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Black Dal',
    desc: '24-hour simmered urad, cream, ghee tempering',
    price: 16,
    img: 'https://images.unsplash.com/photo-1546549039-49d79c5b34a0?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Gulab Jamun Cheesecake',
    desc: 'saffron syrup, pistachio dust',
    price: 11,
    img: 'https://images.unsplash.com/photo-1612208695882-c7c3eaa32a4f?q=80&w=800&auto=format&fit=crop'
  }
]

function Menu() {
  return (
    <section id="menu" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-amber-800">
            <span className="text-xs tracking-wide">Chef’s Signature</span>
          </div>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 font-['Manrope']">Menu Highlights</h2>
          <p className="mt-2 text-slate-600 font-['Inter']">A seasonal selection of our most loved plates. Full tasting and à la carte available in-house.</p>
        </motion.div>

        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {dishes.map((d, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img 
                  src={d.img} 
                  alt={d.name}
                  initial={{ scale: 1.04 }}
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 16 }}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-slate-900 font-['Manrope']">{d.name}</h3>
                  <span className="text-sm font-medium text-slate-700">${d.price}</span>
                </div>
                <p className="mt-1 text-sm text-slate-600 font-['Inter']">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_50%,rgba(251,191,36,0.08),transparent)]" />
    </section>
  )
}

export default Menu
