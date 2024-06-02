<template>
  <div class="text-text_default">
    <Navbar/>
    <Hero/>
    <Gallery/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '~/components/sections/Navbar.vue'
import Hero from '~/components/sections/Hero.vue'
import Shop from '~/components/sections/Shop.vue'
import About from '~/components/sections/About.vue'
import Contact from "~/components/sections/Contact.vue";
import Footer from "~/components/sections/Footer.vue";
import Gallery from "~/components/sections/Gallery.vue";

export default {
  components: {
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

