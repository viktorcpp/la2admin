/** @type {import('next').NextConfig} */

const nextConfig = {
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000/api' // development api
            : 'http://localhost:3000/api' // production api
    },
    reactStrictMode: false,
};

export default nextConfig;
