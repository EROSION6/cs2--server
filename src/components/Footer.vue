<script setup lang="ts">
import { ONELINKS, TWOLINKS } from '@/constant'
import Discord from './icon/Discord.vue'
import Vkontake from './icon/Vkontake.vue'


</script>

<template>
	<footer class="w-full bg-[#1A1529] flex justify-center mt-5">
		<div class="w-[1440px] flex justify-between items-center py-8 lg:px-2">
			<div class="flex items-start">
				<div class="flex flex-col">
					<h2
						class="text-[#BC74D4] opacity-40 uppercase text-2xl font-bold hover:opacity-100 cursor-pointer mb-6"
					>
						openti.ru
					</h2>
					<p class="text-xs text-gray-500 w-[15rem]">
						POSHLYE - это проект игровых серверов Counter Strike 2. Главной
						целью проекта является создание для игроков удобного и приятного
						пространства для игры.
					</p>
				</div>

				<div
					class="flex gap-2 bg-transparent border border-[#BC74D4] rounded-xl py-2 px-3"
				>
					<router-link to="#"
						><Vkontake
							class="w-5 h-5 transition-transform duration-300 hover:scale-110"
						/>
					</router-link>
					<router-link to="#"
						><Discord
							color='#b379ff'
							class="w-5 h-5 transition-transform duration-300 hover:scale-110"
					/></router-link>
				</div>
			</div>
			<div class="flex items-center gap-10 md:hidden">
				<ul class="flex flex-col gap-3">
					<li
						v-for="(link, index) in ONELINKS"
						:key="index"
						class="text-sm text-[#BC74D4] transition-opacity duration-300 hover:opacity-60"
					>
						<router-link to="#">{{ link }}</router-link>
					</li>
				</ul>
				<ul class="flex flex-col gap-3">
					<li
						v-for="(link, index) in TWOLINKS"
						:key="index"
						class="text-sm text-[#BC74D4] transition-opacity duration-300 hover:opacity-60"
					>
						<router-link to="#">{{ link }}</router-link>
					</li>
				</ul>
			</div>
		</div>
	</footer>
</template>
