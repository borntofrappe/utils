<script>
  import { observeState } from "./actions";
</script>

<div>
  <p use:observeState>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
    quisquam!
  </p>
</div>
<div>
  <p use:observeState>
    Assumenda nemo officia voluptatum autem tempore porro expedita nostrum ut!
  </p>
</div>
<div>
  <p use:observeState>
    Fugit, consectetur. Eveniet sit qui fugiat consequatur odit maiores et.
  </p>
</div>
<div>
  <p use:observeState>
    Ducimus nihil velit eum, consequuntur ratione molestias voluptates ab
    minima.
  </p>
</div>

<style>
  :global(body) {
    font-family: sans-serif;
  }

  div {
    min-block-size: 100vh;
    display: grid;
    place-items: center;
  }

  p {
    background-color: blanchedalmond;
    padding: 1rem 2rem;
  }

  :global([data-state="hidden"]) {
    opacity: 0;
    transform: translateY(1rem);
  }

  :global([data-state="visible"]) {
    opacity: 1;
    transform: translateY(0);
  }

  :global([data-state]) {
    transition: opacity 0.5s ease-out, transform 0.75s ease-out;
  }
</style>
