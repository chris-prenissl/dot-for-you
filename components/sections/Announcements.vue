<script setup lang="ts">
const image = useImage();
const backgroundImage = computed(() => {
  const imgUrl = image('/ankuendingungen_bg.png', {format: 'webp', sizes: 'sm:50svw lg:10svw'})
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
        <li>02.11.24 - Kreativmarkt, 93192 Wald</li>
      </ul>
      <h3 class="underline pt-2">VHS Schwandorf</h3>
      <p>Kurse Dotpainting für Kinder und Erwachsene.<br/>Siehe Herbst-/Winterprogramm 24/25</p>
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