# icons

A script to process `.svg` icons and export their syntax with a JavaScript object.

- add `.svg` documents in the `svg` folder.

  ```html
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-50 -50 100 100"
    width="1em"
    height="1em"
  >
    <!-- ... -->
  </svg>
  ```

- with node.js execute the script to export the SVG syntax in `icons.js`

  ```bash
  # node script.js
  npm run dev
  ```
