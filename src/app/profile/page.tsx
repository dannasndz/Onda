'use client';

import PerfilUsuario from '@/components/ui/PerfilUsuario';
import Navbar from "@/components/ui/navbar";

export default function PerfilPage() {
  return (
    <div className="min-h-screen max-w-full flex">
      <Navbar />

      <div className="flex-1 ml-24 pt-8 px-4 sm:px-6 md:px-8">
        <PerfilUsuario />
      </div>
    </div>
  );
}