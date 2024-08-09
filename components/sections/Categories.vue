<script setup lang="ts">
import type {Category} from "~/model/Category";
import CategoryItem from "~/components/elements/CategoryItem.vue";

const categories: Array<Category> = [
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
    description: "* Stabkerzen\n-weiß 2,3/20\n-farbig lang 2,2/18\n-farbig kurz 2,2/10\n(Farbauswahl je nach Vorrat)"
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
    description: 'Natürliche und robuste Klötzchen in verschiedenen Holzarten, die je nach Bastelidee von mir gesägt, geschliffen und geklebt werden.'
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
    description: 'Mit verschiedenen Trockenblumen verschönere ich viele meiner Artikel oder binde kleine Sträuße für die Blumenmädchen. Ebenso sind die haltbaren Blumen ein toller Blickfang in den handgegossenen Vasen.'
  }
]

defineProps({
  loremText: {
    type: String,
    default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum nibh a lorem rutrum, sit amet euismod augue egestas. Aenean id condimentum justo, vel pharetra magna. Suspendisse a nunc ornare, tempus massa et, dignissim justo. Fusce est metus, rhoncus non luctus nec, porttitor vel quam."
  }
});
</script>

<template>
  <section id="handmade" class="creator-linear-gradient">
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