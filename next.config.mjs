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
            {
                protocol: 'http',
                hostname: '45.91.8.214',
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
            'localhost:3000','localhost','45.91.8.214',
            'avatars.githubusercontent.com',
            'filin.mail.ru'
        ]
    }
};


export default nextConfig;
