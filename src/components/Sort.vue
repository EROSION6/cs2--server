<script lang="ts" setup>
import { ASSETS, SORT_BTN } from '@/constant'
import { computed, ref } from 'vue'
import AssetCard from './AssetCard.vue'

const isActive = ref(0)

const filteredAssets = computed(() => {
	return ASSETS.filter(asset => {
		switch (isActive.value) {
			case 0:
				return asset
			case 1:
				return asset.title.toLowerCase().includes('mirage')
			case 2:
				return asset.title.toLowerCase().includes('awp')
			case 3:
				return asset.title.toLowerCase().includes('fps')
			case 4:
				return asset.title.toLowerCase().includes('sandstone')
			case 5:
				return asset.title.toLowerCase().includes('dust 2')
			default:
				return false
		}
	})
})
</script>

<template>
	<div
		class="w-full flex gap-2 px-3 py-1 bg-[#1A1529] rounded-lg mt-2 overflow-hidden xl2:w-full"
	>
		<div class="w-full flex gap-2 items-center md:overflow-x-scroll">
			<button
				v-for="(btn, index) of SORT_BTN"
				:key="index"
				class="bg-[#1E1B2D] py-2.5 px-5 rounded-xl border border-[#1A1529] text-[#BC74D4] transition duration-300 hover:border-[#BC74D4] shrink-0"
				:class="isActive === index ? ' border-[#BC74D4]' : ''"
				@click="isActive = index"
			>
				{{ btn }}
			</button>
		</div>
	</div>

	<div
		class="grid grid-cols-[repeat(auto-fit,minmax(410px,1fr))] gap-3 mt-2 md:grid-cols-[repeat(auto-fit,minmax(310px,1fr))]"
	>
		<AssetCard v-for="asset in filteredAssets" :key="asset.id" :asset="asset" />
	</div>
</template>
