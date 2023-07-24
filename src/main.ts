import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import fr from '@/lang/fr.json'
import en from '@/lang/en.json'

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
