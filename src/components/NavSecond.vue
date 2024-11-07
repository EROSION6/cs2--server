<script setup lang="ts">
import Discord from './icon/Discord.vue'
import Search from './icon/Search.vue'
import Vkontake from './icon/Vkontake.vue'
</script>

<template>
	<div
		class="w-[1440px] flex items-center justify-between px-2 py-2 bg-[#1A1529] rounded-lg mt-2 xl2:w-full"
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
					class="flex gap-2 bg-transparent border border-[#292142] rounded-xl py-2 px-3"
				>
					<router-link to="#"
						><Vkontake
							class="w-5 h-5 transition-transform duration-300 hover:scale-110"
						/>
					</router-link>
					<router-link to="#"
						><Discord
							color="#b379ff"
							class="w-5 h-5 transition-transform duration-300 hover:scale-110"
					/></router-link>
				</div>
			</div>
		</div>
		<div class="relative md:w-full">
			<input
				type="text"
				placeholder="Ник игрока / ссылка / STEAMID"
				class="w-[18rem] bg-[#2D2445] px-4 pr-9 py-3 rounded-xl text-base text-[#BC74D4] placeholder:text-[#BC74D4] placeholder:text-sm md:w-full outline-none"
			/>
			<Search class="absolute w-5 h-5 right-3.5 top-3.5" />
		</div>
	</div>
</template>
