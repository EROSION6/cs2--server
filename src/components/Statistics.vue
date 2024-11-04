<script setup lang="ts">
import { STATISTICS_CARDS } from '@/constant'
</script>

<template>
	<div class="w-full grid grid-cols-[repeat(auto-fit,minmax(224px,1fr))] gap-3">
		<div
			v-for="(statistic, index) in STATISTICS_CARDS"
			:key="index"
			:class="`relative h-auto flex flex-col px-4 py-5 overflow-hidden ${statistic.class}`"
		>
			<span class="text-[#F4CA80] mb-3">{{ statistic.title }}</span>
			<b class="text-[#F4CA80] text-4xl font-bold">{{ statistic.value }}</b>
			<component :is="statistic.ImageUrl" class="w-20 h-20 absolute -right-4" />
		</div>
	</div>
</template>

<style scoped>
.shadow_orange::before,
.shadow_purple::before {
	content: '';
	position: absolute;
	width: 100%;
	height: 100%;
	right: 0;
	top: 0;
	bottom: 0;
	background: linear-gradient(to top left, rgb(255 219 92 / 10%), transparent);
	border-radius: 12px;
}

.shadow_purple::before {
	background: linear-gradient(to top left, rgb(36, 32, 57), transparent);
}
</style>
