import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './assets/css/tailwind.css'
import "./assets/css/nprogress.css";
// import "vue-transitions-css";

const app = createApp(App)
app.use(router)
app.mount('#app')
