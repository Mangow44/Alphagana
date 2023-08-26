import '@/infrastructure/driving/assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'

import App from '@/infrastructure/driving/App.vue'
import router from '@/infrastructure/driving/router'

import fr from '@/infrastructure/driving/lang/fr.json'
import en from '@/infrastructure/driving/lang/en.json'

const messages = { fr, en }

const userLanguage = navigator.language.split('-')[0]

const i18n = createI18n({
  legacy: false,
  locale: userLanguage === 'fr' ? 'fr' : 'en',
  fallbackLocale: 'en',
  messages
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
