/* eslint-disable indent,no-trailing-spaces */
import axios from 'axios'
import store from './store/index'
import * as types from './store/types'
import router from './router'

// axios配置
axios.default.timeout = 5000
axios.defaults.baseURL = 'https://api.github.com'

// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (store.state.token) {
            config.headers.Authorization = `token ${store.state.token}`
        }
        return config
    }, error => {
        return Promise.reject(error)
    }
)

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    store.commit(types.LOGOUT)
                    // this.$store.dispatch('logout')
                    router.currentRoute.path !== 'login' &&
                        router.replace({
                            path: 'login',
                            query: { redirect: router.currentRoute.path }
                        })
            }
        }
        return Promise.reject(error.response.data)
    }
)

export default axios
