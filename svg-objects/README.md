# SVG objects

## Elements

It is possible to include `.svg` files with the `<img>` element, as a static asset, but also other elements, as entire documents.

- `<object>`

  ```html
  <object
    title="A magical top hat"
    data="./svg/top-hat.svg"
    type="image/svg+xml"
    width="300"
    height="300"
  >
    <!-- ...fallback markup -->
  </object>
  ```

- `<embed>`

  ```html
  <embed
    alt="A magical top hat"
    src="./svg/top-hat.svg"
    type="image/svg+xml"
    width="300"
    height="300"
  />
  ```

## Interactive views

Embedded documents can be fully interactive with a script, but also anchor link elements `<a>`. Refer to the `id` attribute of different `<view>` elements to update the visible area and show different parts of the graphic.

```html
<view id="v-0-0-0" viewBox="224.5 89.5 51 21" />
<!-- ... -->
<a href="#v-0-0-0"><text y="1.8">Henry III</text></a>
```

## Stack

It is possible to selectively show vector graphics with URL fragments and the concept of a stack, nested `<svg>` elements.

```html
<svg>
  <svg id="filter-1"></svg>
  <svg id="filter-2"></svg>
</svg>
```

With CSS the `:target` pseudo selector.

```css
svg > svg:not(:target) {
  display: none;
}
```

Reference the file and match one the `id` attributes to see the vector.

```html
<object
    title="Second filter"
    data="./svg/filter-icons.svg#filter-2"
    type="image/svg+xml"
    width="300"
    height="300">
</obect>
```
