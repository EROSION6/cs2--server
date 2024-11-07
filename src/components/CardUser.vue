<script setup lang="ts">
defineProps({
	user: Object,
})
</script>

<template>
	<div
		:class="`relative w-full flex items-center flex-col p-5 ${user?.shadow}`"
	>
		<div class="w-full flex items-center justify-between">
			<div class="flex gap-3">
				<img :src="user?.avatar" :alt="user?.title" class="w-14 h-14" />
				<div class="flex flex-col space">
					<h4 class="text-lg text-yellow-400 font-bold">
						{{ user?.place }} Место
					</h4>
					<p class="text-xl text-white">{{ user?.title }}</p>
				</div>
			</div>

			<img :src="user?.rankImage" alt="img" class="w-12 h-12" />
		</div>

		<div class="relative z-10 w-full flex justify-between items-center mt-4">
			<img :src="user?.imageLvl" alt="rank" class="w-24 h-10" />

			<div class="flex flex-col items-end">
				<span class="text-[#BC74D4]">Уровень {{ user?.leavel }}</span>
				<span class="text-[#BC74D4]">{{ user?.experience }} Опыт</span>
			</div>
		</div>
	</div>
</template>
