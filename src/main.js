import App from './App.vue';
import router from './router';
import store from './store';
import { createApp } from 'vue';
import '@/assets/css/style.scss';

const app = createApp(App);
app.use(router).use(store);

app.mount('#app');
