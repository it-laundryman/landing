// @ts-nocheck
// import './assets/styles/main.scss'

// import { createApp } from 'vue'
// import App from './App.vue'

// import { registerDirectives } from "@/utils/directives"
// import { Vue3Mq } from "vue3-mq";


// createApp(App).use(Vue3Mq).mount('#app')


import './assets/styles/main.scss'
import { createApp } from 'vue'
import App from './App.vue'
import { registerDirectives } from "@/utils/directives"
import { Vue3Mq } from "vue3-mq"

const app = createApp(App)

// Регистрируем плагины и директивы
app.use(Vue3Mq)
registerDirectives(app)

// Монтируем приложение
app.mount('#app')