<script setup lang="ts">
import ScrollToTopFab from "~/components/elements/ScrollToTopFab.vue";
import CookieDialog from "~/components/elements/CookieDialog.vue";
import AppFooter from "~/components/sections/AppFooter.vue";
</script>

<template>
	<div class="overflow-x-hidden text-text_default bg-light_white">
		<NuxtPage />
		<AppFooter />
		<ScrollToTopFab />
		<CookieDialog />
	</div>
</template>
