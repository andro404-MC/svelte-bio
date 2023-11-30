<script>
  import '../app.css';
  import * as config from "$lib/config.js";
  import 'iconify-icon'
  import { onMount } from 'svelte'
  import { themeChange } from 'theme-change'

  onMount(() => {themeChange(false)})
</script>

<svelte:head>
	<title>{config.name} - bio</title>
</svelte:head>

<div class="navbar bg-base-200 drop-shadow-md sticky top-0 z-50">
  <div class="flex-1">
    <a href="/" class="btn btn-ghost text-xl">
    <div class="avatar mr-2">
        <div class="w-8 rounded-full">
          <img src="{config.profileLink}" alt="Profile"/>
        </div>
      </div>
      {config.name}</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li>
        <label class="swap swap-rotate">
          <input data-toggle-theme="dark,light" type="checkbox" class="theme-controller" value="light" />
          <iconify-icon class="swap-on fill-current" height="20px" icon="ic:baseline-light-mode"/>
          <iconify-icon class="swap-off fill-current" height="20px" icon="ic:baseline-dark-mode"/>
        </label>
      </li>

      <li>
        <a href="/about">
          <iconify-icon height="20px" icon="ic:baseline-help"/>
        </a>
      </li>
    </ul>
  </div>
</div>

<slot />
