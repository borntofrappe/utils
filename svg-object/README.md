# svg-object

An SVG document you can embed as an external resource.

- object

  Point to the resource in the `data` attribute.

  ```html
  <object
    data="top-hat.svg"
    type="image/svg+xml"
    width="280"
    height="280"
  ></object>
  ```

  In between the opening and closing bracket you can add a fallback resource.

- embed

  Point to the resource in the `src` attribute.

  ```html
  <embed src="top-hat.svg" type="image/svg+xml" width="280" height="280"></embed>
  ```
