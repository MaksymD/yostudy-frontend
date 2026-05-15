'use client';

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, HelpCenter, Description, School, AddHomeWork, Explore, GppGood, EmojiEvents, CheckCircle } from "@mui/icons-material";
import {
    Telegram as TelegramIcon,
    WhatsApp as WhatsAppIcon,
    Instagram as InstagramIcon
} from "@mui/icons-material";
import ChatIcon from '@mui/icons-material/Chat';
import Link from "next/link";

export default function Home() {
    const t = useTranslations();

    // Smooth scroll handler
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    // Data structure for the main feature sections
    const sectionsData = [
        { id: "consultation-info", key: "consultation", icon: HelpCenter, color: "from-blue-600/5" },
        { id: "documents", key: "documents", icon: Description, color: "from-purple-600/5" },
        { id: "admission", key: "admission", icon: School, color: "from-red-600/5" },
        { id: "dormitory", key: "dormitory", icon: AddHomeWork, color: "from-amber-600/5" },
        { id: "adaptation", key: "adaptation", icon: Explore, color: "from-emerald-600/5" },
    ];

    return (
        <div className="bg-grid relative min-h-[100dvh] w-full text-zinc-900 dark:text-zinc-50 overflow-x-hidden transition-colors duration-300">

            {/* Ambient background glow effect */}
            <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-[160%] md:w-full max-w-5xl h-[550px] bg-red-600/25 dark:bg-red-600/20 blur-[65px] md:blur-[100px] rounded-full pointer-events-none -z-10 mix-blend-screen dark:mix-blend-plus-lighter opacity-90" />

            <main className="relative z-10 container mx-auto px-4 sm:px-6 pt-10 pb-32 flex flex-col items-center">

                {/* HERO SECTION */}
                <section className="flex flex-col items-center text-center space-y-6 md:space-y-8 mt-10 min-h-[70vh] justify-center">
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
                        className="text-3xl sm:text-4xl md:text-7xl font-bold tracking-tight max-w-4xl px-2 leading-tight"
                    >
                        {t('hero.title')}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-sm sm:text-base md:text-xl text-zinc-500 max-w-2xl leading-relaxed px-4"
                    >
                        {t('hero.subtitle')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row justify-center gap-4 pt-4 w-full sm:w-auto px-4"
                    >
                        <button
                            onClick={() => scrollToSection('consultation')}
                            className="flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-semibold hover:scale-105 transition-all shadow-lg shadow-red-600/20 active:scale-95 cursor-pointer"
                        >
                            {t('hero.cta')} <ArrowRight className="w-5 h-5" />
                        </button>

                        <div className="flex bg-zinc-100 dark:bg-zinc-900 p-1 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                            <Link href="/ua" className="flex-1 text-center px-6 py-3 rounded-xl hover:bg-white dark:hover:bg-zinc-800 transition-colors font-medium">UA</Link>
                            <Link href="/ru" className="flex-1 text-center px-6 py-3 rounded-xl hover:bg-white dark:hover:bg-zinc-800 transition-colors font-medium">RU</Link>
                        </div>
                    </motion.div>
                </section>

                {/* ABOUT SECTION */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-16 w-full max-w-5xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 md:p-12 shadow-xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[60px] rounded-full pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        <div className="lg:col-span-1">
                            <span className="text-xs font-bold tracking-widest text-red-600 uppercase">{t('features.smart')}</span>
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-2">
                                YO <span className="text-red-600">Study</span>
                            </h2>
                            <div className="h-1 w-12 bg-red-600 rounded-full mt-4" />
                        </div>

                        <div className="lg:col-span-2 space-y-6 text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm sm:text-base md:text-lg">
                            <p>
                                <strong className="text-zinc-950 dark:text-white font-semibold">{t('about.p1_bold')}</strong>
                                {t('about.p1_text')}
                            </p>
                            <p>{t('about.p2_text')}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-zinc-200/60 dark:border-zinc-800/60">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-red-50 dark:bg-red-950/30 text-red-600 rounded-xl"><GppGood className="w-5 h-5" /></div>
                            <span className="text-sm font-medium">{t('about.feature_partnership')}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-red-50 dark:bg-red-950/30 text-red-600 rounded-xl"><EmojiEvents className="w-5 h-5" /></div>
                            <span className="text-sm font-medium">{t('about.feature_experience')}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-red-50 dark:bg-red-950/30 text-red-600 rounded-xl"><CheckCircle className="w-5 h-5" /></div>
                            <span className="text-sm font-medium">{t('about.feature_result')}</span>
                        </div>
                    </div>
                </motion.section>

                {/* DYNAMIC LIST OF SERVICES */}
                <div className="w-full max-w-5xl space-y-16 mt-24">
                    {sectionsData.map((section, index) => {
                        const IconElement = section.icon;
                        return (
                            <motion.section
                                key={section.id}
                                id={section.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className={`w-full bg-gradient-to-br ${section.color} to-transparent backdrop-blur-sm border border-zinc-200 dark:border-zinc-800/80 rounded-3xl p-6 sm:p-10 shadow-lg scroll-mt-24 hover:border-red-600/20 transition-all`}
                            >
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                                    <div className="p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm text-red-600 rounded-2xl flex items-center justify-center">
                                        <IconElement className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">YO Study Service</span>
                                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-white mt-0.5">
                                            {t(`menu.${section.key}`)}
                                        </h2>
                                    </div>
                                </div>
                                <h3 className="text-base sm:text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-3 italic">
                                    {t(`sections.${section.key}.subtitle`)}
                                </h3>
                                <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">
                                    {t(`sections.${section.key}.text`)}
                                </p>
                            </motion.section>
                        );
                    })}
                </div>

                {/* CONTACT AND CONSULTATION FORM SECTION */}
                <motion.section
                    id="consultation"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-24 w-full max-w-5xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 md:p-10 shadow-xl relative overflow-hidden scroll-mt-24"
                >
                    <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-red-600/10 blur-[50px] rounded-full pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                        {/* Text descriptions column */}
                        <div className="space-y-4 text-center lg:text-left">
                            <span className="text-xs font-bold tracking-widest text-red-600 uppercase">
                                {t('features.support')}
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                                {t('contact.title_part1')} <span className="text-red-600">{t('contact.title_part2')}</span>
                            </h2>
                            <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 max-w-md">
                                {t('contact.description')}
                            </p>
                        </div>

                        {/* Submission form and messengers column */}
                        <div className="space-y-6 overflow-hidden">
                            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="tel"
                                    placeholder={t('contact.input_placeholder')}
                                    required
                                    className="flex-grow px-4 py-4 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-red-600 dark:focus:border-red-600 text-sm font-medium shadow-sm transition-colors duration-200"
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold shadow-lg shadow-red-600/10 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer whitespace-nowrap text-sm flex items-center justify-center"
                                >
                                    {t('contact.button_submit')}
                                </button>
                            </form>

                            {/* Section divider with text */}
                            <div className="flex items-center gap-3 text-xs text-zinc-400 uppercase tracking-wider justify-center lg:justify-start">
                                <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-grow max-w-[60px]" />
                                <span>{t('contact.divider_text')}</span>
                                <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-grow max-w-[60px]" />
                            </div>

                            {/* Social communication and links channel */}
                            <div className="flex flex-nowrap items-center justify-center lg:justify-start gap-2 w-full overflow-x-auto scrollbar-none pb-1">
                                <a
                                    href="https://t.me/your_username"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-colors shadow-sm cursor-pointer whitespace-nowrap"
                                >
                                    <TelegramIcon className="w-4 h-4 text-sky-400" />
                                    Telegram
                                </a>

                                <a
                                    href="viber://chat?number=%2B380000000000"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-colors shadow-sm cursor-pointer whitespace-nowrap"
                                >
                                    <ChatIcon className="w-4 h-4 text-purple-500" />
                                    Viber
                                </a>

                                <a
                                    href="https://wa.me/380000000000"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-colors shadow-sm cursor-pointer whitespace-nowrap"
                                >
                                    <WhatsAppIcon className="w-4 h-4 text-emerald-500" />
                                    WhatsApp
                                </a>

                                <a
                                    href="https://instagram.com/yostudy.austria"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/50 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-colors shadow-sm cursor-pointer whitespace-nowrap"
                                >
                                    <InstagramIcon style={{ fill: "url(#instagram-gradient)" }} className="w-4 h-4" />
                                    Instagram
                                </a>
                            </div>
                        </div>

                    </div>
                </motion.section>

            </main>

            {/* Instagram custom color profile element */}
            <svg width="0" height="0" className="absolute pointer-events-none">
                <radialGradient id="instagram-gradient" r="150%" cx="30%" cy="107%">
                    <stop stopColor="#fdf497" offset="0%" />
                    <stop stopColor="#fdf497" offset="5%" />
                    <stop stopColor="#fd5949" offset="45%" />
                    <stop stopColor="#d6249f" offset="60%" />
                    <stop stopColor="#285AEB" offset="90%" />
                </radialGradient>
            </svg>

        </div>
    );
}