<svelte:head>
  <script
    type="module"
    src="https://cdn.jsdelivr.net/gh/zerodevx/zero-md@2/dist/zero-md.min.js"
  ></script>
</svelte:head>
  
<div class="card p-2 mt-5 mb-5 m-auto w-[95%] h-[100%] bg-base-300 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">About</h2>
      <zero-md src="/about.md">
        <template>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/PrismJS/prism@1/themes/prism.min.css"
          />
        </template>
      </zero-md>
  </div>
</div>

