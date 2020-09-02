<template>
    <Box title="进度查询">
        <div class="infoBox">
            <div class="title">
                <span>维修单号</span>
<!--                <span>{{data.OrderNo}}</span>-->
            </div>
            <div class="item" v-for="item in list">
                <img :src="item.Icon"/>
                <div>
                    <div>
                        <span>{{item.DelDate}}</span>
                        <span class="ProName">{{item.ProName}}</span>
                    </div>
                    <p>{{item.UserName}}</p>
                    <p>{{item.Phone}}</p>
                </div>
            </div>
        </div>
    </Box>
</template>

<script>
    import Box from '../../components/commonBox/commonBox'
    export default {
        name: 'MaintenanceProgress',
        components: {
            Box
        },
        data() {
            return {
                data: this.$route.params.item,
                list: []
            }
        },
        mounted() {
            const ApiData = [{
                "OrderNo": "202006230003",
                "ProSortNo": 1,
                "ProName": "维修申请",
                "UserName": "宣传处,msk-维修申请,联系电话:",
                "DelDate": "2020-06-23 18:37:10"
            }, {
                "OrderNo": "202006230003",
                "ProSortNo": 2,
                "ProName": "派工中",
                "UserName": "派工完毕",
                "DelDate": "0001-01-01 00:00:00"
            }, {
                "OrderNo": "202006230003",
                "ProSortNo": 3,
                "ProName": "已接单",
                "UserName": "宣传处,护士长涛涛-维修管理员已接单成功,联系电话:17770291026",
                "DelDate": "2020-06-30 10:38:43"
            }, {
                "OrderNo": "202006230003",
                "ProSortNo": 4,
                "ProName": "无需审批",
                "UserName": "无需审批",
                "DelDate": "2020-09-02 16:02:26"
            }, {
                "OrderNo": "202006230003",
                "ProSortNo": 5,
                "ProName": "正在处理",
                "UserName": "宣传处,护士长涛涛-正在处理维修单,联系电话:17770291026",
                "DelDate": "2020-07-10 11:31:42"
            }]
            //  对数据进行二次处理 分离手机号
            const newJson = []
            ApiData.map(e => {
                const UserNameArr = e.UserName.split(',联系电话:')
                const Icon = e.ProName.indexOf('维修申请') > -1 ? require('../../assets/img/dwx.png')
                    : e.ProName.indexOf('派工') > -1 ? require('../../assets/img/dpg.png')
                        : e.ProName.indexOf('接单') > -1 ? require('../../assets/img/djd.png')
                            : e.ProName.indexOf('审批') > -1 ? require('../../assets/img/dsp.png')
                                : require('../../assets/img/dwx.png')
                const Phone = !!UserNameArr[1] ? UserNameArr[UserNameArr.length - 1] : null
                const newObj = Phone ? {...e,Phone,UserName: UserNameArr[0],Icon} : {...e, UserName: UserNameArr[0],Icon}
                newJson.push(newObj)
            })
            this.list = newJson
        }
    }
</script>

<style scoped lang="scss">
    .title{
        display: flex;
        justify-content: space-between;
        border-bottom: 2px solid #f3f3f3;
        padding-bottom: 14px;
        margin-bottom: 42px;
        span:last-child{
            font-size: 29px;
            font-weight: 400;
        }
    }
    .item{
        display: flex;
        padding-bottom: 76px;
        border-left: 2px dashed $THEME-COLOR;
        margin: 0 18px;
        img{
            width: 54px;
            height: 54px;
            position: relative;
            left: -27px;
            border-radius: 50%;
        }
        &:last-child{
            border: none;
        }
        &>div{
            margin-left: 38px;
            flex: 1;
            position: relative;
            top: -5px;
            div{
                display: flex;
                align-items: center;
                margin-bottom: 10px;
                span:first-child{
                    color: #858585;
                    font-size: 24px;
                    flex: 1;
                }
                span:last-child{
                    font-size: 26px;
                    color: #858585;
                }
            }
            p:nth-child(2){
                font-size: 30px;
                color: #333;
                font-weight: bold;
                margin-bottom: 6px;
            }
            p:last-child{
                font-size: 29px;
                color: #333;
            }
        }
        &:last-child .ProName{
            color: $THEME-COLOR;
        }
    }
</style>
