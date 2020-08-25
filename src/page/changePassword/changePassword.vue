<template>
    <div>
        <Box title="修改密码">
            <p class="toast">如果忘记了旧的密码，请联系管理员</p>
            <div class="content">
                <div class="items">
                    <span>旧密码</span>
                    <input type="password" placeholder="请输入旧密码" v-model="oldPassword">
                </div>
                <div class="items">
                    <span>新密码</span>
                    <input type="password" placeholder="请输入新密码" v-model="newPassword">
                </div>
                <div class="items">
                    <span>确认新密码</span>
                    <input type="password" placeholder="请输入新密码" v-model="affirmPassword">
                </div>
            </div>
        </Box>
        <div class="footer">
            <div class="button" @click="save">提交</div>
        </div>
    </div>

</template>

<script>
    import Box from '../../components/commonBox/commonBox'
    import {Toast} from 'vant'
    export default {
        name: 'HospitalCode',
        data() {
            return {
                oldPassword: null,
                newPassword: null,
                affirmPassword: null
            }
        },
        components: {
            Box
        },
        methods: {
            save() {
                if (!this.oldPassword || !this.newPassword || !this.affirmPassword) {
                    Toast('请确认已输入的旧密码和新密码')
                } else {
                    this.$router.back()
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .toast{
        font-size: 29px;
        color: $TEXT-LIGHT-COLOR;
        margin-left: 54px;
        margin-bottom: 32px;
        margin-top: 32px;
    }
    .content{
        background: $BACKGROUND-COLOR;
        width: 710px;
        margin: auto;
        border-radius: 12px;
        padding: 0 29px 0 40px;
        box-sizing: border-box;
        margin-top: 0!important;
        .items{
            display: flex;
            height: 112px;
            align-items: center;
            border-bottom: 2px solid #F3F3F3;
            &:last-child{
                border: none;
            }
            span{
                flex: 1;
            }
            input{
                width: 180px;
                font-size: 29px;
                text-align: center;
                &::-webkit-input-placeholder{
                    color: #858585;
                }
            }
        }
    }
    .footer{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 114px;
        background: $BACKGROUND-COLOR;
        box-shadow:0px 6px 12px rgba(0,0,0,0.16);
        padding-top: 24px;
        .button{
            width:690px;
            height:96px;
            background:$THEME-COLOR;
            border-radius:8px;
            color: $TEXT-LIGHT-COLOR;
            font-size: 30px;
            text-align: center;
            line-height: 96px;
            margin: auto;
        }
    }
</style>
