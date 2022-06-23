<script setup lang="ts">
import Header from "@/components/AppHeader.vue";
import AppLeftSideBarVue from "@/components/AppLeftSideBar.vue";
</script>

<template>
	<Header></Header>
	<main class="app-width flex space-x-4 mt-2 flex-1">
		<section class="relative">
			<AppLeftSideBarVue />
		</section>
		<section class="flex-grow flex flex-col">
			<slot class="flex-grow" />
		</section>
	</main>
</template>
