import Link from "next/link";

export const MenuDropdown = ({ ROUTES }) => {
	return (
		<div className='dropdown dropdown-end md:hidden'>
			<label
				tabIndex={0}
				className='btn btn-ghost btn-circle'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-5 w-5'
					fill='none'
					viewBox='0 0 24 24'
					stroke='currentColor'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M4 6h16M4 12h16M4 18h7'
					/>
				</svg>
			</label>
			<ul
				tabIndex={0}
				className='menu menu-sm dropdown-content z-[1] bg-base-100 rounded-box w-52'>
				{ROUTES.map((route) => (
					<li key={route.label}>
						<Link
							className='mx-2 font-light'
							href={route.href}
							key={route.label}>
							{route.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
