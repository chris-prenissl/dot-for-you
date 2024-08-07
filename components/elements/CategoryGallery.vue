<script setup lang="ts">
import ArtImage from "~/components/elements/ArtImage.vue";
import type {Category} from "~/model/Category";

defineProps<{
  category: Category
}>();
</script>

<template>
  <Swiper class="h-1/2 sm:w-1/2 drop-shadow-lg"
          :modules="[SwiperAutoplay]"
          :centered-slides="true"
          :centered-slides-bounds="true"
          :slides-per-view="1"
          :loop="true"
          :autoplay="true"
          :navigation="false"
  >
    <SwiperSlide
        v-for="(image, index) in category.images"
        :key="index">
      <ArtImage  :src-path="image.url" :title="image.title"/>
    </SwiperSlide>
  </Swiper>
</template>

