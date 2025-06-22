<script setup lang="ts">
import ArtImage from "~/components/elements/ArtImage.vue";
import type { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

const GALLERY_IMAGES_QUERY = groq`*[
  _type == "galleryImage" && defined(slug.current)
]|order(publishedAt)`;

const { data: galleryImages } = await useSanityQuery<SanityDocument>(GALLERY_IMAGES_QUERY);
const { projectId, dataset } = useSanity().client.config();
const imgUrlFor = (source: SanityImageSource) =>
    projectId && dataset ? imageUrlBuilder({ projectId, dataset }).image(source) : null;

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
          v-for="galleryImage in galleryImages"
          :key="galleryImage._id">
        <ArtImage v-if="galleryImage.image" class="w-full px-2" :src-path="imgUrlFor(galleryImage.image).url()" :title="galleryImage.title" img-sizes="sm:40svw md:100svw"/>
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

.swiper-button-next {
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

.gallery-radial-gradiant {
  background: radial-gradient(circle, #f7d3df 10%, #f9f9f9);
}
</style>
