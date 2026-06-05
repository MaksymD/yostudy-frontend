'use client';

import {useEffect, useMemo, useState} from "react";
import {useTranslations} from "next-intl";
import {motion} from "framer-motion";
import {
    HowToReg,
    AssignmentTurnedIn,
    CreditScore,
    Quiz,
    ContentPasteGo,
    EditDocument,
    ManageAccounts,
    AccessTime,
    AccountBalance,
    AddHomeWork,
    Apartment,
    ArrowRight,
    Assignment,
    Badge,
    BookmarkAdded,
    BorderColor,
    CheckCircle,
    Description,
    Explore,
    FolderShared,
    Gavel,
    HealthAndSafety,
    HelpCenter,
    HomeWork,
    Instagram as InstagramIcon,
    Rule,
    School,
    Search,
    Send,
    Shield,
    SimCard,
    SupportAgent,
    Telegram as TelegramIcon,
    Translate,
    VerifiedUser,
    WhatsApp as WhatsAppIcon
} from "@mui/icons-material";
import ChatIcon from '@mui/icons-material/Chat';
import Link from "next/link";
import Image from "next/image";

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
    const [phone, setPhone] = useState("");
    const [selectedCity, setSelectedCity] = useState("vienna");

    // Generate background floating particles on mount
    useEffect(() => {
        const generatedParticles = Array.from({length: 30}, (_, i) => ({
            id: i,
            size: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            duration: Math.random() * 20 + 25,
            delay: Math.random() * -30,
        }));
        setParticles(generatedParticles);
    }, []);

    // Smooth scroll helper for page navigation
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: "smooth", block: "start"});
        }
    };

    // Form submission handler routing to Telegram with dynamic text
    const handleTelegramSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!phone) return;
        const message = t('contact.telegram_message', {phone: phone});
        const fullUrl = `https://t.me/solomchakju?text=${encodeURIComponent(message)}`;
        window.open(fullUrl, '_blank');
        setPhone("");
    };

    // Memoized message for direct messenger contact links
    const encodedDirectMessage = useMemo(() => {
        const message = t('contact.direct_message');
        return encodeURIComponent(message);
    }, [t]);

    // Handle pricing tier selection and external routing
    const handlePlanClick = (planKey: string) => {
        const planName = t(`pricing.plans.${planKey}.title`);
        const message = t('contact.plan_message', {planName: planName});
        const fullUrl = `https://t.me/solomchakju?text=${encodeURIComponent(message)}`;
        window.open(fullUrl, '_blank');
    };

    // Phone input validation & formatting (allows only numbers and a single leading plus sign)
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let cleanInput = e.target.value.replace(/[^\d+]/g, '');
        if (cleanInput.includes('+')) {
            const hasLeadingPlus = cleanInput.startsWith('+');
            cleanInput = cleanInput.replace(/\+/g, '');
            if (hasLeadingPlus) {
                cleanInput = '+' + cleanInput;
            }
        }
        setPhone(cleanInput);
    };

    // Map of university names to asset paths (Keys must match the "name" fields in translation JSONs)
    const universityLogos: Record<string, string> = {
        "University of Vienna (1365)": "/images/universities/univie.png",
        "TU Wien (1815)": "/images/universities/tuwien.png",
        "WU Wien (1898)": "/images/universities/wu.png",
        "Medical University of Vienna (2004)": "/images/universities/meduniwien.png",
        "BOKU University (1872)": "/images/universities/boku.png",
        "MODUL University Vienna (2007)": "/images/universities/modul.png",
        "Webster Vienna Private University (1981)": "/images/universities/webster.png",
        "Sigmund Freud University (2005)": "/images/universities/sfu.png",

        "University of Graz (1585)": "/images/universities/uni-graz.png",
        "Graz University of Technology (1811)": "/images/universities/tugraz.png",
        "Medical University of Graz (2004)": "/images/universities/medunigraz.png",

        "University of Innsbruck (1669)": "/images/universities/uibk.png",
        "MCI Innsbruck (1995)": "/images/universities/mci.png",
        "Medical University of Innsbruck (2004)": "/images/universities/meduniinnsbruck.png",

        "Paris Lodron University Salzburg (1622)": "/images/universities/plus.png",
        "Mozarteum University Salzburg (1841)": "/images/universities/mozarteum.png",
        "FH Salzburg University of Applied Sciences (1995)": "/images/universities/fh-salzburg.png",

        "Johannes Kepler University Linz (1966)": "/images/universities/jku.png",
        "University of Arts Linz (1973)": "/images/universities/ufg.png",
        "FH Oberösterreich – University of Applied Sciences (1994)": "/images/universities/fh-ooe.png",

        "Alpen-Adria University Klagenfurt (1970)": "/images/universities/aau.png",
        "FH Kärnten – University of Applied Sciences (1995)": "/images/universities/fh-kaernten.png",
        "AAU School of Management (2002)": "/images/universities/aau-som.png"
    };

    const defaultLogo = "/images/universities/default-university.png";

    // Static sections configuration mapping to translation keys and icons
    const sectionsData = [
        {id: "consultation-info", key: "consultation", icon: HelpCenter, color: "from-blue-600/10"},
        {id: "documents", key: "documents", icon: Description, color: "from-purple-600/10"},
        {id: "admission", key: "admission", icon: School, color: "from-red-600/10"},
        {id: "dormitory", key: "dormitory", icon: AddHomeWork, color: "from-amber-600/10"},
        {id: "adaptation", key: "adaptation", icon: Explore, color: "from-emerald-600/10"},
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

    const universityCities = [
        "vienna",
        "graz",
        "innsbruck",
        "salzburg",
        "linz",
        "klagenfurt"
    ];

    // Safely retrieve typed translation object for the currently selected city
    const selectedUniversityData = t.raw(
        `sections.consultation.universities.${selectedCity}`
    ) as {
        city: string;
        desc: string;
        list: {
            name: string;
            fac: string;
            text: string;
        }[];
    };

    return (
        <div
            className="bg-grid relative min-h-[100dvh] w-full text-zinc-900 dark:text-zinc-50 overflow-x-hidden transition-colors duration-300 bg-zinc-50/50 dark:bg-zinc-950/50">

            {/* BACKGROUND ANIMATIONS & PARTICLES */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20">
                <motion.div animate={{x: [-20, 40, -20], y: [0, 60, 0], scale: [1, 1.15, 1]}}
                            transition={{duration: 12, repeat: Infinity, ease: "easeInOut"}}
                            className="absolute top-[5%] left-[15%] w-[80vw] md:w-[45rem] h-[45rem] bg-red-600/20 dark:bg-red-600/15 blur-[110px] md:blur-[140px] rounded-full mix-blend-screen dark:mix-blend-plus-lighter"/>
                <motion.div animate={{x: [40, -40, 40], y: [100, -20, 100], scale: [1.1, 0.9, 1.1]}}
                            transition={{duration: 16, repeat: Infinity, ease: "easeInOut"}}
                            className="absolute top-[25%] right-[5%] w-[70vw] md:w-[40rem] h-[40rem] bg-blue-600/15 dark:bg-blue-500/10 blur-[110px] md:blur-[140px] rounded-full mix-blend-screen dark:mix-blend-plus-lighter"/>

                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        initial={{y: "100vh", opacity: 0}}
                        animate={{y: "-10vh", x: ["0px", "25px", "-25px", "0px"], opacity: [0, 0.4, 0.4, 0]}}
                        transition={{
                            duration: particle.duration,
                            delay: particle.delay,
                            repeat: Infinity,
                            ease: "linear",
                            x: {duration: particle.duration / 3, repeat: Infinity, ease: "easeInOut"}
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
                <section
                    className="flex flex-col items-center text-center space-y-6 md:space-y-8 mt-10 min-h-[70vh] justify-center">
                    <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-white/60 dark:border-zinc-800/60 text-sm font-medium shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span
                                className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                        </span>
                        {t('home')}
                    </motion.div>

                    <motion.h1 initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{delay: 0.1}}
                               className="text-3xl sm:text-4xl md:text-7xl font-bold tracking-tight max-w-4xl px-2 leading-tight whitespace-pre-line">
                        {t('hero.title')}
                    </motion.h1>

                    <motion.p initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{delay: 0.2}}
                              className="text-sm sm:text-base md:text-xl text-zinc-500 max-w-2xl leading-relaxed px-4">
                        {t('hero.subtitle')}
                    </motion.p>

                    <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{delay: 0.3}}
                                className="flex flex-col sm:flex-row justify-center gap-4 pt-4 w-full sm:w-auto px-4">
                        <button onClick={() => scrollToSection('consultation')}
                                className="flex items-center justify-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-2xl font-semibold hover:scale-105 transition-all shadow-lg shadow-red-600/20 active:scale-95 cursor-pointer">
                            {t('hero.cta')} <ArrowRight className="w-5 h-5"/>
                        </button>

                        <div
                            className="flex bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md p-1 rounded-2xl border border-white/50 dark:border-zinc-800/80 shadow-sm">
                            <Link href="/ua"
                                  className="flex-1 text-center px-6 py-3 rounded-xl hover:bg-white/60 dark:hover:bg-zinc-800/60 transition-colors font-medium">UA</Link>
                            <Link href="/en"
                                  className="flex-1 text-center px-6 py-3 rounded-xl hover:bg-white/60 dark:hover:bg-zinc-800/60 transition-colors font-medium">EN</Link>
                        </div>
                    </motion.div>
                </section>

                {/* ABOUT SECTION */}
                <motion.section initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}}
                                transition={{duration: 0.5}}
                                className="mt-16 w-full max-w-5xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/50 dark:border-zinc-800/50 rounded-3xl p-6 md:p-12 shadow-2xl shadow-zinc-950/5 relative overflow-hidden">
                    <div
                        className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[60px] rounded-full pointer-events-none"/>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        <div className="lg:col-span-1">
                            <span
                                className="text-xs font-bold tracking-widest text-red-600 uppercase">{t('features.smart')}</span>
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-2">YO <span
                                className="text-red-600">Study</span></h2>
                            <div className="h-1 w-12 bg-red-600 rounded-full mt-4"/>
                        </div>
                        <div
                            className="lg:col-span-2 space-y-6 text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm sm:text-base md:text-lg">
                            <p><strong
                                className="text-zinc-950 dark:text-white font-semibold">{t('about.p1_bold')}</strong>{t('about.p1_text')}
                            </p>
                            <p>{t('about.p2_text')}</p>
                        </div>
                    </div>
                </motion.section>

                {/* SERVICES SECTION */}
                <div className="w-full max-w-5xl space-y-16 mt-24">
                    {sectionsData.map((section, index) => {
                        const IconElement = section.icon;
                        return (
                            <motion.section
                                key={section.id}
                                id={section.id}
                                initial={{opacity: 0, y: 50}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true, margin: "-100px"}}
                                transition={{duration: 0.5, delay: index * 0.05}}
                                className={`w-full bg-gradient-to-br ${section.color} to-white/20 dark:to-zinc-900/10 backdrop-blur-xl border border-white/50 dark:border-zinc-800/50 rounded-3xl p-6 sm:p-10 shadow-xl shadow-zinc-950/5 scroll-mt-24 hover:border-red-600/30 transition-all duration-300`}
                            >

                                {/* Service Header Info */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                                    <div className="p-3 bg-white/80 dark:bg-zinc-950/80 border border-white dark:border-zinc-800/80 shadow-md text-red-600 rounded-2xl flex items-center justify-center">
                                        <IconElement className="w-6 h-6"/>
                                    </div>
                                    <div>
                        <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">
                            {t('service_badge')}
                        </span>
                                        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-white mt-0.5">
                                            {t(`menu.${section.key}`)}
                                        </h2>
                                    </div>
                                </div>

                                {/* Premium Title Wrapper */}
                                <div className="p-0 flex flex-col justify-center space-y-4 z-10 mb-8 w-full max-w-none">
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white leading-tight tracking-normal whitespace-normal break-words w-full block">
                                        {t(`sections.${section.key}.subtitle`)}
                                    </h3>
                                    <div className="w-12 h-[2px] bg-red-600 rounded-full"/>
                                </div>

                                {/* SECTION CONTENT: Consultation & University Switcher */}
                                {section.key === "consultation" && selectedUniversityData && (
                                    <div className="mt-6 space-y-8 animate-fadeIn">
                                        <div className="p-5 sm:p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/20 max-w-4xl">
                                            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                                {t("sections.consultation.text")}
                                            </p>
                                        </div>

                                        {/* Regional Tabs Switcher */}
                                        <div className="flex flex-wrap gap-2 pb-2 border-b border-zinc-200/60 dark:border-zinc-800/60">
                                            {universityCities.map((city) => (
                                                <button
                                                    key={city}
                                                    onClick={() => setSelectedCity(city)}
                                                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer uppercase tracking-wider ${
                                                        selectedCity === city
                                                            ? "bg-red-600 text-white shadow-md shadow-red-600/10"
                                                            : "bg-white/50 dark:bg-zinc-900/40 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50"
                                                    }`}
                                                >
                                                    {t(`sections.consultation.universities.${city}.city`)}
                                                </button>
                                            ))}
                                        </div>

                                        <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-3xl">
                                            {selectedUniversityData.desc}
                                        </p>

                                        {/* Dynamic Universities Grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                            {selectedUniversityData.list?.map((university, index) => {
                                                const logoPath = universityLogos[university.name] || defaultLogo;
                                                return (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.25 }}
                                                        className="flex flex-col justify-between p-5 rounded-2xl border border-white/40 dark:border-zinc-800/60 bg-white/40 dark:bg-zinc-900/30 backdrop-blur-md hover:border-red-600/30 dark:hover:border-red-600/30 transition-all shadow-sm group min-h-[180px]"
                                                    >
                                                        <div>
                                                            <div className="flex items-start gap-4 mb-3">
                                                                <div className="relative w-12 h-12 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white p-1.5 flex items-center justify-center shrink-0 shadow-sm overflow-hidden group-hover:scale-105 transition-transform">
                                                                    <Image
                                                                        src={logoPath}
                                                                        alt={`${university.name} logo`}
                                                                        width={40}
                                                                        height={40}
                                                                        className="object-contain max-w-full max-h-full"
                                                                        priority={index < 4}
                                                                    />
                                                                </div>

                                                                <div className="flex-grow pt-0.5">
                                                                    <h4 className="text-base font-bold text-zinc-950 dark:text-white leading-snug">
                                                                        {university.name}
                                                                    </h4>
                                                                </div>
                                                            </div>

                                                            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                                                                {university.text}
                                                            </p>
                                                        </div>

                                                        <div className="flex justify-end pt-1">
                                                            <span className="px-3 py-1 rounded-lg bg-red-600/10 text-red-600 text-xs font-semibold tracking-wide">
                                                                {university.fac} {t("sections.consultation.faculties")}
                                                            </span>
                                                        </div>
                                                    </motion.div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}

                                {/* SECTION CONTENT: Documents Workflow */}
                                {section.key === "documents" && (
                                    <div className="mt-6 space-y-8 animate-fadeIn">
                                        <div className="relative overflow-hidden rounded-2xl border border-zinc-200/60 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/30 flex flex-col md:flex-row items-stretch min-h-[320px] h-auto">
                                            <div className="flex-1 flex flex-col justify-center gap-4 px-6 py-8 sm:px-10 md:px-12 z-10 md:max-w-[55%]">
                                                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium whitespace-pre-line">
                                                    {t("sections.documents.text")}
                                                </p>
                                            </div>
                                            <div className="relative h-[250px] md:h-auto md:absolute md:inset-y-0 md:right-0 md:w-[45%] overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-zinc-50 via-zinc-50/40 to-transparent dark:from-zinc-950 dark:via-zinc-950/10 z-10 pointer-events-none"/>
                                                <Image
                                                    src="/images/documents/documents_1.png"
                                                    alt="YO Study Documents Visual Team"
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 45vw"
                                                    className="object-cover object-center"
                                                    priority
                                                />
                                            </div>
                                        </div>

                                        {/* Features Checklist Grid */}
                                        <div className="space-y-6 pt-2">
                                            <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
                                                {t("sections.documents.features_title")}
                                            </h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {(t.raw("sections.documents.features") as { id: string; text: string }[]).map((feature, i) => {
                                                    const iconsMap: Record<string, React.ElementType> = {
                                                        "01": Search,
                                                        "02": Assignment,
                                                        "03": Rule,
                                                        "04": Translate,
                                                        "05": Gavel,
                                                        "06": AccessTime,
                                                        "07": Send
                                                    };
                                                    const FeatureIcon = iconsMap[feature.id] || Assignment;
                                                    return (
                                                        <div key={i} className="flex gap-4 p-5 rounded-2xl border border-white/40 dark:border-zinc-800/60 bg-white/50 dark:bg-zinc-900/40 backdrop-blur-md items-start hover:border-red-600/30 dark:hover:border-red-600/30 transition-all group shadow-sm">
                                                            <div className="p-3 bg-red-600/10 dark:bg-red-600/5 text-red-600 rounded-xl flex items-center justify-center shrink-0 border border-red-600/10 group-hover:scale-105 transition-transform">
                                                                <FeatureIcon className="w-6 h-6"/>
                                                            </div>
                                                            <div className="space-y-1">
                                                                <span className="text-xs font-bold text-red-600 tracking-wider block">{feature.id}</span>
                                                                <p className="text-sm sm:text-base font-medium text-zinc-800 dark:text-zinc-200 leading-snug">{feature.text}</p>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* SECTION CONTENT: Admission Steps */}
                                {section.key === "admission" && (
                                    <div className="mt-6 space-y-8 animate-fadeIn">
                                        <div className="p-5 sm:p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/20 max-w-4xl">
                                            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                                {t("sections.admission.text")}
                                            </p>
                                        </div>

                                        <div className="space-y-6 pt-2">
                                            <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
                                                {t("sections.admission.features_title")}
                                            </h4>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {(t.raw("sections.admission.features") as { id: string; text: string }[]).map((feature, i) => {
                                                    const iconsMap: Record<string, React.ElementType> = {
                                                        "01": HowToReg,
                                                        "02": AssignmentTurnedIn,
                                                        "03": ContentPasteGo,
                                                        "04": School,
                                                        "05": EditDocument,
                                                        "06": Description,
                                                        "07": Quiz,
                                                        "08": ManageAccounts,
                                                        "09": Badge,
                                                        "10": CreditScore
                                                    };
                                                    const FeatureIcon = iconsMap[feature.id] || AssignmentTurnedIn;

                                                    return (
                                                        <div
                                                            key={i}
                                                            className="flex gap-4 p-5 rounded-2xl border border-white/40 dark:border-zinc-800/60 bg-white/50 dark:bg-zinc-900/40 backdrop-blur-md items-start hover:border-red-600/30 dark:hover:border-red-600/30 transition-all group shadow-sm"
                                                        >
                                                            <div className="p-3 bg-red-600/10 dark:bg-red-600/5 text-red-600 rounded-xl flex items-center justify-center shrink-0 border border-red-600/10 group-hover:scale-105 transition-transform">
                                                                <FeatureIcon className="w-6 h-6"/>
                                                            </div>

                                                            <div className="space-y-1">
                                                                <span className="text-xs font-bold text-red-600 tracking-wider block">
                                                                    {feature.id}
                                                                </span>
                                                                <p className="text-sm sm:text-base font-medium text-zinc-800 dark:text-zinc-200 leading-snug">
                                                                    {feature.text}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* SECTION CONTENT: Dormitory Booking */}
                                {section.key === "dormitory" && (
                                    <div className="mt-6 space-y-8 animate-fadeIn">
                                        <div className="relative overflow-hidden rounded-2xl border border-zinc-200/60 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/30 flex flex-col md:flex-row items-stretch min-h-[320px] h-auto">
                                            <div className="flex-1 flex flex-col justify-center gap-4 px-6 py-8 sm:px-10 md:px-12 z-10 md:max-w-[55%]">
                                                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium whitespace-pre-line">
                                                    {t("sections.dormitory.text")}
                                                </p>
                                            </div>
                                            <div className="relative h-[250px] md:h-auto md:absolute md:inset-y-0 md:right-0 md:w-[45%] overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-zinc-50 via-zinc-50/40 to-transparent dark:from-zinc-950 dark:via-zinc-950/10 z-10 pointer-events-none"/>
                                                <Image
                                                    src="/images/dormitory/dormitory_1.png"
                                                    alt="YO Study Dormitory Premium Selection"
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 45vw"
                                                    className="object-cover object-center"
                                                    priority
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {(t.raw("sections.dormitory.features") as { id: string; text: string }[]).map((feature, i) => {
                                                const iconsMap: Record<string, React.ElementType> = {
                                                    "01": Apartment,
                                                    "02": BookmarkAdded,
                                                    "03": FolderShared,
                                                    "04": BorderColor,
                                                    "05": VerifiedUser
                                                };
                                                const FeatureIcon = iconsMap[feature.id] || Apartment;

                                                return (
                                                    <div
                                                        key={i}
                                                        className="flex gap-4 p-5 rounded-2xl border border-white/40 dark:border-zinc-800/60 bg-white/50 dark:bg-zinc-900/40 backdrop-blur-md items-start hover:border-red-600/30 dark:hover:border-red-600/30 transition-all group shadow-sm"
                                                    >
                                                        <div className="p-3 bg-red-600/10 dark:bg-red-600/5 text-red-600 rounded-xl flex items-center justify-center shrink-0 border border-red-600/10 group-hover:scale-105 transition-transform">
                                                            <FeatureIcon className="w-6 h-6"/>
                                                        </div>

                                                        <div className="space-y-1">
                                                            <span className="text-xs font-bold text-red-600 tracking-wider block">
                                                                {feature.id}
                                                            </span>
                                                            <p className="text-sm sm:text-base font-medium text-zinc-800 dark:text-zinc-200 leading-snug">
                                                                {feature.text}
                                                            </p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}

                                {/* SECTION CONTENT: Student Adaptation */}
                                {section.key === "adaptation" && (
                                    <div className="mt-6 space-y-8 animate-fadeIn">
                                        <div className="relative overflow-hidden rounded-2xl border border-zinc-200/60 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/30 flex flex-col md:flex-row items-stretch min-h-[320px] h-auto">
                                            <div className="flex-1 flex flex-col justify-center gap-4 px-6 py-8 sm:px-10 md:px-12 z-10 md:max-w-[55%]">
                                                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium whitespace-pre-line">
                                                    {t("sections.adaptation.text")}
                                                </p>
                                            </div>
                                            <div
                                                className="relative h-[250px] md:h-auto md:absolute md:inset-y-0 md:right-0 md:w-[45%] overflow-hidden flex items-end">
                                                <div
                                                    className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-zinc-50 via-zinc-50/20 to-transparent dark:from-zinc-950 dark:via-zinc-950/10 z-10 pointer-events-none"/>
                                                <Image
                                                    src="/images/adaptation/adaptation_1.png"
                                                    alt="YO Study Adaptation"
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 45vw"
                                                    className="object-cover object-center translate-x-[30px]"
                                                    priority
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {(t.raw("sections.adaptation.features") as {
                                                    id: string;
                                                    text: string
                                                }[]).map((feature, i) => {
                                                    const iconsMap: Record<string, React.ElementType> = {
                                                        "01": Badge,
                                                        "02": HomeWork,
                                                        "03": AccountBalance,
                                                        "04": HealthAndSafety,
                                                        "05": SimCard,
                                                        "06": SupportAgent
                                                    };
                                                    const FeatureIcon = iconsMap[feature.id] || SupportAgent;
                                                    return (
                                                        <div key={i} className="flex gap-4 p-5 rounded-2xl border border-white/40 dark:border-zinc-800/60 bg-white/50 dark:bg-zinc-900/40 backdrop-blur-md items-start hover:border-red-600/30 dark:hover:border-red-600/30 transition-all group shadow-sm">
                                                            <div className="p-3 bg-red-600/10 dark:bg-red-600/5 text-red-600 rounded-xl flex items-center justify-center shrink-0 border border-red-600/10 group-hover:scale-105 transition-transform">
                                                                <FeatureIcon className="w-6 h-6"/>
                                                            </div>
                                                            <div className="space-y-1">
                                                                <span className="text-xs font-bold text-red-600 tracking-wider block">{feature.id}</span>
                                                                <p className="text-sm sm:text-base font-medium text-zinc-800 dark:text-zinc-200 leading-snug">{feature.text}</p>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>

                                            {/* Security Note Footer Block */}
                                            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-red-600/5 dark:bg-red-600/10 border border-red-600/20 w-full mt-4">
                                                <Shield className="w-5 h-5 text-red-600 shrink-0 mt-0.5"/>
                                                <p className="text-xs sm:text-sm font-medium text-zinc-700 dark:text-zinc-300 leading-relaxed flex-grow">
                                                    {t("sections.adaptation.footer_text")}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </motion.section>
                        );
                    })}
                </div>

                {/* PRICING PLANS SECTION */}
                <motion.section initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}}
                                transition={{duration: 0.5}}
                                className="mt-24 w-full max-w-5xl flex flex-col items-center space-y-12">
                    <div className="text-center space-y-3">
                        <span
                            className="text-xs font-bold tracking-widest text-red-600 uppercase">{t('pricing.badge')}</span>
                        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">{t('pricing.title')}</h2>
                        <p className="text-sm sm:text-base text-zinc-500 max-w-2xl mx-auto px-4">{t('pricing.subtitle')}</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-stretch px-2 sm:px-0 pt-4">
                        {pricingPlans.map((plan) => (
                            <div key={plan.key}
                                 className={`relative flex flex-col justify-between backdrop-blur-xl border rounded-3xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1.5 ${plan.hoverStyle} ${plan.isPopular ? 'bg-white/65 dark:bg-zinc-900/65 border-red-600/50 ring-4 ring-red-600/5 lg:scale-[1.03] z-10 shadow-xl shadow-zinc-950/10' : 'bg-white/25 dark:bg-zinc-900/25 border-white/40 dark:border-zinc-800/40 shadow-xl shadow-zinc-950/5 opacity-[0.98] hover:opacity-100'}`}>
                                {plan.isPopular && <span
                                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-red-600 text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow-md shadow-red-600/10">{t('pricing.popular_badge')}</span>}

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-zinc-950 dark:text-white">{t(`pricing.plans.${plan.key}.title`)}</h3>
                                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1.5 min-h-[32px] leading-relaxed">{t(`pricing.plans.${plan.key}.desc`)}</p>
                                    </div>
                                    <div className="flex items-baseline">
                                        <span
                                            className="text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white">{plan.price}</span>
                                        <span
                                            className="text-zinc-500 dark:text-zinc-400 ml-1.5 text-xs font-medium">{t('pricing.period')}</span>
                                    </div>
                                    <div className="flex border-b border-zinc-200 dark:border-zinc-800 w-full"/>
                                    <ul className="space-y-3.5">
                                        {Array.from({length: plan.featuresCount}).map((_, i) => (
                                            <li key={i}
                                                className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-300 leading-snug">
                                                <CheckCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5"/>
                                                <span>{t(`pricing.plans.${plan.key}.f${i + 1}`)}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-8">
                                    <button
                                        onClick={() => handlePlanClick(plan.key)}
                                        className={`w-full py-3.5 px-4 rounded-xl font-semibold text-sm transition-all active:scale-95 cursor-pointer text-center ${plan.isPopular ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-600/20' : 'bg-white/60 hover:bg-white/80 dark:bg-zinc-950/40 dark:hover:bg-zinc-950/60 text-zinc-900 dark:text-white border border-white/50 dark:border-zinc-800/40 shadow-sm'}`}
                                    >
                                        {t('pricing.cta')}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* CONTACT AND CONSULTATION FORM SECTION */}
                <motion.section id="consultation" initial={{opacity: 0, y: 40}} whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}} transition={{duration: 0.5}}
                                className="mt-24 w-full max-w-5xl bg-white/35 dark:bg-zinc-900/35 backdrop-blur-xl border border-white/40 dark:border-zinc-800/40 rounded-3xl p-6 md:p-10 shadow-2xl shadow-zinc-950/5 relative overflow-hidden scroll-mt-24">
                    <div
                        className="absolute -bottom-10 -left-10 w-48 h-48 bg-red-600/10 blur-[50px] rounded-full pointer-events-none"/>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4 text-center lg:text-left">
                            <span
                                className="text-xs font-bold tracking-widest text-red-600 uppercase">{t('features.support')}</span>
                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{t('contact.title_part1')}
                                <span className="text-red-600">{t('contact.title_part2')}</span></h2>
                            <p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400 max-w-md">{t('contact.description')}</p>
                        </div>

                        <div className="space-y-6 overflow-hidden">
                            {/* Call request via Telegram action */}
                            <form onSubmit={handleTelegramSubmit} className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="tel"
                                    placeholder={t('contact.input_placeholder')}
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    required
                                    className="flex-grow px-4 py-4 rounded-xl bg-white/70 dark:bg-zinc-950 border border-white/50 dark:border-zinc-800/80 focus:outline-none focus:border-red-600 dark:focus:border-red-600 text-sm font-medium shadow-sm transition-colors duration-200"
                                />
                                <button type="submit"
                                        className="px-6 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold shadow-lg shadow-red-600/10 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer whitespace-nowrap text-sm flex items-center justify-center">
                                    {t('contact.button_submit')}
                                </button>
                            </form>

                            <div
                                className="flex items-center gap-3 text-xs text-zinc-400 uppercase tracking-wider justify-center lg:justify-start">
                                <div className="h-px bg-white/40 dark:bg-zinc-800/40 flex-grow max-w-[60px]"/>
                                <span>{t('contact.divider_text')}</span>
                                <div className="h-px bg-white/40 dark:bg-zinc-800/40 flex-grow max-w-[60px]"/>
                            </div>

                            {/* Social Messengers Direct Routing Matrix */}
                            <div
                                className="flex flex-nowrap items-center justify-center lg:justify-start gap-2 w-full overflow-x-auto scrollbar-none pb-1">
                                <a
                                    href={`https://t.me/solomchakju?text=${encodedDirectMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/50 dark:border-zinc-800/50 bg-white/60 dark:bg-zinc-950/40 hover:bg-white/80 dark:hover:bg-zinc-900 text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-colors shadow-sm cursor-pointer whitespace-nowrap"
                                >
                                    <TelegramIcon className="w-4 h-4 text-sky-400"/>
                                    Telegram
                                </a>

                                <a
                                    href={`viber://chat?number=380958216860&text=${encodedDirectMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/50 dark:border-zinc-800/50 bg-white/60 dark:bg-zinc-950/40 hover:bg-white/80 dark:hover:bg-zinc-900 text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-colors shadow-sm cursor-pointer whitespace-nowrap"
                                >
                                    <ChatIcon className="w-4 h-4 text-purple-500"/>
                                    Viber
                                </a>

                                <a
                                    href={`https://wa.me/436764579334?text=${encodedDirectMessage}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/50 dark:border-zinc-800/50 bg-white/60 dark:bg-zinc-950/40 hover:bg-white/80 dark:hover:bg-zinc-900 text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-colors shadow-sm cursor-pointer whitespace-nowrap"
                                >
                                    <WhatsAppIcon className="w-4 h-4 text-emerald-500"/>
                                    WhatsApp
                                </a>

                                <a
                                    href="https://instagram.com/yostudy.austria"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-white/50 dark:border-zinc-800/50 bg-white/60 dark:bg-zinc-950/40 hover:bg-white/80 dark:hover:bg-zinc-900 text-xs font-medium text-zinc-700 dark:text-zinc-300 transition-colors shadow-sm cursor-pointer whitespace-nowrap"
                                >
                                    <InstagramIcon style={{fill: "url(#instagram-gradient)"}} className="w-4 h-4"/>
                                    Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </main>

            {/* SVG Definitions for Complex CSS Fills */}
            <svg width="0" height="0" className="absolute pointer-events-none">
                <radialGradient id="instagram-gradient" r="150%" cx="30%" cy="107%">
                    <stop stopColor="#fdf497" offset="0%"/>
                    <stop stopColor="#fdf497" offset="5%"/>
                    <stop stopColor="#fd5949" offset="45%"/>
                    <stop stopColor="#d6249f" offset="60%"/>
                    <stop stopColor="#285AEB" offset="90%"/>
                </radialGradient>
            </svg>
        </div>
    );
}