import React, { useState } from 'react'
import { motion } from 'framer-motion'

const inputBase = 'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400/60 focus:border-amber-300 transition'

function Reserve() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    party_size: 2,
    date: '',
    time: '',
    occasion: '',
    seating: 'standard',
    special_requests: ''
  })
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const backend = import.meta.env.VITE_BACKEND_URL || ''

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', message: 'Submitting...' })
    try {
      const res = await fetch(`${backend}/reservations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          party_size: Number(form.party_size)
        })
      })
      if (!res.ok) throw new Error('Failed to submit')
      setStatus({ state: 'success', message: 'Reservation request received. We\'ll confirm shortly!' })
      setForm({ name: '', email: '', phone: '', party_size: 2, date: '', time: '', occasion: '', seating: 'standard', special_requests: '' })
    } catch (err) {
      setStatus({ state: 'error', message: 'Something went wrong. Please try again.' })
    }
  }

  return (
    <section id="reserve" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-amber-800">
            <span className="text-xs tracking-wide">Reserve</span>
          </div>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-900 font-['Manrope']">Reserve your table</h2>
          <p className="mt-2 text-slate-600 font-['Inter']">Dinner Tue–Sun. For parties larger than 12, contact us directly.</p>
        </motion.div>

        <motion.form 
          onSubmit={onSubmit}
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-2 gap-6 rounded-3xl border border-slate-200 bg-white p-6 md:p-8"
        >
          <div className="space-y-6">
            <div>
              <label className="block text-sm mb-2 text-slate-700">Full name</label>
              <input required name="name" value={form.name} onChange={onChange} className={inputBase} placeholder="Aarav Sharma" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2 text-slate-700">Email</label>
                <input required type="email" name="email" value={form.email} onChange={onChange} className={inputBase} placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm mb-2 text-slate-700">Phone</label>
                <input required name="phone" value={form.phone} onChange={onChange} className={inputBase} placeholder="(555) 123-4567" />
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm mb-2 text-slate-700">Party size</label>
                <select name="party_size" value={form.party_size} onChange={onChange} className={inputBase}>
                  {Array.from({ length: 12 }).map((_, i) => (
                    <option key={i+1} value={i+1}>{i+1}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm mb-2 text-slate-700">Date</label>
                <input required type="date" name="date" value={form.date} onChange={onChange} className={inputBase} />
              </div>
              <div>
                <label className="block text-sm mb-2 text-slate-700">Time</label>
                <input required type="time" name="time" value={form.time} onChange={onChange} className={inputBase} />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm mb-2 text-slate-700">Occasion (optional)</label>
              <input name="occasion" value={form.occasion} onChange={onChange} className={inputBase} placeholder="Birthday, anniversary, business..." />
            </div>
            <div>
              <label className="block text-sm mb-2 text-slate-700">Seating preference</label>
              <div className="grid grid-cols-3 gap-3">
                {['standard', 'window', 'bar'].map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => setForm((f) => ({ ...f, seating: opt }))}
                    className={`rounded-xl border px-4 py-3 text-sm capitalize transition ${form.seating === opt ? 'border-amber-300 bg-amber-50 text-amber-900' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm mb-2 text-slate-700">Special requests</label>
              <textarea name="special_requests" value={form.special_requests} onChange={onChange} rows={5} className={inputBase} placeholder="Allergies, dietary preferences, accessibility..." />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-500">By reserving, you agree to our 24h cancellation policy.</p>
              <motion.button 
                whileHover={{ y: -1 }} 
                whileTap={{ y: 0 }}
                type="submit" 
                disabled={status.state === 'loading'}
                className="inline-flex items-center px-5 py-3 rounded-full bg-amber-500 text-black font-medium hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status.state === 'loading' ? 'Sending...' : 'Reserve now'}
              </motion.button>
            </div>
            {status.state !== 'idle' && (
              <div className={`text-sm ${status.state === 'success' ? 'text-emerald-600' : status.state === 'error' ? 'text-rose-600' : 'text-slate-600'}`}>
                {status.message}
              </div>
            )}
          </div>
        </motion.form>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_50%,rgba(251,191,36,0.08),transparent)]" />
    </section>
  )
}

export default Reserve
