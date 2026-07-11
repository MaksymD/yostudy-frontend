import { MetadataRoute } from 'next';

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
                ua: `${baseUrl}/ua`,
                en: `${baseUrl}/en`,
                'x-default': `${baseUrl}/${defaultLocale}`,
            },
        },
    }));
}