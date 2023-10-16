import { createApp } from 'vue';
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';

Object.defineProperty(globalThis, 'CESIUM_BASE_URL', {
  value: import.meta.env.VITE_CESIUM_BASE_URL,
});

const app = createApp(App);
app.use(createPinia());
app.mount('#app');
