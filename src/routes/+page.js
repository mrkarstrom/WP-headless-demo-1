/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const fetchPosts = async () => {
		const productRes = await fetch('https://yesweb.se/wp-json/wp/v2/posts');
		const postData = await productRes.json();
		return postData;
	};

	const fetchPages = async () => {
		const pageRes = await fetch('https://yesweb.se/wp-json/wp/v2/pages');
		const pageData = await pageRes.json();
		return pageData;
	};

	return {
		posts: fetchPosts(),
		pages: fetchPages()
	};
}
