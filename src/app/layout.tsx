import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
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
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang={'ru'} className={'dark'}>
			<body className={GeistSans.variable}>
				<Container className={'min-h-dvh mt-20'}>
					<Header />
					{children}
				</Container>
			</body>
		</html>
	);
}
