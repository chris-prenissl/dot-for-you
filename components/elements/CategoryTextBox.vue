<script setup lang="ts">
defineProps<{
  description: string,
}>();
</script>

<template>
  <div class="sm:w-1/2 bg-light_white content-center text-text_on_primary p-8 border-2">
    <p>{{ description }}</p>
  </div>
</template>
