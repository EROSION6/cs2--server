import Particles from 'particles.vue3'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(Particles)
app.mount('#app')
