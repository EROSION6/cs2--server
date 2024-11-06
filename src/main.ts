import Particles from 'particles.vue3'
import PrimeVue from 'primevue/config'
import ProgressBar from 'primevue/progressbar'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

// import 'primeicons/primeicons.css' // иконки
// import 'primevue/resources/primevue.css' // правильный путь к стилям
// import 'primevue/resources/themes/saga-blue/theme.css' // или другой выбранный вами

const app = createApp(App)

app.component('progress-bar', ProgressBar)

app.use(router)
app.use(Particles)
app.use(PrimeVue)
app.mount('#app')
