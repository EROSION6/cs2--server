<script setup lang="ts">
import Play from './icon/Play.vue'

defineProps({
	asset: {
		type: Object,
		required: true,
	},
})
</script>

<template>
	<div
		:style="{
			backgroundImage: `url(
				${asset.imageUrl}
			)`,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			display: asset.id ? 'flex' : 'none',
		}"
		class="w-full h-24 flex flex-col justify-center rounded-xl transition-transform duration-300 cursor-pointer px-4 hover:scale-[1.02] brightness-[.85]"
	>
		<div class="w-full flex justify-between">
			<div class="flex flex-col">
				<div class="flex items-center gap-2">
					<span class="p-1 bg-[#BC74D4] rounded-lg text-white text-xs">#1</span>
					<b class="text-white text-xl uppercase">{{ asset.title }}</b>
				</div>
				<div class="flex gap-2">
					<span class="text-white text-xs">{{ asset.stats }}</span>
					<span class="text-white text-xs">{{ asset.map }}</span>
					<span class="flex items-center gap-1 text-white text-xs"
						><img
							src="https://poshlye-project.ru/storage/cache/img/icons/custom/flags/ru.svg"
							alt="img"
							class="w-3 h-3 rounded-full"
						/>{{ asset.location }}</span
					>
				</div>
			</div>

			<button
				class="p-4 rounded-[100%] backdrop-blur border border-white transition duration-300 hover:border-[#BC74D4] hover:scale-105"
			>
				<Play class="w-4 h-4" />
			</button>
		</div>
		<progress
			max="100"
			:value="asset.value"
			class="mt-3"
			:style="`--progress-value-color: ${asset.valueColor};`"
		></progress>
	</div>
</template>

<style scoped>
progress {
	width: 100%;
	height: 4px;
}

progress::-webkit-progress-bar {
	background-color: #e0e0e0;
	border-radius: 0.5rem;
}

progress::-webkit-progress-value {
	background-color: var(--progress-value-color);
	border-radius: 0.5rem;
}

progress::-moz-progress-bar {
	background-color: var(--progress-value-color);
	border-radius: 0.5rem;
}
</style>
