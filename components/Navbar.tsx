'use client';
import { House, BookOpen, User } from "lucide-react";

export default function Navbar() {
    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl">
                <button className="p-2 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-xl transition-all"><House size={20} /></button>
                <div className="w-px h-4 bg-zinc-200 dark:bg-zinc-800 mx-1" />
                <button className="p-2 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-xl transition-all"><BookOpen size={20} /></button>
                <button className="p-2 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-xl transition-all"><User size={20} /></button>
            </div>
        </div>
    );
}