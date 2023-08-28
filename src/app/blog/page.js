import Link from "next/link";
import { GET_ALL_POSTS } from "../_graphql/queries";
import { ApolloWrapper } from "../_lib/apollo/apollo-wrapper";
import { getClient } from "../_lib/apollo/client";

export const dynamic = "force-dynamic";

const getAllPosts = async () => {
	const { data } = await getClient().query({
		query: GET_ALL_POSTS,
	});
	return data.blogPosts.data;
};

export default async function Blog() {
	let allPosts = await getAllPosts();

	return (
		<ApolloWrapper>
			<div
				id='blog'
				className='w-full md:max-w-prose '>
				<h1 className='underline-offset-4 decoration-primary decoration-2 underline mb-4'>
					Blog
				</h1>
				<section id='blog-content flex'>
					{allPosts.map((post, i) => {
						return (
							<Link
								key={i}
								href={`/blog/${post.attributes.urlSlug}`}>
								<div className='border-transparent hover:border-l-primary rounded-sm w-100 p-4 my-2 transition-all hover:bg-primary/20 border-l-4'>
									<h2 className='text-primary'>{post.attributes.title}</h2>
									<p className='font-mono text-sm'>
										{post.attributes.description}
									</p>
								</div>
							</Link>
						);
					})}
				</section>
			</div>
		</ApolloWrapper>
	);
}
