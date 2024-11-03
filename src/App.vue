<script setup lang="ts">
import Header from './components/Header.vue'
import Particle from './components/Particle.vue'
</script>

<template>
	<Particle />
	<div class="w-full flex flex-col items-center mt-2 px-2">
		<Header />
		<RouterView />
	</div>
</template>

<style scoped>
html,
body {
	height: 100%;
	margin: 0;
	overflow: hidden;
}
</style>
