<script setup lang="ts">
import { ref, watch, onMounted } from "vue";

const isDark = ref(false);

onMounted(() => {
	if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
		isDark.value = true;
	}
});
watch(isDark, () => {
	if (isDark.value) document.documentElement.classList.add("dark");
	else document.documentElement.classList.remove("dark");
});
</script>

<template>
	<div
		class="w-full min-h-screen dark:(bg-dark-600 text-light-600) bg-light-600 text-dark-600"
	>
		<button
			class="text-xl font-bold py-2 px-6 rounded-md shadow-light-400 dark:(bg-dark-800) bg-light-800"
			@click="isDark = !isDark"
		>
			{{ isDark ? "Light" : "Dark" }}
		</button>
	</div>
</template>
