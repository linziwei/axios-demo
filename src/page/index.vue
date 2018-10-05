<template>
    <div>
        <ul>
            <router-link :to="{path:'/repository'}">
                view your repositories
            </router-link>
        </ul>
    </div>
</template>

<script type="text/babel">
/* eslint-disable indent */

export default {
    name: 'test',
    data () {
        return {
            msg: 'hello'
        }
    }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>

</style>
