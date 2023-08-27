import { Albert_Sans, DM_Mono, DM_Sans } from "next/font/google";

// export const sansFont = Albert_Sans({
// 	subsets: ["latin"],
// 	display: "swap",
// 	variable: "--font-sans",
// });

export const sansFont = DM_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-sans",
});

export const monoFont = DM_Mono({
	subsets: ["latin"],
	weight: "500",
	variable: "--font-mono",
});
