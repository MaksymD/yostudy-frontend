'use client';

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Award, CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Home() {
    const t = useTranslations();

    return (
        <div className="bg-grid relative min-h-[100dvh] w-full text-zinc-900 dark:text-zinc-50 overflow-x-hidden transition-colors duration-300">

            {/* Фоновое красное свечение */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300%] md:w-full max-w-6xl h-[500px] bg-red-600/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none -z-10" />

            <main className="relative z-10 container mx-auto px-6 pt-10 pb-32 flex flex-col items-center">

                {/* ГЛАВНЫЙ ЭКРАН (HERO SECTION) */}
                <section className="flex flex-col items-center text-center space-y-6 md:space-y-8 mt-10">

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

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row justify-center gap-4 pt-4 w-full sm:w-auto"
                    >
                        <button className="flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-semibold hover:scale-105 transition-all shadow-lg shadow-red-600/20 active:scale-95 cursor-pointer">
                            {t('hero.cta')} <ArrowRight size={18} />
                        </button>

                        <div className="flex bg-zinc-100 dark:bg-zinc-900 p-1 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                            <Link href="/ua" className="flex-1 text-center px-6 py-3 rounded-xl hover:bg-white dark:hover:bg-zinc-800 transition-colors">UA</Link>
                            <Link href="/ru" className="flex-1 text-center px-6 py-3 rounded-xl hover:bg-white dark:hover:bg-zinc-800 transition-colors">RU</Link>
                        </div>
                    </motion.div>
                </section>

                {/* СЕКЦИЯ: О КОМПАНИИ (ДИНАМИЧЕСКИЙ ТЕКСТ С ПЕРЕВОДОМ) */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-24 w-full max-w-5xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-[60px] rounded-full pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        <div className="lg:col-span-1">
                            <span className="text-xs font-bold tracking-widest text-red-600 uppercase">
                                {t('about.badge')}
                            </span>
                            <h2 className="text-3xl font-bold tracking-tight mt-2">
                                YO <span className="text-red-600">Study</span>
                            </h2>
                            <div className="h-1 w-12 bg-red-600 rounded-full mt-4" />
                        </div>

                        <div className="lg:col-span-2 space-y-6 text-zinc-600 dark:text-zinc-300 leading-relaxed text-base md:text-lg">
                            <p>
                                <strong className="text-zinc-950 dark:text-white font-semibold">
                                    {t('about.p1_bold')}
                                </strong>
                                {t('about.p1_text')}
                            </p>
                            <p>
                                {t('about.p2_text')}
                            </p>
                        </div>
                    </div>

                    {/* Иконки ключевых преимуществ */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-zinc-200/60 dark:border-zinc-800/60">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-red-50 dark:bg-red-950/30 text-red-600 rounded-xl">
                                <ShieldCheck size={20} />
                            </div>
                            <span className="text-sm font-medium">
                                {t('about.feature_partnership')}
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-red-50 dark:bg-red-950/30 text-red-600 rounded-xl">
                                <Award size={20} />
                            </div>
                            <span className="text-sm font-medium">
                                {t('about.feature_experience')}
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-red-50 dark:bg-red-950/30 text-red-600 rounded-xl">
                                <CheckCircle2 size={20} />
                            </div>
                            <span className="text-sm font-medium">
                                {t('about.feature_result')}
                            </span>
                        </div>
                    </div>
                </motion.section>

                {/* СЕКЦИЯ С СЕТКОЙ КАРТОЧЕК (БЕНТО-БОКС) */}
                <section className="mt-20 w-full grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-min md:auto-rows-[200px]">
                    <div className="md:col-span-2 md:row-span-2 p-6 md:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-red-600/5 to-transparent hover:border-red-600/30 transition-colors flex flex-col justify-end min-h-[200px]">
                        <h3 className="text-xl md:text-2xl font-bold italic">{t('features.smart')}</h3>
                        <p className="text-zinc-500 mt-2 text-sm md:text-base">{t('hero.subtitle')}</p>
                    </div>
                    <div className="p-6 md:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-red-600/30 transition-colors flex items-center min-h-[100px]">
                        <h3 className="font-bold">{t('features.support')}</h3>
                    </div>
                    <div className="p-6 md:p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-900 dark:bg-white flex items-center justify-center group overflow-hidden min-h-[100px]">
                        <BookOpen className="text-white dark:text-black group-hover:text-red-600 group-hover:scale-110 transition-all" size={40} />
                    </div>
                </section>

            </main>
        </div>
    );
}