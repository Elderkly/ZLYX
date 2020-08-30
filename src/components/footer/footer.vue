<template>
    <div class="footer">
        <div class="onlyButton" @click="$emit('change')" v-if="typeof button === 'string'">{{button}}</div>
        <div class="button" v-else v-for="item in button" :style="{background: item.background, color: item.color}" @click="$emit(item.event)">
            {{item.text}}
        </div>
    </div>
</template>

<script>
    //  页脚悬浮按钮模块
    export default {
        name: 'Footer',
        props: {
            button: String | Array
        },
    }
</script>

<style scoped lang="scss">
    .footer{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 114px;
        background: $BACKGROUND-COLOR;
        box-shadow:0px 6px 12px rgba(0,0,0,0.16);
        padding: 20px 0;
        display: flex;
        justify-content: center;
        .onlyButton{
            width:690px;
            height:96px;
            background:$THEME-COLOR;
            border-radius:8px;
            color: $TEXT-LIGHT-COLOR;
            font-size: 30px;
            text-align: center;
            line-height: 96px;
            margin: auto;
        }
        .button{
            width: 320px;
            height: 82px;
            border-radius: 8px;
            text-align: center;
            line-height: 82px;
            font-size: 26px;
            &:first-child{
                margin-right: 55px;
            }
        }
    }
</style>
