<script setup lang="ts">
import ArtImage from "~/components/elements/ArtImage.vue";

defineProps<{
  title: string,
  imgUrl: string,
  description: string,
}>();
</script>

<template>
  <div class="flex flex-col justify-center md:grid md:grid-cols-2 md:grid-rows-1 justify-items-center gap-4 md:p-20">
    <ArtImage :src-path="imgUrl" :title="title" class="h-40lvh md:h-full shadow-lg"/>
    <div class="flex flex-col gap-4 md:justify-center p-16 shadow-lg bg-base backdrop-blur-2xl">
      <h1 class="text-4xl">{{title}}</h1>
      <p class="overflow-hidden">{{description}}</p>
    </div>
  </div>
</template>

<style scoped>
.h-40lvh {
  height: 40lvh;
}
</style>