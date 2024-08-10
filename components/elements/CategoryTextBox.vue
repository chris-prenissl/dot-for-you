<script lang="ts">
export default {
  props: {
    title: {type: String},
    description: {type: String}
  }
}
</script>

<template>
  <div class="h-auto sm:w-1/2 content-center bg-cover bg-center p-8 border-primary border-2">
    <h2 class="text-2xl pb-2 sm:pb-4">{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>
