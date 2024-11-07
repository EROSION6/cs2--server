<script setup lang="ts">
import Skinchenger from './icon/Skinchenger.vue'
import Navigation from './Navigation.vue'
</script>

<template>
	<div class="w-full flex gap-2 mt-2 md:flex-col">
		<div
			style="
				background-image: url('https://poshlye-project.ru/app/modules/module_block_main_banner_slider/assets/img/5.jpg');
				background-size: cover;
				background-position: center;
			"
			class="w-[78%] h-[300px] rounded-xl mt-1 px-5 py-10 md:w-full md:py-5"
		>
			<div class="h-full flex flex-col justify-end items-start gap-2">
				<h1
					class="text-4xl font-bold text-white text-shadow-[1px 1px 2px rgb(0 0 0 / 37%)] md:text-2xl"
				>
					Мечтал о крутых скинах?
				</h1>
				<p class="text-white md:text-sm">
					Поставь любой скин и наслаждайся игрой на сервере!
				</p>
				<router-link to="/skinchenger">
					<button
						class="flex items-center gap-2 bg-[#B379FF] py-3 px-6 rounded-lg text-white text-sm font-semibold transition duration-300 hover:bg-opacity-55 md:px-4"
					>
						<Skinchenger class="w-5 h-5" />
						Скинченджер
					</button>
				</router-link>
			</div>
		</div>
		<Navigation />
	</div>
</template>
