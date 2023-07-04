import "@/styles/globals.css";

import RootHeader from "./header";

export const metadata = {
	title: "ProFile",
	description: "profile",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en " className="bg-white">
			<body className="h-screen">
				<RootHeader />
				<div className="max-w-7xl mx-auto p-6">{children}</div>
			</body>
		</html>
	);
}
