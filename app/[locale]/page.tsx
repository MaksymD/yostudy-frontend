'use client';

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export default function Home() {
    const t = useTranslations();

    return (
        <div className="bg-grid relative min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 overflow-hidden transition-colors duration-300">
            {/* Эффект свечения теперь КРАСНЫЙ */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />

            <main className="relative z-10 container mx-auto px-6 pt-32 pb-20">
                <section className="flex flex-col items-center text-center space-y-8">

                    {/* Анимированный Badge с красным индикатором */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                        </span>
                        {t('home')}
                    </motion.div>

                    {/* Заголовок: Чёрно-белый */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl"
                    >
                        {t('hero.title')}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-zinc-500 max-w-2xl leading-relaxed"
                    >
                        {t('hero.subtitle')}
                    </motion.p>

                    {/* Кнопки: Красная главная кнопка */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center gap-4 pt-4"
                    >
                        <button className="flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-semibold hover:scale-105 transition-all shadow-lg shadow-red-600/20">
                            {t('hero.cta')} <ArrowRight size={18} />
                        </button>

                        <div className="flex bg-zinc-100 dark:bg-zinc-900 p-1 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                            <Link href="/ua" className="px-6 py-3 rounded-xl hover:bg-white dark:hover:bg-zinc-800 transition-colors">UA</Link>
                            <Link href="/ru" className="px-6 py-3 rounded-xl hover:bg-white dark:hover:bg-zinc-800 transition-colors">RU</Link>
                        </div>
                    </motion.div>
                </section>

                {/* Bento Grid: Акценты красным */}
                <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
                    <div className="md:col-span-2 md:row-span-2 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-red-600/5 to-transparent hover:border-red-600/30 transition-colors">
                        <h3 className="text-2xl font-bold italic">{t('features.smart')}</h3>
                        <p className="text-zinc-500 mt-2">{t('hero.subtitle')}</p>
                    </div>
                    <div className="p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-red-600/30 transition-colors">
                        <h3 className="font-bold">{t('features.support')}</h3>
                    </div>
                    <div className="p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-900 dark:bg-white flex items-center justify-center group overflow-hidden">
                        <BookOpen className="text-white dark:text-black group-hover:text-red-600 group-hover:scale-110 transition-all" size={40} />
                    </div>
                </section>
            </main>
        </div>
    );
}