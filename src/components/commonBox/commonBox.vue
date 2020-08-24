<template>
    <div>
        <div class="header">
            <img src="../../assets/img/right.png" @click="back">
            <p>{{title}}</p>
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
            }
        },
        methods: {
            back() {
                this.$router.back()
            }
        }
    }
</script>
<style scoped lang="scss">
    .header{
        height: 106px;
        background: $THEME-COLOR;
        p{
            color: $TEXT-LIGHT-COLOR;
            font-size: 34px;
            font-weight: 400;
        }
        img{
            position: absolute;
            left: 28px;
            width: 16px;
            height: 32px;
            top: 16px;
            padding: 20px
        }
    }
    .bool{
        position: absolute;
        width: 110%;
        left: -5%;
        top: -50px;
        height: 450px;
        border-radius: 50%;
        background: $THEME-COLOR;
    }
    .content{
        position: relative;
        margin-top: 108px;
    }
</style>
