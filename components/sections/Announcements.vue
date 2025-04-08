<script setup lang="ts">
import type {Announcement} from "~/model/Announcement";

function isDateExpired(formattedDate: string): boolean {
  let expiredDate = new Date(formattedDate);
  expiredDate.setDate(expiredDate.getDate() + 1);
  let now = new Date();
  return now > expiredDate;
}

function compareExpiredAnnouncement(a: Announcement, b: Announcement): number {
  let aDateString = a.startDate;
  let aDate = new Date(aDateString);
  let bDateString = b.startDate;
  let bDate = new Date(bDateString);
  return aDate.getTime() - bDate.getTime();
}

const announcements: Announcement[] = [
  { title: 'Frühlingsmarkt Kallmünz', dateText: '03.05.2025', location: 'Kallmünz', startDate: "2025-05-03" },
  { title: 'Sarchinger Frühlingsfest', dateText: '12.04.2025 - 13 bis 17 Uhr', location: 'Außenbereich Haus der Vereine, Sarching', startDate: "2025-04-12" },
];
</script>

<template>
  <section id="announcements" class="mt-4 z-9">
    <h1 class="section-header">Ankündigungen</h1>
    <div class="max-w-2xl mx-auto p-6 m-9 bg-primary shadow-lg rounded-2xl">
      <h2 class="text-2xl font-semibold text-center text-text_on_primary pb-4">🔔 Markttermine</h2>
      <div class="space-y-4">
        <div v-for="announcement in announcements.filter((value) => !isDateExpired(value.startDate)).toSorted(compareExpiredAnnouncement)"
          :key="announcement.dateText + announcement.title + announcement.startDate" class="p-4 bg-light_white rounded-lg shadow-sm">
              <h3 class="text-xl font-medium">{{ announcement.title }}</h3>
              <time datetime="{{ announcement.date }}" class="text-sm">{{ announcement.dateText }}</time>
              <p class="text-text_default">{{ announcement.location }}</p>
        </div>
        <div v-if="announcements.filter((value) => !isDateExpired(value.startDate)).length == 0">
          <h3 class="text-xl text-center font-medium">Aktuell keine Termine</h3>
        </div>
      </div>
    </div>
  </section>
</template>