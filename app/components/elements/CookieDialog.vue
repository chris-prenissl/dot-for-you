<script setup lang="ts">
const acceptCookieKey = "accept";
const acceptCookieValue = "yes";

const cookieAccept = useCookie(acceptCookieKey, {
	expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
});

function onAcceptCookies(): void {
	cookieAccept.value = acceptCookieValue;
}
</script>

<template>
	<div
		v-if="cookieAccept !== acceptCookieValue"
		class="fixed bottom-0 w-full z-50 flex flex-wrap gap-2 justify-center items-center bg-light_white p-2"
	>
		<p>Wir speichern lediglich ein Cookie für die Kenntnisnahme dieses Dialogs. Weitere Cookies oder Daten werden nicht erfasst.</p>
		<button
			class="p-4 bg-primary border-pink-400 border rounded-sm text-center text-l hover:bg-light_white hover:text-logo_text hover:drop-shadow-lg"
			@click="onAcceptCookies"
		>
			Zustimmung
		</button>
	</div>
</template>
