<template>
  <div class="text-text_default">
    <Navbar/>
    <Hero/>
    <Portfolio/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '~/components/sections/Navbar.vue'
import Hero from '~/components/sections/Hero.vue'
import CreatorStory from '~/components/sections/CreatorStory.vue'
import Portfolio from "~/components/sections/Portfolio.vue"
import Shop from '~/components/sections/Shop.vue'
import About from '~/components/sections/About.vue'
import Contact from "~/components/sections/Contact.vue";
import Footer from "~/components/sections/Footer.vue";

export default {
  components: {
    Footer,
    Contact,
    Navbar,
    Hero,
    CreatorStory,
    Portfolio,
    Shop,
    About
  }
}
</script>

