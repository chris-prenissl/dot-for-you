<script setup lang="ts">
const image = useImage();
const backgroundImage = computed(() => {
  const imgUrl = image('/ankuendingungen_bg.png', {format: 'webp', sizes: 'sm:30svw lg:10svw'})
  return {
    backgroundImage: `url('${imgUrl}')`
  }
})
</script>

<template>
<section id="announcements" class="min-h-min z-9">
  <div class="announcement-box m-auto text-xs text-center content-center bg-center bg-contain bg-no-repeat"
       :style="backgroundImage">
    <div class="m-auto p-10 -rotate-3">
      <h2 class="pb-2 text-lg">Ankündigungen</h2>
      <h3 class="underline">Markttermine</h3>
      <ul>
        <li>07.12.24 - Weihnachtsmarkt, 93183 Kallmünz</li>
        <li>14.12.24 und 15.12.24 - Weihnachtsmarkt, 93142 Maxhütte-Haidhof</li>
      </ul>
    </div>
  </div>
</section>
</template>

<style scoped>
.announcement-box {
  max-width: 36rem;
  height: 36rem;
  background-size: 105%;
}
</style>