//default Vue CSS files.
import './assets/main.css';

// Import Vue & Pinia.
import { createApp } from 'vue';
import { createPinia } from 'pinia';

// Import Bootstrap SCSS files
import './scss/styles.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';


import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');