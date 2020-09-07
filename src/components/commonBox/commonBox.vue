<template>
    <div class="commonBox" :style="{minHeight: $store.getters.showTabbar ? 'calc(100vh - 50px)' : '100vh'}">
        <div class="header">
            <img src="../../assets/img/left.png" @click="back" v-if="leftButton">
            <p>{{title}}</p>
            <div v-if="rightButton === 'search'" class="search" @click="showInput ? _showInput() : $emit('Search')">
                <img src="../../assets/img/search.png">
            </div>
            <span v-else-if="rightButton && typeof rightButton === 'string'" @click="$router.push(path)">{{rightButton}}</span>
            <span class="textItems" v-else-if="rightButton && typeof rightButton !== 'string' && rightButton.length > 1" v-for="item in rightButton" @click="$router.push(item.router)">{{item.text}}</span>
        </div>
        <div class="bool"/>
        <div class="content">
            <slot/>
        </div>
        <div class="searchBox" v-if="!hiddenInput">
            <img src="../../assets/img/search.png"/>
            <input type="text" ref="input" @input="_input"/>
            <span @click="hiddenInput = true">取消</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'commonHeader',
        props: {
            title: {
                type: String,
                default: ''
            },
            rightButton: {
                type: String | Array,
                default: null
            },
            leftButton: {
                type: String,
                default: 'back'
            },
            path: String,
            showInput: Boolean
        },
        data() {
            return {
                hiddenInput: true
            }
        },
        methods: {
            back() {
                this.$router.back()
            },
            _showInput() {
                this.hiddenInput = false
                this.$nextTick((x)=>{   //正确写法
                    this.$refs.input.focus();
                })
            },
            _input() {
                this.$emit('onInput', event.target.value)
            },
            _hiddenInput() {
                this.hiddenInput = true
            }
        }
    }
</script>
<style scoped lang="scss">
    .commonBox{
        height: auto;
        background: $BACKGROUND-DARK-COLOR;
        padding-bottom: 50px;
        box-sizing: border-box;
    }
    .header{
        height: 106px;
        background: $THEME-COLOR;
        p{
            color: $TEXT-LIGHT-COLOR;
            font-size: 34px;
            font-weight: 400;
        }
        &>img{
            position: absolute;
            left: 8px;
            width: 52px;
            top: 6px;
            padding: 20px
        }
        .search{
            position: absolute;
            width: 98px;
            height: 60px;
            border-radius: 30px;
            background: #037A72;
            text-align: center;
            right: 20px;
            top: 20px;
            img{
                width: 38px;
                margin-top: 11px;
            }
        }
        span{
            position: absolute;
            right: 8px;
            top: 6px;
            padding: 20px;
            font-size: 34px;
            color: #fff;
            font-weight: 400;
        }
        .textItems{
            font-size: 28px;
            width: 56px;
            top: -10px;
            &:nth-child(3){
                right: 90px;
            }
            &:nth-child(4){
                right: 10px;
            }
        }
    }
    .bool{
        position: absolute;
        width: 110%;
        left: -5%;
        top: -50px;
        height: 450px;
        border-radius: 0 0 50% 50%;
        background: $THEME-COLOR;
    }
    .content{
        position: relative;
        padding-top: 108px;
        width: 710px;
        margin: auto;
    }
    .searchBox{
        height: 86px;
        display: flex;
        align-items: center;
        padding: 0 20px;
        box-sizing: border-box;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 20;
        background: $THEME-COLOR;
        img{
            width: 30px;
            height: 30px;
            position: absolute;
            left: 50px;
        }
        input{
            font-size: 29px;
            color: #fff;
            flex: 1;
            background: #337872;
            height: 50px;
            border-radius: 30px;
            text-indent: 70px;
            &::-webkit-input-placeholder{
                color: rgba(255,255,255,.35);
            }
        }
        span{
            font-size: 26px;
            color: #fff;
            margin-left: 20px;
        }
    }
</style>
