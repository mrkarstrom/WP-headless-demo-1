<script>
	import Header from './Header.svelte';

	import '../app.css';
	import Footer from './Footer.svelte';

	let { children } = $props();
</script>

<div class="app">
	<Header />

	<main>
		{@render children()}
	</main>

	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		padding: 0 1.5rem;
		background: #0f0f0f;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	@media (min-width: 480px) {
	}
	@media (min-width: 600px) {
	}
	@media (min-width: 960px) {
	}
</style>
