import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

import axios from '../public/myAxios.js'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import 'normalize.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('v-icon', Icon)

import api from "../public/api.js"
Vue.prototype.api=api

import $ from 'jquery'
Vue.prototype.$ = $
Vue.config.productionTip = false

import cookieOperation from '../public/my.js'// 自定义的axios
Vue.prototype.cookieOperation = cookieOperation 

import http from '../public/myAxios.js'// 公共方法函数的路径
Vue.prototype.http = http 

import '../public/all.less'
// import VueMarkdown from 'vue-markdown'
// Vue.component('vue-markdown', VueMarkdown)

// // 第一种方法
// // main.js
// import Vue from 'vue'
// import axios from 'axios'

// Vue.prototype.axios = axios


// //第二种方法
// // main.js
// import Vue from 'vue'
// import axios from 'axios'
// import Vueaxios from 'vue-axios'

// Vue.use(Vueaxios, axios)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
