<template>
  <section id="about" class="about-linear-gradient backdrop-blur content-center z-6">
    <div class="mx-auto pt-4 flex flex-wrap gap-2 justify-center items-stretch">
      <NuxtImg data-aos="fade-right" class="w-full sm:w-2/5 md:max-w-screen-sm border-8 content-center object-cover shadow-2xl" src="/melanie/melanie.jpg" format="webp"  sizes="sm:100svw lg:100svw" loading="lazy" placeholder alt="Melanie"/>
      <div data-aos="fade-left" class="sm:w-2/5 md:max-w-screen-sm p-2 md:p-4 content-center bg-light_white bg-opacity-50 rounded-l backdrop-blur-2xl shadow-2xl border-2 border-primary">
        <h2 class="p-2 text-3xl sm:text-xl font-bold">Über mich</h2>
        <p class="md:max-w-screen-l text-m  p-2 text-justify text-text_on_primary border-dotted">
          Hey, ich bin Melanie Zimmer und lebe mit meinem Mann in Burglengenfeld. Hauptberuflich unterrichte ich an
          einer sonderpädagogischen Berufsschule.
          Vor einigen Jahren habe ich meine Leidenschaft für handgefertigte Dekoration entdeckt.
          Was ursprünglich als kreatives Hobby begann, hat sich mittlerweile zu meiner Marke „dot for you“ entwickelt.<br/>
          Meine Produkte biete ich in meinem eigenen Verkaufsregal „der kleine Shop“ in Burglengenfeld sowie im Klosterladen in Schwandorf an.
          Zudem bin ich auf verschiedenen Märkten vertreten. Die Termine findest du unter „Markttermine“.<br/>
          Viel Spaß beim Stöbern!
          Eure Melanie
        </p>
      </div>
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