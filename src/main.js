import { createApp } from 'vue';
import App from './App.vue';
import { store } from './store/store.js';

// Creamos la instancia de la aplicación y añadimos el store.
const app = createApp(App);
app.use(store);
app.mount('#app');