<script setup lang="ts">
defineProps({
	skin: {
		type: Object,
		default: 'обычный',
	},
})
</script>

<template>
	<div
		class="relative overflow-hidden flex flex-col justify-center p-4 rounded-lg border-b-4 border-[#29273A] cursor-pointer transition-all duration-300 shadow hoverEffect"
	>
		<div class="flex items-center justify-center px-4">
			<img :src="skin.imageUrl" :alt="skin.title" class="w-32 h-24" />
		</div>
		<div class="title transition duration-300 flex flex-col">
			<b class="text-white text-sm">{{ skin.title }}</b>
			<span class="text-[#BC74D4] text-xs">{{ skin.type }}</span>
		</div>
		<button
			class="absolute w-full left-0 bottom-0 text-[#BC74D4] font-bold text-sm py-2 bg-[#1A1529] transition duration-300 translate-y-[100%]"
		>
			Выбрать скин
		</button>
	</div>
</template>

<style scoped>
.hoverEffect:hover {
	.title {
		transform: translateY(-25px);
	}
	button {
		transform: translateY(0%);
	}
}
</style>
