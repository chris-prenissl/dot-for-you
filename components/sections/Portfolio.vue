<script setup lang="ts">
import type {Category} from "~/model/Category";
import CategoryItem from "~/components/elements/CategoryItem.vue";

const categories: Array<Category> = [
  {
    title: "Dotpainting",
    images: [

    ],
    description: "Punkt für Punkt kreiere ich mithilfe verschiedener Rundstäbchen kreative Mandalas und Muster auf " +
        "Keramik, Holz und anderen Materialien. Ich verwende dafür hochwertige Acryl - bzw. Keramikfarben, letztere sind " +
        "wasserfest. Ich verziere z.B. Tassen, Gläser, Schlüsselanhänger, Lesezeichen und bemale auch Leinwände."
  },
  {
    title: "Gießpulver",
    images: [

    ],
    description: ""
  },
  {
    title: "Plotten",
    images: [
      {
        title: 'Plotten 1',
        url: '/category_images/plotten/plotten1.png'
      },
      {
        title: 'Plotten 2',
        url: '/category_images/plotten/plotten2.png'
      },
      {
        title: 'Plotten 3',
        url: '/category_images/plotten/plotten3.png'
      },
      {
        title: 'Plotten 4',
        url: '/category_images/plotten/plotten4.png'
      },
    ],
    description: "Plotten kommt aus dem Englischen “to plot” was “zeichnen” oder “darstellen” bedeutet. Es werden mit " +
        "Hilfe von Vektorgrafiken ausgewählte Motive auf unterschiedlichen Materialien übertragen. So verleihe ich " +
        "meinen Artikeln ihr individuelles und personalisiertes Design."
  },
  {
    title: 'Kerzen mit Motiven zu vielen Anlässen',
    images: [
      {
        title: 'Kerze 1',
        url: '/category_images/kerzen/kerze1.png'
      },
      {
        title: 'Kerze 2',
        url: '/category_images/kerzen/kerze2.png'
      },
      {
        title: 'Kerze 3',
        url: '/category_images/kerzen/kerze3.png'
      },
      {
        title: 'Kerze 4',
        url: '/category_images/kerzen/kerze4.png'
      },
    ],
    description: "* Stabkerzen -weiß 2,3/20 -farbig lang 2,2/18 -farbig kurz 2,2/10 (Farbauswahl je nach Vorrat)"
  },
  {
    title: 'Holzklötzchen',
    images: [
      {
        title: 'Klötzchen 1',
        url: '/category_images/holzkloetzchen/kloetzchen1.png'
      },
      {
        title: 'Klötzchen 2',
        url: '/category_images/holzkloetzchen/kloetzchen2.png'
      },
      {
        title: 'Klötzchen 3',
        url: '/category_images/holzkloetzchen/kloetzchen3.png'
      },
      {
        title: 'Klötzchen 4',
        url: '/category_images/holzkloetzchen/kloetzchen4.png'
      },
      {
        title: 'Klötzchen 5',
        url: '/category_images/holzkloetzchen/kloetzchen5.png'
      }
    ],
    description: 'Natürliche und robuste Klötzchen in verschiedenen Holzarten, die je nach Bastelidee von mir gesägt, ' +
        'geschliffen und geklebt werden.'
  },
  {
    title: 'Trockenblumen',
    images: [
      {
        title: 'Blumen 1',
        url: '/category_images/trockenblumen/blumen1.png'
      },
      {
        title: 'Blumen 2',
        url: '/category_images/trockenblumen/blumen2.png'
      },
      {
        title: 'Blumen 3',
        url: '/category_images/trockenblumen/blumen3.png'
      },
      {
        title: 'Blumen 4',
        url: '/category_images/trockenblumen/blumen4.png'
      },
      {
        title: 'Blumen 5',
        url: '/category_images/trockenblumen/blumen5.png'
      },
      {
        title: 'Blumen 6',
        url: '/category_images/trockenblumen/blumen6.png'
      },
      {
        title: 'Blumen 7',
        url: '/category_images/trockenblumen/blumen7.png'
      },
      {
        title: 'Blumen 8',
        url: '/category_images/trockenblumen/blumen8.png'
      },
    ],
    description: 'Mit verschiedenen Trockenblumen verschönere ich viele meiner Artikel oder binde kleine Sträuße für ' +
        'die Blumenmädchen. Ebenso sind die haltbaren Blumen ein toller Blickfang in den handgegossenen Vasen.'
  }
]
</script>

<template>
  <section id="portfolio" class="creator-linear-gradient">
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
  background: radial-gradient(circle, #f7d3df 0%, #f9f9f9);
}
</style>