<script setup lang="ts">
import { TAB_RULES } from '@/constant/user'
import { ref } from 'vue'

const isActiveTab = ref(0)
</script>

<template>
	<div class="w-full flex gap-4 mt-11 lg:flex-col">
		<div class="w-[380px] bg-[#1A1529] rounded-xl p-5 mb-36 lg:w-full">
			<h4 class="text-[#BC74D4] text-xl font-bold">Разделы правил</h4>
			<div class="flex flex-col gap-2 mt-4">
				<button
					v-for="(tabs, index) in TAB_RULES"
					:key="index"
					:class="`w-full border border-[#292142] bg-transparent rounded-xl text-[#BC74D4] flex items-end px-4 py-3 outline-none transition duration-300 hover:bg-[#292142] ${
						isActiveTab === index ? 'bg-[#292142]' : 'bg-transparent'
					}`"
					@click="isActiveTab = index"
				>
					{{ tabs }}
				</button>
			</div>
		</div>
		<div>
			<div v-if="(isActiveTab = 0)">
				<p class="text-lg text-[#FDFDFD] font-medium">
					Текст для третьего раздела правил1
				</p>
			</div>
			<div v-else-if="(isActiveTab = 2)">
				<p class="text-lg text-[#FDFDFD] font-medium">
					Текст для третьего раздела правил2
				</p>
			</div>
		</div>
	</div>
</template>
