<script setup lang="ts">
import CategoryTextBox from "~/components/elements/CategoryTextBox.vue";
import type {Category} from "~/model/Category";
import CategoryGallery from "~/components/elements/CategoryGallery.vue";

defineProps<{
  gridOrder: number,
  category: Category
}>();
</script>

<template>
  <div class="p-2 sm:p-8  flex flex-col sm:flex-row">
    <CategoryTextBox class="order-last md:-order-1" v-if="gridOrder === 0" :title="category.title" :description="category.description" data-aos="fade-right"/>
    <CategoryGallery :category="category" :data-aos="gridOrder === 0 ? 'fade-left' : 'fade-right'" />
    <CategoryTextBox v-if="gridOrder === 1" :title="category.title" :description="category.description" data-aos="fade-left"/>
  </div>
</template>