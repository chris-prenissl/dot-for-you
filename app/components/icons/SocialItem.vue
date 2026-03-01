<script setup lang="ts">
defineProps<{
	to: string;
	text: string;
}>();
</script>

<template>
	<NuxtLink
		:to="to"
		target="_blank"
		class="w-full md:w-auto flex flex-row justify-center items-center gap-2"
	>
		<slot />
		<p class="flex-1 min-w-0 text-text_on_primary break-all whitespace-normal">{{ text }}</p>
	</NuxtLink>
</template>
