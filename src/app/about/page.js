/* eslint-disable react/no-unescaped-entities */
const About = () => {
	return (
		<div
			id='about'
			className='mx-auto w-full'>
			<h1 className='decoration-primary underline-offset-4 decoration-2 underline mb-4'>
				About
			</h1>
			<section id='about-content'>
				<div>
					<p className=''>
						Hi there, I'm Fer, a frontend developer from the beautiful city of
						Guadalajara, Mexico.
					</p>
					<p>
						I am passionate about frontend technologies, such as{" "}
						<span className='text-primary'>
							React, Next.JS, JS and TypeScript.{" "}
						</span>
						I am also interested in mobile development and DevOps (although I
						have 0 experience).
					</p>
					<br />
					<p>
						I like frontend because, for me, it's pure fun, and creating a good
						UI is ✨😫🤌 *chef's kiss*{" "}
						<span className='text-primary'>SO satisfying.</span> My professional
						goal is become a team lead, and eventually a good manager, or even a
						frontend architect one day. I really like this stuff and honestly I
						see myself coding in 10 years.
					</p>
					<br />
					<p>
						I love hanging out with my partner/friends/family, reading, drawing,
						mechanical keebs, scrolling through pinterest, learning new
						languages, cats! (I have 4 and I love them!). <br /> Recently I've
						been making small changes towards a more conscious and minimal
						lifestyle, which is something I like as well. Reducing
						overconsumption and overstimulation is such a great thing. Phew,
						long list <small>(and I'm holding myself back)</small>
					</p>
					<br />
					<p>
						What else? hmmmm...I've wanted to create my blog for so long! I'm
						very happy with it. It took me like a whole weekend. Lots of hard
						work, and silly bugs 🪲.
					</p>
					<br />
					<ul>
						Finally, two important things:
						<li className='list-disc'>
							This is *obviously* a personal blog, and even though it's aimed at
							work-related issues, there will be personal and subjective
							content! Don't be weird about it.
						</li>
						<li className='list-disc'>
							I will use Spanish/English for my blog posts at random! I'll also
							try to slip in some French and (super basic, don't expect much)
							Japanese posts once in a while.
						</li>
					</ul>
					<br />
					<p className=' text-lg text-primary font-bold'>
						{" "}
						Anyway, that's all! have a great time
					</p>
					<br />
					<code className='text-sm text-accent'>
						Stack: Next.JS, React, TailwindCSS, Strapi, Apollo, GraphQL.
					</code>
				</div>
			</section>
		</div>
	);
};

export default About;
