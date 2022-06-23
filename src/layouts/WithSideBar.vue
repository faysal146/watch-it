<script setup lang="ts">
import Header from "@/components/AppHeader.vue";
import AppLeftSideBarVue from "@/components/AppLeftSideBar.vue";
</script>

<template>
	<Header></Header>
	<main class="app-width flex">
		<section class="relative w-52">
			<AppLeftSideBarVue />
		</section>
		<section class="flex-grow">
			<slot />
		</section>
	</main>
</template>
