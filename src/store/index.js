/* eslint-disable indent */
import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        user: {},
        token: null,
        title: ''
    },
    mutations: {
        [types.LOGIN]: (state, data) => {
            localStorage.token = data
            state.token = data
        },
        [types.LOGOUT]: (state) => {
            localStorage.removeItem('token')
            state.token = null
        },
        [types.TITLE]: (state, data) => {
            state.title = data
        }
    },
    // actions: {
    //     login ({commit}, data) {
    //         commit(types.LOGIN, data)
    //     },
    //     logout ({commit}) {
    //         commit(types.LOGOUT)
    //     },
    //     setTitle ({commit}, data) {
    //         commit(types.TITLE, data)
    //     }
    // }
})
