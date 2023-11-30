# svg-objects

A playground to consider vector graphics included as an object from an external source.

---

Run `npm run dev` to view the page on `http://localhost:5173/`. The instruction is ultimately unnecessary — you can very well test the page opening `index.html` yourself —, but you might enjoy the live environment.

---

- with an `<object>` element

  Point to the resource in the `data` attribute.

  ```html
  <object
    title="A magical top hat"
    data="top-hat.svg"
    type="image/svg+xml"
    width="300"
    height="300"
  ></object>
  ```

  In between the opening and closing bracket you can add a fallback resource.

- with an `<embed>` element

  Point to the resource in the `src` attribute.

  ```html
  <embed
    alt="A magical top hat"
    src="top-hat.svg"
    type="image/svg+xml"
    width="300"
    height="300"
  />
  ```
