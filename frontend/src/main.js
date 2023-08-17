import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router";
import axios from "axios";
import {store} from "@/store";

const app = createApp(App)
app.use(router, axios, store)
app.mount('#app')
