<script setup lang="ts">
import ButtonAnchorSecondary from "~/components/elements/ButtonAnchorSecondary.vue";
import ButtonAnchorPrimary from "~/components/elements/ButtonAnchorPrimary.vue";
</script>

<template>
  <section
      class="h-svh hero-background-img content-center bg-cover bg-center">
    <div class="min-w-96 max-w-screen-xl px-4 sm:px-16 m-auto">
      <div class="p-8 backdrop-blur-lg -backdrop-hue-rotate-30 rounded-sm shadow-2xl">
        <h1 class="text-3xl md:text-4xl 2xl:text-6xl font-bold mb-8">Mit Liebe handgemacht</h1>
        <p class="text-xl md:text-2xl 2xl:text-3xl text-left mb-8">
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
.hero-background-img {
  background-image: url('/gallery_images/gallery_3.jpg')
}
</style>