<script setup lang="ts">
import ReviewsCard from './ReviewsCard.vue'
</script>

<template>
	<div class="w-full overflow-hidden mt-3">
		<h2 class="text-[#BC74D4] font-bold text-3xl">Наши отзывы</h2>

		<div class="w-full flex overflow-x-scroll mt-3">
			<div class="flex gap-3">
				<ReviewsCard />
			</div>
		</div>
	</div>
</template>
