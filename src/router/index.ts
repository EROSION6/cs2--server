import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../views/HomeView.vue'),
		},
		{
			path: '/user',
			name: 'user',
			component: () => import('../views/UsersView.vue'),
		},
		{
			path: '/rules',
			name: 'rules',
			component: () => import('../views/RulesView.vue'),
		},
		{
			path: '/skinchenger',
			name: 'skinchenger',
			component: () => import('../views/SkinchengerView.vue'),
		},
	],
})

export default router
