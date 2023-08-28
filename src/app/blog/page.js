import Link from "next/link";
import { GET_ALL_POSTS } from "../_graphql/queries";
import { ApolloWrapper } from "../_lib/apollo/apollo-wrapper";
import { getClient } from "../_lib/apollo/client";

export const dynamic = "force-dynamic";

const getAllPosts = async () => {
	const { data } = await getClient().query({
		query: GET_ALL_POSTS,
	});
	console.log(data.blogPosts);
	return data.blogPosts.data;
};

export default async function Blog() {
	let allPosts = await getAllPosts();
	return (
		<ApolloWrapper>
			<div
				id='blog'
				className='container mx-auto w-full md:max-w-prose'>
				<h1>Blog</h1>
				{allPosts.map((post, i) => {
					console.log(post);
					return (
						<Link
							key={i}
							href={post.attributes.urlSlug}>
							<div className='card'>
								<p className='text-primary text-xl'>{post.attributes.title}</p>
								<p>{post.attributes.description}</p>
							</div>
						</Link>
					);
				})}
			</div>
		</ApolloWrapper>
	);
}
