import { createApp } from 'vue'
import App from './App.vue'
import VueI18n from './i18n'
import router from './router'

createApp(App)
    .use(router)
    .use(VueI18n)
    .mount('#app')