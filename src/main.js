import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import WelcomeItem from '@/components/WelcomeItem.vue'
import './assets/main.css'

const app = createApp(App)

app.use(router)
app.component('WelcomeItem', WelcomeItem)
app.mount('#app')
