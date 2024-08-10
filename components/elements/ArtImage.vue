<script setup lang="ts">
defineProps<{
  srcPath: string,
  title: string,
  imgSizes: string
}>();
</script>

<template>
  <NuxtImg class="object-cover object-center" :sizes="imgSizes" :src="srcPath" format="webp" loading="lazy" placeholder :alt="title"/>
</template>
