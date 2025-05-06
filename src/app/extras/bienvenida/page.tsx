'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

export default function Bienvenida() {
  const router = useRouter()
  const { data: session, status } = useSession()

  // Si no hay sesión, redirige a login
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/registro') // ajusta a tu ruta real de login
    }
  }, [status, router])

  // Mientras se carga la sesión
  if (status === 'loading') {
    return <p className="text-white text-center mt-20">Cargando...</p>
  }

  // Si hay sesión, muestra la página
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-[#111827] text-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center border border-[#48506F]">

        <div className="flex items-center justify-center">
          <h1 className="text-white text-6xl font-bold">Onda</h1>
          <Image src="/logo.svg" alt="logo" width={120} height={120} />
        </div>

        <h2 className="text-2xl font-semibold mb-2">¡Nos alegra que estés aquí!</h2>
        <p className="text-[#CBD5E1] mb-6">
          Antes de comenzar ayúdanos respondiendo un test para conocerte mejor.
        </p>

        <button
          onClick={() => router.push('/test')}
          className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-2 px-6 rounded-full font-semibold hover:opacity-90 transition"
        >
          Comenzar
        </button>
      </div>
    </div>
  )
}
