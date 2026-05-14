'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes'; // 1. Імпортуємо хук для зміни теми
import { AddHomeWork, Description, Explore, HelpCenter, School, LightMode, DarkMode } from '@mui/icons-material';

export default function Navbar() {
    const params = useParams();
    const pathname = usePathname();
    const locale = params.locale;
    const t = useTranslations('menu');

    // 2. Ініціалізуємо змінні керування темою
    const { theme, setTheme, resolvedTheme } = useTheme();

    // Захист від помилок гідрації (компонент має монтуватися на клієнті)
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const menuItems = [
        { key: 'consultation', href: `/${locale}/consultation`, icon: HelpCenter },
        { key: 'documents', href: `/${locale}/documents`, icon: Description },
        { key: 'admission', href: `/${locale}/admission`, icon: School },
        { key: 'dormitory', href: `/${locale}/dormitory`, icon: AddHomeWork },
        { key: 'adaptation', href: `/${locale}/adaptation`, icon: Explore },
    ];

    // Визначаємо активний режим (враховуючи системні налаштування смартфона)
    const currentTheme = resolvedTheme || theme;

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 max-w-[95vw]">
            <div className="flex items-center gap-1 sm:gap-2 px-3 py-2 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl">

                {/* Пункти навігаційного меню */}
                {menuItems.map((item) => {
                    const IconComponent = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.key}
                            href={item.href}
                            title={t(item.key)}
                            className={`p-2 rounded-xl transition-all relative group flex flex-col items-center
                                ${isActive
                                ? 'text-red-600 bg-red-50 dark:bg-red-950/30'
                                : 'text-zinc-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/10'
                            }`}
                        >
                            <IconComponent
                                className="w-5 h-5 transition-transform group-active:scale-90"
                            />
                            {/* Червона точка під активною іконкою */}
                            {isActive && (
                                <span className="absolute bottom-0.5 w-1 h-1 bg-red-600 rounded-full"/>
                            )}
                        </Link>
                    );
                })}

                {/* Тонка лінія-розділювач між меню та кнопкою */}
                <div className="w-px h-5 bg-zinc-200 dark:bg-zinc-800 mx-1" />

                {/* 3. КНОПКА ПЕРЕМИКАННЯ ТЕМИ */}
                <button
                    onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
                    className="p-2 text-zinc-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/10 rounded-xl transition-all cursor-pointer flex items-center justify-center"
                    title="Змінити тему"
                >
                    {mounted ? (
                        currentTheme === 'dark' ? (
                            <LightMode className="w-5 h-5 text-amber-500 transition-transform active:scale-90" />
                        ) : (
                            <DarkMode className="w-5 h-5 text-zinc-600 transition-transform active:scale-90" />
                        )
                    ) : (
                        // Тимчасовий блок аналогічного розміру, щоб уникнути стрибків інтерфейсу до гідрації
                        <div className="w-5 h-5" />
                    )}
                </button>

            </div>
        </div>
    );
}