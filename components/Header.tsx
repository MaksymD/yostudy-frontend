'use client';

import Link from 'next/link';
import {useParams} from 'next/navigation';
import {useTranslations} from 'next-intl';

export default function Header() {
    const params = useParams();
    const locale = params.locale;
    const t = useTranslations('menu');

    const menuItems = [
        {key: 'consultation', href: `/${locale}/consultation`},
        {key: 'documents', href: `/${locale}/documents`},
        {key: 'admission', href: `/${locale}/admission`},
        {key: 'dormitory', href: `/${locale}/dormitory`},
        {key: 'adaptation', href: `/${locale}/adaptation`},
    ];

    return (
        <header
            className="fixed top-0 w-full z-50 py-4 px-6 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href={`/${locale}`} className="text-xl font-bold tracking-tighter">
                    {/*<Link href={`/${locale}`}
                      className="flex items-center gap-2 hover:opacity-80 transition-opacity shrink-0">
                    <Image
                        src="/logo.png"
                        alt="YoStudy Logo"
                        width={40}
                        height={40}
                        className="rounded-none"
                    />*/}
                    <span className="relative text-3xl font-black tracking-tight text-red-600"><span
                        className="relative inline-block"><span
                        className="absolute -top-[-3px] left-0 h-[2px] w-full bg-white"></span>Yo</span><span
                        className="ml-1 text-xl font-semibold text-white underline decoration-red-600 decoration-2 underline-offset-4">Study</span></span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-6">
                    {menuItems.map((item) => (
                        <Link
                            key={item.key}
                            href={item.href}
                            className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-500 transition-colors"
                        >
                            {t(item.key)}
                        </Link>
                    ))}
                </nav>

                {/* Right Action */}
                <div className="flex items-center gap-4">
                    <button
                        className="hidden sm:block text-sm font-semibold bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl transition-all active:scale-95 shadow-lg shadow-red-600/10">
                        {t('consultation')}
                    </button>
                </div>
            </div>
        </header>
    );
}