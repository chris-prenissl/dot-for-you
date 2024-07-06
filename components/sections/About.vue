<template>
  <section id="about" class="p-4 md:p-20 about-linear-gradient backdrop-blur min-h-svh flex flex-wrap items-center justify-center gap-8">
    <img data-aos="fade-right" class="sm:w-40svh md:max-w-screen-lg border-8 content-center object-cover shadow-2xl" src="/public/melanie/melanie.jpg" alt="Melanie" />
    <div data-aos="fade-left" class="sm:w-40svh md:max-w-screen-lg p-4 md:p-16 bg-primary shadow-2xl">
      <h2 class="mb-4 md:mb-16 text-3xl font-bold">Melanie</h2>
      <p class="md:text-lg md:max-w-screen-lg">Mein Name ist Melanie Zimmer und ich wohne zusammen mit meinem Mann und unseren
        drei Katzen in Burglengenfeld. Hauptberuflich arbeite ich als allgemeinbildende Lehrerin an einer
        sonderpädagoischen Berufsschule. Meinen Ausgleich finde ich in meinem kreativen Hobby, welches sich zu einem
        „Kleingewerbe“ entwickelt hat. Dafür bedanke ich mich von Herzen, denn ohne das große Interesse von euch,
        wäre das nie möglich gewesen.
      </p>
    </div>
  </section>
</template>

<style scoped>
.about-linear-gradient {
  background-size: cover !important;
  backdrop-filter: blur(30px);
  background: linear-gradient(to top, rgba(247, 211, 223, 0.8) 10%, rgba(249, 249, 249, 0.8) 100%), url("/public/melanie/melanie_bg.png") no-repeat center;
}
</style>