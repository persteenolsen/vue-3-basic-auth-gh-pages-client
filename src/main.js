import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import { router } from './helpers';


// setup fake backend in .env
//VITE_API_URL=http://localhost:4000

// setup real backend in .env
//VITE_API_URL=https://pso-aspnet-core-basic.azurewebsites.net/

// setup fake backend
//import { fakeBackend } from './helpers';
//fakeBackend();

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
