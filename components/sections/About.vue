<template>
  <section id="about" class="about-linear-gradient backdrop-blur flex flex-wrap items-center justify-center gap-8">
    <img data-aos="fade-right" class="sm:w-40svh md:max-w-screen-lg border-8 content-center object-cover shadow-2xl" src="/public/melanie/melanie.jpg" alt="Melanie" />
    <div data-aos="fade-left" class="sm:w-40svh md:max-w-screen-lg p-2 sm:p-4 md:p-16 rounded-l backdrop-blur-2xl shadow-xl">
      <h2 class="p-2 sm:p4 text-4xl font-bold">Melanie</h2>
      <p class="p-2 sm:p4 md:text-lg md:max-w-screen-l text-justify text-text_on_primary border-dotted">Mein Name ist Melanie Zimmer und ich wohne zusammen mit meinem Mann und unseren
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
  backdrop-filter: blur(10px);
  background: linear-gradient(to bottom, rgba(247, 211, 223, 0.85) 0%, rgba(249, 249, 249, 0.94) 100%), url("/public/melanie/melanie_bg.png") no-repeat center;
}
</style>