import { ROUTES } from "@/app/_lib/constants";
import Link from "next/link";

export const Navbar = () => {
	return (
		<div className='navbar bg-base-100 font-mono justify-between flex'>
			<a
				className='decoration-1 normal-case px-2 cursor-pointer hover:text-primary transition-all'
				href='/'>
				🌊 fernanda.codes
			</a>
			<div>
				{ROUTES.map((route) => (
					<Link
						className='btn btn-sm mx-2 no-underline transition-all'
						href={route.href}
						key={route.label}>
						{route.label}
					</Link>
				))}
			</div>
		</div>
	);
};
