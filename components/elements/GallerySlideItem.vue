<script setup lang="ts">
import {defineProps} from 'vue'

defineProps({
  title: String,
  imgUrl: String,
  description: String,
});
</script>

<template>
  <div class="grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 justify-items-center gap-4 p-16">
    <img class="object-cover content-center" :src="imgUrl" :alt="title"/>
    <div class="flex flex-col gap-4">
      <h1 class="text-4xl">{{title}}</h1>
      <p>{{description}}</p>
    </div>
  </div>
</template>