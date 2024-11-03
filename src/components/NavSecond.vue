<script setup lang="ts">
import Discord from './icon/Discord.vue'
import Vkontake from './icon/Vkontake.vue'
</script>

<template>
	<div
		class="w-full flex items-center justify-between px-4 py-2 bg-[#1A1529] rounded-lg"
	>
		<div class="flex items-center gap-2 md:hidden">
			<div class="lg:hidden">
				<img
					src="https://poshlye-project.ru//storage/cache/img/global/logo2.png"
					alt="logo"
				/>
			</div>
			<div class="flex items-center ml-7 gap-3 lg:ml-0">
				<span class="text-sm text-[#BC74D4]">Наши соц сети</span>
				<div
					class="flex gap-2 bg-transparent border border-[#BC74D4] rounded-xl py-2 px-3"
				>
					<router-link to="#"><Vkontake class="w-5 h-5" /> </router-link>
					<router-link to="#"><Discord class="w-5 h-5" /></router-link>
				</div>
			</div>
		</div>
		<div class="md:w-full">
			<input
				type="search"
				placeholder="Ник игрока / ссылка / STEAMID"
				class="w-[18rem] bg-[#2D2445] px-4 py-3 rounded-xl text-base text-[#BC74D4] placeholder:text-[#BC74D4] placeholder:text-xs md:w-full outline-none"
			/>
		</div>
	</div>
</template>
