import Image from "next/image"
import type { ReactNode } from "react"

export default function RegistroLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen py-10 flex items-center justify-center bg-[#0C0F1A] relative overflow-hidden">
      <Image src="/ONDASL.png" alt="ondaSup" fill objectFit="cover" />
      {children}
    </div>
  )
}
