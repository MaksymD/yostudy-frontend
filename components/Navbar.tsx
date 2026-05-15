'use client';

import { useTranslations } from 'next-intl';
import { AddHomeWork, Description, Explore, HelpCenter, School } from '@mui/icons-material';

export default function Navbar() {
    const t = useTranslations('menu');

    const menuItems = [
        { id: 'consultation', key: 'consultation', icon: HelpCenter },
        { id: 'documents', key: 'documents', icon: Description },
        { id: 'admission', key: 'admission', icon: School },
        { id: 'dormitory', key: 'dormitory', icon: AddHomeWork },
        { id: 'adaptation', key: 'adaptation', icon: Explore },
    ];

    // scroll function to section by id
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 max-w-[95vw]">
            <div className="flex items-center gap-1 sm:gap-2 px-3 py-2 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl">

                {menuItems.map((item) => {
                    const IconComponent = item.icon;
                    return (
                        <button
                            key={item.key}
                            onClick={() => handleScroll(item.id)}
                            title={t(item.key)}
                            className="p-2 text-zinc-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/10 rounded-xl transition-all cursor-pointer flex flex-col items-center group relative"
                        >
                            <IconComponent className="w-5 h-5 transition-transform group-active:scale-90" />
                        </button>
                    );
                })}

            </div>
        </div>
    );
}