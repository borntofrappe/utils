<script>
	import '../app.css';
</script>

<nav>
	<ul>
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="/blog">Blog</a>
		</li>
	</ul>
</nav>

<slot />

<style>
	ul {
		padding: 0;
	}

	ul li {
		display: inline-block;
	}
</style>
