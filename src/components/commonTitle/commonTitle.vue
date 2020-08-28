<template>
    <div>
        <img src="../../assets/img/yhl-w.png"/>
        <span>{{text}}......</span>
    </div>
</template>

<script>
    //  统一标题文本模块
    export default {
        name: 'CommonTitle',
        props: {
            text: String
        }
    }
</script>

<style scoped lang="scss">
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 30px;
        img{
            width: 32px;
        }
        span{
            color: $TEXT-LIGHT-COLOR;
            font-size: 32px;
            margin-left: 15px;
        }
    }
</style>
