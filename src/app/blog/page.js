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
				<h1>Blog</h1>
				<section id='blog-content flex'>
					{allPosts.map((post, i) => {
						return (
							<Link
								key={i}
								href={`/blog/${post.attributes.urlSlug}`}>
								<div className='card w-100 my-4 p-2 transition-all px-2 hover:bg-secondary/10'>
									<h2 className='text-primary font-semibold no-underline'>
										{post.attributes.title}
									</h2>
									<p>{post.attributes.description}</p>
								</div>
							</Link>
						);
					})}
				</section>
			</div>
		</ApolloWrapper>
	);
}
