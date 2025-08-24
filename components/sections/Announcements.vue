<script setup lang="ts">
import type {SanityDocument} from "@sanity/client";

const ANNOUNCEMENTS_QUERY = groq`*[
  _type == "announcement"
  && defined(slug.current)
  && dateTime(expiredAt) > dateTime(now())
]|order(date)`;

const {data: announcements} = await useSanityQuery<SanityDocument>(ANNOUNCEMENTS_QUERY);
</script>

<template>
  <section id="announcements" class="mt-4 z-9">
    <h1 class="section-header">Markttermine</h1>
    <div class="max-w-2xl mx-auto p-6 m-9 bg-primary shadow-lg rounded-2xl">
      <div class="space-y-4">
        <div v-for="announcement in announcements"
             :key="announcement.dateText + announcement.title + announcement.date"
             class="p-4 bg-light_white rounded-lg shadow-sm">
          <h3 class="text-xl font-medium">{{ announcement.title }}</h3>
          <time datetime="{{ announcement.date }}" class="text-sm">{{ new Date(announcement.date).toLocaleDateString() + ' - ' + announcement.location }}</time>
          <p v-if="announcement.description" class="text-text_default">{{ announcement.description }}</p>
        </div>
        <div v-if="!announcements">
          <h3 class="text-xl text-center font-medium">Aktuell keine Termine</h3>
        </div>
      </div>
    </div>
  </section>
</template>