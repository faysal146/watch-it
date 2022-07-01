<template>
	<aside
		:class="`space-y-10 p-5 app-bg-main fixed bottom-2 ${
			showSideBarText && 'w-48'
		}`"
		:style="{
			top: height + position + 8 + 'px',
		}"
	>
		<button
			class="absolute right-[-14px] w-8 h-8 rounded-full bg-slate-900 text-emerald-400 dark:(bg-emerald-400 text-gray-700) text-xl"
			@click="
				() => {
					$emit('toggleOpenDraw', !showSideBarText);
					toogleSideBarText();
				}
			"
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
import useElHeight from "@/composable/useElHeight";
import { useToggle } from "@vueuse/core";

const [showSideBarText, toogleSideBarText] = useToggle(true);
const { height, position } = useElHeight();

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
		icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z"/><path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8C9.536 4 7.332 5.114 5.865 6.865L8 9H2V3l2.447 2.446C6.28 3.336 8.984 2 12 2zm1 5v4.585l3.243 3.243-1.415 1.415L11 12.413V7h2z"/></svg>`,
	},
	{
		text: "Liked Videos",
		icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path fill="currentColor" d="M2 9h3v12H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1zm5.293-1.293l6.4-6.4a.5.5 0 0 1 .654-.047l.853.64a1.5 1.5 0 0 1 .553 1.57L14.6 8H21a2 2 0 0 1 2 2v2.104a2 2 0 0 1-.15.762l-3.095 7.515a1 1 0 0 1-.925.619H8a1 1 0 0 1-1-1V8.414a1 1 0 0 1 .293-.707z" fill="rgba(0,0,0,0)"/></svg>`,
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
