"use client";
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
				I&apos;m Fer, a{" "}
				<span
					className='bg-clip-text text-transparent bg-gradient-to-r from-secondary/80 to-primary/80'
					ref={el}
				/>
				<br></br> with lots of things to{" "}
				<span className='line-through italic'>rant</span> write about.
			</h2>
		</div>
	);
}
