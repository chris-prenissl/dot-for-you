<template>
  <header class="nav_background bg-primary fixed top-0 z-50 px-8 w-svw shadow">
    <div class="relative mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
      <div class="logo h-12 md:h-24">
        <img class="h-full object-contain" src="assets/logo.svg" alt=""/>
      </div>
      <input class="peer hidden" type="checkbox" id="navbar-open"/>
      <label class="absolute right-0 mt-4 cursor-pointer text-xl sm:hidden" for="navbar-open">
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
            <a class="text-text_default hover:text-logo_text" href="#">Handmade</a>
          </li>
          <li>
            <a class="text-text_default hover:text-logo_text" href="#">Gallerie</a>
          </li>
          <li>
            <a class="text-logo_text hover:text-amber-400" href="#">Shop</a>
          </li>
          <li>
            <a class="text-text_default hover:text-logo_text" href="#">About Me</a>
          </li>
          <li>
            <a class="text-text_default hover:text-logo_text" href="#">Kontakt</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>