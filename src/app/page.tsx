'use client'
import Image from "next/image"
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter()

  return (
    <div>
      <div className="flex items-center mt-12 mb-5 justify-center">
        <h1 className="text-white text-7xl font-bold">Onda</h1>
        <Image src="/logo.svg" alt="logo" width={120} height={120} />
      </div>
      <h2 className=" text-gray-200 text-4xl font-normal  text-center">Explora, escucha y comparte tu </h2>
      <h2 className=" text-gray-200 text-4xl font-normal  mb-2 text-center">pasión por la música</h2>
      <h1 className=" text-gray-500 text-2xl font-light   mt-10 text-center">Deja que la música te encuentre y transforma cada </h1>
      <h1 className=" text-gray-500 text-2xl font-light text-center">canción en un recuerdo que vale la pena compartir.</h1>

      <div className="flex items-center justify-center mt-20 ">
        <button
          onClick={() => router.push('/auth/registro')}
          className="px-10 mr-8 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-lg py-2 rounded-md font-medium hover:opacity-90 transition"
        >
          Registrarme
        </button>
        <button
          onClick={() => router.push('/auth/login')}
          className="ml-8 bg-[#161926] border-[#ffffff3d] border text-white text-lg py-2 px-10 rounded-md font-medium hover:opacity-90 transition"
        >
          Iniciar sesión
        </button>
      </div>


    </div>
  )
}
