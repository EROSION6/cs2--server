<script setup lang="ts">
import OptionUser from '@/components/OptionUser.vue'
import TableUser from '@/components/TableUser.vue'
import TopUser from '@/components/TopUser.vue'
</script>

<template>
	<div class="w-[1440px] h-full mt-2 xl2:w-full">
		<div class="w-full flex items-center gap-2">
			<OptionUser />
			<TableUser />
		</div>
		<TopUser />
	</div>
</template>
