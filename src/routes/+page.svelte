<script>
  import SocialCard from '$lib/components/SocialCard.svelte';
  import * as config from "$lib/config.js";
</script>

<div class="p-5">
  <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 justify-between">
    {#each config.items as item}
      <SocialCard imgLink="{item.imageLink}"
        link="{item.link}"
        bg="{item.imageColor}" title="{item.title}"
        paragraph="{item.paragraph}"/>
    {/each}
  </div>
</div>
