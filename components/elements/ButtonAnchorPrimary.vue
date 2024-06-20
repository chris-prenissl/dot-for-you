<script setup lang="ts">
defineProps({
  title: String,
});
</script>

<template>
  <a href="#"
     class="bg-primary p-6 border-pink-400 border-2 rounded-xl text-l text-center hover:bg-base hover:border-base hover:text-primary">
    {{ title }}
  </a>
</template>