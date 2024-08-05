<script setup lang="ts">
import ButtonAnchorSecondary from "~/components/elements/ButtonAnchorSecondary.vue";
import ButtonAnchorPrimary from "~/components/elements/ButtonAnchorPrimary.vue";
</script>

<template>
  <section id="hero" class="hero-background-img content-center bg-cover bg-center">
    <div class="max-w-screen-xl p-2 sm:p-16 m-auto">
      <div id="hero-element" class="p-8 rounded-sm">
        <h1 class="text-3xl font-bold text-light_white mb-8">Mit Liebe handgemacht</h1>
        <p class="text-l text-left mb-8 text-light_white">
          Aus einer Vielzahl an Materialien gestalte ich individuelle Dekorationen, Geschenke und Mitbringsel.
          In meinem Sortiment findest du einzelne Artikel, Komplettsets sowie personalisierte Designs nach deinen
          Wünschen.
        </p>
        <div class="flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-32">
          <ButtonAnchorPrimary title="Zum WhatsApp Shop" path="https://wa.me/c/491637917232"/>
          <ButtonAnchorSecondary title="Kontakt" path="#contact"/>
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
  background-image: url('public/gallery_images/hero_img.jpg')
}
</style>