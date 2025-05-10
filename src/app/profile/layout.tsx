import Image from "next/image"
import type { ReactNode } from "react"

export default function InicioLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen w-screen overflow-hidden flex items-center justify-center  relative">
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/ONDAS.png"
                    alt="ondaSup"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                />
            </div>

            <div className="relative z-10">
                {children}
            </div>
        </div>

    )
}
