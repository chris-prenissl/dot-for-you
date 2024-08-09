<script setup lang="ts">
defineProps<{
  srcPath: string,
  title: string,
  sizes: string
}>();
</script>

<template>
  <NuxtImg class="object-cover object-center" :sizes="sizes" :src="srcPath" :alt="title" placeholder/>
</template>
