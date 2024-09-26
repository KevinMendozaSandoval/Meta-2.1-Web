/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import 'vuetify/styles'; // Importa los estilos de Vuetify
import '@mdi/font/css/materialdesignicons.css'; // (Opcional) Iconos de Vuetify
const app = createApp(App)

registerPlugins(app)

app.mount('#app')
