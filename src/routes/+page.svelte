<script>
  import SocialCard from '$lib/components/SocialCard.svelte';
</script>

<div class="p-5">
  <div class="grid grid-cols-1 sm:grid-cols-4 gap-4 justify-between">
    <SocialCard imgLink="https://untemi.sirv.com/bio/facebook.webp"
    link="https://facebook.com"
    bg="white" title="Facebook"
    paragraph="abdelfettah jalllali"/>

    <SocialCard imgLink="https://untemi.sirv.com/bio/instagram.webp"
    link="https://instagram.com"
    bg="linear-gradient(130deg, rgba(249,206,52,1) 0%, rgba(238,42,123,1) 50%, rgba(98,40,215,1) 100%)"
    title="Instagram"
    paragraph="@untemi"/>

    <SocialCard imgLink="https://untemi.sirv.com/bio/youtube.webp"
    link="https://youtube.com"
    bg="white" title="YouTube"
    paragraph="@untemi0"/>

    <SocialCard imgLink="https://untemi.sirv.com/bio/whatsapp.webp"
    link="https://whatsapp.com"
    bg="#fcf5eb" title="WhatsApp"
    paragraph="+212 61 23 45 67 89"/>
  </div>
</div>

<div class="toast toast-end p-2 sm:p-5">
  <a href="https://ko-fi.com/" class="alert alert-success">
    <img class="w-[6rem]" src="$lib/icons/kofi.svg" />
  </a>
</div>
