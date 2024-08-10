<script setup lang="ts">
defineProps<{
  title: string,
  description: string,
}>();
</script>

<template>
  <div class="h-auto sm:w-1/2 bg-light_white content-center text-text_on_primary p-8 border-primary border-2">
    <h2 class="text-3xl pb-2 sm:pb-4">{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>
