import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { LaMoon } from 'oh-vue-icons/icons'

addIcons(LaMoon)

const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.mount('#app')
