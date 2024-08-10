<script setup lang="ts">
import ButtonAnchorPrimary from "~/components/elements/ButtonAnchorPrimary.vue";
import ButtonAnchorSecondary from "~/components/elements/ButtonAnchorSecondary.vue";

const image = useImage();
const backgroundImage = computed(() => {
  const imgUrl = image('/melanie/melanie_bg.png', {format: 'webp', sizes: 'sm:40svw lg:10svw'})
  return { backgroundImage: `url('${imgUrl}')` }
})

</script>

<template>
  <section id="hero" :style="backgroundImage" class="content-center bg-cover bg-center z-40">
    <div id="hero-element" class="max-w-screen-md p-4 mt-32 sm:m-auto sm:p-10 rounded-sm border border-primary">
      <h1 class="text-2xl sm:text-3xl font-bold text-light_white pb-4">Mit Liebe handgemacht</h1>
      <p class="sm:text-2xl text-light_white mb-8">
        Aus einer Vielzahl an Materialien gestalte ich individuelle Dekorationen, Geschenke und Mitbringsel.
        In meinem Sortiment findest du einzelne Artikel, Komplettsets sowie personalisierte Designs nach deinen
        Wünschen.
      </p>
      <div class="flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-32">
        <ButtonAnchorPrimary title="Zum WhatsApp Shop" path="https://wa.me/c/491637917232"/>
        <ButtonAnchorSecondary title="Kontakt" path="#contact"/>
      </div>
    </div>
  </section>
</template>

<style scoped>
#hero {
  min-height: calc(100svh + 6rem);
}
</style>