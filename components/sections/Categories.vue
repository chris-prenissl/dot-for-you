<script setup lang="ts">
import type {Category} from "~/model/Category";
import CategoryItem from "~/components/elements/CategoryItem.vue";

const categories: Array<Category> = [
  {
    title: 'Kerzen mit Motiven zu vielen Anlässen',
    images: [
      {
        title: 'Kerze 1',
        description: 'Kerze 1',
        url: '/category_images/kerzen/kerze1.png'
      },
      {
        title: 'Kerze 2',
        description: 'Kerze 2',
        url: '/category_images/kerzen/kerze2.png'
      },
      {
        title: 'Kerze 3',
        description: 'Kerze 3',
        url: '/category_images/kerzen/kerze3.png'
      },
      {
        title: 'Kerze 4',
        description: 'Kerze 4',
        url: '/category_images/kerzen/kerze4.png'
      },
    ],
    description: '- Stabkerzen'
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