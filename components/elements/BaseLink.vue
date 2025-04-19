<script setup lang="ts">
defineProps<{
    href: string,
    text: string,
    variant?: 'social' | 'address'
}>();
</script>

<template>
    <a :href="href" target="_blank"
        class="bg-light_white rounded-sm p-4 flex flex-row items-center gap-4 hover:drop-shadow-lg transition-shadow">
        <slot />
        <p class="text-text_default text-nowrap">{{ text }}</p>
    </a>
</template>