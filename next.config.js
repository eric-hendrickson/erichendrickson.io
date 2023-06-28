/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    output: 'export',
    images: { unoptimized: true },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
