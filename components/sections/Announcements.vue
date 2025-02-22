<script setup lang="ts">
import type {Announcement} from "~/model/Announcement";

const announcements: Announcement[] = [
  { title: 'Frühlingsausstellung', date: '14.03.2025 - 9 bis 17 Uhr', location: 'Haus des Guten Hirten - Klosterladen, Schwandorf' },
  { title: 'Frühlingsausstellung', date: '15.03.2025 - 10 bis 16 Uhr', location: 'Haus des Guten Hirten - Klosterladen, Schwandorf' },
  { title: 'Osterausstellung', date: '06.04.2025 - 10 bis 17 Uhr', location: 'Jahnhalle, Regenstauf' },
  { title: 'Frühlingsmarkt Kallmünz', date: '03.05.2025', location: 'Kallmünz' }
];
</script>

<template>
<section id="announcements" class="min-h-min z-9">
  <div class="max-w-2xl mx-auto p-6 m-9 bg-primary shadow-lg rounded-2xl">
    <h2 class="text-2xl font-semibold text-center text-text_on_primary pb-4">🔔 Markttermine</h2>
    <div class="space-y-4">
      <div v-for="announcement in announcements" :key="announcement.date + announcement.title" class="p-4 bg-light_white rounded-lg shadow-sm">
        <h3 class="text-xl font-medium">{{ announcement.title }}</h3>
        <p class="text-sm">{{ announcement.date }}</p>
        <p class="text-text_default">{{ announcement.location }}</p>
      </div>
    </div>
  </div>
</section>
</template>