import 'primeflex/primeflex.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from "primevue/config"
import Aura from "@primevue/themes/aura"
import { palette, updatePrimaryPalette } from '@primevue/themes'

const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: ".darkmode"
        }
    }
})
updatePrimaryPalette(palette("#EC4899"))

app.use(createPinia())
app.use(router)

app.mount('#app')
