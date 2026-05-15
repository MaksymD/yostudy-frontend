'use client';

import { useState, useEffect } from "react";
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

interface Particle {
    id: number;
    size: number;
    left: string;
    duration: number;
    delay: number;
}

export default function Home() {
    const t = useTranslations();
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const generatedParticles = Array.from({ length: 30 }, (_, i) => ({
            id: i,
            size: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            duration: Math.random() * 20 + 25,
            delay: Math.random() * -30,
        }));
        setParticles(generatedParticles);
    }, []);

    // Smooth scroll handler
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    // Main structural section data
    const sectionsData = [
        { id: "consultation-info", key: "consultation", icon: HelpCenter, color: "from-blue-600/10" },
        { id: "documents", key: "documents", icon: Description, color: "from-purple-600/10" },
        { id: "admission", key: "admission", icon: School, color: "from-red-600/10" },
        { id: "dormitory", key: "dormitory", icon: AddHomeWork, color: "from-amber-600/10" },
        { id: "adaptation", key: "adaptation", icon: Explore, color: "from-emerald-600/10" },
    ];

    const pricingPlans = [
        {
            key: "basic",
            price: "€1350",
            featuresCount: 4,
            isPopular: false,
            hoverStyle: "hover:border-blue-500/40 dark:hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10"
        },
        {
            key: "optimal",
            price: "€2200",
            featuresCount: 5,
            isPopular: true,
            hoverStyle: "border-red-600/50 dark:border-red-600/40 shadow-xl shadow-red-600/10 hover:border-red-600/70 hover:shadow-2xl hover:shadow-red-600/20"
        },
        {
            key: "premium",
            price: "€3000",
            featuresCount: 5,
            isPopular: false,
            hoverStyle: "hover:border-amber-500/40 dark:hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/10"
        }
    ];

    return (
        <div className="bg-grid relative min-h-[100dvh] w-full text-zinc-900 dark:text-zinc-50 overflow-x-hidden transition-colors duration-300 bg-zinc-50/50 dark:bg-zinc-950/50">

            {/* ADVANCED GLASSMORPHISM BACKGROUND SPHERES & PARTICLES */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20">
                <motion.div
                    animate={{
                        x: [-20, 40, -20],
                        y: [0, 60, 0],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-[5%] left-[15%] w-[80vw] md:w-[45rem] h-[45rem] bg-red-600/20 dark:bg-red-600/15 blur-[110px] md:blur-[140px] rounded-full mix-blend-screen dark:mix-blend-plus-lighter"
                />
                <motion.div
                    animate={{
                        x: [40, -40, 40],
                        y: [100, -20, 100],
                        scale: [1.1, 0.9, 1.1],
                    }}
                    transition={{
                        duration: 16,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute top-[25%] right-[5%] w-[70vw] md:w-[40rem] h-[40rem] bg-blue-600/15 dark:bg-blue-500/10 blur-[110px] md:blur-[140px] rounded-full mix-blend-screen dark:mix-blend-plus-lighter"
                />
                <motion.div
                    animate={{
                        scale: [0.95, 1.1, 0.95],
                        opacity: [0.6, 0.9, 0.6]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-[20%] left-[10%] w-[75vw] md:w-[50rem] h-[50rem] bg-amber-500/10 dark:bg-amber-600/5 blur-[120px] md:blur-[150px] rounded-full mix-blend-screen dark:mix-blend-plus-lighter"
                />

                {/* Breathing Interactive Particles Layout */}
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        initial={{ y: "100vh", opacity: 0 }}
                        animate={{
                            y: "-10vh",
                            x: ["0px", "25px", "-25px", "0px"],
                            opacity: [0, 0.4, 0.4, 0]
                        }}
                        transition={{
                            duration: particle.duration,
                            delay: particle.delay,
                            repeat: Infinity,
                            ease: "linear",
                            x: {
                                duration: particle.duration / 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                        style={{
                            position: 'absolute',
                            left: particle.left,
                            width: particle.size,
                            height: particle.size,
                        }}
                        className="rounded-full bg-red-500/40 dark:bg-zinc-300/30 blur-[0.5px]"
                    />
                ))}
            </div>

            <main className="relative z-10 container mx-auto px-4 sm:px-6 pt-10 pb-32 flex flex-col items-center">

                {/* HERO SECTION */}
                <section className="flex flex-col items-center text-center space-y-6 md:space-y-8 mt-10 min-h-[70vh] justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-white/60 dark:border-zinc-800/60 text-sm font-medium shadow-sm"
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
                        className="text-3xl sm:text-4xl md:text-7xl font-bold tracking-tight max-w-4xl px-2 leading-tight whitespace-pre-line"
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

                        <div className="flex bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md p-1 rounded-2xl border border-white/50 dark:border-zinc-800/80 shadow-sm">
                            <Link href="/ua" className="flex-1 text-center px-6 py-3 rounded-xl hover:bg-white/60 dark:hover:bg-zinc-800/60 transition-colors font-medium">UA</Link>
                            <Link href="/ru" className="flex-1 text-center px-6 py-3 rounded-xl hover:bg-white/60 dark:hover:bg-zinc-800/60 transition-colors font-medium">RU</Link>
                        </div>
                    </motion.div>
                </section>

                {/* ABOUT SECTION */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-16 w-full max-w-5xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/50 dark:border-zinc-800/50 rounded-3xl p-6 md:p-12 shadow-2xl shadow-zinc-950/5 relative overflow-hidden"
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

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/40 dark:border-zinc-800/40">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-white/60 dark:bg-zinc-950/40 text-red-600 rounded-xl border border-white/50 dark:border-zinc-800/40 shadow-sm"><GppGood className="w-5 h-5" /></div>
                            <span className="text-sm font-medium">{t('about.feature_partnership')}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-white/60 dark:bg-zinc-950/40 text-red-600 rounded-xl border border-white/50 dark:border-zinc-800/40 shadow-sm"><EmojiEvents className="w-5 h-5" /></div>
                            <span className="text-sm font-medium">{t('about.feature_experience')}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-white/60 dark:bg-zinc-950/40 text-red-600 rounded-xl border border-white/50 dark:border-zinc-800/40 shadow-sm"><CheckCircle className="w-5 h-5" /></div>
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
                                className={`w-full bg-gradient-to-br ${section.color} to-white/20 dark:to-zinc-900/10 backdrop-blur-xl border border-white/50 dark:border-zinc-800/50 rounded-3xl p-6 sm:p-10 shadow-xl shadow-zinc-950/5 scroll-mt-24 hover:border-red-600/30 transition-all duration-300`}
                            >
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                                    <div className="p-3 bg-white/80 dark:bg-zinc-950/80 border border-white dark:border-zinc-800/80 shadow-md text-red-600 rounded-2xl flex items-center justify-center">
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

                {/* PRICING PLANS SECTION */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-24 w-full max-w-5xl flex flex-col items-center space-y-12"
                >
                    <div className="text-center space-y-3">
                        <span className="text-xs font-bold tracking-widest text-red-600 uppercase">
                            {t('pricing.badge')}
                        </span>
                        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
                            {t('pricing.title')}
                        </h2>
                        <p className="text-sm sm:text-base text-zinc-500 max-w-2xl mx-auto px-4">
                            {t('pricing.subtitle')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-stretch px-2 sm:px-0 pt-4">
                        {pricingPlans.map((plan) => (
                            <div
                                key={plan.key}
                                className={`relative flex flex-col justify-between backdrop-blur-xl border rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1.5 ${plan.hoverStyle} ${
                                    plan.isPopular
                                        ? 'bg-white/65 dark:bg-zinc-900/65 border-red-600/50 ring-4 ring-red-600/5 lg:scale-[1.03] z-10 shadow-xl shadow-zinc-950/10'
                                        : 'bg-white/25 dark:bg-zinc-900/25 border-white/40 dark:border-zinc-800/40 shadow-xl shadow-zinc-950/5 opacity-[0.98] hover:opacity-100'
                                }`}
                            >
                                {plan.isPopular && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-red-600 text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow-md shadow-red-600/10">
                                        {t('pricing.popular_badge')}
                                    </span>
                                )}

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-zinc-950 dark:text-white">
                                            {t(`pricing.plans.${plan.key}.title`)}
                                        </h3>
                                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 min-h-[32px] leading-relaxed">
                                            {t(`pricing.plans.${plan.key}.desc`)}
                                        </p>
                                    </div>

                                    <div className="flex items-baseline">
                                        <span className="text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
                                            {plan.price}
                                        </span>
                                        <span className="text-zinc-500 dark:text-zinc-400 ml-1.5 text-xs font-medium">
                                            {t('pricing.period')}
                                        </span>
                                    </div>

                                    <div className="flex border-b border-zinc-200 dark:border-zinc-800 w-full" />

                                    <ul className="space-y-3.5">
                                        {Array.from({ length: plan.featuresCount }).map((_, i) => (
                                            <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-300 leading-snug">
                                                <CheckCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                                <span>
                                                    {t(`pricing.plans.${plan.key}.f${i + 1}`)}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-8">
                                    <button
                                        onClick={() => scrollToSection('consultation')}
                                        className={`w-full py-3.5 px-4 rounded-xl font-semibold text-sm transition-all active:scale-95 cursor-pointer text-center ${
                                            plan.isPopular
                                                ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/20'
                                                : 'bg-white/60 hover:bg-white/80 dark:bg-zinc-950/40 dark:hover:bg-zinc-950/60 text-zinc-900 dark:text-white border border-white/50 dark:border-zinc-800/40 shadow-sm'
                                        }`}
                                    >
                                        {t('pricing.cta')}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* CONTACT AND CONSULTATION FORM SECTION */}
                <motion.section
                    id="consultation"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mt-24 w-full max-w-5xl bg-white/35 dark:bg-zinc-900/35 backdrop-blur-xl border border-white/40 dark:border-zinc-800/40 rounded-3xl p-6 md:p-10 shadow-2xl shadow-zinc-950/5 relative overflow-hidden scroll-mt-24"
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
                                    className="flex-grow px-4 py-4 rounded-xl bg-white/70 dark:bg-zinc-950 border border-white/50 dark:border-zinc-800/80 focus:outline-none focus:border-red-600 dark:focus:border-red-600 text-sm font-medium shadow-sm transition-colors duration-200"
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
                                <div className="h-px bg-white/40 dark:bg-zinc-800/40 flex-grow max-w-[60px]" />
                                <span>{t('contact.divider_text')}</span>
                                <div className="h-px bg-white/40 dark:bg-zinc-800/40 flex-grow max-w-[60px]" />
                            </div>

                            {/* Social communication and links channel */}
                            <div className="flex flex-nowrap items-center justify-center lg:justify-start gap-2 w-full overflow-x-auto scrollbar-none pb-1">
                                <a
                                    href="https://t.me/your_username"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/50 dark:border-zinc-800/50 bg-white/60 dark:bg-zinc-950/40 hover:bg-white/80 dark:hover:bg-zinc-900 text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-colors shadow-sm cursor-pointer whitespace-nowrap"
                                >
                                    <TelegramIcon className="w-4 h-4 text-sky-400" />
                                    Telegram
                                </a>

                                <a
                                    href="viber://chat?number=%2B380000000000"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/50 dark:border-zinc-800/50 bg-white/60 dark:bg-zinc-950/40 hover:bg-white/80 dark:hover:bg-zinc-900 text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-colors shadow-sm cursor-pointer whitespace-nowrap"
                                >
                                    <ChatIcon className="w-4 h-4 text-purple-500" />
                                    Viber
                                </a>

                                <a
                                    href="https://wa.me/380000000000"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/50 dark:border-zinc-800/50 bg-white/60 dark:bg-zinc-950/40 hover:bg-white/80 dark:hover:bg-zinc-900 text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-colors shadow-sm cursor-pointer whitespace-nowrap"
                                >
                                    <WhatsAppIcon className="w-4 h-4 text-emerald-500" />
                                    WhatsApp
                                </a>

                                <a
                                    href="https://instagram.com/yostudy.austria"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/50 dark:border-zinc-800/50 bg-white/60 dark:bg-zinc-950/40 hover:bg-white/80 dark:hover:bg-zinc-900 text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-colors shadow-sm cursor-pointer whitespace-nowrap"
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