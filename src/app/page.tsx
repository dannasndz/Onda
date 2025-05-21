'use client'
import Image from "next/image"
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter()
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4">
      <div className="flex items-center mt-5 mb-5 justify-center">
        <h1 className="text-white text-4xl md:text-7xl font-bold mb-2">Onda</h1>
        <Image src="/logo.svg" alt="logo" width={100} height={100} className="w-[80px] md:w-[120px] h-auto" />
      </div>

      <h2 className="text-gray-200 text-2xl md:text-4xl font-normal text-center">
        Explora, escucha y comparte tu
      </h2>
      <h2 className="text-gray-200 text-2xl md:text-4xl font-normal mb-4 text-center">
        pasión por la música
      </h2>

      <h1 className="text-gray-500 text-lg md:text-2xl font-light mt-6 text-center">
        Deja que la música te encuentre y transforma cada
      </h1>
      <h1 className="text-gray-500 text-lg md:text-2xl font-light text-center">
        canción en un recuerdo que vale la pena compartir.
      </h1>

      <div className="flex flex-col sm:flex-row items-center justify-center mt-12 gap-4">
        <button
          onClick={() => router.push('/auth/registro')}
          className="w-full sm:w-auto px-8 sm:px-10 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-lg py-2 rounded-md font-medium hover:opacity-90 transition"
        >
          Registrarme
        </button>
        <button
          onClick={() => router.push('/auth/login')}
          className="w-full sm:w-auto px-8 sm:px-10 bg-[#161926] border border-[#ffffff3d] text-white text-lg py-2 rounded-md font-medium hover:opacity-90 transition"
        >
          Iniciar sesión
        </button>
      </div>
    </div>
  )
}
