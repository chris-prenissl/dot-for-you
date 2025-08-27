<script setup lang="ts">
import Navbar from '~/components/sections/Navbar.vue'
import Hero from '~/components/sections/Hero.vue'
import About from '~/components/sections/About.vue'
import Contact from "~/components/sections/Contact.vue";
import Footer from "~/components/sections/Footer.vue";
import Portfolio from "~/components/sections/Portfolio.vue";
import CookieDialog from "~/components/elements/CookieDialog.vue";
import Gallery from "~/components/sections/Gallery.vue";
import Announcements from "~/components/sections/Announcements.vue";
import Shop from "~/components/sections/Shop.vue";
import ScrollToTopFab from "~/components/elements/ScrollToTopFab.vue";
</script>

<template>
  <div class="overflow-x-hidden text-text_default bg-light_white">
    <Navbar/>
    <main class="min-w-60">
      <Hero/>
      <Shop/>
      <Announcements/>
      <Gallery/>
      <Portfolio/>
      <About/>
      <Contact/>
    </main>
    <Footer/>
    <ScrollToTopFab/>
    <CookieDialog/>
  </div>
</template>

