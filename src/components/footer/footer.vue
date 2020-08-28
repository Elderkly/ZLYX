<template>
    <div class="footer">
        <div class="button" @click="$emit('change')">{{text}}</div>
    </div>
</template>

<script>
    //  页脚悬浮按钮模块
    export default {
        name: 'Footer',
        props: {
            text: String
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
        padding-top: 24px;
        .button{
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
    }
</style>
