import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia';
import { router } from "./router/router";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const pinia = createPinia();
createApp(App).use(router).use(pinia).use(Toast,{ timeout: 2000 }).mount('#app')
