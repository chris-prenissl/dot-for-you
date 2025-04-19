<script setup lang="ts">
import AnnouncementCard from '~/components/elements/AnnouncementCard.vue';

const { activeAnnouncements, hasActiveAnnouncements } = useAnnouncements();
</script>

<template>
  <section id="announcements" class="mt-4 z-9">
    <h1 class="section-header">Ankündigungen</h1>
    <div class="max-w-2xl mx-auto p-6 m-9 bg-primary shadow-lg rounded-2xl">
      <h2 class="text-2xl font-semibold text-center text-text_on_primary pb-4">🔔 Markttermine</h2>
      <div class="space-y-4">
        <AnnouncementCard v-for="announcement in activeAnnouncements"
          :key="announcement.dateText + announcement.title + announcement.startDate" :announcement="announcement" />
        <div v-if="!hasActiveAnnouncements">
          <h3 class="text-xl text-center font-medium">Aktuell keine Termine</h3>
        </div>
      </div>
    </div>
  </section>
</template>