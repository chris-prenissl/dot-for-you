<script setup lang="ts">
import type { Announcement } from '~/model/Announcement';
import BaseCard from './BaseCard.vue';

defineProps<{
    announcement: Announcement
}>();
</script>

<template>
    <BaseCard>
        <h3 class="text-xl font-medium">{{ announcement.title }}</h3>
        <time :datetime="announcement.startDate" class="text-sm">{{ announcement.dateText }}</time>
        <p class="text-text_default">{{ announcement.location }}</p>
    </BaseCard>
</template>