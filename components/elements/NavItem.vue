<script setup>
defineProps(['text', 'href'])
</script>

<template>
  <a class="text-text_default hover:text-logo_text" href= {{href}}>{{text}}</a>
</template>