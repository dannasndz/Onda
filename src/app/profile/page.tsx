'use client';

import PerfilUsuario from '@/components/ui/PerfilUsuario';
import Navbar from "@/components/ui/navbar";

export default function PerfilPage() {
  return (
    <div className="flex min-h-screen ">
      <nav
        className="fixed top-0 left-0 h-screen w-64  overflow-y-auto z-20"
      >
        <Navbar />
      </nav>
      <div className="flex-1 pt-8 px-4 sm:px-6 md:px-8 lg:ml-25">
        <PerfilUsuario />
      </div>

    </div>
  );
}