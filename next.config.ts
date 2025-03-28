import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'rickandmortyapi.com',
			},
		],
	},
};

export default nextConfig;
