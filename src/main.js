import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas,faUser, faClock } from '@fortawesome/free-solid-svg-icons';
import router from "./router";

library.add(fas,faUser, faClock);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app');