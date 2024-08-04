<script setup lang="ts">
import ArtImage from "~/components/elements/ArtImage.vue";

defineProps<{
  title: string,
  imgUrl: string,
  description: string,
}>();
</script>

<template>
  <ArtImage class="shadow-lg" :src-path="imgUrl" :title="title"/>
</template>