<script setup lang="ts">
defineProps({
	title: String,
	to: String,
});
</script>

<template>
	<NuxtLink
		:to="to"
		class="p-4 bg-primary border-pink-400 border rounded-sm text-center text-l hover:bg-light_white hover:text-logo_text hover:drop-shadow-lg"
	>
		{{ title }}
	</NuxtLink>
</template>
