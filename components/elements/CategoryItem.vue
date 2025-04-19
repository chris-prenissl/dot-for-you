<script setup lang="ts">
import CategoryTextBox from "~/components/elements/CategoryTextBox.vue";
import type { Category } from "~/model/Category";
import ArtImage from "~/components/elements/ArtImage.vue";

defineProps<{
  isReverse?: boolean,
  category: Category
}>();
</script>

<template>
  <div class="px-2 sm:px-8 py-16 content-center">
    <div class="md:max-w-screen-xl flex flex-col md:flex-row m-auto">
      <template v-if="!isReverse">
        <CategoryTextBox class="hidden md:block" :title="category.title" :description="category.description"
          position="left" data-aos="fade-right" />
        <ArtImage class="md:w-1/2 md:h-50svh" :src-path="category.coverImgUrl" :title="category.title"
          img-sizes="sm:40svw lg:100svw" data-aos="fade-left" />
        <CategoryTextBox class="md:hidden" :title="category.title" :description="category.description"
          data-aos="fade-up" />
      </template>
      <template v-else>
        <ArtImage class="md:w-1/2 md:h-50svh" :src-path="category.coverImgUrl" :title="category.title"
          img-sizes="sm:40svw lg:100svw" data-aos="fade-right" />
        <CategoryTextBox class="hidden md:block" :title="category.title" :description="category.description"
          position="right" data-aos="fade-left" />
        <CategoryTextBox class="md:hidden" :title="category.title" :description="category.description"
          data-aos="fade-up" />
      </template>
    </div>
  </div>
</template>