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
            this.showTabbar = this.$route.path === '/message' || this.$route.path === '/' || this.$route.path === '/me'
        },
        watch: {
            $route(to, from) {
                this.showTabbar = to.path === '/message' || to.path === '/' || to.path === '/me'
            }
        }
    }
</script>
