<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useSwiper } from '#imports';
import ArtImage from "~/components/elements/ArtImage.vue";
import type { GalleryImage } from "~/model/GalleryImage";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

function shuffleArray<T>(array: T[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const galleryImages = import.meta.glob('/public/gallery_images/gallery_img*.png', {
  eager: true,
  import: 'default'
});

const images: Array<GalleryImage> = Object.keys(galleryImages).map((path, index) => ({
  title: `Galeriebild ${index + 1}`,
  url: path.replace('/public', '')
}));

shuffleArray(images);

const containerRef = ref(null);
useSwiper(containerRef, {
  autoplay: {
    delay: 2000
  },
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  centeredSlidesBounds: true,
  loop: true,
  navigation: {
    enabled: true,
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});

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
  <section id="gallery" class="min-h-svh mt-4 flex flex-col justify-center items-center z-8">
    <h1 class="section-header py-4">Galerie</h1>
    <div class="relative w-full">
      <ClientOnly>
        <div class="relative w-full">
          <swiper-container ref="containerRef" :init="false" class="w-full m-auto drop-shadow-lg">
            <swiper-slide v-for="(image, index) in images" :key="index">
              <ArtImage class="w-full px-2" :src-path="image.url" :title="image.title" img-sizes="sm:40svw md:100svw" />
            </swiper-slide>
          </swiper-container>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </ClientOnly>
      <div class="swiper-pagination-external mt-4 text-center w-full"></div>
    </div>
  </section>
</template>

<style>
swiper-container {
  --swiper-navigation-color: grey;
  --swiper-navigation-size: 25px;
  --swiper-navigation-top-offset: 50%;
  --swiper-navigation-sides-offset: 15px;
  --swiper-pagination-color: grey;
  --swiper-pagination-bullet-inactive-color: grey;
  --swiper-pagination-bullet-inactive-opacity: 0.5;
  --swiper-pagination-bullet-size: 8px;
  --swiper-pagination-bullet-horizontal-gap: 4px;
}

.swiper-button-next,
.swiper-button-prev {
  position: absolute;
  top: 50%;
  width: var(--swiper-navigation-size);
  height: var(--swiper-navigation-size);
  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--swiper-navigation-color);
}

.swiper-button-next {
  right: 10px;
}

.swiper-button-prev {
  left: 10px;
}

.swiper-button-next:after,
.swiper-button-prev:after {
  font-family: swiper-icons, serif;
  font-size: var(--swiper-navigation-size);
  text-transform: none !important;
  letter-spacing: 0;
  font-variant: initial;
  line-height: 1;
}

.swiper-button-prev:after {
  content: 'prev';
}

.swiper-button-next:after {
  content: 'next';
}

@media (max-width: 768px) {
  swiper-container {
    --swiper-navigation-size: 16px;
    --swiper-navigation-top-offset: 35%;
    --swiper-navigation-sides-offset: 10px;
    --swiper-navigation-color: #333;
  }
}
</style>
