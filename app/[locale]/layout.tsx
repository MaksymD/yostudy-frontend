import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {locales} from '@/lib/i18n';
import "@/app/globals.css";
import {Geist, Geist_Mono} from "next/font/google";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

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
        <html lang={locale} className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
        <body className="min-h-full flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
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
        </body>
        </html>
    );
}