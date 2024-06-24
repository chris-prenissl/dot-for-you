<script setup lang="ts">
defineProps<{
  srcPath: string,
  title: string,
}>();
</script>

<template>
  <img class="object-cover object-center" :src="srcPath" :alt="title" />
</template>
