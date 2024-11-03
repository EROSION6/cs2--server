<script lang="ts" setup>
import { ref } from 'vue'
import AssetCard from './AssetCard.vue'

const SORT_BTN = ['Все', 'ONLY MIRAGE', 'AWP', 'FPS+', 'SANDSTONE', 'DUST 2']
const isActive = ref('Все')

const assets = [
	{
		id: 1,
		title: 'only mirage',
		imageUrl: 'https://game-tournaments.com/media/news/n23975.jpeg',
		stats: '15/26',
		map: 'de_mirage',
		location: 'Санкт-Петербург',
	},
]
</script>

<template>
	<div
		class="w-full flex gap-2 px-3 py-1 bg-[#1A1529] rounded-lg mt-2 xl2:w-full"
	>
		<button
			v-for="(btn, index) of SORT_BTN"
			:key="index"
			class="bg-[#1E1B2D] py-2.5 px-5 rounded-xl border border-[#1A1529] text-[#BC74D4] transition duration-300 hover:border-[#BC74D4]"
			:class="isActive === btn ? ' border-[#BC74D4]' : ''"
			@click="isActive = btn"
		>
			{{ btn }}
		</button>
	</div>

	<div class="grid grid-cols-[repeat(auto-fit,minmax(410px,1fr))] gap-5 mt-2">
		<AssetCard v-for="asset in assets" :key="asset.id" :asset="asset" />
	</div>
</template>
