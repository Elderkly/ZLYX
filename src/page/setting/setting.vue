<template>
    <div>
        <Box title="设置">
            <div class="content">
                <div class="items" @click="showDiaLog = true">
                    <span>仓库</span>
                    <span>{{userInfo.wareHouse}}</span>
                    <img src="../../assets/img/right.png">
                </div>
                <div class="items">
                    <span>医院代码</span>
                    <span>{{userInfo.hoseCode}}</span>
                    <img src="../../assets/img/right.png">
                </div>
                <div class="items">
                    <span>修改密码</span>
                    <img src="../../assets/img/right.png">
                </div>
            </div>
            <div class="logout" @click="logOut">退出登录</div>
        </Box>
        <van-popup v-model="showDiaLog" position="bottom" :style="{ height: '50%', borderRadius: '10px 10px 0 0'}">
            <div class="picker-header">
                <span @click="showDiaLog = false">取消</span>
                <span @click="confirm">确定</span>
            </div>
            <van-picker
                :columns="actions"
                @cancel="showPicker = false"
                @change="onChange"
                :default-index="actionsDefaultIndex"
                item-height="15vw"
                swipe-duration="500"
            />
        </van-popup>
    </div>
</template>

<script>
    import Box from '@/components/commonBox/commonBox'
    import { Popup, Picker } from 'vant';
    export default {
        name: 'setting',
        data(){
          return {
              showDiaLog: false,
              actions: ['医学院工程部', '总务资产库','信息中心库'],
              selectActions: '',
              userInfo: {
                  wareHouse: '医学工程部',
                  hoseCode: 'ZLYY'
              },
              actionsDefaultIndex: 0
          }
        },
        components: {
            Box,
            [Popup.name]: Popup,
            [Picker.name]: Picker
        },
        mounted() {
            this.actionsDefaultIndex = this.actions.findIndex(e => e === this.userInfo.wareHouse)
        },
        methods: {
            logOut() {
                localStorage.removeItem('userInfo')
                location.reload();
            },
            onChange(picker, value, index) {
                this.selectActions = value
            },
            confirm() {
                this.userInfo.wareHouse = this.selectActions
                this.showDiaLog = false
            }
        }
    }
</script>

<style scoped lang="scss">
    .content{
        background: $BACKGROUND-COLOR;
        width: 710px;
        margin-left: 20px;
        border-radius: 12px;
        padding: 0 28px 0 40px;
        box-sizing: border-box;
        .items{
            display: flex;
            height: 110px;
            border-bottom: 2px solid #F3F3F3;
            font-size: 29px;
            color: $TEXT-DARK-COLOR;
            align-items: center;
            span {
                &:first-child{
                    flex: 1;
                }
            }
            img{
                width: 32px;
                margin-left: 6px;
            }
            &:last-child{
                border: none
            }
        }
    }
    .logout{
        width:710px;
        height: 96px;
        text-align: center;
        line-height: 96px;
        background: #ECECEC;
        border-radius: 8px;
        margin: auto;
        margin-top: 57px;
        font-size: 30px;
        color: #9B9B9B;
    }
    .picker-header{
        height: 114px;
        width: 711px;
        line-height: 114px;
        margin: auto;
        border-bottom: 2px solid #EDEDED;
        display: flex;
        position: absolute;
        z-index: 10;
        left: 0;
        right: 0;
        background: $BACKGROUND-COLOR;
        span{
            font-size: 34px;
            &:first-child{
                color: $TEXT-DARK-COLOR;
                flex: 1;
            }
            &:last-child{
                color: $THEME-COLOR;
            }

        }
    }
</style>
