'use client';

import PerfilUsuario from '@/components/ui/PerfilUsuario';
import Navbar from "@/components/ui/navbar";

export default function PerfilPage() {
  return (
    <div className="p-4">
      <Navbar />
      <PerfilUsuario />
    </div>
  );
}
