<script setup lang="ts">
defineProps({
  title: String,
  path: String
});
</script>

<template>
  <a :href="path"
     class="p-4 bg-base border-pink-400 border rounded-sm text-l hover:text-logo_text hover:drop-shadow-lg">
    {{ title }}
  </a>
</template>