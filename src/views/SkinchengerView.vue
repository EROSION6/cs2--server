<script setup lang="ts">
import CardSkin from '@/components/CardSkin.vue'
import Choosing from '@/components/Choosing.vue'
import { IMAGE_SORT } from '@/constant/skinchenger'
import type { ISkins } from '@/types'
import axios from 'axios'
import { computed, onMounted, ref } from 'vue'

const skins = ref<ISkins[]>([])
const search = ref('')
const isLoading = ref(true)
const sortBy = ref('')

const getAllSkins = async () => {
	try {
		const { data } = await axios.get<ISkins[]>(
			`https://b7ebbdcc7bf25197.mokky.dev/skin?sort=${sortBy.value}`
		)

		isLoading.value = false
		return (skins.value = data)
	} catch (err) {
		console.error('Error fetching skins:', err)
	}
}

onMounted(() => {
	getAllSkins()
})

const changeSort = (type: string) => {
	sortBy.value = type
	isLoading.value = true
	getAllSkins()
}

const filterSkins = computed(() => {
	return skins.value.filter(skin =>
		skin.title.toLowerCase().includes(search.value.toLowerCase())
	)
})
</script>

<template>
	<div class="w-[1440px] h-full mt-2 xl2:w-full">
		<Choosing v-model:search="search" />
		<div class="flex lg:flex-col">
			<aside
				class="w-[75px] h-full bg-[#1A1529] flex rounded-xl px-3 py-3 mt-2 lg:h-auto lg:w-full"
			>
				<div class="h-auto space-y-2">
					<button
						v-for="tabs in IMAGE_SORT"
						:key="tabs.type"
						@click="changeSort(tabs.type)"
						class="p-2 bg-[#1E1B2D] rounded-xl border-2 border-transparent transition duration-300 hover:border-[#BC74D4]"
					>
						<img :src="tabs.ImageUrl" :alt="tabs.ImageUrl" class="w-8 h-7" />
					</button>
				</div>
			</aside>
			<div
				class="w-full grid grid-cols-[repeat(auto-fit,minmax(209px,1fr))] gap-2 p-3"
			>
				<CardSkin
					v-if="!isLoading"
					v-for="(skin, index) in filterSkins"
					:key="index"
					:skin="skin"
				/>

				<h1 v-else class="text-white">Загрузка...</h1>
			</div>
		</div>
	</div>
</template>

<style scoped>
.shadow::before {
	content: '';
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	width: 100%;
	background-image: linear-gradient(325deg, #47444fb3, transparent);
	opacity: 0.2;
	transition: background-image 0.3s ease;
}

.hoverEffect:hover {
	border-color: #bc74d4;
}

.hoverEffect:hover::before {
	background-image: linear-gradient(313deg, #bc74d4, transparent);
}
</style>
