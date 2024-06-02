<template>
  <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :width="500"
      :height="500"
      :slides-per-view="1"
      :centered-slides="true"
      :centered-slides-bounds="true"
      :loop="true"
      :watch-overflow="false"
      :effect="'creative'"
      :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
      :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
  >
    <SwiperSlide
        v-for="(image, index) in images"
        :key="index">
        <img :src="image.url" :alt="image.alt" class="object-cover overflow-clip" style="width: 500px; height: 500px;">
    </SwiperSlide>
  </Swiper>
</template>

<script>
export default {
  data() {
    return {
      images: [
        {url: 'gallery_images/gallery_1.jpg'},
        {url: 'gallery_images/gallery_2.jpg'},
        {url: 'gallery_images/gallery_3.jpg'},
        {url: 'gallery_images/gallery_4.jpg'},
        {url: 'gallery_images/gallery_5.jpg'},
      ],
    };
  },
};
</script>