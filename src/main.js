import { createApp } from 'vue'
import { NavBar,Icon,Search,List,PullRefresh } from 'vant';
import App from './App.vue'
import router from "@/router";
import './mock' // 获取请求，返回数据

const app = createApp(App)
app.use(NavBar).use(Icon).use(Search).use(List).use(PullRefresh) // UI组件库
app.use(router)
app.mount('#app')
