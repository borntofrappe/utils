---
title: Syntax Highlighting
---

This application removes the default option for syntax highlighting. Instead of prism I prefer relyong on shiki to color code fences in the build step.

Here you have a few snippets to test the feature.

```js
const highlighter = async (code, lang) => {
	const shikiHighlighter = await getHighlighter({ theme: 'github-dark' });
	const shikiCode = shikiHighlighter.codeToHtml(code, { lang });

	return escapeSvelte(shikiCode);
};
```

```svelte
<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>Blog Kit</h1>
<p>Welcome to the homepage</p>
```

```css
body {
	color: hsl(44, 30%, 17%);
	background: hsl(41, 100%, 97%);
	text-rendering: optimizeSpeed;
}
```

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body>
		<div></div>
	</body>
</html>
```
