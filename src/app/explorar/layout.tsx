import Image from "next/image"
import type { ReactNode } from "react"

export default function ExplorarLayout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen w-full overflow-x-hidden overflow-y-hidden relative bg-[#0D0D19]">
            <div className="absolute top-0 left-0 right-0 h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 overflow-hidden z-0">
                <Image
                    src="/onda.png"
                    alt="ondaSup"
                    fill
                    style={{ 
                        objectFit: 'cover',
                        objectPosition: 'top' 
                    }}
                    priority
                    className="opacity-80"
                />
            </div>
            
            <div className="relative w-full z-10 ">
                <div className="w-full max-w-screen-2xl mx-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}