<template>
  <section id="shop" class="portfolio-min-h mt-4 z-7">
    <h1 class="section-header">Mein Shop</h1>
    <div class="md:max-w-screen-xl p-6 flex flex-col lg:flex-row m-auto">
      <NuxtImg class="object-fill max-h-dvh" src="/shop.jpeg" title="Shop" img-sizes="sm:40svw lg:100svw" data-aos="fade-left"/>
      <div class="content-center bg-cover bg-center p-8 border-stone-300 border-2">
        <p>✨ Klein, aber fein<br/>
          <br/>
          „Der kleine Shop“ befindet sich bei mir zuhause. In meinem Verkaufsregal kannst du eine handverlesene
          Auswahl an liebevoll handgefertigten Schätzen entdecken. Das Sortiment passt sich den Jahreszeiten an
          – so kannst du immer Neues entdecken!<br/>Ob für dich selbst oder als Geschenk: Deinen Lieblingsartikel
          verpacke ich dir gerne direkt vor Ort geschenkfertig.<br/>
          <br/>
          Öffnungszeiten:<br/>
          Montag bis Sonntag nach Vereinbarung<br/>
          ganz einfach unter<br/>
          <a href="https://wa.me/491637917232" target="_blank" class="underline">0163/7917232 (WhatsApp)</a>.
        </p>
        <div class="md:w-1/2 lg:w-auto py-4">
          <SocialItem class="p-4 bg-stone-100 border-stone-600 border rounded-sm text-center text-l hover:bg-light_white hover:text-logo_text hover:drop-shadow-lg" href="https://www.instagram.com/derkleineshop_burglengenfeld" text="Der kleine Shop">
            <Instagram/>
          </SocialItem>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.creator-linear-gradient {
  background: radial-gradient(circle, #F6E6EEFF 0%, #f9f9f9);
}

.portfolio-min-h {
  min-height: calc(100svh - 6rem);
}
</style>
<script setup lang="ts">
import SocialItem from "~/components/elements/SocialItem.vue";
import Instagram from "~/components/svgs/Instagram.vue";
</script>