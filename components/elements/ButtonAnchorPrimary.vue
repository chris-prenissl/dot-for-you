<script setup lang="ts">
defineProps({
  title: String,
});
</script>

<template>
  <a href="#"
     class="p-4 bg-primary border-pink-400 border rounded-sm  text-l md:text-2xl hover:bg-base hover:text-logo_text hover:drop-shadow-lg">
    {{ title }}
  </a>
</template>