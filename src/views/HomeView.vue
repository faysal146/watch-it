<template>
	<WithSideBar v-slot="slotProps">
		<section
			:class="`app-bg-main ${slotProps.class} flex flex-wrap gap-4 p-3`"
		>
			<VideoCard
				:thumb="faker.image.city()"
				:title="faker.lorem.words(10)"
				:length="200"
				:author="{
					username: 'Faysal Ahmed',
					profileLink: '/faysal-ahmed',
					profileAvater: faker.image.avatar(),
				}"
				:likeCount="20"
				:views="229"
			/>
		</section>
	</WithSideBar>
</template>

<script setup lang="ts">
import { faker } from "@faker-js/faker";
import WithSideBar from "@/layouts/WithSideBar.vue";
import VideoCard from "../components/VideoCard.vue";
</script>

<style scoped></style>
