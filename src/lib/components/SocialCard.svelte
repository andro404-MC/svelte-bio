<script>
  export let title;
  export let paragraph;
</script>

<div class="card bg-base-300 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{paragraph}</p>
  </div>
  <figure><slot/></figure>
</div>
