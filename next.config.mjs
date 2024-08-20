/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'localhost:3000',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'http',
                hostname: 'localhost:3000',
                port: '',
                pathname: '/**',
            },
        ],
        domains: ['localhost:3000','localhost']
    }
};


export default nextConfig;
