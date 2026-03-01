<script setup lang="ts">
defineProps({
	title: String,
	to: String,
});
</script>

<template>
	<NuxtLink
		:to="to"
		class="p-4 bg-light_white border-logo_text border rounded-sm text-center text-l hover:text-logo_text hover:drop-shadow-lg"
	>
		{{ title }}
	</NuxtLink>
</template>
