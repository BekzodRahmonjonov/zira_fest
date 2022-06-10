import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { ElCollapseTransition } from "element-plus";
import "./assets/tailwind.css";
import "./assets/styles/main.scss"
// import YmapPlugin from 'vue-yandex-maps'


const app = createApp(App);

// const settings = {
//   apiKey: '0a9f5458-8d64-43f6-9fcf-4e67efc0a0e5',
//   lang: 'ru_RU',
//   coordorder: 'latlong',
//   enterprise: false,
//   version: '2.1'
// }
// .use(YmapPlugin, settings)


app.use(store).use(router).use(ElementPlus).mount('#app')
app.component(ElCollapseTransition.name, ElCollapseTransition);

