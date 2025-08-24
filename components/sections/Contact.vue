<template>
  <section id="contact" class="m-auto flex flex-col bg-primary text-light_text z-5">
    <h1 class="section-header text-text_on_primary">Kontakt</h1>
    <div class="m-auto flex flex-col justify-evenly py-2 md:py-8">
      <div class="flex flex-col items-start flex-wrap md:flex-row md:items-center px-16 py-2 md:py-16 gap-1 md:gap-6 md:justify-center">
        <SocialItem href="https://wa.me/c/491637917232" text="WhatsApp Katalog">
          <WhatsAppBusiness/>
        </SocialItem>
        <SocialItem href="https://wa.me/491637917232" text="WhatsApp Chat">
          <WhatsApp/>
        </SocialItem>
        <SocialItem href="https://www.instagram.com/dot_for_you_" text="DotForYou">
          <Instagram/>
        </SocialItem>
        <SocialItem href="https://www.instagram.com/derkleineshop_burglengenfeld" text="Der kleine Shop">
          <Instagram/>
        </SocialItem>
      </div>
      <div
          class="flex flex-col flex-wrap lg:flex-row gap-1 lg:justify-center items-start lg:items-center m-auto text-center">
        <AddressItem href="tel:+491637917232" text="+49 163 791 72 32">
          <Phone/>
        </AddressItem>
        <AddressItem
            href="https://maps.apple.com/?address=Augustenstra%C3%9Fe%2020,%2093133%20Burglengenfeld,%20Deutschland&ll=49.205873,12.053873"
            text="93133 Burglengenfeld, Augustenstraße 20">
          <Location/>
        </AddressItem>
      </div>
      <div class="m-auto py-8 text-center">
        <h2 class="text-xl text-gray-900">
          Abonniere den
          <a href="https://whatsapp.com/channel/0029Vb6WYWD0gcfODVVYva24" target="_blank"  class="underline">
            Whatsappkanal
          </a>
        </h2>
        <p class="mt-2">
          Erfahre immer von den neuesten Kollektionen und exklusivsten Angeboten.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AddressItem from "~/components/elements/AddressItem.vue";
import Location from "~/components/svgs/Location.vue";
import Phone from "~/components/svgs/Phone.vue";
import SocialItem from "~/components/elements/SocialItem.vue";
import Instagram from "~/components/svgs/Instagram.vue";
import WhatsApp from "~/components/svgs/WhatsApp.vue";
import WhatsAppBusiness from "~/components/svgs/WhatsAppBusiness.vue";
</script>
