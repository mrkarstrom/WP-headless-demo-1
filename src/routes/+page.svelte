<script>
	export let data;
	const { posts, pages } = data;
	console.log(posts);
	console.log(pages);
</script>

<h1>Posts</h1>
{#await posts then postList}
	{#each postList as post}
		<h1>{post.id}</h1>
		<p>{post.title.rendered}</p>
		<p>{@html post.content.rendered}</p>
	{/each}
{:catch error}
	<p>Error loading posts: {error.message}</p>
{/await}

<h1>Pages</h1>
{#await pages then pageList}
	{#each pageList as page}
		<h1>{page.id}</h1>
		<p>{page.title.rendered}</p>
		<p>{@html page.content.rendered}</p>
	{/each}
{:catch error}
	<p>Error loading pages: {error.message}</p>
{/await}

<style>
	h1 {
		color: #eee;
	}
	p {
		color: white;
	}
</style>
