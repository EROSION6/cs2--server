<script setup lang="ts">
import { ref } from 'vue'
import Application from './icon/Application.vue'
import Donate from './icon/Donate.vue'
import Rules from './icon/Rules.vue'
import Skinchenger from './icon/Skinchenger.vue'
import Steam from './icon/Steam.vue'
import User from './icon/User.vue'
import Wallet from './icon/Wallet.vue'

const NAVIGATION_LINKS = [
	{
		label: 'Донат',
		icon: Donate,
		route: '/donate',
	},
	{
		label: 'Игроки',
		icon: User,
		route: '/users',
	},
	{
		label: 'Правила',
		icon: Rules,
		route: '/rules',
	},
	{
		label: 'Заявки',
		icon: Application,
		route: '/application',
	},
	{
		label: 'Скинченджер',
		icon: Skinchenger,
		route: '/skinchenger',
	},
]

const isOpen = ref(false)
</script>

<template>
	<header
		class="w-[1440px] flex items-center justify-between px-3 py-1 bg-[#1A1529] rounded-lg xl2:w-full"
	>
		<button class="hidden lg:block" @click="isOpen = true">burger</button>
		<transition name="fade">
			<div v-if="!isOpen" class="lg:fixed inset-0 bg-[#1A1529] lg:h-[400px]">
				<nav>
					<ul class="flex items-center gap-2 lg:flex-col lg:items-start">
						<li
							v-for="link in NAVIGATION_LINKS"
							:key="link.route"
							class="flex items-center gap-2 text-[#BC74D4] transition duration-300 hover:bg-[#140f22] py-3 px-4 rounded-2xl cursor-pointer"
						>
							<component
								:is="link.icon"
								v-if="link.icon"
								class="w-[18px] h-[18px] lg:hidden"
							/>
							<router-link :to="link.route" class="text-sm lg:text-xl">{{
								link.label
							}}</router-link>
						</li>
					</ul>
				</nav>
				<button
					class="hidden lg:block lg:fixed top-2 right-5"
					@click="isOpen = false"
				>
					close
				</button>
			</div>
		</transition>
		<div class="flex space-x-2">
			<button
				class="flex items-center gap-2 bg-[#302832] text-[#F4CA80] text-sm py-4 px-6 rounded-xl font-semibold transition duration-300 hover:bg-[#3d3c33] md:px-4"
			>
				<Wallet class="w-5 h-5" /> <span>Пополнить</span>
			</button>
			<button
				class="flex items-center gap-2 bg-[#B379FF] py-4 px-6 rounded-2xl text-white text-sm font-semibold md:px-4"
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
