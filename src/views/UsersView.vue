<script setup lang="ts">
import OptionUser from '@/components/OptionUser.vue'
import TableUser from '@/components/TableUser.vue'
import TopUser from '@/components/TopUser.vue'
</script>

<template>
	<div class="w-[1440px] h-full mt-2 xl2:w-full">
		<div class="w-full flex gap-2 justify-between lg:flex-col">
			<div class="w-2/6 flex flex-col overflow-hidden lg:w-full">
				<OptionUser />
				<TopUser />
			</div>
			<div class="w-2/3 lg:w-full">
				<TableUser />
			</div>
		</div>
	</div>
</template>
