<script setup>
defineProps(['text', 'href'])
</script>

<template>
  <a class="text-logo_text hover:text-amber-400" href= {{href}}>{{text}}</a>
</template>