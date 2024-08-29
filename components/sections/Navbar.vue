<script setup lang="ts">
import Logo from "~/components/svgs/Logo.vue";

const menuOpen = ref(false);

function closeMenu() {
  menuOpen.value = false;
}

function onToggleMenu(): void {
  menuOpen.value = !menuOpen.value;
}
</script>

<template>
  <header :class="menuOpen ? 'h-auto' : ''" class="h-24 w-full nav-radial-gradiant bg-primary fixed top-0 z-50 shadow">
    <div :class="menuOpen ? 'flex-wrap' : '' "
         class="max-w-screen-lg mx-auto flex md:flex-nowrap items-center justify-between p-2">
      <NuxtLink class="cursor-pointer" id="logo" to="/" @click="closeMenu">
        <Logo class="h-18 md:w-auto"/>
      </NuxtLink>
      <input @input="onToggleMenu" id="navbar-open" class="peer hidden" type="checkbox"/>
      <label class="p-2 mt-2 cursor-pointer md:hidden" for="navbar-open">
        <span class="sr-only">Toggle Navigation</span>
        <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em"
             preserveAspectRatio="xMidYMid meet"
             viewBox="0 0 448 512">
          <path fill="currentColor"
                d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"/>
        </svg>
        <span v-else class="font-light">✖️</span>
      </label>
      <nav :class="!menuOpen ? 'hidden' : ''" class="w-full md:w-auto text-nowrap p-8 md:block">
        <ul aria-label="Primary" class="text-2xl md:text-lg flex text-right flex-col md:flex-row gap-2 md:gap-8">
          <li>
            <NuxtLink @click="closeMenu" class="text-logo_text hover:text-text_on_primary" to="/">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink @click="closeMenu" class="hover:text-logo_text" to="#announcements">Ankündigungen</NuxtLink>
          </li>
          <li>
            <NuxtLink @click="closeMenu" class="hover:text-logo_text" to="#gallery">Galerie</NuxtLink>
          </li>
          <li>
            <NuxtLink @click="closeMenu" class="hover:text-logo_text" to="#portfolio">Portfolio</NuxtLink>
          </li>
          <li>
            <NuxtLink @click="closeMenu" class="hover:text-logo_text" to="#about">About Me</NuxtLink>
          </li>
          <li>
            <NuxtLink @click="closeMenu" class="hover:text-logo_text" to="#contact">Kontakt</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <div @click="closeMenu" :class="!menuOpen ? 'hidden' : ''"
       class="z-40 md:hidden overlay fixed inset-0 bg-transparent"></div>
</template>

<style scoped>
.nav-radial-gradiant {
  background: radial-gradient(circle, #f9f9f9 70%, #f7d3df);
}
</style>