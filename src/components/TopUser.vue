<script setup lang="ts">
import { TOP_USERS } from '@/constant'
import CardUser from './CardUser.vue'
</script>

<template>
	<div class="relative w-[380px] flex items-center px-5 py-10 shadow_purple">
		<div>
			<h2 class="text-4xl text-[#BC74D4] font-bold uppercase">top 3</h2>
			<p class="text-xl text-white">Лучших игроков</p>
		</div>
		<img
			src="https://poshlye-project.ru/app/modules/module_page_leaderboard/assets/img/agent_top.png"
			alt="img"
			class="absolute w-[227px] h-[130px] right-0"
		/>
	</div>
	<div class="flex flex-col gap-2 mt-2">
		<CardUser v-for="(user, index) in TOP_USERS" :key="index" :user="user" />
	</div>
</template>

<style scoped>
.shadow_purple::before,
.shadow_yellow::before,
.shadow_gray::before,
.shadow_brown::before {
	content: '';
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	width: 100%;
	background-image: linear-gradient(270deg, #b379ff, transparent);
	opacity: 0.2;
	border-radius: 12px;
}

.shadow_yellow::before {
	background-image: linear-gradient(270deg, #ffeb3b, transparent);
}

.shadow_gray::before {
	background-image: linear-gradient(270deg, #cccccc, transparent);
}

.shadow_brown::before {
	background-image: linear-gradient(270deg, #a57332, transparent);
}
</style>
