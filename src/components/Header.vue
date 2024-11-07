<script setup lang="ts">
import { NAVIGATION_LINKS } from '@/constant'
import { ref } from 'vue'
import Burger from './icon/Burger.vue'
import Steam from './icon/Steam.vue'
import Wallet from './icon/Wallet.vue'

const isOpen = ref(false)

const isActivelink = ref('Главная')
</script>

<template>
	<header
		class="w-[1440px] flex items-center justify-between px-3 py-1 bg-[#1A1529] rounded-xl xl2:w-full"
	>
		<button class="hidden lg:block" @click="isOpen = !isOpen">
			<Burger class="w-10 h-10" />
		</button>
		<transition name="fade">
			<div
				v-if="!isOpen"
				class="lg:fixed inset-0 z-10 bg-[#1A1529] lg:h-[400px]"
			>
				<nav>
					<ul class="flex items-center gap-2 lg:flex-col lg:items-start">
						<router-link
							v-for="link in NAVIGATION_LINKS"
							:key="link.route"
							:to="link.route"
							class="text-sm lg:text-xl"
							@click="isActivelink = link.label"
						>
							<li
								:class="`flex items-center gap-2 text-[#BC74D4] transition duration-300 hover:bg-[#201a33] py-3 px-4 rounded-lg cursor-pointer ${
									isActivelink === link.label
										? 'bg-[#201a33]'
										: 'bg-transparent'
								}`"
							>
								<component
									:is="link.icon"
									v-if="link.icon"
									class="w-[18px] h-[18px] lg:hidden"
								/>
								{{ link.label }}
							</li></router-link
						>
					</ul>
				</nav>
				<button
					class="hidden lg:block lg:fixed top-2 right-5"
					@click="isOpen = !isOpen"
				>
					close
				</button>
			</div>
		</transition>
		<div class="flex space-x-2">
			<button
				class="flex items-center gap-2 bg-[#302832] text-[#F4CA80] text-sm py-4 px-6 rounded-xl font-semibold transition duration-300 hover:bg-[#3d3c33] md:px-4 md:text-xs"
			>
				<Wallet class="w-5 h-5" /> <span class="md:hidden">Пополнить</span>
			</button>
			<button
				class="flex items-center gap-2 bg-[#B379FF] py-4 px-6 rounded-2xl text-white text-sm font-semibold md:px-3 md:text-xs md:font-normal"
			>
				Войти через Steam
				<Steam class="w-5 h-5" />
			</button>
		</div>
	</header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
