<script>
  import { marked } from 'marked'
  import * as config from "$lib/config.js";
</script>

<div class="card p-2 mt-5 m-auto w-[95%] h-[100%] bg-base-300 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">About</h2>
    <div class="preview">{@html marked(config.about)}</div>
  </div>
</div>
