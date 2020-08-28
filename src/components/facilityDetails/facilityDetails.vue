<template>
    <div class="equipment">
        <p class="title">设备信息</p>
        <div class="equipment-details">
            <img :src="data.Images"/>
            <div>
                <div>
                    <p>资产名称：</p>
                    <p>资产编号：</p>
                    <p>规格类型：</p>
                    <p>序列号：</p>
                </div>
                <div>
                    <p class="ellipsis">{{data.EquName}}</p>
                    <p class="ellipsis">{{data.EquNo}}</p>
                    <p class="ellipsis">{{data.Size}}</p>
                    <p class="ellipsis">{{data.EquNumber}}</p>
                </div>
            </div>
        </div>
        <div>
            <div class="ellipsis">使用科室：  {{data.DepartmentName}}</div>
            <div>使用年限：  {{data.deadline}}</div>
        </div>
    </div>
</template>

<script>
    //  设备信息模块
    export default {
        name: 'FacilityDetails',
        props: {
            data: Object
        }
    }
</script>

<style scoped lang="scss">
    .equipment{
        height: 424px;
        background: $BACKGROUND-COLOR;
        border-radius: 12px;
        padding: 34px 40px 0;
        box-sizing: border-box;
        margin-bottom: 20px;
        .title{
            color: $TEXT-DARK-COLOR;
            font-size: 34px;
            font-weight: bold;
            margin-bottom: 30px;
        }
        img{
            width: 150px;
            height: 192px;
        }
        .equipment-details{
            display: flex;
            margin-top: 24px;
            &>div{
                margin-left: 34px;
                display: flex;
                div{
                    &:first-child{
                        color: #999;
                        line-height: 55px;
                    }
                    &:last-child{
                        color: #333;
                        line-height: 55px;
                        p{
                            width: 280px;
                            font-size: 29px;
                            color: #333;
                        }
                    }
                }
            }
        }
        &>div:last-child{
            display: flex;
            border-top: 2px solid #F3F3F3;
            margin-top: 20px;
            div{
                flex: 1;
                text-align: center;
                height: 66px;
                line-height: 66px;
                font-size: 29px;
                color: #999;
                &:first-child{
                    border-right: 2px solid #F3F3F3;
                }
            }
        }
    }
</style>
