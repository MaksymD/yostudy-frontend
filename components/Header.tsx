'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const t = useTranslations();
    const pathname = usePathname();

    const redirectedPathname = (locale: string) => {
        if (!pathname) return "/";
        const segments = pathname.split("/");
        segments[1] = locale;
        return segments.join("/");
    };

    return (
        <header className="flex items-center justify-between px-8 py-4 bg-white border-b dark:bg-black dark:border-zinc-800">
            <div className="text-xl font-bold tracking-tighter text-black dark:text-white">
                YoStudy
            </div>

            <nav className="hidden md:flex gap-6 text-sm font-medium">
                <Link href="/" className="hover:text-blue-500 transition-colors">{t('home')}</Link>
                <Link href="/courses" className="hover:text-blue-500 transition-colors">Курси</Link>
                <Link href="/about" className="hover:text-blue-500 transition-colors">Про нас</Link>
            </nav>

            <div className="flex items-center gap-4">
                <div className="flex border rounded-lg overflow-hidden text-xs font-bold">
                    <Link
                        href={redirectedPathname('ua')}
                        className={`px-3 py-1 ${pathname.startsWith('/ua') ? 'bg-black text-white' : 'bg-white text-black'}`}
                    >
                        UA
                    </Link>
                    <Link
                        href={redirectedPathname('ru')}
                        className={`px-3 py-1 ${pathname.startsWith('/ru') ? 'bg-black text-white' : 'bg-white text-black'}`}
                    >
                        RU
                    </Link>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700">
                    Увійти
                </button>
            </div>
        </header>
    );
}