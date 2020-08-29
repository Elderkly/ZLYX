<template>
    <div class="check">
        <div v-for="(item, index) in checkList" :class="index === selectIndex ? 'action' : ''" @click="press(index)">{{item}}</div>
        <span>{{textList[selectIndex]}}</span>
    </div>
</template>

<script>
    export default {
        name: 'Check',
        data() {
            return {
                checkList: ['A','B','C'],
                textList:['满意','一般','不满意'],
                selectIndex: 0
            }
        },
        methods: {
            press(index) {
                this.selectIndex = index
                this.$emit('change',this.checkList[this.selectIndex])
            }
        }
    }
</script>

<style scoped lang="scss">
    .check{
        display: flex;
        align-items: center;
        div{
            width: 82px;
            height: 40px;
            border-radius: 20px;
            border: 1px solid #DCDCDC;
            background: #fff;
            color: #858585;
            font-size: 24px;
            margin-right: 40px;
            text-align: center;
            line-height: 40px;
        }
        span{
            color: $THEME-COLOR;
            font-size: 28px;
        }
        .action{
            color: #fff;
            background: $THEME-COLOR;
            border-color: rgba(0,0,0,0);
        }
    }
</style>
