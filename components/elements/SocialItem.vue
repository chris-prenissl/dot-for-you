<script setup lang="ts">
defineProps<{
  href: string,
  text: string,
}>()
</script>

<template>
  <a :href="href" target="_blank"
     class="w-full md:w-auto flex flex-row justify-center items-center gap-2">
    <slot/>
    <p class="flex-1 min-w-0 text-text_on_primary break-all whitespace-normal">{{ text }}</p>
  </a>
</template>

<style scoped>

</style>