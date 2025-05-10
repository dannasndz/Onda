import Image from "next/image"
import type { ReactNode } from "react"

export default function InicioLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen w-full overflow-x-hidden relative bg-[#0D0D19]">
            {/* Contenedor para la imagen de onda superior */}
            <div className="absolute top-0 left-0 right-0 h-48 md:h-56 lg:h-64 overflow-hidden z-0">
                <Image
                    src="/onda.png"
                    alt="ondaSup"
                    fill
                    style={{ 
                        objectFit: 'cover',
                        objectPosition: 'top' 
                    }}
                    priority
                />
            </div>
            
            {/* Contenedor de contenido principal */}
            <div className="relative w-full z-10 pt-12">
                {children}
            </div>
        </div>
    )
}