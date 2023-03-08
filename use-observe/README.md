# use-observe

A Svelte action to detect when a node appears in the viewport and toggle a CSS transition.

- import the action from `actions.js`

  ```svelte
  <script>
  import { observeState } from "./actions";
  </script>
  ```

- use the function on whichever HTML node through the `use:` directive

  ```svelte
  <p use:observeState>
      Hello there
  </p>
  ```
