<script setup lang="ts">
import { ref } from 'vue'
import Search from './icon/Search.vue'

const props = defineProps({
	search: String,
})

const emit = defineEmits(['update:search'])
const localSearch = ref(props.search)
</script>

<template>
	<div
		class="w-full flex items-center justify-between p-2 rounded-xl bg-[#1A1529]"
	>
		<div class="w-1/6 relative lg:w-1/2">
			<input
				type="text"
				v-model="localSearch"
				@input="emit('update:search', localSearch)"
				placeholder="Поиск по названию"
				class="w-full bg-[#1E1B2D] px-7 pr-9 py-2 rounded-lg text-base text-[#BC74D4] placeholder:text-[#BC74D4] placeholder:text-sm md:w-full outline-none"
			/>
			<Search class="w-4 h-4 absolute top-3 left-2" />
		</div>
		<div>
			<div class="flex gap-2">
				<button
					class="bg-[#312849] px-4 py-2 text-[#BC74D4] rounded-md text-base uppercase"
				>
					Awp
				</button>
			</div>
		</div>
	</div>
</template>
