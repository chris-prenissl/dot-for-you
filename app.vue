<template>
  <Navbar/>
  <Hero/>
  <Portfolio/>
  <Portfolio/>
  <Portfolio/>
  <Portfolio/>
</template>

<script>
import Navbar from '~/components/sections/Navbar.vue'
import Hero from '~/components/sections/Hero.vue'
import CreatorStory from '~/components/sections/CreatorStory.vue'
import Portfolio from "~/components/sections/Portfolio.vue"
import Shop from '~/components/sections/Shop.vue'
import About from '~/components/sections/About.vue'
import Footer from '~/components/sections/Footer.vue'

export default {
  components: {
    Navbar,
    Hero,
    CreatorStory,
    Portfolio,
    Shop,
    About,
    Footer
  }
}
</script>

