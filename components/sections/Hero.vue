<script setup lang="ts">
import ButtonAnchorSecondary from "~/components/elements/ButtonAnchorSecondary.vue";
import ButtonAnchorPrimary from "~/components/elements/ButtonAnchorPrimary.vue";
</script>

<template>
  <section
      class="hero-background-img relative flex flex-col items-center md:items-start lg:items-center justify-center min-h-svh bg-cover bg-center">
    <div class="px-4 max-w-screen-lg box-border">
      <div class="max-w-full min-w-80 p-8 m-4 backdrop-blur-sm rounded-xl">
        <h1 class="lg:text-6xl md:text-4xl text-3xl mb-4">Mit Liebe handgemacht</h1>
        <p class="text-left lg:text-3xl md:text-2xl text-l mb-4">
          Aus einer Vielzahl an Materialien gestalte ich individuelle Dekorationen und Geschenke für dich.
          In meinem Sortiment findest du einzelne Artikel, Komplettsets sowie personalisierte Designs nach deinen
          Wünschen.
        </p>
        <div class="flex flex-wrap justify-center sm:justify-start gap-4">
          <ButtonAnchorPrimary title="Zum Shop"/>
          <ButtonAnchorSecondary title="Kontakt" />
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