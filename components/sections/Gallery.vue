<template>
  <section id="gallery" class="max-h-lvh sm:py-40 flex flex-col justify-center items-center gap-2 sm:gap-8">
    <h1 class="text-4xl">Gallerie</h1>
    <div class="w-lvw p-2 sm:p-8">
      <Swiper
          :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
          :centered-slides="true"
          :centered-slides-bounds="true"
          :slides-per-view="1"
          :loop="true"
          :pagination="{
            clickable: true,
          }"
          :navigation="{
            enabled: true
          }"
      >
        <SwiperSlide
            v-for="(image, index) in images"
            :key="index">
          <GallerySlideItem :title="image.title" :img-url="image.url" :description="image.description"/>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script>
import StoryItem from "~/components/elements/StoryItem.vue";
import GallerySlideItem from "~/components/elements/GallerySlideItem.vue";

const titles = [
    'Muttertag',
    'Vatertag',
    'Taufe',
    'Hochzeit',
    'Weihnachten'
];
const descriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus sapien vel dolor feugiat, non posuere ipsum facilisis. Morbi consectetur elementum mi ac semper. In et fermentum sem, at.'
];
const imageUrls = [
  '/gallery_images/gallery_1.jpg',
  '/gallery_images/gallery_2.jpg',
  '/gallery_images/gallery_3.jpg',
  '/gallery_images/gallery_4.jpg',
  '/gallery_images/gallery_5.jpg'
];
export default {
  components: {GallerySlideItem, StoryItem},
  data() {
    return {
      images: imageUrls.map((image, index) => ({
        title: titles[index],
        url: image,
        description: descriptions[0]
      }))
    };
  },
};
</script>

<style>
.swiper-pagination-bullet {
  background: #f7d3df !important;
}

.swiper-pagination-bullet-active {
  width: 30px !important;
  border-radius: 10px;
}

.swiper-button-prev {
  color: #f7d3df;
}

.swiper-button-next {
  color: #f7d3df;
}
</style>