// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/global.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import navBar from './components/navBar.vue'

Vue.use(MintUI)
Vue.use(ElementUI)

Vue.component(navBar.name, navBar)
// axios.defaults.baseURL = 'http://www.sinya.online/api/'
Vue.prototype.$axios = axios
Vue.directive('drag', function (el) {
  var oDiv = el
  oDiv.onmousedown = function (ev) {
    ev.preventDefault()
    var disX = ev.clientX - oDiv.offsetLeft
    var disY = ev.clientY - oDiv.offsetTop
    document.onmousemove = function (ev) {
      var l = ev.clientX - disX
      var t = ev.clientY - disY
      oDiv.style.left = l + 'px'
      oDiv.style.top = t + 'px'
    }
    document.onmouseup = function () {
      document.onmousemove = null
      document.onmouseup = null
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
