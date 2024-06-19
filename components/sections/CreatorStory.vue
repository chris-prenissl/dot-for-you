<script setup lang="ts">
import { defineProps } from "vue";
import StoryItem from "~/components/elements/StoryItem.vue";

defineProps({
  loremText: {
    type: String,
    default:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum nibh a lorem rutrum, sit amet euismod augue egestas. Aenean id condimentum justo, vel pharetra magna. Suspendisse a nunc ornare, tempus massa et, dignissim justo. Fusce est metus, rhoncus non luctus nec, porttitor vel quam. Curabitur est erat, elementum id aliquam at, consectetur a tellus. Donec id luctus augue. Nullam at commodo enim, sed porttitor lectus. Curabitur non risus ac ante ornare porttitor a ut ipsum. Donec a tellus erat."
  }
});
</script>

<template>
  <section id="handmade" class="min-h-lvh p-8 flex flex-col justify-items-center items-center gap-8">
    <StoryItem src-path="/gallery_images/gallery_1.jpg" title="Für deinen Anlass" :description="loremText"
               :grid-order="1"/>
    <StoryItem src-path="/gallery_images/gallery_2.jpg" title="Handmade" :description="loremText"/>
    <StoryItem src-path="/gallery_images/gallery_3.jpg" title="Schenken" :description="loremText" :grid-order="1"/>
  </section>
</template>