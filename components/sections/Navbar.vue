<template>
  <header class="nav_background bg-primary sticky top-0 z-50 px-8 shadow">
    <div class="relative mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
      <div class="h-16 md:h-24 max-w-full">
        <img class="h-full object-contain" src="assets/logo.svg" alt=""/>
      </div>
      <input class="peer hidden" type="checkbox" id="navbar-open"/>
      <label class="absolute top-1/3 right-0 mt-1 cursor-pointer text-xl sm:hidden" for="navbar-open">
        <span class="sr-only">Toggle Navigation</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet"
             viewBox="0 0 448 512">
          <path fill="currentColor"
                d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"/>
        </svg>
      </label>
      <nav aria-label="Header Navigation" class="peer-checked:block hidden pl-2 py-6 sm:block sm:py-0">
        <ul class="flex text-center flex-col gap-y-4 sm:flex-row sm:gap-x-8">
          <li>
            <NavItem href="#" text="Handmade"/>
          </li>
          <li>
            <NavItem href="#" text="Gallerie"/>
          </li>
          <li>
            <NavItemSpecial href="#" text="Shop"/>
          </li>
          <li>
            <NavItem href="#" text="About"/>
          </li>
          <li>
            <NavItem href="#" text="Kontakt"/>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script setup lang="ts">
import NavItem from "~/components/elements/NavItem.vue";
import NavItemSpecial from "~/components/elements/NavItemSpecial.vue";
</script>