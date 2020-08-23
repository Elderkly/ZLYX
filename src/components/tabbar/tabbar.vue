<template>
    <van-tabbar route active-color="#4FA69E" inactive-color="#666666">
        <van-tabbar-item replace to="/message">
            <span>消息</span>
            <template #icon="props">
                <img :src="require(props.active ? '../../assets/img/tabbar-message-s.png' : '../../assets/img/tabbar-message.png')" />
            </template>
        </van-tabbar-item>
        <van-tabbar-item replace to="/">
            <span>首页</span>
            <template #icon="props">
                <img :src="require(props.active ? '../../assets/img/tabbar-home-s.png' : '../../assets/img/tabbar-home.png')" />
            </template>
        </van-tabbar-item>
        <van-tabbar-item replace to="/me">
            <span>我的</span>
            <template #icon="props">
                <img :src="require(props.active ? '../../assets/img/tabbar-me-s.png' : '../../assets/img/tabbar-me.png')" />
            </template>
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>
    import {Tabbar, TabbarItem} from 'vant'
    export default {
        name: 'tabbar',
        components: {
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem
        }
    }
</script>

<style scoped lang="scss">
    img{
        width: 54px;
        height: 54px;
    }
</style>
