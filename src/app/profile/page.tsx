'use client';

import PerfilUsuario from '@/components/ui/PerfilUsuario';
import Navbar from "@/components/ui/navbar";

export default function PerfilPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden px-15 pt-8">
      <Navbar />
      <PerfilUsuario />
    </div>
  );
}
