<script setup lang="ts">
defineProps<{
  title: string,
  description: string,
}>();
</script>

<template>
  <div class="sm:w-1/2 bg-light_white text-text_on_primary p-8 border-2">
    <h1 class="text-3xl py-4">{{ title }}</h1>
    <p>{{ description }}</p>
  </div>
</template>
