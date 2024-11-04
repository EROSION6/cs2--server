<script setup lang="ts">
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Particle from './components/Particle.vue'
</script>

<template>
	<div class="relative h-full w-full ">
		<Particle />
		<div class='w-full h-full px-2 flex flex-col items-center pt-2'>
			<Header />
			<RouterView />
		</div>
		<Footer />
	</div>
</template>
