import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {locales} from '@/lib/i18n';
import "@/app/globals.css";
import {Geist, Geist_Mono} from "next/font/google";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header"; // Импортируем новый компонент Header

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
    // Получаем текущую локаль из параметров
    const {locale} = await params;

    // Проверяем, поддерживается ли данная локаль
    if (!locales.includes(locale as any)) {
        notFound();
    }

    // Загружаем сообщения для локализации
    const messages = await getMessages();

    return (
        <html lang={locale} className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
        <body className="min-h-full flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
        <NextIntlClientProvider messages={messages} locale={locale}>
            {/* Header отображается сверху на всех страницах */}
            <Header />

            {/* Основной контент страницы с отступом под Header */}
            <main className="flex-grow pt-20">
                {children}
            </main>

            {/* Navbar зафиксирован внизу */}
            <Navbar />
        </NextIntlClientProvider>
        </body>
        </html>
    );
}