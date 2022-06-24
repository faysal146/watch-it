<template>
	<div
		class="flex flex-col w-80 h-86 rounded-md p-2 bg-green-700 shadow-dark-200"
	>
		<div class="h-50 w-full mb-3">
			<img
				class="block rounded-md object-cover w-full h-full"
				:src="props.thumb"
				alt=""
			/>
		</div>
		<div class="flex flex-grow">
			<div class="w-14">
				<img
					class="w-9 h-9 rounded-full overflow-hidden inline-block mt-3"
					:src="props.author?.profileAvater"
					alt=""
				/>
			</div>
			<div class="flex-grow ml-2 flex flex-col">
				<p class="mb-2">{{ transCuteTitle }}</p>
				<p class="text-sm flex-grow">{{ props.author?.username }}</p>
				<p class="flex justify-between text-sm mb-2 px-2">
					<span class="flex items-center space-x-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="feather feather-thumbs-up"
						>
							<path
								d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
							/>
						</svg>
						<span>
							{{ props.likeCount }}
						</span>
					</span>
					<span class="flex items-center space-x-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="feather feather-clock"
						>
							<circle cx="12" cy="12" r="10" />
							<polyline points="12 6 12 12 16 14" />
						</svg>
						<span>
							{{ props.length }}
						</span>
					</span>
					<span class="flex items-center space-x-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="-2 -6 24 24"
							width="18"
							fill="currentColor"
						>
							<path
								d="M10 12c-5.042.007-10-2.686-10-6S4.984-.017 10 0c5.016.017 10 2.686 10 6s-4.958 5.993-10 6zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
							></path>
						</svg>
						<span>
							{{ props.views }}
						</span>
					</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
	thumb: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	likeCount: {
		type: Number,
		required: true,
	},
	length: {
		type: Number,
		required: true,
	},
	author: {
		type: Object,
	},
	views: {
		type: Number,
		required: true,
	},
});

const transCuteTitle = computed(() => {
	if (props.title.length > 30) {
		return props.title.substring(0, 50) + "...";
	}
	return props.title;
});
</script>

<style scoped></style>
