<script setup lang="ts">
  const menuOpen = ref(false)

  function closeMenu() {
    menuOpen.value = false;
  }

  function onToggleMenu(): void {
    menuOpen.value = !menuOpen.value;
  }
</script>

<template>
  <header class="w-full nav-radial-gradiant bg-primary fixed top-0 z-50 shadow">
    <div class="max-w-screen-lg px-8 py-4 mx-auto flex flex-wrap items-center justify-between">
      <div class="h-12 md:h-24">
        <a href="#" class="cursor-pointer">
          <img class="h-full object-contain" src="assets/logo.svg" alt=""/>
        </a>
      </div>
      <input @input="onToggleMenu" id="navbar-open" class="peer hidden" type="checkbox"/>
      <label class="mt-2 cursor-pointer text-4xl sm:hidden" for="navbar-open">
        <span class="sr-only">Toggle Navigation</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet"
             viewBox="0 0 448 512">
          <path fill="currentColor"
                d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"/>
        </svg>
      </label>
      <nav :class="!menuOpen ? 'hidden' : ''" class="w-full sm:w-auto pl-2 py-6 sm:block">
        <ul aria-label="Primary" class="flex text-right flex-col sm:flex-row sm:gap-4">
          <li>
            <a @click="closeMenu" class="hover:text-logo_text" href="#handmade"><div class="w-full">Handmade</div></a>
          </li>
          <li>
            <a @click="closeMenu" class="hover:text-logo_text" href="#gallery">Galerie</a>
          </li>
          <li>
            <a @click="closeMenu" class="text-logo_text hover:text-amber-400" href="#shop">Shop</a>
          </li>
          <li>
            <a @click="closeMenu" class="hover:text-logo_text" href="#about">About Me</a>
          </li>
          <li>
            <a @click="closeMenu" class="hover:text-logo_text" href="#contact">Kontakt</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <div @click="closeMenu" :class="!menuOpen ? 'hidden' : ''" class="z-40 md:hidden overlay fixed inset-0 bg-transparent"></div>
</template>

<style scoped>
.nav-radial-gradiant {
  background: radial-gradient(circle, #f9f9f9 70%, #f7d3df);
}
</style>