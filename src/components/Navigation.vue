<script setup lang="ts">
import CardNavigation from './CardNavigation.vue'
</script>

<template>
	<div class="flex flex-col gap-1 md:w-full">
		<CardNavigation
			title="Скинченджер"
			image-url="https://poshlye-project.ru/app/modules/module_block_main_banner_slider/assets/img/sc.png"
			card-width="w-[350px] md:w-full "
			shadow-class="shadow_purple"
		/>
		<CardNavigation
			title="Магазин"
			image-url="https://poshlye-project.ru/app/modules/module_block_main_banner_slider/assets/img/shop.png"
			card-width="w-[350px] md:w-full"
			shadow-class="shadow_orange"
		/>
		<div class="flex gap-1">
			<CardNavigation
				title="На сайте"
				value="29"
				sx-title="text-sm text-green-400"
				sx-value="text-4xl text-green-400"
				card-width="w-[175px] md:w-[50%]"
				shadow-class="shadow_green"
			/>
			<CardNavigation
				title="Играют"
				value="67"
				sx-title="text-sm text-[#b379ff]"
				sx-value="text-4xl text-[#b379ff]"
				card-width="w-[175px] md:w-[50%]"
				shadow-class="shadow_purple"
			/>
		</div>
	</div>
</template>
