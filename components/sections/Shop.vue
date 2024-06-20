<script setup lang="ts">
import ButtonAnchorPrimary from "~/components/elements/ButtonAnchorPrimary.vue";
</script>

<template>
  <section id="shop" class="h-lvh flex flex-col items-center justify-center gap-16 border-y-2">
      <h1 class="text-4xl">Shop</h1>
      <img class="object-cover content-center" src="/public/gallery_images/gallery_1.jpg" alt="Shop">
      <ul>
        <li>1. Bestellen</li>
        <li>2. Abholen</li>
        <li>3. Freude geben</li>
      </ul>
      <ButtonAnchorPrimary title="Zum Shop"/>
  </section>
</template>