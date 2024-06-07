<template>
  <div class="flex justify-center items-center h-dvh">
    <div class="w-1/2 content-center flex justify-center">
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
          :pagination="true"
      >
        <SwiperSlide
            v-for="(image, index) in images"
            :key="index">
          <div class="flex justify-center items-center">
            <img :src="image.url" :alt="image.alt" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script>
const imageUrls = [
  '/gallery_images/gallery_3.jpg',
  '/gallery_images/gallery_1.jpg',
  '/gallery_images/gallery_3.jpg',
  '/gallery_images/gallery_3.jpg'
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