"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import Typed from "typed.js";

export default function Home() {
	const el = React.useRef(null);
	useEffect(() => {
		const typed = new Typed(el.current, {
			strings: ["frontend dev", "cat person", "샤월", "human being"],
			typeSpeed: 90,
			backSpeed: 90,
			loop: true,
			cursorChar: "■",
		});

		return () => {
			typed.destroy();
		};
	}, []);

	return (
		<div
			id='home'
			className='max-w-2xl mt-48 font-sans'>
			<h1 className='text-4xl font-extrabold md:text-4xl'>Hey there.</h1>
			<h2 className='text-3xl font-bold'>
				I&apos;m Fer Luna, a{" "}
				<span
					className='bg-clip-text text-transparent bg-gradient-to-r from-secondary/80 to-primary/80'
					ref={el}
				/>
				<br></br> with lots of things to{" "}
				<span className='line-through italic'>rant</span> write about.
			</h2>
			<div className='divider'></div>
			<div className='flex justify-end'>
				<a href='https://linkedin.com/in/fernandalu'>
					<button className='btn btn-square bg-base-200'>
						<svg
							class='h-6 w-6 text-primary'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'>
							<path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
							<rect
								x='2'
								y='9'
								width='4'
								height='12'
							/>
							<circle
								cx='4'
								cy='4'
								r='2'
							/>
						</svg>
					</button>
				</a>

				<a href='https://github.com/ferlu'>
					<button className='btn btn-square bg-base-200'>
						<svg
							class='h-6 w-6 text-primary'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							strokeWidth='2'
							stroke='currentColor'
							fill='none'
							strokeLinecap='round'
							strokeLinejoin='round'>
							<path
								stroke='none'
								d='M0 0h24v24H0z'
							/>
							<path d='M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21' />
						</svg>
					</button>
				</a>
			</div>
		</div>
	);
}
