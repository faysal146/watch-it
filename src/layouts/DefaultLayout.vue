<script setup lang="ts">
import Header from "@/components/AppHeader.vue";
</script>

<template>
	<Header></Header>
	<main class="app-width mt-2 flex-1"><slot /></main>
</template>
