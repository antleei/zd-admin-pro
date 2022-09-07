import { createApp } from 'vue'
import { useModules } from 'virtual:modules'
import App from './App.vue'
import '@/styles/main.scss'

const app = createApp(App)

useModules(app)
app.mount('#app')
