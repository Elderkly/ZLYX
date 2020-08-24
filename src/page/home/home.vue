<template>
    <div>
        <div class="header">
            众联医修
            <img src="../../assets/img/scan-black.png"/>
        </div>
        <div class="swiperBox">
            <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(item, index) in banner" :key="index">
                    <img :src="item.src"/>
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="content">
            <div class="items" v-for="item in list" >
                <img :src="item.icon">
                <p>{{item.name}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    import { Swipe, SwipeItem } from 'vant';
    export default {
        name: 'Home',
        data() {
            return {
                //  按钮
                list: [
                    //  name 文本 icon图标 url跳转链接
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
                ],
                //  海报
                banner: [
                    //  src 图片地址    router 跳转链接
                    {
                        src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg',
                        router: ''
                    },
                    {
                        src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1598308046271&di=784d7de3d314f563dbdccca54f9a2aaa&imgtype=0&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3930510857%2C1870350260%26fm%3D214%26gp%3D0.jpg',
                        router: ''
                    },
                    {
                       src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg',
                       router: ''
                    }
                ]
            }
        },
        components: {
            [Swipe.name]: Swipe,
            [SwipeItem.name]: SwipeItem,
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
        background: $BACKGROUND-COLOR;
        color: $TEXT-DARK-COLOR;
        .van-swipe-item{
            text-align: center;
        }
        img{
            position: absolute;
            width: 52px;
            height: 52px;
            right: 40px;
            top: 12px;
        }
    }
    .swiperBox{
        margin: 118px 20px 0;
        width: 710px;
        height: 300px;
        border-radius: 26px;
        overflow: hidden;
        transform: translateY(0);
        img{
            height: 300px;
        }
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
                color: $TEXT-DARK-COLOR;
                margin-top: 22px;
            }
        }
    }
</style>
