/* eslint-disable indent */
import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
import * as types from '../store/types'
import Index from '@/page/index.vue'
import Login from '@/page/login.vue'
import Repository from '@/page/repository.vue'

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: '/',
        component: Index
    },
    {
        path: '/repository',
        name: 'repository',
        meta: {
            requireAuth: true
        },
        component: Repository
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    }
]

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
    store.commit(types.LOGIN, window.localStorage.getItem('token'))
    // this.$store.dispatch('login', window.localStorage.getItem('token'))
}

const router = new Router({
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (store.state.token) {
            next()
        } else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        }
    } else {
        next()
    }
})

export default router
