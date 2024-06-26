import '@/assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'

// element-plus UI组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

import 'element-plus/theme-chalk/dark/css-vars.css';
import '@/assets/dark/css-vars.scss';



const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn
})

app.use(createPinia())
app.use(router)
app.mount('#app')
