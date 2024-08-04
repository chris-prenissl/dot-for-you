<script setup lang="ts">
defineProps<{
  href: string,
  text: string,
}>()
</script>

<template>
  <a :href="href" target="_blank"
     class="flex flex-row justify-center items-center gap-4">
    <slot/>
    <p class="text-text_on_primary text-nowrap">{{ text }}</p>
  </a>
</template>

<style scoped>

</style>