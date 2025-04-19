<script setup lang="ts">
defineProps<{
    title: string,
    path: string,
    variant?: 'primary' | 'secondary'
}>();
</script>

<template>
    <a :href="path" :class="[
        'p-4 border-pink-400 border rounded-sm text-center text-l hover:text-logo_text hover:drop-shadow-lg',
        variant === 'primary' ? 'bg-primary' : 'bg-light_white'
    ]">
        {{ title }}
    </a>
</template>