<script setup lang="ts">
import ArtImage from "~/components/elements/ArtImage.vue";

defineProps<{
  title: string,
  imgUrl: string,
  description: string,
}>();
</script>

<template>
  <div class="m-2 md:p-8 flex flex-col justify-center md:grid md:grid-cols-2 md:grid-rows-1 justify-items-center gap-4">
    <ArtImage class="h-50svh w-full shadow-lg" :src-path="imgUrl" :title="title"/>
    <div class="p-8 flex flex-col gap-2 md:justify-center shadow-lg bg-base backdrop-blur-2xl">
      <h1 class="text-4xl">{{title}}</h1>
      <p>{{description}}</p>
    </div>
  </div>
</template>