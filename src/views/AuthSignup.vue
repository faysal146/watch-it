<template>
	<DefaultLayout>
		<form
			class="p-6 rounded-md text-light-900 bg-gray-900 flex flex-col space-y-4 mx-auto mt-16 w-2xl mb-10"
		>
			<div class="text-center mb-4">
				<h3 class="text-3xl mb-2">Sign Up</h3>
				<p class="text-sm opacity-90">Please Enter Your Details</p>
			</div>
			<div
				class="children:(w-[49%] inline-block) flex flex-wrap justify-between"
			>
				<label for="name" class="py-2">
					<p class="text-sm">Name <span>*</span></p>
					<input
						placeholder="Enter Your Name"
						id="name"
						type="text"
					/>
				</label>
				<label for="username" class="py-2">
					<p class="text-sm">Username <span>*</span></p>
					<input
						placeholder="Enter Your Username"
						id="username"
						type="text"
					/>
				</label>
				<label for="email" :style="{ flexBasis: '100%' }" class="py-2">
					<p class="text-sm">Email Address <span>*</span></p>
					<input
						placeholder="Enter Your Email"
						id="email"
						type="text"
					/>
				</label>
				<label for="password" class="py-2">
					<p class="text-sm">Password <span>*</span></p>
					<input
						placeholder="Enter Your Password"
						id="password"
						type="password"
					/>
				</label>
				<label for="confirm-password" class="py-2">
					<p class="text-sm">Confirm Password <span>*</span></p>
					<input
						placeholder="Enter Your Password Again"
						id="confirm-password"
						type="password"
					/>
				</label>
			</div>
			<button type="submit" class="py-2 rounded-md bg-emerald-500">
				Sign Up
			</button>
			<p class="text-sm">
				Already Have An Account ?
				<router-link :to="{ name: 'login' }" class="text-emerald-400">
					Sign In
				</router-link>
			</p>
		</form>
	</DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "../layouts/DefaultLayout.vue";
</script>

<style scoped>
input {
	@apply w-full mt-1 rounded-md bg-blue-gray-800 focus:(outline-none border-gray-400);
}
label p {
	@apply text-emerald-400;
}

label p span {
	@apply text-red-400;
}
</style>
