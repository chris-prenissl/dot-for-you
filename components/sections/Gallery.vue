<script setup lang="ts">
import ArtImage from "~/components/elements/ArtImage.vue";
import type {GalleryImage} from "~/model/GalleryImage";

function shuffleArray<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}

const images: Array<GalleryImage> = [];
for (let i = 1; i <= 27; i++) {
  images.push({
    title: "Galeriebild " + i,
    url: "/gallery_images/gallery_img - " + i + ".png"
  });
}
shuffleArray(images);

let windowWidth = ref(0);
function onResize() {
  windowWidth.value = window.innerWidth;
}

onMounted(() => {
  windowWidth.value = window.innerWidth;
  window.addEventListener('resize', onResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
});

</script>

<template>
  <section id="gallery" class="min-h-svh flex flex-col justify-center items-center z-8">
    <h1 class="section-header">Galerie</h1>
    <Swiper class="w-full m-auto drop-shadow-lg"
            :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]"
            :autoplay="{delay: 2000}"
            :centered-slides="true"
            :centered-slides-bounds="true"
            :slides-per-view="windowWidth > 768 ? 3 : 1"
            :loop="true"
            :navigation="{
            enabled: true
          }"
    >
      <SwiperSlide
          v-for="(image, index) in images"
          :key="index">
        <ArtImage class="w-full px-2" :src-path="image.url" :title="image.title" img-sizes="sm:40svw md:100svw"/>
      </SwiperSlide>
    </Swiper>
  </section>
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
  background: radial-gradient(circle, #f7d3df 10%, #f9f9f9);
}
</style>
