import React from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
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
	const html = await serialize(attrs.content);

	return {
		title: attrs.title,
		content: html,
	};
}

export default async function Post({ params }) {
	const { title, content } = await getPost(params);
	console.log("🚀 ~ file: page.js:36 ~ Post ~ post:", title, content);

	return (
		<div>
			<h1>{title}</h1>
			{/* <MDXRemote source={content} /> */}
		</div>
	);
}
