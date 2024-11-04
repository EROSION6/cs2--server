<script setup lang="ts">
import { loadSlim } from 'tsparticles-slim'

const particlesInit = async engine => {
	await loadSlim(engine)
}

const particlesLoaded = async container => {
	console.log('Particles container loaded', container)
}
</script>

<template>
	<vue-particles
		id="tsparticles"
		:particlesInit="particlesInit"
		:particlesLoaded="particlesLoaded"
		:options="{
			background: {
				color: {
					value: 'transparent',
				},
			},
			fpsLimit: 120,
			interactivity: {
				events: {
					onClick: {
						enable: false,
					},
					onHover: {
						enable: false,
					},
					resize: true,
				},
			},
			particles: {
				color: {
					value: '#ffffff',
				},
				links: {
					enable: false,
				},
				collisions: {
					enable: false,
				},
				move: {
					direction: 'top',
					enable: true,
					outModes: {
						default: 'out',
					},
					random: true,
					speed: 2,
					straight: false,
				},
				number: {
					density: {
						enable: true,
						area: 800,
					},
					value: 100,
				},
				opacity: {
					value: { min: 0.1, max: 0.5 },
				},
				shape: {
					type: 'circle',
				},
				size: {
					value: { min: 1, max: 3 },
				},
			},
			detectRetina: true,
		}"
	/>
</template>

<style scoped>
#tsparticles {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: -webkit-fill-available;
	z-index: -1;
	background: linear-gradient(180deg, #0F0D17 20%, #161222 80%);
}

html,
body {
	height: 100%;
	margin: 0;
	overflow: hidden;
}
</style>
