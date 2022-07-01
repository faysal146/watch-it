<template>
	<DefaultLayout>
		<form
			class="p-6 rounded-md text-light-900 bg-gray-900 flex flex-col space-y-4 w-96 mx-auto mt-16"
		>
			<div class="text-center mb-4">
				<h3 class="text-3xl mb-2">Login Now</h3>
				<p class="text-sm opacity-90">Please Enter Your Details</p>
			</div>
			<label for="email/username" class="py-3">
				<p class="text-sm">Username Or Email Address <span>*</span></p>
				<input
					placeholder="Enter Your Username or Email"
					id="email/username"
					type="text"
				/>
			</label>
			<label for="email/username" class="mt-32">
				<p class="text-sm">Password <span>*</span></p>
				<input
					placeholder="Enter Your Password"
					id="password"
					type="password"
				/>
			</label>
			<router-link
				class="text-right text-sm text-opacity-95"
				to="/forget-password"
			>
				Forget Password
			</router-link>
			<button type="submit" class="py-2 rounded-md bg-emerald-400">
				Sign In
			</button>
			<p class="text-sm">
				Don't Have An Account ?
				<router-link to="/register" class="text-emerald-400">
					Sign Up
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
