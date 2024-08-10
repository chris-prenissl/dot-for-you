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
  <div class="px-2 sm:px-8 py-16 content-center">
    <div class="sm:max-w-screen-xl flex flex-col sm:flex-row m-auto">
      <CategoryTextBox class="order-last sm:-order-1" v-if="gridOrder === 0" :title="category.title"
                       :description="category.description" data-aos="fade-right"/>
      <CategoryGallery :category="category" :data-aos="gridOrder === 0 ? 'fade-left' : 'fade-right'"/>
      <CategoryTextBox  v-if="gridOrder === 1" :title="category.title" :description="category.description"
                       data-aos="fade-left"/>
    </div>
  </div>
</template>