# svg-images

A playground to consider vector graphics included in the `<img>` tag from an external source.

---

Run `npm run dev` to view the page on `http://localhost:5173/`. The instruction is ultimately unnecessary — you can very well test the page opening `index.html` yourself —, but you might enjoy the live environment.

---

- show the entire graphic

  ```html
  <img src="./icons.svg" alt="" width="600" height="100" />
  ```

- show a portion of the graphic defined through a `<view>` element

  ```html
  <img src="./icons.svg#pie-chart" alt="" width="100" height="100" />
  ```

  The view itself is predisposed in the `.svg` document

  ```html
  <view id="pie-chart" viewBox="400 0 100 100" />
  ```

- show a portion of the graphic with a _view fragment_

  ```html
  <img
    src="./icons.svg#svgView(viewBox(0 0 100 100))"
    alt=""
    width="100"
    height="100"
  />
  ```

  The values update the `viewBox` for the specific SVG

As you are able to selectively focus on parts of the graphic, it is possible to combine the feature with the `<picture>` element and show different images for different conditions, for instance the size of the viewport.

```html
<picture>
  <source
    srcset="./picture.svg#zoom"
    alt=""
    media="(max-width: 800px)"
    width="300"
    height="300"
  />
  <img src="./picture.svg" alt="" width="800" height="600" />
</picture>
```
