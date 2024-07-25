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
  <div class="flex flex-col sm:flex-row gap-2 drop-shadow-lg"
    :data-aos="gridOrder === 0 ? 'fade-right' : 'fade-left'">
    <ArtImage v-if="gridOrder !== 1" class="sm:w-1/2" :src-path="srcPath" :title="title" />
    <div class="sm:w-1/2 bg-base text-text_on_primary p-8">
      <h1 class="text-3xl py-4">{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
    <ArtImage v-if="gridOrder === 1" class="sm:w-1/2 order-first md:order-1" :src-path="srcPath" :title="title" />
  </div>
</template>