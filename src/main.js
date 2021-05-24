import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

import './assets/CSS/global.css'

import axios from 'axios'

import TreeTable from 'vue-table-with-tree-grid'
 
//老师的接口
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
// 评论区的接口
// axios.defaults.baseURL = 'http://timemeetyou.com:8889/api/private/v1/'
Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.component('tree-table', TreeTable)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
