import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import {router} from './router';
//importare bootstrap js
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


createApp(App).use(router).mount('#app')
