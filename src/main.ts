import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:svg-icons-register'
import globalComponent from './components/index'
import './styles/index.scss'
import router from './router'
import pinia from './store'
import "./permission"
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App)

app.use(ElementPlus,{locale:zhCn})

app.use(globalComponent)

app.use(router)

app.use(pinia)

app.mount('#app')
