"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, Compass, User, LogOut, Menu, X } from "lucide-react";
import { signOut } from "next-auth/react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop  */}
      <aside className="hidden lg:flex fixed top-0 h-screen w-20 bg-[#0d0d1a] border-r border-[#171C2E] flex-col items-center py-4 z-40">
        <div className="mb-6">
          <Image src="/logo.svg" alt="logo" width={70} height={70} />
        </div>

        <nav className="flex flex-col gap-6">
          <Link href="/inicio" className="flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-[#1a1d2e] group relative">
            <Home className="w-5 h-5" />
            <span className="absolute left-full ml-3 px-3 py-1 bg-[#2a2d4a] text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 shadow-lg border border-[#3a3d5a]">
              Inicio
            </span>
          </Link>
          <Link href="/explorar" className="flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-[#1a1d2e] group relative">
            <Compass className="w-5 h-5" />
            <span className="absolute left-full ml-3 px-3 py-1 bg-[#2a2d4a] text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 shadow-lg border border-[#3a3d5a]">
              Explorar
            </span>
          </Link>
          <Link href="/profile" className="flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-[#1a1d2e] group relative">
            <User className="w-5 h-5" />
            <span className="absolute left-full ml-3 px-3 py-1 bg-[#2a2d4a] text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 shadow-lg border border-[#3a3d5a]">
              Perfil
            </span>
          </Link>
        </nav>

        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="mt-auto mb-4 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-[#1a1d2e] group relative"
        >
          <LogOut className="w-5 h-5" />
          <span className="absolute left-full ml-3 px-3 py-1 bg-[#2a2d4a] text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 shadow-lg border border-[#3a3d5a]">
            Salir
          </span>
        </button>
      </aside>

      {/* Mobile */}
      <div className="lg:hidden flex justify-around items-center py-2  backdrop-blur-sm">
        <Link href="/inicio" className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors duration-200 p-2">
          <Home className="w-5 h-5" />
          <span className="text-xs font-medium">Inicio</span>
        </Link>
        <Link href="/explorar" className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors duration-200 p-2">
          <Compass className="w-5 h-5" />
          <span className="text-xs font-medium">Explorar</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors duration-200 p-2">
          <User className="w-5 h-5" />
          <span className="text-xs font-medium">Perfil</span>
        </Link>
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors duration-200 p-2"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-xs font-medium">Salir</span>
        </button>
      </div>
    </>
  );
}
