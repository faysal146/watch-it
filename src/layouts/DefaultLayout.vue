<script setup lang="ts">
import Footer from "@/components/AppFooter.vue";
import Header from "@/components/AppHeader.vue";
</script>

<template>
	<Header></Header>
	<main><slot /></main>
	<Footer></Footer>
</template>
