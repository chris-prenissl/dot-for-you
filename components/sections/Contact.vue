<template>
  <section id="contact" class="m-auto flex flex-col bg-primary text-light_text z-5">
    <h1 class="section-header text-text_on_primary">Kontakt</h1>
    <div class="m-auto flex flex-col justify-evenly py-2 md:py-8">
      <div class="flex flex-col items-start flex-wrap md:flex-row md:items-center px-16 py-2 md:py-16 gap-1 md:gap-6">
        <SocialItem href="https://wa.me/c/491637917232" text="WhatsApp Shop">
          <WhatsAppBusiness/>
        </SocialItem>
        <SocialItem href="https://wa.me/491637917232" text="WhatsApp Chat">
          <WhatsApp/>
        </SocialItem>
        <SocialItem href="https://www.instagram.com/dot_for_you_" text="Instagram">
          <Instagram/>
        </SocialItem>
        <SocialItem href="https://m.facebook.com/61560145346862/" text="Facebook">
          <Facebook/>
        </SocialItem>
      </div>
      <div
          class="flex flex-col flex-wrap lg:flex-row gap-1 justify-center items-center m-auto text-center">
        <AddressItem href="tel:+491637917232" text="+49 163 791 72 32">
          <Phone/>
        </AddressItem>
        <AddressItem
            href="https://maps.apple.com/?address=Augustenstra%C3%9Fe%2020,%2093133%20Burglengenfeld,%20Deutschland&ll=49.205873,12.053873"
            text="93133 Burglengenfeld, Augustenstraße 20">
          <Location/>
        </AddressItem>
        <AddressItem href="mailto:dotforyou@gmx.de" text="dotforyou@gmx.de">
          <EMail/>
        </AddressItem>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AddressItem from "~/components/elements/AddressItem.vue";
import Location from "~/components/svgs/Location.vue";
import EMail from "~/components/svgs/EMail.vue";
import Phone from "~/components/svgs/Phone.vue";
import SocialItem from "~/components/elements/SocialItem.vue";
import Facebook from "~/components/svgs/Facebook.vue";
import Instagram from "~/components/svgs/Instagram.vue";
import WhatsApp from "~/components/svgs/WhatsApp.vue";
import WhatsAppBusiness from "~/components/svgs/WhatsAppBusiness.vue";
</script>