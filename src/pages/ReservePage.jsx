import React from 'react'
import Navbar from '../components/Navbar'
import Reserve from '../components/Reserve'

function ReservePage() {
  return (
    <div className="min-h-screen relative">
      <div className="absolute inset-0 -z-20 bg-[#fafafa]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(40rem_40rem_at_80%_-10%,rgba(251,191,36,0.12),transparent_60%),radial-gradient(50rem_50rem_at_10%_10%,rgba(14,165,233,0.06),transparent_60%)]" />

      <Navbar />
      <main className="pt-24">
        <Reserve />
      </main>
    </div>
  )
}

export default ReservePage
