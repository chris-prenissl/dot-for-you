<script setup lang="ts">
import ArtImage from "~/components/elements/ArtImage.vue";
import type {Category} from "~/model/Category";

defineProps<{
  category: Category
}>();
</script>

<template>
  <Swiper class="w-full sm:w-1/2 m-auto drop-shadow-lg"
          :modules="[SwiperAutoplay, SwiperEffectFade]"
          :effect="'fade'"
          :delay="200"
          :speed="2000"
          :fade-effect="{
            crossFade: true
          }"
          :centered-slides="true"
          :centered-slides-bounds="true"
          :slides-per-view="1"
          :loop="true"
          :autoplay="true"
          :allow-touch-move="false"
  >
    <SwiperSlide
        v-for="(image, index) in category.images"
        :key="index">
      <ArtImage class="w-full" :src-path="image.url" :title="image.title" img-sizes="100svw sm:50svw"/>
    </SwiperSlide>
  </Swiper>
</template>

