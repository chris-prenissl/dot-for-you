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
for (let i = 1; i <= 31; i++) {
  images.push({
    title: "Galeriebild " + i,
    url: "/gallery_images/gallery_img - " + i + ".png"
  });
}
shuffleArray(images);

const image = useImage();
const backgroundImage = computed(() => {
  const imgUrl = image('/ankuendingungen_bg.png', {format: 'webp', sizes: 'sm:40svw lg:10svw'})
  return {backgroundImage: `url('${imgUrl}')`}
})

</script>

<template>
  <section id="gallery" class="min-h-svh z-9">
    <div class="h-96 w-96 m-auto text-sm text-center content-center bg-center bg-contain bg-no-repeat"
         :style="backgroundImage">
      <div class="m-auto p-16 -rotate-3">
        <h2 class="pb-2 text-lg">Ankündigungen</h2>
        <h3 class="underline">Markttermine</h3>
        <ul>
          <li>07.12.24 - Weihnachtsmarkt, 93183 Kallmünz</li>
          <li>02.11.24 - Kreativmarkt, 93192 Wald</li>
        </ul>
        <h3 class="underline">VHS Schwandorf</h3>
        <p>Kurse Dotpainting für Kinder und Erwachsene.<br/>Siehe Herbst-/Winterprogramm 24/25</p>
      </div>
    </div>
    <Swiper class="w-full m-auto drop-shadow-lg"
            :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]"
            :autoplay="{delay: 2000}"
            :centered-slides="true"
            :centered-slides-bounds="true"
            :slides-per-view="3"
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
