<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition'

  export let title;
  export let paragraph;
  export let bg;
  export let link;
  export let imgLink;
  let added = false;

  onMount(() => {
    setTimeout(() => {
      added = true;
    }, 0.3);
  });
</script>

{#if added}
  <a transition:fade={{ duration: 300 }} href="{link}">
    <div class="card bg-base-300 shadow-xl">
      <div class="card-body p-5">
        <h2 class="card-title">{title}</h2>
        <p>{paragraph}</p>
      </div>
      <figure style="background:{bg};" class="p-2 sm:p-10">
        <img height="48" width="144" src="{imgLink}" alt="logo" />
      </figure>
  </div>
  </a>
{/if}

