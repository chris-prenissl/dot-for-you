<script setup lang="ts">
  const menuOpen = ref(false);
  const heroIntersection = ref(false);

  function closeMenu() {
    menuOpen.value = false;
  }

  function onToggleMenu(): void {
    menuOpen.value = !menuOpen.value;
  }

  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          heroIntersection.value = entry.isIntersecting;
      })
    })
    const logo = document.getElementById('hero-element')!;
    observer.observe(logo);
  });
</script>

<template>
  <header :class="menuOpen ? 'h-auto' : 'h-24'" class="h-20 px-2 w-full nav-radial-gradiant bg-primary fixed top-0 z-50 shadow">
    <div :class="menuOpen ? 'flex-wrap' : '' " class="max-w-screen-lg py-4 mx-auto flex sm:flex-nowrap items-center justify-between">
      <div id="logo">
        <a href="#" class="cursor-pointer">
          <img class="h-12 w-auto object-contain" src="assets/logo.svg" alt=""/>
        </a>
      </div>
      <input @input="onToggleMenu" id="navbar-open" class="peer hidden" type="checkbox"/>
      <label class="p-2 mt-2 cursor-pointer sm:hidden" for="navbar-open">
        <span class="sr-only">Toggle Navigation</span>
        <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet"
             viewBox="0 0 448 512">
          <path fill="currentColor"
                d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"/>
        </svg>
        <span v-else class="font-light">✖️</span>
      </label>
      <nav :class="!menuOpen ? 'hidden' : ''" class="w-full sm:w-auto text-nowrap p-8 sm:block">
        <ul aria-label="Primary" class="text-2xl sm:text-xs flex text-right flex-col sm:flex-row gap-2 sm:gap-8">
          <li>
            <a @click="closeMenu" class="hover:text-logo_text" href="#handmade"><div class="w-full">Handmade</div></a>
          </li>
          <li>
            <a @click="closeMenu" class="hover:text-logo_text" href="#gallery">Galerie</a>
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