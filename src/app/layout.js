import { Navbar } from "./_components/navbar";
import { sansFont, monoFont } from "./fonts";
import "./globals.css";

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html
			lang='en'
			data-theme='dracula'>
			<body
				className={`${sansFont.variable} ${monoFont.variable} flex flex-col bg-base-200`}>
				<Navbar />
				<div className='flex mx-auto w-full md:max-w-prose flex-grow py-6'>
					{children}
				</div>
			</body>
		</html>
	);
}
