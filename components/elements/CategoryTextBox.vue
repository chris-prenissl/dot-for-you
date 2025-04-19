<script setup lang="ts">
defineProps<{
  title: string,
  description: string,
  position?: 'left' | 'right'
}>();
</script>

<template>
  <div class="h-auto md:w-1/2 content-center bg-cover bg-center p-8 border-primary border-2">
    <div :class="position === 'right' ? 'md:pl-8' : 'md:pr-8'">
      <h2 class="text-2xl pb-2 md:pb-4">{{ title }}</h2>
      <p>{{ description }}</p>
    </div>
  </div>
</template>
