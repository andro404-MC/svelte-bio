<script>
  export let title;
  export let paragraph;
  export let bg;
  export let link;
  export let imgLink;
</script>
<a href="{link}">
  <div class="card bg-base-300 shadow-xl">
    <div class="card-body p-5">
      <h2 class="card-title">{title}</h2>
      <p>{paragraph}</p>
    </div>
    <figure style="background:{bg};" class="p-2 sm:p-10">
      <img class="h-12" src="{imgLink}" alt="logo" />
    </figure>
  </div>
</a>
