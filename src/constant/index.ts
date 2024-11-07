import Ban from '@/components/icon/statistics/Ban.vue'
import Crown from '@/components/icon/statistics/Crown.vue'
import Microphone from '@/components/icon/statistics/Microphone.vue'
import Paty from '@/components/icon/statistics/Paty.vue'
import Timer from '@/components/icon/statistics/Timer.vue'
import Users from '@/components/icon/statistics/Users.vue'
import type { IAssets, ITopUser } from '@/types'
import Donate from '../components/icon/Donate.vue'
import Rules from '../components/icon/Rules.vue'
import Skinchenger from '../components/icon/Skinchenger.vue'
import User from '../components/icon/User.vue'

export const NAVIGATION_LINKS = [
	{
		label: 'Главная',
		icon: Donate,
		route: '/',
	},
	{
		label: 'Игроки',
		icon: User,
		route: '/user',
	},
	{
		label: 'Правила',
		icon: Rules,
		route: '/rules',
	},
	{
		label: 'Скинченджер',
		icon: Skinchenger,
		route: '/skinchenger',
	},
]

export const ASSETS: IAssets[] = [
	{
		id: 1,
		title: 'only mirage',
		imageUrl:
			'https://poshlye-project.ru/storage/cache/img/maps/730/de_mirage.jpg',
		stats: '15/26',
		map: 'de_mirage',
		location: 'Санкт-Петербург',
		value: 10,
		valueColor: '#F6B949',
	},
	{
		id: 2,
		title: 'awp',
		imageUrl:
			'https://poshlye-project.ru/storage/cache/img/maps/730/awp_lego_2.jpg',
		stats: '12/26',
		map: 'awp_lego_2',
		location: 'Санкт-Петербург',
		value: 70,
		valueColor: '#64CE83',
	},
	{
		id: 3,
		title: 'fps mirage',
		imageUrl:
			'https://poshlye-project.ru/storage/cache/img/maps/730/de_mirage_fps_y.jpg',
		stats: '22/26',
		map: 'de_mirage_fps',
		location: 'Санкт-Петербург',
		value: 40,
		valueColor: '#F6B949',
	},
	{
		id: 4,
		title: 'sandstone',
		imageUrl:
			'https://poshlye-project.ru/storage/cache/img/maps/730/sandstone_new.jpg',
		stats: '11/26',
		map: 'sandstone_new',
		location: 'Санкт-Петербург',
		value: 85,
		valueColor: '#64CE83',
	},
	{
		id: 5,
		title: 'only dust 2',
		imageUrl:
			'https://poshlye-project.ru/storage/cache/img/maps/730/de_dust2.jpg',
		stats: '3/26',
		map: 'de_dust2',
		location: 'Москва',
		value: 24,
		valueColor: '#F6B949',
	},
]

export const STATISTICS_CARDS = [
	{
		title: 'Игроков',
		value: 10000,
		ImageUrl: Users,
		class: 'shadow_orange',
		color: '#F4CA80',
	},
	{
		title: 'За 24часа',
		value: 1371,
		ImageUrl: Timer,
		class: 'shadow_orange',
		color: '#F4CA80',
	},
	{
		title: 'Vip игроков',
		value: 288,
		ImageUrl: Crown,
		class: 'shadow_orange',
		color: '#F4CA80',
	},
	{
		title: 'Админов',
		value: 108,
		ImageUrl: Paty,
		class: 'shadow_purple',
		color: '#BC74D4',
	},
	{
		title: 'Банов',
		value: 3904,
		ImageUrl: Ban,
		class: 'shadow_purple',
		color: '#BC74D4',
	},
	{
		title: 'Мутов',
		value: 2157,
		ImageUrl: Microphone,
		class: 'shadow_purple',
		color: '#BC74D4',
	},
]

