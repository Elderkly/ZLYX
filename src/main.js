// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import Vconsole from 'vconsole'
import VuePageStack from 'vue-page-stack'
import './color.scss'
import './main.scss'
import './assets/style/vant.scss'

// new Vconsole()
Vue.config.productionTip = false

Vue.use(VuePageStack, {router})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
