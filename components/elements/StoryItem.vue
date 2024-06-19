<script setup lang="ts">
import {defineProps} from 'vue'

defineProps({
  srcPath: String,
  title: String,
  description: String,
  gridOrder: {
    type: Number,
    default: 0
  }
});
</script>

<template>
  <div class="max-h-60vh flex flex-col md:grid md:grid-cols-2"
       :data-aos="gridOrder === 1 ? 'fade-right' : 'fade-left'">
    <img v-if="gridOrder !== 1" class="object-cover content-center"
         :src="srcPath"
         :alt="title"
    />
    <div class="border-2 border-primary bg-primary text-text_on_primary p-8">
      <h1 class="text-4xl py-4">{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
    <img v-if="gridOrder === 1" class="object-cover content-center order-first md:order-1"
         :src="srcPath"
         :alt="title"
    />
  </div>
</template>

<style scoped>
.max-h-60vh {
  max-height: 60lvh;
}
</style>