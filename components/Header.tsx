'use client';

import Link from 'next/link';
import {useParams} from 'next/navigation';
import {useTranslations} from 'next-intl';
import {AddHomeWork, Description, Explore, HelpCenter, School} from '@mui/icons-material';

export default function Header() {
    const params = useParams();
    const locale = params.locale || 'ua';
    const t = useTranslations('menu');

    const menuItems = [
        {id: 'consultation', key: 'consultation', icon: HelpCenter},
        {id: 'documents', key: 'documents', icon: Description},
        {id: 'admission', key: 'admission', icon: School},
        {id: 'dormitory', key: 'dormitory', icon: AddHomeWork},
        {id: 'adaptation', key: 'adaptation', icon: Explore},
    ];

    // Smooth scroll handler to find section by id
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    };

    return (
        <header
            className="fixed top-0 w-full z-50 py-4 px-4 sm:px-6 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">

                {/* Logo Link */}
                <Link href={`/${locale}`} className="text-6xl font-bold tracking-tighter shrink-0">
                    <span className="relative inline-block text-red-600">
                        <span className="relative inline-block">
                            <span className="absolute -top-[-7px] left-0 h-[2px] w-full bg-white"></span>
                            Yo
                    </span>
                    <span
                        className="ml-1 text-lg sm:text-2xl font-semibold text-white underline decoration-red-600 decoration-2 underline-offset-4">
                        Study
                    </span>
                        </span>
                </Link>

                {/* Navigation Menu - Hidden on mobile, visible only on lg screens and up */}
                <nav className="hidden lg:flex items-center gap-6">
                    {menuItems.map((item) => {
                        const IconComponent = item.icon;
                        return (
                            <button
                                key={item.key}
                                onClick={() => handleScroll(item.id)}
                                title={t(item.key)}
                                className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-500 transition-colors cursor-pointer whitespace-nowrap p-1 sm:p-0 rounded-lg"
                            >
                                <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-500 dark:text-zinc-400"/>
                                <span>
                                    {t(item.key)}
                                </span>
                            </button>
                        );
                    })}
                </nav>

                {/* Right Action Button - Stays visible to let mobile users navigate to the form */}
                <div className="flex items-center shrink-0">
                    <button
                        onClick={() => handleScroll('consultation')}
                        className="text-[11px] sm:text-sm font-semibold bg-red-600 hover:bg-red-700 text-white px-2.5 py-1.5 sm:px-5 sm:py-2.5 rounded-xl transition-all active:scale-95 shadow-lg shadow-red-600/10 whitespace-nowrap cursor-pointer"
                    >
                        {t('consultation')}
                    </button>
                </div>

            </div>
        </header>
    );
}