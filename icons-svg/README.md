# icons-svg

A playground to consider SVG icons from an external source.

---

Run `npm run dev` to view the page on `http://localhost:5173/`. The instruction is ultimately unnecessary, you can very well test the page opening `index.html` yourself, but you might enjoy hot reloading.

---

`icons.svg` houses the code for 6 icons positioned side by side.

With an `img` element:

- refer to `icons.svg` to include every icon

  <!-- prettier-ignore -->
  ```html
  <img
    src="./icons.svg"
    ...
  />
  ```

- refer to a _view element_ to include the icons predefined through `<view>` elements

  <!-- prettier-ignore -->
  ```html
  <img
    src="./icons.svg#pie-chart"
    ...
  />
  ```

- use a _view fragment_ to selectively focus on parts of the larger `<svg>`

  <!-- prettier-ignore -->
  ```html
  <img
    src="./icons.svg#svgView(viewBox(0 0 100 100))"
    ...
  />
  ```
