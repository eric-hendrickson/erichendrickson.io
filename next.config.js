const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    reactStrictMode: true,
    trailingSlash: true,
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

module.exports = nextConfig;
