<script setup lang="ts">
import CategoryTextBox from "~/components/elements/CategoryTextBox.vue";
import type {Category} from "~/model/Category";
import ArtImage from "~/components/elements/ArtImage.vue";
import type {SanityImageSource} from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";

const { projectId, dataset } = useSanity().client.config();
const imgUrlFor = (source: SanityImageSource) =>
    projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null;

defineProps<{
  gridOrder: number,
  category: Category
}>();
</script>

<template>
  <div v-if="category.image" class="px-2 sm:px-8 py-16 content-center">
    <div class="md:max-w-screen-xl flex flex-col md:flex-row m-auto">
      <CategoryTextBox class="order-last md:-order-1" v-if="gridOrder === 0" :title="category.title"
                       :description="category.description" data-aos="fade-right"/>
      <ArtImage class=" md:w-1/2 md:h-50svh" :src-path="imgUrlFor(category.image).url()" :title="category.title" img-sizes="sm:40svw lg:100svw" :data-aos="gridOrder === 0 ? 'fade-left' : 'fade-right'"/>
      <CategoryTextBox  v-if="gridOrder === 1" :title="category.title" :description="category.description"
                       data-aos="fade-left"/>
    </div>
  </div>
</template>