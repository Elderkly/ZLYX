<template>
    <Box title="人员搜索">
        <div class="inputBox">
            <img src="../../assets/img/search.png"/>
            <input type="text" placeholder="请输入姓名"/>
        </div>
        <div class="itemBox">
            <div class="items" v-for="item in AssignUserList" @click="emit(item)">
                {{item.UserName}}
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
                "AssignUserList": [{
                    "UserCode": "1     ",
                    "UserName": "穆顺坤",
                    "DepatmentName": "医学工程管理处"
                }, {
                    "UserCode": "104860",
                    "UserName": "汪函",
                    "DepatmentName": "宣传处"
                }, {
                    "UserCode": "1075  ",
                    "UserName": "孟凡有",
                    "DepatmentName": "医学工程管理处"
                }, {
                    "UserCode": "1077  ",
                    "UserName": "陈成",
                    "DepatmentName": "医学工程管理处"
                }, {
                    "UserCode": "1079  ",
                    "UserName": "胡元海",
                    "DepatmentName": "医学工程管理处"
                }, {
                    "UserCode": "123   ",
                    "UserName": "msk",
                    "DepatmentName": "院感办公室"
                }, {
                    "UserCode": "123123",
                    "UserName": "王睿",
                    "DepatmentName": "医学工程管理处"
                }, {
                    "UserCode": "123456",
                    "UserName": "孙江涛",
                    "DepatmentName": "医学工程管理处"
                }, {
                    "UserCode": "225   ",
                    "UserName": "msk",
                    "DepatmentName": "宣传处"
                }, {
                    "UserCode": "3736  ",
                    "UserName": "姚旺",
                    "DepatmentName": "医学工程管理处"
                }]
            }
        },
        methods: {
            emit(item) {
                Bus.$emit('selectStaff', item)
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
