<script>
	export let posts = [];
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Blog</h1>
<p>Welcome to the blog</p>

{#if posts.length > 0}
	<p>There are currently {posts.length} articles.</p>

	<ul>
		{#each posts as { title, slug }}
			<li>
				<a href="/blog/{slug}">{title}</a>
			</li>
		{/each}
	</ul>
{/if}
