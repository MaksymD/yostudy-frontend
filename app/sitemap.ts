import { MetadataRoute } from 'next';

const LOCALE_TO_LANG: Record<string, string> = {
    ua: 'uk',
    en: 'en',
};

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://yostudy.at';
    const locales = ['ua', 'en'] as const;
    const defaultLocale = 'ua';

    return locales.map((locale) => ({
        url: `${baseUrl}/${locale}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: locale === defaultLocale ? 1.0 : 0.8,
        alternates: {
            languages: {
                ...Object.fromEntries(
                    locales.map((l) => [LOCALE_TO_LANG[l], `${baseUrl}/${l}`])
                ),
                'x-default': `${baseUrl}/${defaultLocale}`,
            },
        },
    }));
}