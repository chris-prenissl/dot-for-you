<script setup lang="ts">
defineProps<{
  srcPath: string,
  title: string,
}>();
</script>

<template>
  <img class="max-h-60lvh max-w-60lvw object-cover content-center" :src="srcPath" :alt="title" />
</template>