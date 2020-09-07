<template>
    <div class="commonBox" :style="{minHeight: $store.getters.showTabbar ? 'calc(100vh - 50px)' : '100vh'}">
        <div class="header">
            <img src="../../assets/img/left.png" @click="back" v-if="leftButton">
            <p>{{title}}</p>
            <div v-if="rightButton === 'search'" class="search" @click="$emit('Search')">
                <img src="../../assets/img/search.png">
            </div>
            <span v-else-if="rightButton && typeof rightButton === 'string'" @click="$router.push(path)">{{rightButton}}</span>
            <span class="textItems" v-else-if="rightButton && typeof rightButton !== 'string' && rightButton.length > 1" v-for="item in rightButton" @click="$router.push(item.router)">{{item.text}}</span>
        </div>
        <div class="bool"/>
        <div class="content">
            <slot/>
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
            path: String
        },
        methods: {
            back() {
                this.$router.back()
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
</style>
