import { createApp } from 'vue';
import App from './App.vue';
import { store } from './store/store.js';
import { router } from './router';

// Creamos la instancia de la aplicación y añadimos el store.
const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');