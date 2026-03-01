<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import ArtImage from "~/components/elements/ArtImage.vue";
import ScrollReveal from "~/components/elements/ScrollReveal.vue";

const GALLERY_IMAGES_QUERY = groq`*[
  _type == "galleryImage" && defined(slug.current)
]|order(publishedAt desc)`;

const { data: galleryImages } = await useSanityQuery<SanityDocument>(GALLERY_IMAGES_QUERY);
const sanityClient = useSanity().client;
const imageBuilder = createImageUrlBuilder(sanityClient);
const imgUrlFor = (source: SanityImageSource) => imageBuilder.image(source);

const windowWidth = ref(0);
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
    `,
	],
});

function onResize() {
	windowWidth.value = window.innerWidth;
}

onMounted(() => {
	windowWidth.value = window.innerWidth;
	window.addEventListener("resize", onResize);
});

onUnmounted(() => {
	window.removeEventListener("resize", onResize);
});
</script>

<template>
	<section
		id="gallery"
		class="min-h-svh mt-4 flex flex-col justify-center items-center z-8"
	>
		<ScrollReveal>
			<h1 class="section-header">
				Impressionen
			</h1>
			<swiper-container
				ref="containerRef"
				class="w-full m-auto drop-shadow-lg"
				:init="false"
			>
				<swiper-slide
					v-for="galleryImage in galleryImages"
					:key="galleryImage._id"
				>
					<ArtImage
						v-if="galleryImage.image"
						class="w-full px-2"
						:src-path="imgUrlFor(galleryImage.image).url()"
						:title="galleryImage.title"
						img-sizes="sm:40svw md:100svw"
					/>
				</swiper-slide>
			</swiper-container>
		</ScrollReveal>
	</section>
</template>
