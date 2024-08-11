<script setup lang="ts">
import type {Category} from "~/model/Category";
import CategoryItem from "~/components/elements/CategoryItem.vue";

const categories: Array<Category> = [
  {
    title: "Dotpainting",
    coverImgUrl: '/category_images/dotpainting_cover.png',
    description: "Punkt für Punkt kreiere ich mithilfe verschiedener Rundstäbchen kreative Mandalas und Muster auf " +
        "Keramik, Holz und anderen Materialien. Ich verwende dafür hochwertige Acryl - bzw. Keramikfarben, letztere sind " +
        "wasserfest. Ich verziere z.B. Tassen, Gläser, Schlüsselanhänger, Lesezeichen und bemale auch Leinwände."
  },
  {
    title: "Gießpulver",
    coverImgUrl: '/category_images/giesspulver_cover.png',
    description: "Das hochwertige Reliefgießpulver rühre ich mit Wasser an und gieße es dann in Form. Nach der " +
        "Trocknungszeit schleife und poliere ich die Figuren nach Bedarf. So entsteht zeitlose Deko, die mit Liebe von " +
        "Hand hergestellt wird."
  },
  {
    title: "Plotten",
    coverImgUrl: '/category_images/plotten_cover.png',
    description: "Plotten kommt aus dem Englischen “to plot” was “zeichnen” oder “darstellen” bedeutet. Es werden mit " +
        "Hilfe von Vektorgrafiken ausgewählte Motive auf unterschiedlichen Materialien übertragen. So verleihe ich " +
        "meinen Artikeln ihr individuelles und personalisiertes Design."
  },
  {
    title: 'Kerzen',
    coverImgUrl: '/category_images/kerzen_cover.png',
    description: "Zu vielen Anlässen passend verziere ich Kerzen mit schönen Motiven. Mein Sortiment umfasst Stab- und " +
        "Stumpenkerzen in verschiedenen Farben und Größen."
  },
  {
    title: 'Holzklötzchen',
    coverImgUrl: '/category_images/kloetzchen_cover.png',
    description: 'Die natürlichen und robusten Klötzchen in verschiedenen Holzarten liegen voll im Trend. Das Holz ' +
        'wird je nach Bastelidee von mir gesägt, geschliffen und geklebt. Gerne verwende ich die Holzklötzchen als ' +
        'Alternative zu Folienverpackungen.'
  },
  {
    title: 'Trockenblumen',
    coverImgUrl: '/category_images/blumen_cover.png',
    description: 'Mit verschiedenen Trockenblumen verschönere ich viele meiner Artikel oder binde kleine Sträuße für ' +
        'die Blumenmädchen. Ebenso sind die haltbaren Blumen ein toller Blickfang in den handgegossenen Vasen.'
  }
]
</script>

<template>
  <section id="portfolio" class="min-h-svh creator-linear-gradient z-8">
    <h1 class="section-header">Portfolio</h1>
    <div
        v-for="(category, categoryIndex) in categories"
        :key="category.title">
      <CategoryItem :grid-order="categoryIndex % 2" :category="category"/>
    </div>
  </section>
</template>

<style scoped>
.creator-linear-gradient {
  background: radial-gradient(circle, #F6E6EEFF 0%, #f9f9f9);
}

.category-min-h {
  min-height: calc(100svh - 6rem);
}
</style>