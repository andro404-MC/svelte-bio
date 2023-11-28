<script>
  import '../app.css';
  import * as config from "$lib/config.js";
</script>

<svelte:head>
	<title>{config.name} - bio</title>
</svelte:head>

<div class="navbar bg-base-200 absolute z-50 drop-shadow-md sticky top-0 z-50">
  <div class="flex-1">
    <a href="/" class="btn btn-ghost text-xl">
    <div class="avatar mr-2">
        <div class="w-8 rounded-full">
          <img src="https://avatars.githubusercontent.com/u/94703538?v=4" />
        </div>
      </div>
      {config.name}</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li>
        <details>
          <summary>
            More
          </summary>
          <ul class="p-2 bg-base-100 rounded-t-none">
            <li><a href="/about">about</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>

<slot />
