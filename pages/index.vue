<template>
  <div class="text-text_default">
    <Navbar/>
    <Hero/>
    <CreatorStory/>
    <Gallery/>
    <Shop/>
    <About/>
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

