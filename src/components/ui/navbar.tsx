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
      {/* Botón hamburguesa solo en móviles */}
      <div className="sm:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white  p-2 rounded-md"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 h-screen w-20 bg-[#0d0d1a] border-r border-[#171C2E] flex flex-col items-center py-4 z-40 transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          sm:translate-x-0 sm:w-24 sm:items-center sm:justify-between sm:flex-col sm:static sm:h-screen
        `}
      >
        <div className="mb-8 ">
          <Image src="/logo.svg" alt="logo" width={70} height={70} />
        </div>

        <nav className="flex flex-col gap-6">
          <Link href="/inicio">
            <Home className="text-gray-400 hover:text-white w-6 h-6" />
          </Link>
          <Link href="/explorar">
            <Compass className="text-gray-400 hover:text-white w-6 h-6" />
          </Link>
          <Link href="/profile">
            <User className="text-gray-400 hover:text-white w-6 h-6" />
          </Link>
        </nav>

        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="mt-auto mb-4 text-gray-400 hover:text-white transition cursor-pointer"
        >
          <LogOut className="w-6 h-6" />
        </button>
      </aside>

      {/* Fondo oscuro cuando el menú está abierto en móviles */}
      {/* {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 sm:hidden"
          onClick={() => setIsOpen(false)}
        />
      )} */}
    </>
  );
}
