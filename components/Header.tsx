'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Header() {
    const params = useParams();
    const locale = params.locale;

    return (
        <header className="fixed top-0 w-full z-50 py-4 px-6 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link href={`/${locale}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <Image
                        src="/logo.png"
                        alt="YoStudy Logo"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <span className="text-xl font-bold tracking-tighter">
                        YO<span className="text-red-600">Study</span>
                    </span>
                </Link>
            </div>
        </header>
    );
}