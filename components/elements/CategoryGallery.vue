<script setup lang="ts">
import ArtImage from "~/components/elements/ArtImage.vue";
import type {Category} from "~/model/Category";

defineProps<{
  category: Category
}>();
</script>

<template>
  <Swiper class="w-full sm:w-1/2 m-auto drop-shadow-lg"
          :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination, SwiperEffectCoverflow]"
          :effect="'coverflow'"
          :autoplay="true"
          :delay="200"
          :centered-slides="true"
          :centered-slides-bounds="true"
          :slides-per-view="1"
          :loop="true"
          :navigation="{
            enabled: true
          }"
  >
    <SwiperSlide
        v-for="(image, index) in category.images"
        :key="index">
      <ArtImage class="w-full" :src-path="image.url" :title="image.title" img-sizes="100svw sm:100svw"/>
    </SwiperSlide>
  </Swiper>
</template>

<style>
.swiper-pagination-bullet {
  background: grey !important;
}

.swiper-pagination-bullet-active {
  width: 30px !important;
  border-radius: 10px;
}

.swiper-button-prev {
  color: grey;
}

.swiper-button-prev::after {
  @media (max-width: 768px) {
    font-size: 1rem;
  }
}

.swiper-button-next::after {
  @media (max-width: 768px) {
    font-size: 1rem;
  }
}

.max-h-1080px {
  max-height: 1080px !important;
}

.swiper-button-next {
  color: grey;
}
.gallery-radial-gradiant {
  background: radial-gradient(circle,#f7d3df 10%, #f9f9f9);
}
</style>
