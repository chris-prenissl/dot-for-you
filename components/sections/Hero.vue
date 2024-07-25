<script setup lang="ts">
import ButtonAnchorSecondary from "~/components/elements/ButtonAnchorSecondary.vue";
import ButtonAnchorPrimary from "~/components/elements/ButtonAnchorPrimary.vue";
</script>

<template>
  <section id="hero" class="hero-background-img content-center bg-cover bg-center">
    <div class="max-w-screen-xl p-2 sm:p-16 m-auto">
      <div id="hero-element" class="p-8 backdrop-blur-lg -backdrop-hue-rotate-30 rounded-sm shadow-2xl">
        <h1 class="text-3xl font-bold mb-8">Mit Liebe handgemacht</h1>
        <p class="text-l text-left mb-8">
          Aus einer Vielzahl an Materialien gestalte ich individuelle Dekorationen und Geschenke für dich.
          In meinem Sortiment findest du einzelne Artikel, Komplettsets sowie personalisierte Designs nach deinen
          Wünschen.
        </p>
        <div class="flex flex-wrap justify-center gap-8 sm:gap-16">
          <ButtonAnchorPrimary title="Zum Shop"/>
          <ButtonAnchorSecondary title="Kontakt"/>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#hero {
  min-height: calc(100svh - 6rem);
}
.hero-background-img {
  background-image: url('/gallery_images/gallery_3.jpg')
}
</style>