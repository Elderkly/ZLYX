<template>
    <div id="app" :style="`min-height: calc(${showTabbar ? '100vh - 50px' : '100vh'})`">
        <vue-page-stack>
            <router-view/>
        </vue-page-stack>
        <Tabbar v-if="showTabbar"/>
        <transition name="slide-fade">
            <div class="orientationError" v-if="orientationError">
                请将手机旋转至{{orientationError === 'horizontal' ? '横屏' : '竖屏'}}使用
            </div>
        </transition>
    </div>
</template>

<script>
    import Tabbar from './components/tabbar/tabbar'
    export default {
        name: 'App',
        data() {
            return {
                showTabbar: false,          //  是否显示tabbar
                orientationError: null,     //  屏幕方向是否有误
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
            this.createListenOrientation()
            this.changeOrientationError(this.$route)
        },
        methods: {
            //  屏幕旋转监听
            createListenOrientation() {
                window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", this.changeOrientation)
            },
            removeListenOrientation() {
                window.removeEventListener("onorientationchange" in window ? "orientationchange" : "resize", this.changeOrientation)
            },
            changeOrientation() {
                if (this.orientationError === 'horizontal' && window.orientation === 90 || this.orientationError === 'vertical' && window.orientation === 0) {
                    this.orientationError = null
                } else {
                    this.changeOrientationError(this.$route)
                }
            },
            changeOrientationError(router) {
                if (router.name === 'QualityTest' && window.orientation !== 90) {
                    console.log('需要横屏')
                    this.orientationError = 'horizontal'
                } else if (window.orientation === 90) {
                    console.log('需要竖屏')
                    this.orientationError = 'vertical'
                } else {
                    console.log('屏幕方向正常')
                    this.orientationError = null
                }
            }
        },
        beforeDestroy() {
            this.removeListenOrientation()
        },
        watch: {
            $route(to, from) {
                this.showTabbar = to.path === '/message' || to.path === '/' || to.path === '/me'
                this.changeOrientationError(to)
            }
        }
    }
</script>

<style scoped lang="scss">
    .orientationError{
        position: fixed;
        width: 100vw;
        height: 100vh;
        background: #fff;
        top: 0;
        left: 0;
        z-index: 30;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #999;
        touch-action: none;
    }
    .slide-fade-enter-active {
        transition: all .6s;
    }
    .slide-fade-enter, .slide-fade-leave-to{
        opacity: 0;
    }
</style>
