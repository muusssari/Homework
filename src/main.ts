import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import { createPinia } from 'pinia'

import './assets/main.css'

createApp(App)
  .use(createPinia())
  .use(Antd)
  .mount('#app')
