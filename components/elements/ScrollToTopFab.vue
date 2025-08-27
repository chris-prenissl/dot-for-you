<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const isVisible = ref(false)
let observer: IntersectionObserver | null = null

const onClick = () => {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

onMounted(() => {
  if (typeof window === 'undefined') return
  const heroEl = document.getElementById('hero')
  if (!heroEl || !('IntersectionObserver' in window)) {
    const onScroll = () => {
      isVisible.value = window.scrollY > (heroEl?.clientHeight || 200)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    observer = {
      disconnect() {
        window.removeEventListener('scroll', onScroll)
      }
    } as any
    return
  }

  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      isVisible.value = !entry.isIntersecting
    }
  }, {
    root: null,
    threshold: 0
  })

  observer.observe(heroEl)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<template>
  <button
    v-show="isVisible"
    @click="onClick"
    aria-label="Scroll to top"
    class="fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8 h-12 w-12 md:h-14 md:w-14 flex items-center justify-center rounded-full bg-logo_text text-light_white shadow-lg hover:shadow-xl hover:brightness-110 focus:outline-none focus:ring-4 focus:ring-logo_text/30 transition"
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  class="h-6 w-6 md:h-7 md:w-7">
      <path fill-rule="evenodd" d="M11.47 4.97a.75.75 0 0 1 1.06 0l6.25 6.25a.75.75 0 1 1-1.06 1.06L12.75 7.31V19a.75.75 0 0 1-1.5 0V7.31l-4.97 4.97a.75.75 0 1 1-1.06-1.06l6.25-6.25Z" clip-rule="evenodd" />
    </svg>
  </button>
</template>
