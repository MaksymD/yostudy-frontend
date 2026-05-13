'use client';

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export default function Home() {
    const t = useTranslations();

    return (
        /* Изменено: добавлен класс bg-fixed и относительное позиционирование для стабильности фона на мобильных */
        <div className="bg-grid relative min-h-[100dvh] bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 overflow-x-hidden transition-colors duration-300 bg-fixed">

            {/* Эффект свечения: подправлены параметры для лучшей видимости в мобильном Chrome */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] max-w-6xl h-[600px] bg-red-600/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none z-0" />

            <main className="relative z-10 container mx-auto px-6 pt-10 pb-32 flex flex-col items-center">
                <section className="flex flex-col items-center text-center space-y-6 md:space-y-8 mt-10">

                    {/* Анимированный Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 text-sm font-medium"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                        </span>
                        {t('home')}
                    </motion.div>

                    {/* Заголовок */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-7xl font-bold tracking-tight max-w-4xl"
                    >
                        {t('hero.title')}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-base md:text-xl text-zinc-500 max-w-2xl leading-relaxed"
                    >
                        {t('hero.subtitle')}
                    </motion.p>

                    {/* Кнопки */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row justify-center gap-4 pt-4 w-full sm:w-auto"
                    >
                        <button className="flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-semibold hover:scale-105 transition-all shadow-lg shadow-red-600/20 active:scale-95">
                            {t('hero.cta')} <ArrowRight size={18} />
                        </button>

                        <div className="flex bg-zinc-100 dark:bg-zinc-900 p-1 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                            <Link href="/ua" className="flex-1 text-center px-6 py-3 rounded-xl hover:bg-white dark:hover:bg-zinc-800 transition-colors">UA</Link>
                            <Link href="/ru" className="flex-1 text-center px-6 py-3 rounded-xl hover:bg-white dark:hover:bg-zinc-800 transition-colors">RU</Link>
                        </div>
                    </motion.div>
                </section>

                {/* Bento Grid */}
                <section className="mt-20 w-full grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[180px] md:auto-rows-[200px]">
                    <div className="md:col-span-2 md:row-span-2 p-6 md:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-red-600/5 to-transparent hover:border-red-600/30 transition-colors flex flex-col justify-end">
                        <h3 className="text-xl md:text-2xl font-bold italic">{t('features.smart')}</h3>
                        <p className="text-zinc-500 mt-2 text-sm md:text-base">{t('hero.subtitle')}</p>
                    </div>
                    <div className="p-6 md:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-red-600/30 transition-colors flex items-center">
                        <h3 className="font-bold">{t('features.support')}</h3>
                    </div>
                    <div className="p-6 md:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-900 dark:bg-white flex items-center justify-center group overflow-hidden">
                        <BookOpen className="text-white dark:text-black group-hover:text-red-600 group-hover:scale-110 transition-all" size={40} />
                    </div>
                </section>
            </main>
        </div>
    );
}