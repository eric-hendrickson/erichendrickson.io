/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                // matching all API routes
                source: '/api/:path*',
                headers: [
                    { key: 'Access-Control-Allow-Credentials', value: 'true' },
                    { key: 'Access-Control-Allow-Origin', value: '*' }, // replace this your actual origin
                    { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT' },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
                    },
                ],
            },
        ];
    },
    output: 'export',
    images: { unoptimized: true },
    reactStrictMode: true,
    webpack(config, { nextRuntime }) {
        // as of Next.js latest versions, the nextRuntime is preferred over `isServer`, because of edge-runtime
        if (typeof nextRuntime === 'undefined') {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
            };
        }
        return config;
    },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
