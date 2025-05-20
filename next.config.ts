import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/githubt',
                destination: 'https://github.com/Pyramond',
                permanent: false
            },
        ]
    },
};

export default nextConfig;
