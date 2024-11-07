<script setup lang="ts">
defineProps({
	title: String,
	value: String,
	color: String,
	imageUrl: String,
	cardWidth: String,
	shadowClass: String,
	sxTitle: String,
	sxValue: String,
})
</script>

<template>
	<div
		:class="`relative py-7 px-5 flex items-center overflow-hidden ${shadowClass} ${cardWidth} rounded-xl cursor-pointer `"
	>
		<div class="flex flex-col">
			<h3 :class="`text-2xl text-[#B379FF] font-bold ${sxTitle}`">
				{{ title }}
			</h3>
			<span :class="`font-bold ${sxValue}`">{{ value }}</span>
		</div>
		<img
			:src="imageUrl"
			alt="."
			class="absolute w-[20rem] h-[160px] -right-[60px] -bottom-[55px]"
		/>
	</div>
</template>

<style scoped>
.shadow_purple::before,
.shadow_orange::before,
.shadow_blue::before,
.shadow_green::before {
	content: '';
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	width: 100%;
	background-image: linear-gradient(270deg, #b379ff, transparent);
	opacity: 0.2;
}
.shadow_orange::before {
	background-image: linear-gradient(270deg, #f4ca80, transparent);
}
.shadow_blue::before {
	background-image: linear-gradient(270deg, #5865f2, transparent);
}
.shadow_green::before {
	background-image: linear-gradient(270deg, #00ff0dda, transparent);
}
</style>
