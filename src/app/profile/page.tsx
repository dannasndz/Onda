'use client';

import PerfilUsuario from '@/components/ui/PerfilUsuario';
import Navbar from "@/components/ui/navbar";

export default function PerfilPage() {
  return (
    <div className="flex min-h-screen text-white">
      {/* desktop*/}
      <nav className="hidden lg:block fixed top-0 left-0 h-screen w-20 overflow-y-auto z-20">
        <Navbar />
      </nav>
      
      {/* Main content  */}
      <main className="flex-1 w-full lg:ml-20">
        <div className="pt-8 px-4 sm:px-6 md:px-8 pb-20 lg:pb-8">
          <PerfilUsuario />
        </div>
      </main>

      {/* Mobile navbar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#1A1D2E]/95 backdrop-blur-sm border-t border-[#2a2d4a]/50">
        <div className="px-4 py-2">
          <Navbar />
        </div>
      </div>
    </div>
  );
}