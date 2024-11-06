<script setup lang="ts">
import ReviewsCard from './ReviewsCard.vue'
</script>

<template>
	<div class="w-full overflow-hidden mt-3">
		<h2 class="text-[#BC74D4] font-bold text-3xl">Наши отзывы</h2>

		<div class="w-full flex overflow-x-scroll mt-5">
			<div class="flex gap-3">
				<div class="w-[340px] bg-[#1A1529] rounded-xl p-3">
					<div class="flex mb-2">
						<div>
							<h2 class="text-[#BC74D4] text-4xl font-bold">4.98</h2>
							<div class="text-yellow-400 text-2xl mt-5">★★★★★</div>
						</div>
						<div>
							<h4 class="text-white text-xl font-bold">Отлично</h4>
							<p class="text-xs text-[#BC74D4] opacity-50">Более 152 отзывов</p>
						</div>
					</div>
					<button
						class="w-full px-4 py-2 rounded-lg text-[#BC74D4] bg-[#292142] mt-1 transition duration-300 hover:bg-opacity-75"
					>
						Оставить отзыв
					</button>
				</div>
				<ReviewsCard />
				<ReviewsCard />
				<ReviewsCard />
				<ReviewsCard />
			</div>
		</div>
	</div>
</template>
