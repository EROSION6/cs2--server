<script setup lang="ts">
import TabsRules from '@/components/TabsRules.vue'
</script>

<template>
	<div class="w-[1440px] h-full mt-11 xl2:w-full">
		<div
			class="w-full bg-[#1A1529] flex flex-col items-center border-x-2 border-[#BC74D4] uppercase py-4"
		>
			<h1 class="text-white text-3xl font-bold">Правила проекта POSHLYE</h1>
			<p class="text-[#BC74D4] font-bold">Найдите ответы на свои вопросы</p>
		</div>

		<TabsRules />
	</div>
</template>
