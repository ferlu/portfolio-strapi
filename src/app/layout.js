import { Navbar } from "./_components/navbar";

import { sansFont, monoFont } from "./fonts";
import "./globals.css";

export const metadata = {
	title: "Fernanda Luna",
	description: "fernanda.codes",
};

export default function RootLayout({ children }) {
	return (
		<html
			lang='en'
			data-theme=''>
			<body
				className={`${sansFont.variable} ${monoFont.variable} flex flex-col bg-base-200`}>
				<Navbar />
				<div className='flex mx-auto w-full max-w-2xl p-10 md:px-2 flex-grow'>
					{children}
				</div>
			</body>
		</html>
	);
}
