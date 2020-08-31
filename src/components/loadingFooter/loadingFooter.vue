<template>
    <div>
        <slot/>
        <div class="footer">
            <span v-if="finished">{{finishedText}}</span>
            <van-loading v-else size="24px">加载中...</van-loading>
        </div>
    </div>
</template>

<script>
    import {Loading} from 'vant'
    export default {
        name: 'LoadingFooter',
        data() {
            return {
                loading: this.value,
                routerName: this.$route.name,
            }
        },
        props: {
            finishedText: {             //  加载完毕文本
                type: String,
                default: '没有更多了'
            },
            finished: {                 //  是否加载完毕
                type: Boolean,
                default: false
            },
            value: Boolean,             //  是否正在加载
            action: Boolean,            //  针对tags 当前tags是否聚焦
            isTags: {                   //  是否是tags
                type: Boolean,
                default: false,
            }
        },
        components: {
            [Loading.name]: Loading
        },
        mounted() {
            this.createListen()
        },
        methods: {
            //  获取滚动高度
            getScrollTop(){
                let scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
                if(document.body){
                    bodyScrollTop = document.body.scrollTop;
                }
                if(document.documentElement){
                    documentScrollTop = document.documentElement.scrollTop;
                }
                scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
                return scrollTop;
            },
            //  获取文档高度
            getScrollHeight(){
                let scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
                if(document.body){
                    bodyScrollHeight = document.body.scrollHeight;
                }
                if(document.documentElement){
                    documentScrollHeight = document.documentElement.scrollHeight;
                }
                scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
                return scrollHeight;
            },
            //  获取浏览器窗口高度
            getWindowHeight(){
                let windowHeight = 0;
                if(document.compatMode === "CSS1Compat"){
                    windowHeight = document.documentElement.clientHeight;
                }else{
                    windowHeight = document.body.clientHeight;
                }
                return windowHeight;
            },
            createListen() {
                window.addEventListener('scroll',this._onScroll)
            },
            removeListen() {
                window.removeEventListener('scroll',this._onScroll)
            },
            _onScroll() {
                if(this.getScrollTop() + this.getWindowHeight() === this.getScrollHeight()){
                    if (!this.loading) {
                        console.log('触底',this.finished)
                        this.loading = true
                        this.$emit('load')
                        this.$emit('input', this.loading)
                    }
                } else {
                    // console.log('0')
                }
            },
        },
        watch: {
            $route(to, from) {
                //  页面聚焦创建监听 失焦注销监听
                if (to.name === this.routerName && !this.finished) {
                    this.createListen()
                } else {
                    this.removeListen()
                }
            },
            finished(to) {
                //  数据加载完毕 注销监听
                if (to) this.removeListen()
            },
            value(to) {
                // console.log('updateLoading',to)
                this.loading = to
            },
            action(to) {
                // console.log('action',to)
                //  tags聚焦创建监听 失焦注销监听
                if (to) this.createListen()
                else this.removeListen()
            }
        }
    }
</script>

<style scoped lang="scss">
    .footer{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28px;
        color: #999;
        margin: 50px 0 20px;
    }
</style>
