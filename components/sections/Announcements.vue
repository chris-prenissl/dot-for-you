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
        <li>14.03.2025 9 bis 17 Uhr - Frühlingsausstellung im Haus des Guten Hirten, 92421 Schwandorf</li>
        <li>15.03.2025 10 bis 16 Uhr - Frühlingsausstellung im Haus des Guten Hirten, 92421 Schwandorf</li>
        <li>06.04.2025 - Marktstand auf der Osterausstellung in der Jahnhalle,<br> 93128 Regenstauf</li>
        <li>03.05.2025 - Frühlingsmarkt Kallmünz, 93183 Kallmünz</li>
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