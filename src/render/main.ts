import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/tailwind.css';
import router from './router'
import { store } from "./store";

createApp(App as any)
  .use(router)
  .use(store)
  .mount("#app");