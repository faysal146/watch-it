<script setup lang="ts">
import Header from "@/components/AppHeader.vue";
import AppLeftSideBarVue from "@/components/AppLeftSideBar.vue";
import { ref } from "vue";

const openDraw = ref(true);
</script>

<template>
	<Header></Header>
	<main class="app-width mt-2 flex-1">
		<AppLeftSideBarVue @toggleOpenDraw="vl => (openDraw = vl)" />
		<section :class="`flex flex-col ${openDraw ? 'ml-52' : 'ml-[80px]'}`">
			<slot class="flex-grow" />
		</section>
	</main>
</template>
