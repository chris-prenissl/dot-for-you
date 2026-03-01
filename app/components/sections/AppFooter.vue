<template>
	<footer class="text-text_default p-4 z-4">
		<div class="flex justify-center space-x-4">
			<NuxtLink
				to="/impressum"
				target="_blank"
				class="hover:underline"
			>Impressum</NuxtLink>
			<NuxtLink
				to="/datenschutz"
				target="_blank"
				class="hover:underline"
			>Datenschutz</NuxtLink>
			<NuxtLink
				to="/sicherheitshinweise"
				target="_blank"
				class="hover:underline"
			>Sicherheitshinweise</NuxtLink>
		</div>

		<div class="text-center mt-2 text-sm">
			&copy; 2024 - {{ new Date().getFullYear() }} Christoph Prenissl. All rights reserved.
		</div>
	</footer>
</template>
