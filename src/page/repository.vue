<template>
    <div class="hello">
        <div v-for="(repo, index) in list" :key="index">
            <div class="repos-card">
                <div>
                    <div style="text-align: left">
                        <div class="md-title">{{repo.name}}</div>
                        <div class="md-subhead">{{repo.description}}</div>
                    </div>
                    <div>
                        <img :src="repo.owner.avatar_url" alt="People">
                    </div>
                </div>
                <div>
                    <div class="repo-mark">
                        <span class="md-subhead" v-if="repo.language">
                            <div>location_on</div>
                            <span>{{repo.language}}</span>
                        </span>
                        <span class="md-subhead" v-if="repo.stargazers_count">
                            <div>grade</div>
                            <span>{{repo.stargazers_count}}</span>
                        </span>
                        <span class="md-subhead" v-if="repo.forks_count">
                            <div>call_split</div>
                            <span>{{repo.forks_count}}</span>
                        </span>
                        <span class="md-subhead">
                            <div>update</div>
                            <span>{{repo.update_at}}</span>
                        </span>
                    </div>
                </div>
                <div>
                    <button>View Detail</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
/* eslint-disable indent */

import api from '../constant/api'
import * as types from '../store/types'
import {mapActions} from 'vuex'
export default {
    name: 'test',
    data () {
        return {
            msg: 'hello',
            list: []
        }
    },
    mounted () {
        this.$store.commit(types.TITLE, 'your repositories')
        // this.$store.dispatch('setTitle', 'your repositories')
        // this.setTitle('your repositories')
        this.getRepository()
    },
    methods: {
        // ...mapActions([
        //     'setTitle'
        // ]),
        getRepository () {
            let params = {
                sort: 'updated'
            }
            this.axios.get(api.repo_list, params).then(response => {
                this.list = response.data
            })
        }
    }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    .repos-card {
        width: 600px;
        margin: 10px auto;
        .repo-mark {
            text-align: left;
            position: absolute;
            bottom: 15px;
        }
    }
</style>
