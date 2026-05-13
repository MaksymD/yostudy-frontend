import createMiddleware from 'next-intl/middleware';
import {defaultLocale, locales} from './lib/i18n';

export default createMiddleware({
    locales,
    defaultLocale,
    localePrefix: 'always'
});

export const config = {
    matcher: [
        '/',
        '/(ru|ua)/:path*',
        '/((?!api|_next|_vercel|.*\\..*).*)'
    ]
};