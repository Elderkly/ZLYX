<template>
    <Box title="众联医修" right-button="search">
        <div class="message-content">
            <van-tabs
                swipeable
                background="rgba(0,0,0,0)"
                line-width="0"
                v-model="tabsIndex"
            >
                <van-tab title="消息">
                    <MessageList State="1" :config="[
                        {id: '1', text:'待派工', img: require('../../assets/img/dpg.png'), color: '#FF9E48', router: 'Dispatch'},
                        {id: '3', text:'待验收', img: require('../../assets/img/dys.png'), color: '#48A4FF'},
                        {id: '6', text:'待接单', img: require('../../assets/img/djd.png'), color: '#48A4FF', router: 'OrderReceiving'},
                        {id: '8', text:'待审批', img: require('../../assets/img/dsp.png'), color: '#48A4FF', router: 'Examine'}
                    ]"/>
                </van-tab>
                <van-tab title="待处理">
                    <MessageList State="2" :config="[
                        {id: '2', text:'待处理', img: require('../../assets/img/dwx.png'), color: '#FF9E48'},
                        {id: '5', text:'处理中', img: require('../../assets/img/wxz.png'), color: '#48A4FF'},
                    ]"/>
                </van-tab>
                <van-tab title="已完成">
                    <MessageList State="3" :config="[
                        {id: '4', text:'已验收', img: require('../../assets/img/yys.png'), color: '#4FA69E'},
                        {id: '7', text:'审批未通过', img: require('../../assets/img/yhl.png'), color: '#D4D4D4'},
                        {id: '9', text:'已忽略', img: require('../../assets/img/yhl.png'), color: '#D4D4D4'},
                    ]"/>
                </van-tab>
            </van-tabs>
        </div>
    </Box>
</template>

<script>
    import Box from '../../components/commonBox/commonBox'
    import {Tab, Tabs} from 'vant'
    import MessageList from '../../components/messageList/messageList'
    export default {
        name: 'message',
        data() {
          return {
             tabsIndex: 0
          }
        },
        components: {
            Box,
            MessageList,
            [Tab.name]: Tab,
            [Tabs.name]: Tabs,
        },
        watch: {
            tabsIndex(newValue, oldValue) {
                window.scrollTo(0, 0)
            }
        }

    }
</script>

<style lang="scss" scoped>
    .message-content{
        width: 710px;
        margin: auto;
        padding-top: 95px;
        padding-bottom: 50px;
    }
</style>
