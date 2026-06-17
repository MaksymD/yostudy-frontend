import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://yostudy.at';
    const locales = ['en', 'ua'];
    const routes = ['', 'components'];

    const sitemapEntries: MetadataRoute.Sitemap = [];

    routes.forEach((route) => {
        const path = route ? `/${route}` : '';

        locales.forEach((locale) => {
            sitemapEntries.push({
                url: `${baseUrl}/${locale}${path}`,
                lastModified: new Date(),
                changeFrequency: 'daily',
                priority: route === '' ? 1.0 : 0.8,
            });
        });
    });

    return sitemapEntries;
}