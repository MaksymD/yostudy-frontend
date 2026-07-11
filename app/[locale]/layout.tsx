import {NextIntlClientProvider} from 'next-intl';
import {getMessages, getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {locales} from '@/lib/i18n';
import "@/app/globals.css";
import {Geist, Geist_Mono} from "next/font/google";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next";

export function generateStaticParams() {
    return [
        { locale: 'en' },
        { locale: 'ua' }
    ];
}

export async function generateMetadata({
                                           params,
                                       }: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'meta' });

    return {
        metadataBase: new URL('https://yostudy.at'),
        title: t('title'),
        description: t('description'),
        alternates: {
            canonical: `https://yostudy.at/${locale}`,
            languages: {
                'uk': 'https://yostudy.at/ua',
                'en': 'https://yostudy.at/en',
                'x-default': 'https://yostudy.at/ua',
            },
        },
    };
}

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const LOCALE_TO_LANG: Record<string, string> = {
    ua: 'uk',
    en: 'en',
};

export default async function LocaleLayout({
                                               children,
                                               params,
                                           }: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const {locale} = await params;

    if (!locales.includes(locale as any)) {
        notFound();
    }
    const messages = await getMessages();

    return (
        <html lang={LOCALE_TO_LANG[locale] ?? locale} className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
              style={{colorScheme: 'dark'}}>
        <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-50 transition-colors duration-300">
        <NextIntlClientProvider messages={messages} locale={locale}>
            {/* Header is displayed at the top of all pages */}
            <Header />

            {/* Main page content with padding top below the Header */}
            <main className="flex-grow pt-20">
                {children}
            </main>

            {/* Navbar is fixed at the bottom */}
            <Navbar />
        </NextIntlClientProvider>
        <Analytics />
        </body>
        </html>
    );
}