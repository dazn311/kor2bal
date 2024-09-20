/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        BASE_URL: process.env.BASE_URL,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'localhost',
                port: '3000',
                pathname: '/**',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
                pathname: '/**',
            },
            {
                protocol: 'http',
                hostname: '192.168.0.150',
                port: '3000',
                pathname: '/**',
            },
            {
                protocol: 'http',
                hostname: '45.91.8.214',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'dazreact.ru',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '/**',
            },
        ],
        domains: [
            'localhost:3000','localhost','45.91.8.214','192.168.0.150:3000',
            'avatars.githubusercontent.com',
            'filin.mail.ru'
        ]
    }
};


export default nextConfig;
