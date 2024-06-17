<template>
  <section class="h-lvh">
    <div class="p-16">
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
          <div class="grid grid-cols-2 justify-items-center gap-4">
            <img class="object-cover content-center" :src="image.url" :alt="image.alt"/>
            <div class="flex flex-col gap-4">
              <h1 class="text-4xl">Muttertag</h1>
              <p>Beschreibung was es alles zu Muttertag gibt</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
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