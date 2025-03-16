<script setup lang="ts">
import type {Announcement} from "~/model/Announcement";

function isDateExpired(formattedDate: string): boolean {
  let date = new Date(formattedDate);
  let now = new Date();
  return now > date;
}

const announcements: Announcement[] = [
  { title: 'Osterausstellung', dateText: '06.04.2025 - 10 bis 17 Uhr', location: 'Jahnhalle, Regenstauf', expiredDate: "2025-04-06" },
  { title: 'Frühlingsmarkt Kallmünz', dateText: '03.05.2025', location: 'Kallmünz', expiredDate: "2025-05-03" }
];
</script>

<template>
  <section id="announcements" class="mt-4 z-9">
    <h1 class="section-header">Ankündigungen</h1>
    <div class="max-w-2xl mx-auto p-6 m-9 bg-primary shadow-lg rounded-2xl">
      <h2 class="text-2xl font-semibold text-center text-text_on_primary pb-4">🔔 Markttermine</h2>
      <div class="space-y-4">
        <div v-for="announcement in announcements.filter((value) => !isDateExpired(value.expiredDate))"
          :key="announcement.dateText + announcement.title + announcement.expiredDate" class="p-4 bg-light_white rounded-lg shadow-sm">
              <h3 class="text-xl font-medium">{{ announcement.title }}</h3>
              <time datetime="{{ announcement.date }}" class="text-sm">{{ announcement.dateText }}</time>
              <p class="text-text_default">{{ announcement.location }}</p>
        </div>
        <div v-if="announcements.filter((value) => !isDateExpired(value.expiredDate)).length == 0">
          <h3 class="text-xl text-center font-medium">Aktuell keine Termine</h3>
        </div>
      </div>
    </div>
  </section>
</template>