import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

export const locales = ['ua', 'ru'] as const;
export const defaultLocale = "ua";

export default getRequestConfig(async ({requestLocale}) => {
    const locale = await requestLocale;
    if (!locales.includes(locale as any)) {
        notFound();
    }
    return {
        locale,
        messages: (await import(`../public/locales/${locale}/common.json`)).default
    };
});