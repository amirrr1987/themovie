import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './assets/css/tailwind.css'
import "./assets/css/nprogress.css";
// import "vue-transitions-css";
import vueLazyLoad from "vue3-lazyload";

const app = createApp(App)
app.use(router)
app.use(vueLazyLoad);
app.mount('#app')
