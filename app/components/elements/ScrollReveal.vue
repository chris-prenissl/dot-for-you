<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

interface Props {
	transitionName?: "slide-up" | "slide-down" | "slide-left" | "slide-right" | "fade";
	threshold?: number;
	rootMargin?: string;
}

const props = withDefaults(defineProps<Props>(), {
	transitionName: "slide-up",
	threshold: 0.2,
	rootMargin: "0px 0px -50px 0px",
});

const isVisible = ref(false);
const revealRef = ref<HTMLElement | null>(null);
const observer = ref<IntersectionObserver | null>(null);

onMounted(() => {
	if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
		isVisible.value = true;
		return;
	}

	observer.value = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
		const entry = entries[0];
		if (entry?.isIntersecting) {
			isVisible.value = true;
			if (observer.value) {
				observer.value.disconnect();
			}
		}
	}, {
		threshold: props.threshold,
		rootMargin: props.rootMargin,
	});

	if (revealRef.value && observer.value) {
		observer.value.observe(revealRef.value);
	}
});

onUnmounted(() => {
	if (observer.value) {
		observer.value.disconnect();
	}
});
</script>

<template>
	<div
		ref="revealRef"
		class="w-full"
	>
		<div
			:class="[
				'reveal-container',
				isVisible ? 'is-visible' : 'is-hidden',
				transitionName,
			]"
		>
			<slot />
		</div>
	</div>
</template>

<style scoped>
.reveal-container {
  transition: all 1s ease-out;
}

.is-hidden {
  opacity: 0;
}

.is-visible {
  opacity: 1;
  transform: translate(0, 0) !important;
}

.slide-up.is-hidden {
  transform: translateY(5rem);
}

.slide-down.is-hidden {
  transform: translateY(-5rem);
}

.slide-left.is-hidden {
  transform: translateY(0) translateX(5rem);
}

.slide-right.is-hidden {
  transform: translateY(0) translateX(-5rem);
}

.fade.is-hidden {
  transform: none;
}
</style>
