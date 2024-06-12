import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";
import Providers from "@/components/providers";
import { Container } from "@/styled-system/jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Simxnet · Software developer",
	description: "Simxnet's portfolio using Next.js and Panda CSS!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>
					<Container>{children}</Container>
				</Providers>
			</body>
		</html>
	);
}
