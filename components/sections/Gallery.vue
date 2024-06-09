<template>
  <div class="flex items-center justify-center align-middle">
    <div class="px-8 py-8 max-h-dvh max-w-lg">
      <Swiper
          :modules="[SwiperAutoplay, SwiperEffectCoverflow, SwiperPagination]"
          :centered-slides="true"
          :centered-slides-bounds="true"
          :effect="'coverflow'"
          :slides-per-view="1"
          :loop="true"
          :coverflow-effect="{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false
          }"
          :pagination="{
            clickable: true,

          }"
      >
        <SwiperSlide
            v-for="(image, index) in images"
            :key="index">
          <div class="flex justify-center items-center">
            <img :src="image.url" :alt="image.alt" style="height: 400px;"/>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script>
const imageUrls = [
  '/gallery_images/gallery_1.jpg',
  '/gallery_images/gallery_2.jpg',
  '/gallery_images/gallery_3.jpg',
  '/gallery_images/gallery_4.jpg',
  '/gallery_images/gallery_5.jpg'
];
export default {
  data() {
    return {
      images: imageUrls.map((image, index) => ({
        url: image,
        alt: `Image ${index + 1}`
      }))
    };
  },
};
</script>

<style>
.swiper-pagination-bullet {
  background: #f9f9f9 !important;
}

.swiper-pagination-bullet-active {
  width: 30px !important;
  border-radius: 10px;
}
</style>
