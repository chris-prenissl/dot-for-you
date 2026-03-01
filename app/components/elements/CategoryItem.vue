<script setup lang="ts">
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";
import type { Category } from "~/model/Category";
import CategoryTextBox from "~/components/elements/CategoryTextBox.vue";
import ArtImage from "~/components/elements/ArtImage.vue";
import ScrollReveal from "~/components/elements/ScrollReveal.vue";

const sanityClient = useSanity().client;
const imageBuilder = createImageUrlBuilder(sanityClient);
const imgUrlFor = (source: SanityImageSource) => imageBuilder.image(source);

defineProps<{
	gridOrder: number;
	category: Category;
}>();
</script>

<template>
	<ScrollReveal :transition-name="gridOrder === 0 ? 'slide-left' : 'slide-right'">
		<div
			v-if="category.image"
			class="px-2 sm:px-8 py-16 content-center"
		>
			<div class="md:max-w-screen-xl flex flex-col md:flex-row m-auto">
				<CategoryTextBox
					v-if="gridOrder === 0"
					class="order-last md:-order-1"
					:title="category.title"
					:description="category.description"
					data-aos="fade-right"
				/>
				<ArtImage
					class=" md:w-1/2 md:h-50svh"
					:src-path="imgUrlFor(category.image).url()"
					:title="category.title"
					img-sizes="sm:40svw lg:100svw"
					:data-aos="gridOrder === 0 ? 'fade-left' : 'fade-right'"
				/>
				<CategoryTextBox
					v-if="gridOrder === 1"
					:title="category.title"
					:description="category.description"
					data-aos="fade-left"
				/>
			</div>
		</div>
	</ScrollReveal>
</template>
