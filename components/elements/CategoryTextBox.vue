<script setup lang="ts">
defineProps<{
  description: string,
}>();
</script>

<template>
  <div class="h-40svh sm:h-auto sm:w-1/2 bg-light_white text-text_on_primary p-8 border-2">
    <p>{{ description }}</p>
  </div>
</template>
