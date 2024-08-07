<template>
  <div class="overflow-x-hidden text-text_default bg-light_white">
    <Navbar/>
    <main class="min-w-60">
      <Hero/>
      <Categories/>
      <Gallery/>
      <About/>
      <Contact/>
    </main>
    <Footer/>
    <CookieDialog/>
  </div>
</template>

<script lang="ts">
import Navbar from '~/components/sections/Navbar.vue'
import Hero from '~/components/sections/Hero.vue'
import About from '~/components/sections/About.vue'
import Contact from "~/components/sections/Contact.vue";
import Footer from "~/components/sections/Footer.vue";
import Gallery from "~/components/sections/Gallery.vue";
import Categories from "~/components/sections/Categories.vue";
import CookieDialog from "~/components/elements/CookieDialog.vue";

export default {
  components: {
    Categories,
    CookieDialog,
    Gallery,
    Footer,
    Contact,
    Navbar,
    Hero,
    About
  }
}
</script>

