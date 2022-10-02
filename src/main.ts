import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';


import './assets/main.css'

createApp(App)
  .use(Antd)
  .mount('#app')
