import React from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getClient } from "../../_lib/apollo/client";
import { GET_ALL_SLUGS, GET_INDIVIDUAL_POST } from "../../_graphql/queries";

// getStaticPaths - pages
export async function generateStaticParams() {
	const { data } = await getClient().query({
		query: GET_ALL_SLUGS,
	});

	const paths = data.blogPosts.data.map((post) => ({
		slug: post.attributes.urlSlug,
	}));

	return paths;
}

// getStaticProps - pages
async function getPost(params) {
	const { data } = await getClient().query({
		query: GET_INDIVIDUAL_POST,
		variables: { slugUrl: params.slug },
	});

	const attrs = data.blogPosts.data[0].attributes;
	const formattedDate = new Date(attrs.publishedAt).toDateString();
	const formattedTime = new Date(attrs.publishedAt).toTimeString();

	return {
		title: attrs.title,
		content: attrs.content,
		date: formattedDate,
		// time: formattedTime,
	};
}

export default async function Post({ params }) {
	const { title, content, date, time } = await getPost(params);

	return (
		<div>
			<div className='flex flex-row justify-between items-center mb-10'>
				<h1 className=' underline underline-offset-4 decoration-primary'>
					{title}
				</h1>
				<div className='badge badge-neutral'>{date}</div>
			</div>
			<MDXRemote source={content} />
		</div>
	);
}
