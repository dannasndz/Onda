'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function Bienvenida() {
  const router = useRouter()
  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/registro') 
    }
  }, [status, router])

  if (status === 'loading') {
    return <p className="text-white text-center mt-20">Cargando...</p>
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-[#111827] text-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center border border-[#48506F]">

        <div className="flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold py-3">Gracias!</h1>
        </div>

        <p className="text-[#CBD5E1] mb-6  py-3 text-2xl">
          Ya estamos preparando música que va con tu onda.
        </p>

        <button
          onClick={() => router.push('/inicio')}
          className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-2 px-6  rounded-full font-semibold hover:opacity-90 transition"
        >
          Ir a explorar
        </button>
      </div>
    </div>
  )
}
