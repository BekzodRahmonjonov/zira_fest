import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { ElCollapseTransition } from "element-plus";
import "./assets/tailwind.css";
import "./assets/styles/main.scss"
import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App);

app.use(store).use(router).use(ElementPlus).use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDs3yMyD1TCuDjvArrpygWo5Kn2E4mbilc'
  }
}).mount('#app')
app.component(ElCollapseTransition.name, ElCollapseTransition);

