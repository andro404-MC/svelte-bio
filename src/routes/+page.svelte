<script>
  import SocialCard from '$lib/components/SocialCard.svelte';
</script>

<div class="p-5">
  <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 justify-between">
    <SocialCard title="Whatsapp" paragraph="+212 6123456789">
      <a href="https://google.com"><img src="$lib/images/whatsapp.webp" alt="whatsapp logo" /></a>
    </SocialCard>
    <SocialCard title="Facebook" paragraph="abdelfettah jalllali">
      <a href="https://google.com"><img src="$lib/images/facebook.webp" alt="facebook logo" /></a>
    </SocialCard>
    <SocialCard title="Instagram" paragraph="@untemi">
      <a href="https://google.com"><img src="$lib/images/instagram.webp" alt="insta logo" /></a>
    </SocialCard>
    <SocialCard title="Tiktok" paragraph="@untemi0">
      <a href="https://google.com"><img src="$lib/images/tiktok.webp" alt="tiktok logo" /></a>
    </SocialCard>
    <SocialCard title="Discord" paragraph="@untemi">
      <a href="https://google.com"><img src="$lib/images/discord.webp" alt="discord logo" /></a>
    </SocialCard>
    <SocialCard title="Youtube" paragraph="@untemi">
      <a href="https://google.com"><img src="$lib/images/youtube.webp" alt="Youtube logo" /></a>
    </SocialCard>
  </div>
</div>

<div class="toast toast-end">
  <div class="alert alert-success">
    <span>In developmet by Untemi</span>
  </div>
</div>
