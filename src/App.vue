<template>
    <div id="app" :style="`min-height: calc(${showTabbar ? '100vh - 50px' : '100vh'})`">
<!--        <keep-alive>-->
<!--            <router-view v-if="!$route.meta.notAlive"/>-->
<!--        </keep-alive>-->
<!--        <router-view v-if="$route.meta.notAlive"/>-->
        <vue-page-stack>
            <router-view/>
        </vue-page-stack>
        <Tabbar v-if="showTabbar"/>
    </div>
</template>

<script>
    import Tabbar from './components/tabbar/tabbar'

    export default {
        name: 'App',
        data() {
            return {
                showTabbar: false,
            }
        },
        components: {
            Tabbar
        },
        mounted() {
            this.showTabbar = this.$route.path === '/message' || this.$route.path === '/' || this.$route.path === '/me'
            if (!!localStorage.getItem('userInfo')) {
                this.$store.commit('SET_USER_INFO', JSON.parse(localStorage.getItem('userInfo')))
            }
        },
        watch: {
            $route(to, from) {
                this.showTabbar = to.path === '/message' || to.path === '/' || to.path === '/me'
            }
        }
    }
</script>
