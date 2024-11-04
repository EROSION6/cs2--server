import Ban from '@/components/icon/statistics/Ban.vue'
import Crown from '@/components/icon/statistics/Crown.vue'
import Microphone from '@/components/icon/statistics/Microphone.vue'
import Paty from '@/components/icon/statistics/Paty.vue'
import Timer from '@/components/icon/statistics/Timer.vue'
import Users from '@/components/icon/statistics/Users.vue'
import Application from '../components/icon/Application.vue'
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
		route: '/',
	},
	{
		label: 'Правила',
		icon: Rules,
		route: '/',
	},
	{
		label: 'Заявки',
		icon: Application,
		route: '/',
	},
	{
		label: 'Скинченджер',
		icon: Skinchenger,
		route: '/',
	},
]

export const SORT_BTN = [
	'Все',
	'ONLY MIRAGE',
	'AWP',
	'FPS+',
	'SANDSTONE',
	'DUST 2',
]

export const ASSETS = [
	{
		id: 1,
		title: 'only mirage',
		imageUrl:
			'https://poshlye-project.ru/storage/cache/img/maps/730/de_mirage.jpg',
		stats: '15/26',
		map: 'de_mirage',
		location: 'Санкт-Петербург',
	},
	{
		id: 2,
		title: 'awp',
		imageUrl:
			'https://poshlye-project.ru/storage/cache/img/maps/730/awp_lego_2.jpg',
		stats: '12/26',
		map: 'awp_lego_2',
		location: 'Санкт-Петербург',
	},
	{
		id: 3,
		title: 'fps mirage',
		imageUrl:
			'https://poshlye-project.ru/storage/cache/img/maps/730/de_mirage_fps_y.jpg',
		stats: '22/26',
		map: 'de_mirage_fps',
		location: 'Санкт-Петербург',
	},
	{
		id: 4,
		title: 'sandstone',
		imageUrl:
			'https://poshlye-project.ru/storage/cache/img/maps/730/sandstone_new.jpg',
		stats: '11/26',
		map: 'sandstone_new',
		location: 'Санкт-Петербург',
	},
	{
		id: 5,
		title: 'only dust 2',
		imageUrl:
			'https://poshlye-project.ru/storage/cache/img/maps/730/de_dust2.jpg',
		stats: '3/26',
		map: 'de_dust2',
		location: 'Москва',
	},
]

export const STATISTICS_CARDS = [
	{
		title: 'Игроков',
		value: 10000,
		ImageUrl: Users,
		class: 'shadow_orange',
	},
	{
		title: 'За 24часа',
		value: 1371,
		ImageUrl: Timer,
		class: 'shadow_orange',
	},
	{
		title: 'Vip игроков',
		value: 288,
		ImageUrl: Crown,
		class: 'shadow_orange',
	},
	{
		title: 'Админов',
		value: 108,
		ImageUrl: Paty,
		class: 'shadow_purple',
	},
	{
		title: 'Банов',
		value: 3904,
		ImageUrl: Ban,
		class: 'shadow_purple',
	},
	{
		title: 'Мутов',
		value: 2157,
		ImageUrl: Microphone,
		class: 'shadow_purple',
	},
]

export const ONELINKS = ['Магазин', 'Личный кабинет', 'Договор оферты']

export const TWOLINKS = ['Помощь', 'Техподдержка', 'Контакты']
