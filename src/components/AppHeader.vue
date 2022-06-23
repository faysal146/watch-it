<template>
	<header
		class="py-2 px-6 app-bg-main flex items-center app-width sticky top-0 z-50"
		ref="el"
	>
		<h2 class="flex text-xl">
			<svg
				class="bg-stroke-blue-gray-600"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="-2 -6 24 24"
				width="24"
				fill="currentColor"
			>
				<path
					d="M13.98 3.605L16 1.585A2 2 0 0 1 17.414 1H18a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-.586A2 2 0 0 1 16 10.414l-2.02-2.019A4 4 0 0 1 10 12H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h6a4 4 0 0 1 3.98 3.605zM5 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
				></path>
			</svg>
			<span>Watch<span>It</span> </span>
		</h2>
		<input type="text" class="py-2 px-4 rounded-md ml-4" />
		<div class="flex space-x-8 ml-auto">
			<button @click="toggleDark()">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="-4 -2 24 24"
					width="24"
					fill="currentColor"
				>
					<path
						d="M12.253.335A10.086 10.086 0 0 0 8.768 8c0 4.632 3.068 8.528 7.232 9.665A9.555 9.555 0 0 1 9.742 20C4.362 20 0 15.523 0 10S4.362 0 9.742 0c.868 0 1.71.117 2.511.335z"
					></path>
				</svg>
			</button>
			<button>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="-2 -2 24 24"
					width="24"
					fill="currentColor"
				>
					<path
						d="M20 8.163A2.106 2.106 0 0 0 18.926 10c0 .789.433 1.476 1.074 1.837l-.717 2.406a2.105 2.105 0 0 0-2.218 3.058l-2.062 1.602A2.104 2.104 0 0 0 11.633 20l-3.29-.008a2.104 2.104 0 0 0-3.362-1.094l-2.06-1.615A2.105 2.105 0 0 0 .715 14.24L0 11.825A2.106 2.106 0 0 0 1.051 10C1.051 9.22.63 8.54 0 8.175L.715 5.76a2.105 2.105 0 0 0 2.207-3.043L4.98 1.102A2.104 2.104 0 0 0 8.342.008L11.634 0a2.104 2.104 0 0 0 3.37 1.097L17.064 2.7a2.105 2.105 0 0 0 2.218 3.058L20 8.162zM10 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
					></path>
				</svg>
			</button>
			<button>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="-3 -2 24 24"
					width="24"
					fill="currentColor"
				>
					<path
						d="M18 17H0a8.978 8.978 0 0 1 3-6.708V6a6 6 0 1 1 12 0v4.292A8.978 8.978 0 0 1 18 17zM6.17 18h5.66a3.001 3.001 0 0 1-5.66 0z"
					></path>
				</svg>
			</button>
			<button
				class="flex flex-row justify-between bg-green-300 rounded-md p-2"
			>
				<span
					class="w-10 h-10 rounded-full overflow-hidden inline-block"
				>
					<img
						class="block w-full object-cover"
						src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairDreads01&accessoriesType=Wayfarers&hairColor=BlondeGolden&facialHairType=BeardMajestic&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=PastelRed&graphicType=Resist&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Sad&skinColor=Yellow"
					/>
				</span>
				<span class="inline-block ml-3">
					<span>Faysal Ahmed</span>
					<br />
					<span>Web Developer</span>
				</span>
			</button>
		</div>
	</header>
</template>

<script lang="ts" setup>
import { inject } from "vue";
const toggleDark =
	inject<(value?: boolean | undefined) => boolean>("toggleDark")!;
</script>
