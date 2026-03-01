<script setup lang="ts">
import type { SanityDocument } from "@sanity/client";
import CategoryItem from "~/components/elements/CategoryItem.vue";

const PORTFOLIO_CATEGORIES_QUERY = groq`*[
  _type == "portfolioCategory" && defined(slug.current)
]|order(order)`;

const { data: portfolioCategories } = await useSanityQuery<SanityDocument>(PORTFOLIO_CATEGORIES_QUERY);
</script>

<template>
	<section
		id="portfolio"
		class="portfolio-min-h mt-4 creator-linear-gradient z-7"
	>
		<h1 class="section-header">
			Portfolio
		</h1>
		<div
			v-for="category in portfolioCategories"
			:key="category.slug"
		>
			<CategoryItem
				:grid-order="category.order % 2"
				:category="category"
			/>
		</div>
	</section>
</template>

<style scoped>
.creator-linear-gradient {
  background: radial-gradient(circle, var(--color-light_white) 0%, var(--color-primary));
}

.portfolio-min-h {
  min-height: calc(100svh - 6rem);
}
</style>
