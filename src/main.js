import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { ElCollapseTransition } from "element-plus";
import "./assets/tailwind.css";
import "./assets/styles/main.scss"

const app = createApp(App);

app.use(store).use(router).use(ElementPlus).mount('#app')
app.component(ElCollapseTransition.name, ElCollapseTransition);
