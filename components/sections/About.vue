<template>
  <section id="about" class="about-linear-gradient backdrop-blur flex flex-wrap gap-2 items-center justify-center z-6">
    <NuxtImg data-aos="fade-right" class="h-50svh md:w-1/2 md:max-w-screen-md border-8 content-center object-cover shadow-2xl" src="/melanie/melanie.jpg" format="webp"  sizes="sm:40svw lg:100svw" loading="lazy" placeholder alt="Melanie"/>
    <div data-aos="fade-left" class="md:max-w-screen-lg p-2 md:p-4 bg-light_white bg-opacity-50 rounded-l backdrop-blur-2xl shadow-2xl border-2 border-primary">
      <h2 class="p-2 text-3xl font-bold">About Me</h2>
      <p class="text-sm md:text-lg md:max-w-screen-l p-2 text-justify text-text_on_primary border-dotted">
        Mein Name ist Melanie Zimmer und ich wohne zusammen mit meinem Mann und unseren
        drei Katzen in Burglengenfeld. Hauptberuflich arbeite ich als allgemeinbildende Lehrerin an einer
        sonderpädagoischen Berufsschule. Meinen Ausgleich finde ich in meinem kreativen Hobby, welches sich zu einem
        „Kleingewerbe“ entwickelt hat. Danke für das bisherige große Interesse an meinen Kunstwerken.
      </p>
    </div>
  </section>
</template>

<style scoped>
.about-linear-gradient {
  background-size: cover !important;
  backdrop-filter: blur(10px);
  background: linear-gradient(to top, rgba(247, 211, 223, 1), rgba(249, 249, 249, 1));
}
</style>