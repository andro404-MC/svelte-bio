<script>
	import '../app.css';
</script>

<div class="navbar bg-base-200 absolute z-50 drop-shadow-md sticky top-0 z-50">
  <div class="flex-1">
    <a href="/" class="btn btn-ghost text-xl">Untemi</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a href="https://ko-fi.com/" class="btn-accent mr-2">Donate</a></li>
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
