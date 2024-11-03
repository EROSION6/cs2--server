<template>
	<div class="flex flex-col gap-1 md:w-full">
		<div
			class="relative w-[350px] py-9 px-5 flex items-center overflow-hidden shadow1 rounded-xl md:w-full"
		>
			<h3 class="text-2xl text-[#B379FF] font-bold">Скинченджер</h3>
			<img
				src="https://poshlye-project.ru/app/modules/module_block_main_banner_slider/assets/img/sc.png"
				alt="img"
				class="absolute w-[300px] h-[170px] -right-[100px] -bottom-[50px]"
			/>
		</div>

		<div class="flex gap-1">
			<div
				class="relative w-[220px] py-7 px-5 flex items-center overflow-hidden shadow2 rounded-xl md:w-2/3"
			>
				<h3 class="text-2xl text-[#B379FF] font-bold">Магазин</h3>
				<img
					src="https://poshlye-project.ru/app/modules/module_block_main_banner_slider/assets/img/shop.png"
					alt="img"
					class="absolute w-[20rem] h-[160px] -right-[60px] -bottom-[55px]"
				/>
			</div>

			<div
				class="relative w-[130px] flex items-center justify-center py-7 px-5 overflow-hidden shadow3 rounded-xl md:w-1/3"
			>
				<img
					src="https://poshlye-project.ru/app/modules/module_block_main_banner_slider/assets/img/sc.png"
					alt="img"
					class="w-20 h-10"
				/>
			</div>
		</div>

		<div class="flex gap-1">
			<div
				class="relative w-[175px] py-7 px-5 flex items-center overflow-hidden shadow2 rounded-xl md:w-2/4"
			>
				<img
					src="https://poshlye-project.ru/app/modules/module_block_main_banner_slider/assets/img/shop.png"
					alt="img"
					class="w-20 h-10"
				/>
			</div>

			<div
				class="relative w-[175px] py-7 px-5 flex items-center overflow-hidden shadow3 rounded-xl md:w-2/4"
			>
				<img
					src="https://poshlye-project.ru/app/modules/module_block_main_banner_slider/assets/img/sc.png"
					alt="img"
					class="w-20 h-10"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped>
.shadow1::before,
.shadow2::before,
.shadow3::before {
	content: '';
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	width: 100%;
	background-image: linear-gradient(270deg, #b379ff, transparent);
	opacity: 0.2;
}
.shadow2::before {
	background-image: linear-gradient(270deg, #f4ca80, transparent);
}
.shadow3::before {
	background-image: linear-gradient(270deg, #5865f2, transparent);
}
</style>
