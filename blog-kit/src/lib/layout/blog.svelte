<script>
	export let title;
</script>

<svelte:head>
	<title>Blog - {title}</title>
</svelte:head>

<header>
	<h1>{title}</h1>
</header>

<slot />
