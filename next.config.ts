import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./lib/i18n.ts');

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.0.123', 'localhost:3000'],
};

export default withNextIntl(nextConfig);