<script setup lang="ts">
import CategoryTextBox from "~/components/elements/CategoryTextBox.vue";
import type {Category} from "~/model/Category";
import ArtImage from "~/components/elements/ArtImage.vue";

defineProps<{
  gridOrder: number,
  category: Category
}>();
</script>

<template>
  <div class="px-2 sm:px-8 py-16 content-center">
    <div class="md:max-w-screen-xl flex flex-col md:flex-row m-auto">
      <CategoryTextBox class="order-last md:-order-1" v-if="gridOrder === 0" :title="category.title" :background-url="category.coverImgUrl"
                       :description="category.description" data-aos="fade-right"/>
      <ArtImage class=" md:w-1/2 md:h-50svh" :src-path="category.coverImgUrl" :title="category.title" img-sizes="sm:40svw lg:100svw" :data-aos="gridOrder === 0 ? 'fade-left' : 'fade-right'"/>
      <CategoryTextBox  v-if="gridOrder === 1" :title="category.title" :description="category.description"
                       data-aos="fade-left" :background-url="category.coverImgUrl"/>
    </div>
  </div>
</template>