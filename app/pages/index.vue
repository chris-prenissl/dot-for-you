<script setup lang="ts">
import AppNavbar from "~/components/sections/AppNavbar.vue";
import AppHero from "~/components/sections/AppHero.vue";
import AppGallery from "~/components/sections/AppGallery.vue";
import AppPortfolio from "~/components/sections/AppPortfolio.vue";
import AppContact from "~/components/sections/AppContact.vue";
import AppAbout from "~/components/sections/AppAbout.vue";
import AppAnnouncements from "~/components/sections/AppAnnouncements.vue";
</script>

<template>
	<div>
		<AppNavbar />
		<AppHero />
		<AppAnnouncements />
		<AppGallery />
		<AppPortfolio />
		<AppAbout />
		<AppContact />
	</div>
</template>
