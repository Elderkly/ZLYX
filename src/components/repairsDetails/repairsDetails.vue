<template>
    <div class="repairs">
        <p class="title">报修信息</p>
        <div class="items">
            <span>维修单号</span>
            <span>{{data.RepairNo}}</span>
        </div>
        <div class="items">
            <span>报修科室</span>
            <span>{{data.DepartmentName}}</span>
        </div>
        <div class="items">
            <span>报修人员</span>
            <span>{{data.RepairPeople}}</span>
        </div>
        <div class="items">
            <span>报修电话</span>
            <span>{{data.RepairPhone}}</span>
        </div>
        <div class="items">
            <span>报修地址</span>
            <span>{{data.RepairAddress}}</span>
        </div>
        <div class="items">
            <span>故障问题</span>
            <span>{{data.FaultType}}</span>
        </div>
        <div class="items">
            <span>故障描述</span>
            <span>{{data.FaultDescribe}}</span>
        </div>
        <div class="items">
            <span>备注</span>
            <span>{{data.Remarks}}</span>
        </div>
    </div>
</template>

<script>
    //  报修信息模块
    export default {
        name: 'RepairDetails',
        props: {
            data: Object
        }
    }
</script>

<style scoped lang="scss">
    .repairs{
        background: $BACKGROUND-COLOR;
        border-radius: 12px;
        padding: 34px 40px 8px;
        box-sizing: border-box;
        margin-bottom: 20px;
        .title{
            color: $TEXT-DARK-COLOR;
            font-size: 34px;
            font-weight: bold;
            margin-bottom: 30px;
        }
        .items{
            display: flex;
            margin-bottom: 34px;
            span{
                &:first-child{
                    color: #999999;
                    font-size: 29px;
                    flex: 1;
                }
                &:last-child{
                    font-size: 29px;
                    color: #333;
                }
            }
        }
    }
</style>
