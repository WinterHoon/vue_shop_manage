import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import './plugins/element.js'

import './assets/CSS/global.css'

import axios from 'axios'

import TreeTable from 'vue-table-with-tree-grid'
// 导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'

import NProgress from 'nprogress'

// 老师的接口
// axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
// 评论区的接口
axios.defaults.baseURL = 'http://timemeetyou.com:8889/api/private/v1/'

// 在request拦截器中，展示进度条 NProgress.start()
axios.interceptors.request.use(config => {
  NProgress.start()
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
// 在request拦截器中，隐藏进度条 NProgress.done()
axios.interceptors.response.use(config => {
  NProgress.done()
  return config
})

Vue.prototype.$http = axios

Vue.config.productionTip = false

Vue.component('tree-table', TreeTable)
// 将富文本编辑器注册为全局可用的组件
Vue.use(VueQuillEditor)

Vue.filter('dateFormat', function(originVal) {
  const date = new Date(originVal)

  const y = date.getFullYear()
  const m = (date.getMonth() + 1 + '').padStart(2, '0')
  const d = (date.getDate() + '').padStart(2, '0')

  const hh = (date.getHours() + '').padStart(2, '0')
  const mm = (date.getMinutes() + '').padStart(2, '0')
  const ss = (date.getSeconds() + '').padStart(2, '0')

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
