<script setup lang="ts">
import NavSecond from '@/components/NavSecond.vue'
import Sort from '@/components/Sort.vue'
import Swiper from '@/components/Swiper.vue'
</script>

<template>
	<main class="w-[1440px] mt-2 xl2:w-full">
		<div class="w-full">
			<NavSecond />
			<Swiper />
		</div>

		<Sort />
	</main>
</template>
