/* eslint-disable indent */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from './http'
import store from './store/index'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'

Vue.use(VueMaterial)
Vue.config.productionTip = false

Vue.prototype.axios = axios

/* eslint-disable no-new */
new Vue({
    el: '#app',
    axios,
    store,
    router,
    components: {App},
    template: '<App/>'
})
