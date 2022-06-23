<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import { provide } from "vue";
const isDark = useDark();
const toggleDark = useToggle(isDark);
provide("toggleDark", toggleDark);
</script>

<template>
	<Router-View></Router-View>
</template>

<style>
@import url("./assets/base.css");
</style>
