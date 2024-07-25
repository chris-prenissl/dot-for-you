<script setup lang="ts">
defineProps<{
  href: string,
  text: string,
}>();
</script>

<template>
  <a :href="href" target="_blank"
     class="w-full lg:w-auto lg:h-full flex flex-col items-center gap-4 bg-text_on_primary border border-dashed p-2">
    <slot/>
    <p>{{ text }}</p>
  </a>
</template>

<style scoped>

</style>