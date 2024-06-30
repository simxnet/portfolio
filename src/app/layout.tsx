import Header from "@/components/shared/header";
import { Container } from "@/styled-system/jsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "simxnet",
	description: "Developer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				<Container py={4} maxW={"3xl"}>
					{children}
				</Container>
			</body>
		</html>
	);
}
