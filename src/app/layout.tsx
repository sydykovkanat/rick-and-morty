import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { ReactNode } from 'react';

import { Container, Header } from '@/components/shared';

import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/seo.constants';

import './globals.css';

export const metadata: Metadata = {
	title: {
		absolute: SITE_NAME,
		template: `%s • ${SITE_NAME}`,
	},
	description: SITE_DESCRIPTION,
	openGraph: {
		title: 'Rick & Morty: Кто Ты Сегодня?',
		description:
			'Исследуйте вселенную Рика и Морти! Найдите персонажей по статусу и гендеру.',
		url: 'https://your-domain.com',
		siteName: 'Rick & Morty Finder',
		images: [
			{
				url: 'https://cdn4.cdn-telegram.org/file/ClADK7J7RYR68ogPHICXppHv25mYKbfdUlddV7iJpReSAWNdLuIdR0fSzFhVjwl2Nzi_3jRn_KMqBV4k6Np4xgwD6i7Covz9TVuChJms1A3GoknabEECCgx8VfGW1mg6cR05WSNOMe3M03otwoGr2ir0NmiEnOuhtHaZ6_WUCsSV1sw8V36WkaU_8tKWGQXH6MSzzm3-YZ5NwEsyV2CmElSzH9WkYk5FrVmb7J1J0DFE3b_wl-U1yJdWT59OQrtBQfn1ic0TAgcly3A9mrdJGa4VUAzrvQVP5Hv_RrODwybW7veiGi91g3zVBYK1DX1RtEOatOskfZv0iNxDeHQ2lw.jpg',
				width: 630,
				height: 630,
				alt: 'Rick and Morty characters',
			},
		],
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Rick & Morty: Кто Ты Сегодня?',
		description:
			'Исследуйте вселенную Рика и Морти! Найдите персонажей по статусу и гендеру.',
		images: [
			'https://cdn4.cdn-telegram.org/file/ClADK7J7RYR68ogPHICXppHv25mYKbfdUlddV7iJpReSAWNdLuIdR0fSzFhVjwl2Nzi_3jRn_KMqBV4k6Np4xgwD6i7Covz9TVuChJms1A3GoknabEECCgx8VfGW1mg6cR05WSNOMe3M03otwoGr2ir0NmiEnOuhtHaZ6_WUCsSV1sw8V36WkaU_8tKWGQXH6MSzzm3-YZ5NwEsyV2CmElSzH9WkYk5FrVmb7J1J0DFE3b_wl-U1yJdWT59OQrtBQfn1ic0TAgcly3A9mrdJGa4VUAzrvQVP5Hv_RrODwybW7veiGi91g3zVBYK1DX1RtEOatOskfZv0iNxDeHQ2lw.jpg',
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang={'ru'} className={'dark'}>
			<body className={GeistSans.variable}>
				<NextTopLoader color={'#FFF'} height={1.5} />
				<Container className={'min-h-dvh mt-20'}>
					<Header />
					{children}
				</Container>
			</body>
		</html>
	);
}
