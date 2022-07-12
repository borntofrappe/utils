# Title

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, ullam!

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus, ullam!

## HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>code</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body></body>
</html>
```

## CSS

```css
p {
  line-height: 1.5;
}

h1 {
  font-size: 2.44rem;
  font-size: var(--size-800);
}

@media (min-width: 42rem) {
  h1 {
    font-size: 3.05rem;
    font-size: var(--size-900);
  }
}
```

## JavaScript

```js
import { marked } from "marked";
import { getHighlighter } from "shiki";

(async () => {
  const highlighter = await getHighlighter({ theme: "material-palenight" });

  // continues
})();
```
