import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { ElCollapseTransition } from "element-plus";
import "./assets/tailwind.css";
import "./assets/styles/main.scss"
import YmapPlugin from 'vue-yandex-maps'

const app = createApp(App);

const settings = {
  apiKey: '38a96dc6-5597-48d3-bc01-cf082754acdd',
  lang: 'ru_RU',
  coordorder: 'latlong',
  enterprise: false,
  version: '2.1'
}

app.use(store).use(router).use(ElementPlus).use(YmapPlugin, settings).mount('#app')
app.component(ElCollapseTransition.name, ElCollapseTransition);

