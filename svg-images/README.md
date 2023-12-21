# SVG images

It is possible to include `.svg` files with the `<img>` element.

- show the entire graphic

  ```html
  <img src="./svg/data-icons.svg" alt="" width="600" height="100" />
  ```

- show a portion of the graphic defined with a `<view>` element

  ```html
  <img src="./svg/data-icons.svg#pie-chart" alt="" width="100" height="100" />
  ```

  The view itself is predisposed in the document.

  ```html
  <view id="pie-chart" viewBox="400 0 100 100" />
  ```

- show a portion of the graphic with a _view fragment_

  ```html
  <img
    src="./svg/data-icons.svg#svgView(viewBox(0 0 100 100))"
    alt=""
    width="100"
    height="100"
  />
  ```

  The values update the `viewBox` for the specific SVG.

As you are able to selectively focus on parts of the graphic, it is possible to combine the feature with the `<picture>` element and show different images with a media query.

```html
<picture>
  <source
    srcset="./svg/picture.svg#zoom"
    alt=""
    media="(max-width: 800px)"
    width="300"
    height="300"
  />
  <img src="./svg/picture.svg" alt="" width="800" height="600" />
</picture>
```
