<template>
    <Box title="故障问题">
        <div class="inputBox">
            <img src="../../assets/img/search.png"/>
            <input type="text" placeholder="请输入问题"/>
        </div>
        <div class="itemBox">
            <div class="items" v-for="item in QuestionList" @click="emit(item)">
                {{item.Question}}
            </div>
        </div>
    </Box>
</template>

<script>
    import Box from '../../components/commonBox/commonBox'
    import Bus from '../../components/bus/bus'
    export default {
        name: 'StaffSearch',
        components: {
            Box
        },
        data() {
            return {
                "QuestionList": [{
                    "DescribeId": "01        ",
                    "Question": "螺丝松动01",
                    "QuestionDescribe": "螺丝松动，震动较大！",
                    "Solve": "检查螺丝是否异常，上紧，检查螺丝是否异常"
                }, {
                    "DescribeId": "15        ",
                    "Question": "开机震动且噪音较大！",
                    "QuestionDescribe": "开机启动时震动剧烈且噪音比较大！",
                    "Solve": "检查螺丝是否松动！"
                }, {
                    "DescribeId": "03        ",
                    "Question": "操作问题",
                    "QuestionDescribe": "操作方式不对",
                    "Solve": "换种操作方式"
                }, {
                    "DescribeId": "04        ",
                    "Question": "软件bug",
                    "QuestionDescribe": "软件bug",
                    "Solve": "需要研发工程师处理"
                }, {
                    "DescribeId": "09        ",
                    "Question": "发的所发生的",
                    "QuestionDescribe": "",
                    "Solve": ""
                }, {
                    "DescribeId": "13        ",
                    "Question": "线路故障",
                    "QuestionDescribe": "电流异常，闪屏，报错。",
                    "Solve": "更换电路板。"
                }, {
                    "DescribeId": "20        ",
                    "Question": "环境问题名称",
                    "QuestionDescribe": "环境问题描述",
                    "Solve": ""
                }, {
                    "DescribeId": "18        ",
                    "Question": "屏幕蓝屏",
                    "QuestionDescribe": "无法开机！",
                    "Solve": "检查显示线路是否松动！"
                }, {
                    "DescribeId": "19        ",
                    "Question": "黑屏！",
                    "QuestionDescribe": "黑屏，开机无反应！",
                    "Solve": "检查电源线是否松动！"
                }, {
                    "DescribeId": "23        ",
                    "Question": "来不起机器623",
                    "QuestionDescribe": "早上一直黑屏",
                    "Solve": ""
                }, {
                    "DescribeId": "24        ",
                    "Question": null,
                    "QuestionDescribe": "我的问题",
                    "Solve": null
                }, {
                    "DescribeId": "05        ",
                    "Question": "不会操作",
                    "QuestionDescribe": "不会操作",
                    "Solve": "学习操作流程"
                }, {
                    "DescribeId": "06        ",
                    "Question": "开不了机。",
                    "QuestionDescribe": "开不了机，无电流流通。",
                    "Solve": "检测线路是否松动。"
                }, {
                    "DescribeId": "14        ",
                    "Question": "电路异常，闪屏。",
                    "QuestionDescribe": "电路不稳定，偶尔闪屏，系统报错。",
                    "Solve": "检查电路板，更换电路板。"
                }, {
                    "DescribeId": "22        ",
                    "Question": "零件缺少缺少",
                    "QuestionDescribe": "缺少零件",
                    "Solve": "polmkkiom"
                }],
            }
        },
        methods: {
            emit(item) {
                Bus.$emit('selectQuestion', item)
                this.$router.back()
            }
        }
    }
</script>

<style scoped lang="scss">
    .inputBox{
        height: 86px;
        display: flex;
        align-items: center;
        background: #369189;
        border-radius: 10px;
        padding: 0 30px;
        box-sizing: border-box;
        img{
            width: 30px;
        }
        input{
            margin-left: 26px;
            font-size: 29px;
            color: #fff;
            flex: 1;
            &::-webkit-input-placeholder{
                color: rgba(255,255,255,.35);
            }
        }
    }
    .itemBox{
        background: #fff;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 0 40px;
        margin-top: 20px;
        .items{
            height: 112px;
            border-bottom: 2px solid #f3f3f3;
            line-height: 112px;
            color: $TEXT-DARK-COLOR;
            font-size: 29px;
        }
    }
</style>
