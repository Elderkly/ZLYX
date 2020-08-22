<template>
  <div id="app" :style="`height: calc(${showTabbar ? '100% - 50px' : '100%'})`">
    <router-view/>
    <Tabbar v-if="showTabbar"/>
  </div>
</template>

<script>
    import Tabbar from './components/tabbar/tabbar'
    export default {
        name: 'App',
        data() {
            return {
                showTabbar: false
            }
        },
        components: {
            Tabbar
        },
        mounted() {
            this.showTabbar = this.$route.path !== '/login'
        },
        watch: {
            $route(to, from) {
                this.showTabbar = to.path !== '/login'
            }
        }
    }
</script>

<style>
    @import "main.scss";
</style>
