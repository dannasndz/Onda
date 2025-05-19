"use client";

import { Compass, Home, User, LogOut } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";

const Sidebar = () => {
    return (
        <aside className="fixed left-0 top-0 h-screen w-22 bg-[#0d0d1a] border-2 border-[#171C2E] flex flex-col items-center py-4">
            <div className="mb-8">
                <Image src="/logo.svg" alt="logo" width={150} height={120} />
            </div>

            <nav className="flex flex-col gap-6">
                <Link href="/inicio">
                    <Home className="text-gray-400 hover:text-white w-7 h-7" />
                </Link>
                <Link href="/explorar">
                    <Compass className="text-gray-400 hover:text-white w-7 h-7" />
                </Link>
                <Link href="/profile">
                    <User className="text-gray-400 hover:text-white w-7 h-7" />
                </Link>
            </nav>

            <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="mt-auto mb-4 text-gray-400 hover:text-white transition"
            >
                <LogOut className="w-7 h-7" />
            </button>
        </aside>
    );
};

export default Sidebar;
