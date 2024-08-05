<script setup lang="ts">
const cookieAccept = useCookie('accept', {
  //expires in one month
  expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
});

function onAcceptCookies(): void {
  cookieAccept.value = 'true';
}
</script>

<template>
  <div v-if="!cookieAccept" class="fixed bottom-0 w-full z-50 flex flex-wrap gap-2 justify-center items-center bg-light_white p-2">
    <p>Wir speichern lediglich ein Cookie für die Kenntnisnahme dieses Dialogs. Weitere Cookies oder Daten werden nicht erfasst.</p>
    <button @click="onAcceptCookies" class="p-4 bg-primary border-pink-400 border rounded-sm text-center text-l hover:bg-light_white hover:text-logo_text hover:drop-shadow-lg">Zustimmung</button>
  </div>
</template>