import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
// import { provinceAndCityData } from 'element-china-area-data'
import ElementUI, { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import VCharts from 'v-charts'
import '@/styles/index.scss' // global css
import '@/styles/main.scss' // 组件css
// import '@/views/rem.js'
import App from './App'
import router from './router'
import querymany from './components/querymany/index.vue'
import store from './store'

import '@/icons' // icon
import '@/permission' // permission control

Vue.use(ElementUI, { zhLocale },).use(VCharts)
Vue.config.productionTip = false
Vue.component(
  'query-many', querymany
)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
