'use client';

import PerfilUsuario from '@/components/ui/PerfilUsuario';
import Navbar from "@/components/ui/navbar";

export default function PerfilPage() {
  return (
    <div className="min-h-screen max-w-full  flex">
      <div className="hidden md:block">
        <Navbar />
      </div>

      <div className="flex-1 ml-0 md:ml-24 pt-8 px-4 sm:px-6 md:px-8">
        <Navbar />
        <PerfilUsuario />
      </div>
    </div>
  );
}
