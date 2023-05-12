import './assets/main.css';

// Import vue basics.
import { createApp } from 'vue';
import { createPinia } from 'pinia';

// Import custom CSS
import './scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';


import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
