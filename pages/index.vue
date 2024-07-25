<template>
  <div class="overflow-x-hidden text-text_default bg-base">
    <Navbar/>
    <main class="min-w-60">
      <Hero/>
      <CreatorStory/>
      <Gallery/>
      <Shop/>
      <About/>
      <Contact/>
    </main>
    <Footer/>
  </div>
</template>

<script lang="ts">
import Navbar from '~/components/sections/Navbar.vue'
import Hero from '~/components/sections/Hero.vue'
import Shop from '~/components/sections/Shop.vue'
import About from '~/components/sections/About.vue'
import Contact from "~/components/sections/Contact.vue";
import Footer from "~/components/sections/Footer.vue";
import Gallery from "~/components/sections/Gallery.vue";
import CreatorStory from "~/components/sections/CreatorStory.vue";

export default {
  components: {
    CreatorStory,
    Gallery,
    Footer,
    Contact,
    Navbar,
    Hero,
    Shop,
    About
  }
}
</script>

