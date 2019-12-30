// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mint from 'mint-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'mint-ui/lib/style.css'
import './font/iconfont.css'
import App from './App'
import store from './store'
import router from './router'
// import 'jquery'
// require('./swiper.min.js')
// require('./swiper.min.css')
require('./rem.js')
Vue.use(VueAwesomeSwiper)
Vue.use(Mint)
Vue.use(Element)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
