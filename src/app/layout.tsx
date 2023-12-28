import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.sass';
import SidebarLayout from './Layouts/sidebar/layout';
import HeaderLayout from './Layouts/sidebar/Header/layout';

const lato = Lato({
	weight: ['400', '700'],
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Bloknot',
	description: '',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" type="image/svg+xml" href="./Logo.ico" sizes="any" />
			</head>
			<body
				style={{
					margin: '0',
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: 'flex-start',
					height: '100vh',
					width: '100%',
					background: '#FAF9F9',
				}}
				className={lato.className}
			>
				<SidebarLayout />
				<div>
					<HeaderLayout />
					{children}
				</div>
			</body>
		</html>
	);
}
