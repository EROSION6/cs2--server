<script setup lang="ts">
import Reviews from '@/components/Reviews.vue'
import Sort from '@/components/Sort.vue'
import Statistics from '@/components/Statistics.vue'
import Swiper from '@/components/Swiper.vue'
</script>

<template>
	<main class="w-[1440px] h-full mt-2 xl2:w-full">
		<div class="w-full">
			<Swiper />
		</div>
		<Sort />
		<Reviews />
		<Statistics />
	</main>
</template>
