# SVG objects

It is possible to include `.svg` files with the `<img>` element, as a static asset, but also other elements, as entire documents.

## Elements

Refer to the graphic:

- with `<object>` element and the `data` attribute

  ```html
  <object
    title="A magical top hat"
    data="top-hat.svg"
    type="image/svg+xml"
    width="300"
    height="300"
  >
    <!-- ...fallback markup -->
  </object>
  ```

- with `<embed>` element and the `src` attribute

  ```html
  <embed
    alt="A magical top hat"
    src="top-hat.svg"
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

---

Run `npm run dev` to view the page on `http://localhost:5173/`. The instruction is ultimately unnecessary — you can very well test the page opening `index.html` yourself —, but you might enjoy the live environment.
