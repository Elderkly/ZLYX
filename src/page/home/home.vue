<template>
    <div>
        <div class="header">
            众联医修
            <img src="../../assets/img/scan-black.png"/>
        </div>
        <div class="swiper"></div>
        <div class="content">
            <div class="items" v-for="item in list" >
                <img :src="item.icon">
                <p>{{item.name}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Home',
        data() {
            return {
                list: [
                    { name: '资产查询', icon: require('../../assets/img/property.png'), url: ''},
                    { name: '扫码报修', icon: require('../../assets/img/scan.png'), url: ''},
                    { name: '科室报修', icon: require('../../assets/img/wrench.png'), url: ''},
                    { name: '维修管理', icon: require('../../assets/img/manage.png'), url: ''},
                    { name: '我的审批', icon: require('../../assets/img/judge.png'), url: ''},
                    { name: '资产档案', icon: require('../../assets/img/record.png'), url: ''},
                    { name: '资产转科', icon: require('../../assets/img/shift.png'), url: ''},
                    { name: '资产报废', icon: require('../../assets/img/scrap.png'), url: ''},
                    { name: '合同附件', icon: require('../../assets/img/accessory.png'), url: ''},
                    { name: '维修进度', icon: require('../../assets/img/schedule.png'), url: ''},
                    { name: '预防维护', icon: require('../../assets/img/maintain.png'), url: ''},
                    { name: '设备申购', icon: require('../../assets/img/subscribe.png'), url: ''},
                    { name: '验收入库', icon: require('../../assets/img/storage.png'), url: ''},
                    { name: '借用申请', icon: require('../../assets/img/borrow.png'), url: ''},
                    { name: '归还申请', icon: require('../../assets/img/return.png'), url: ''},
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .header{
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        height: 88px;
        top: 0;
        left: 0;
        width: 100%;
        background: #fff;
        img{
            position: absolute;
            width: 52px;
            height: 52px;
            right: 40px;
            top: 12px;
        }
    }
    .swiper{
        margin: 118px 20px 0;
        width: 710px;
        height: 300px;
        background: #D4D4D4;
        border-radius: 26px;
    }
    .content{
        margin-top: 56px;
        display: flex;
        flex-wrap: wrap;
        padding: 0 26px 0 28px;
        box-sizing: border-box;
        .items{
            width: 25%;
            text-align: center;
            margin-bottom: 58px;
            img{
                width: 84px;
                height: 84px;
            }
            p{
                font-size: 26px;
                color: #14171A;
                margin-top: 22px;
            }
        }
    }
</style>
