<template>
    <div class="container">
        <form class="login-form" @submit.stop.prevent="login">
            <div>
                <label>Github Personal Token(Press Enter)</label>
                <input type="password" autocomplete v-model="token">
            </div>
        </form>
        <a href="https://github.com/settings/tokens/new" target="_blank" class="md-raised md-primary">generate your token</a>
    </div>
</template>

<script type="text/babel">
/* eslint-disable indent */

import * as types from '../store/types'
export default {
    name: 'test',
    data () {
        return {
            msg: 'hello',
            token: ''
        }
    },
    mounted () {
        this.$store.commit(types.TITLE, 'Login')
    },
    methods: {
        login () {
            if (this.token) {
                this.$store.commit(types.LOGIN, this.token)
                let redirect = decodeURIComponent(this.$route.query.redirect || '/')
                this.$router.push({
                    path: redirect
                })
            }
        }
    }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .login-form{
        width: 400px;
        margin: 50px auto;
    }
</style>
