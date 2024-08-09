<script setup lang="ts">
import type {Category} from "~/model/Category";
import CategoryItem from "~/components/elements/CategoryItem.vue";

const categories: Array<Category> = [
  {
    title: "Dotpainting",
    images: [
      {
        title: 'Dotpainting 1',
        url: '/category_images/dotpainting/dotpainting1.png'
      },
      {
        title: 'Dotpainting 2',
        url: '/category_images/dotpainting/dotpainting2.png'
      },
      {
        title: 'Dotpainting 3',
        url: '/category_images/dotpainting/dotpainting3.png'
      },
      {
        title: 'Dotpainting 4',
        url: '/category_images/dotpainting/dotpainting4.png'
      },
      {
        title: 'Dotpainting 5',
        url: '/category_images/dotpainting/dotpainting5.png'
      },
      {
        title: 'Dotpainting 6',
        url: '/category_images/dotpainting/dotpainting6.png'
      },
      {
        title: 'Dotpainting 7',
        url: '/category_images/dotpainting/dotpainting7.png'
      },
      {
        title: 'Dotpainting 8',
        url: '/category_images/dotpainting/dotpainting8.png'
      }
    ],
    description: "Punkt für Punkt kreiere ich mithilfe verschiedener Rundstäbchen kreative Mandalas und Muster auf " +
        "Keramik, Holz und anderen Materialien. Ich verwende dafür hochwertige Acryl - bzw. Keramikfarben, letztere sind " +
        "wasserfest. Ich verziere z.B. Tassen, Gläser, Schlüsselanhänger, Lesezeichen und bemale auch Leinwände."
  },
  {
    title: "Gießpulver",
    images: [
      {
        title: 'Gießpulver 1',
        url: '/category_images/giesspulver/giesspulver1.png'
      },
      {
        title: 'Gießpulver 2',
        url: '/category_images/giesspulver/giesspulver2.png'
      },
      {
        title: 'Gießpulver 3',
        url: '/category_images/giesspulver/giesspulver3.png'
      },
      {
        title: 'Gießpulver 4',
        url: '/category_images/giesspulver/giesspulver4.png'
      },
      {
        title: 'Gießpulver 5',
        url: '/category_images/giesspulver/giesspulver5.png'
      }
    ],
    description: "Das hochwertige Reliefgießpulver rühre ich mit Wasser an und gieße es dann in Form. Nach der " +
        "Trocknungszeit schleife und poliere ich die Figuren nach Bedarf. So entsteht zeitlose Deko, die mit Liebe von " +
        "Hand hergestellt wird."
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
    title: 'Kerzen',
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
    description: "Zu vielen Anlässen passend verziere ich Kerzen mit schönen Motiven. Mein Sortiment umfasst Stab- und " +
        "Stumpenkerzen in verschiedenen Farben und Größen."
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