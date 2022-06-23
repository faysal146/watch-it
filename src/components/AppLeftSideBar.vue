<template>
	<aside
		:class="`space-y-10 p-5 font-bold app-bg-main fixed h-[calc(100%-${height}px)]`"
	>
		<button
			class="absolute right-[-12px] w-6 h-6 rounded-full bg-emerald-500"
			@click="toogleSideBarText()"
		>
			{{ showSideBarText ? "<" : ">" }}
		</button>
		<a
			href=""
			v-for="item in items"
			:key="item.text"
			class="flex space-x-3 items-center"
		>
			<span v-html="item.icon" class="sider-bar-icon"></span>
			<span class="inline-block" v-show="showSideBarText">{{
				item.text
			}}</span>
		</a>
	</aside>
</template>

<script setup lang="ts">
import { useToggle } from "@vueuse/core";
import useElHeight from "@/composable/useElHeight";
const { height } = useElHeight();

const [showSideBarText, toogleSideBarText] = useToggle(true);

const items = [
	{
		text: "Home",
		icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -1.5 24 24" width="24" fill="currentColor"><path d="M13 20.565v-5a3 3 0 0 0-6 0v5H2a2 2 0 0 1-2-2V7.697a2 2 0 0 1 .971-1.715l8-4.8a2 2 0 0 1 2.058 0l8 4.8A2 2 0 0 1 20 7.697v10.868a2 2 0 0 1-2 2h-5z"></path></svg>`,
	},
	{
		text: "Follwing",
		icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -4 24 24" width="24" fill="currentColor"><path d="M9.293 1.55l.707.708.707-.707a5 5 0 1 1 7.071 7.071l-7.07 7.071a1 1 0 0 1-1.415 0L2.222 8.622a5 5 0 1 1 7.07-7.071z"></path></svg>`,
	},
	{
		text: "Library",
		icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -4 24 24" width="24" fill="currentColor"><path d="M10.83 2H17a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h5c1.306 0 2.417.835 2.83 2z"></path></svg>`,
	},
	{
		text: "History",
		icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -2 24 24" width="24" fill="currentColor"><path d="M13.106 9h3.953c.546 0 .988.448.988 1s-.442 1-.988 1h-4.941a.994.994 0 0 1-.988-1V4c0-.552.442-1 .988-1s.988.448.988 1v5zm6-6.071A10.029 10.029 0 0 1 22 10c0 5.523-4.424 10-9.882 10v-2c4.366 0 7.906-3.582 7.906-8a8.02 8.02 0 0 0-2.316-5.657A7.834 7.834 0 0 0 12.118 2C8.574 2 5.574 4.36 4.571 7.612l1.352-.923a.981.981 0 0 1 1.372.27 1.007 1.007 0 0 1-.267 1.388l-3.277 2.237a.981.981 0 0 1-1.372-.27L.17 6.998a1.007 1.007 0 0 1 .267-1.389.981.981 0 0 1 1.372.27l.839 1.259C3.863 3.01 7.643 0 12.118 0c2.729 0 5.2 1.12 6.988 2.929z"></path></svg>`,
	},
	{
		text: "Liked Videos",
		icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>`,
	},
	{
		text: "Settings",
		icon: `<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="-3 -2 24 24"
					width="24"
					fill="currentColor"
				>
					<path
						d="M18 17H0a8.978 8.978 0 0 1 3-6.708V6a6 6 0 1 1 12 0v4.292A8.978 8.978 0 0 1 18 17zM6.17 18h5.66a3.001 3.001 0 0 1-5.66 0z"
					></path>
				</svg>`,
	},
];
</script>

<style>
.sider-bar-icon svg {
	@apply h-6 w-6;
}
</style>
