// @ts-nocheck
import './assets/styles/main.scss'

import { createApp } from 'vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'

import App from './App.vue'

const app = createApp(App)

app.use(VueGoogleMaps, {
  load: {
    v: "weekly",
    key: 'AIzaSyDmwm9ooYjzU7LZpg0PDBRPst82KOR0NCQ',
  },
})

app.mount('#app')