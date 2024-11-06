<script setup lang="ts">
import type { Engine } from 'node_modules/tsparticles-engine/types/export-types'
import { loadSlim } from 'tsparticles-slim'

const particlesInit = async (engine: Engine) => {
	await loadSlim(engine)
}

const particlesLoaded = async (container: any) => {
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
					enable: true,
					direction: 'up',
					outModes: {
						default: 'out',
					},
					speed: 0.5,
					straight: true,
				},
				number: {
					density: {
						enable: true,
						area: 800,
					},
					value: 150,
				},
				opacity: {
					value: { min: 0.1, max: 0.5 },
				},
				shape: {
					type: 'circle',
				},
				size: {
					value: { min: 1, max: 2 },
				},
				position: {
					x: 50,
					y: 80,
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
	background: linear-gradient(
		180deg,
		#1e182c 50%,
		#191125 100%
	);
}

html,
body {
	height: 100%;
	margin: 0;
	overflow: hidden;
}
</style>
