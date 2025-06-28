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
const containerRef = ref(null);
useSwiper(containerRef, {
  autoplay: true,
  navigation: {

  },
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  centeredSlidesBounds: true,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  injectStyles: [
    `
          .swiper-button-next,
          .swiper-button-prev {
            color: grey;
          }
    `
  ],
});

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
      <ClientOnly>
        <swiper-container ref="containerRef" class="w-full m-auto drop-shadow-lg" :init="false">
          <swiper-slide
              v-for="galleryImage in galleryImages"
              :key="galleryImage._id">
            <ArtImage v-if="galleryImage.image" class="w-full px-2" :src-path="imgUrlFor(galleryImage.image).url()" :title="galleryImage.title" img-sizes="sm:40svw md:100svw"/>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </section>
</template>
