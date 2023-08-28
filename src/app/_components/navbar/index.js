import Link from "next/link";
import { MenuDropdown } from "../menu-dropdown";
import { ThemeSwap } from "../theme-swap";
import { ROUTES } from "@/app/_lib/constants";

export const Navbar = () => {
	return (
		<div className='navbar bg-base-100 font-mono justify-between flex'>
			<a
				className='decoration-1 normal-case px-2 cursor-pointer hover:text-primary transition-all'
				href='/'>
				🌊 fernanda.codes
			</a>
			<div>
				<div className='hidden md:flex'>
					{ROUTES.map((route) => (
						<Link
							className='btn btn-sm mx-2 transition-all font-light'
							href={route.href}
							key={route.label}>
							{route.label}
						</Link>
					))}
				</div>
				<MenuDropdown ROUTES={ROUTES} />
				<ThemeSwap />
			</div>
		</div>
	);
};
