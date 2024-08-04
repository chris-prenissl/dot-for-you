<template>
  <section id="gallery" class="flex flex-col justify-between items-center gap-2 sm:gap-4 gallery-radial-gradiant shadow-xl">
    <h1 class="section-header">Galerie</h1>
    <div class="w-dvw h-full max-w-screen-2xl px-2" data-aos="fade-right">
      <Swiper
          :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
          :centered-slides="true"
          :centered-slides-bounds="true"
          :slides-per-view="1"
          :loop="true"
          :pagination="true"
          :autoplay="true"
          :navigation="{
            enabled: true
          }"
      >
        <SwiperSlide
            v-for="(image, index) in images"
            :key="index">
          <GallerySlideItem class="m-auto max-h-1080px w-auto" :title="image.title" :img-url="image.url" :description="image.description"/>
        </SwiperSlide>
      </Swiper>
    </div>
    <div/>
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