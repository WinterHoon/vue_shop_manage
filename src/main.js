import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

import './assets/CSS/global.css'

import axios from 'axios'

//老师的接口
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
// 评论区的接口
// axios.defaults.baseURL = 'http://timemeetyou.com:8889/api/private/v1/'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
