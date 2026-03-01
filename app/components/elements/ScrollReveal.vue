<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

interface Props {
	transitionName?: "slide-up" | "slide-down" | "slide-left" | "slide-right" | "fade";
	threshold?: number;
}

const props = withDefaults(defineProps<Props>(), {
	transitionName: "slide-up",
	threshold: 0.1,
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
		<Transition :name="transitionName">
			<div v-show="isVisible">
				<slot />
			</div>
		</Transition>
	</div>
</template>

<style>
.slide-up-enter-active,
.slide-down-enter-active,
.slide-left-enter-active,
.slide-right-enter-active {
  transition: all 1s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(5rem);
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-5rem);
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(5rem);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-5rem);
}

.slide-up-enter-to,
.slide-down-enter-to,
.slide-left-enter-to,
.slide-right-enter-to {
  opacity: 1;
  transform: translate(0, 0);
}

.fade-enter-active {
  transition: opacity 1s ease-out;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-to {
  opacity: 1;
}
</style>
