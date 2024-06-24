<script setup lang="ts">
import ArtImage from '~/components/elements/ArtImage.vue';

defineProps<{
  srcPath: string,
  title: string,
  description: string,
  gridOrder: number
}>();
</script>

<template>
  <div class="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-2 drop-shadow-lg"
    :data-aos="gridOrder === 0 ? 'fade-right' : 'fade-left'">
    <ArtImage v-if="gridOrder !== 1" class="w-full md:h-full" :src-path="srcPath" :title="title" />
    <div class="bg-base text-text_on_primary p-8">
      <h1 class="text-4xl py-4">{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
    <ArtImage v-if="gridOrder === 1" class="w-full md:h-full order-first md:order-1" :src-path="srcPath" :title="title" />
  </div>
</template>