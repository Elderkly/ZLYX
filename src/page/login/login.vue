<template>
    <div>
        <img src="../../assets/img/logo-opacity.png" class="logo-opacity"/>
        <img src="../../assets/img/logo.png" class="logo"/>
        <div class="content">
            <p>医院代码</p>
            <Input type="text" placeholder="请输入医院代码" @change="change(arguments[0],'code')" @enter="focusIndex = 1"/>
            <p>账号</p>
            <Input type="text" placeholder="请输入手机号" @change="change(arguments[0],'user')" @enter="focusIndex = 2" :inputFocus="focusIndex === 1"/>
            <p>密码</p>
            <Input type="password" placeholder="请输入密码" @change="change(arguments[0],'password')" @enter="login" :inputFocus="focusIndex === 2"/>
        </div>
        <div class="login" @click="login">登录</div>
<!--        <div class="login wxLogin" @click="wxLogin">-->
<!--            <img src="../../assets/img/weixin.png"/>-->
<!--            微信登录-->
<!--        </div>-->
  </div>
</template>

<script>
    import Input from '@/components/input/input'
    import { Toast } from 'vant';
    export default {
        name: 'login',
        data() {
            return {
                code: null,
                user: null,
                password: null,
                focusIndex: null
            }
        },
        components: {
            Input,
        },
        methods: {
            change(value,type) {
                console.log(value,type)
                this[type] = value
            },
            login() {
                const showText = !this.code ? '医院代码不正确' :
                    !this.user ? '请输入正确的用户名' :
                        !this.password ? '密码登录错误' : null
                if (showText) Toast(showText)
                else {
                    const userInfo = {
                        Phone: '',
                        DepartmentId: '医学工程部',
                        UserId: '',
                        RYLB: '',
                        UserName: this.user,
                        QX: '',
                        QXMC: '',
                        HOSCODE: this.code,
                    }
                    this.$store.commit('SET_USER_INFO', userInfo)
                    localStorage.setItem('userInfo',JSON.stringify(userInfo))
                    const router = location.href.indexOf('code') !== -1 ? `/?code=${location.hash.split('code=')[1]}` : '/'
                    this.$router.replace(router)
                    window.scrollTo(0,0)
                }
            },
            // wxLogin() {
            //
            // },
        },
    }
</script>

<style lang="scss" scoped>
    .logo-opacity{
        position: absolute;
        top: -280px;
        right: -180px;
        width: 600px;
        height: 600px;
    }
    .logo{
        width: 258px;
        height: 144px;
        margin-top: 129px;
        margin-left: 52px;
    }
    .content {
        margin-top: 30px;
        padding: 0 70px;
        box-sizing: border-box;
        p {
            font-size: 30px;
            color: $TEXT-DARK-COLOR;
            font-weight: 500;
        }
    }
    .login {
        width: 600px;
        height: 100px;
        border-radius: 12px;
        background: $THEME-COLOR;
        line-height: 100px;
        text-align: center;
        font-size: 32px;
        color: $TEXT-LIGHT-COLOR;
        margin-left: 70px;
        margin-top: 28px;
    }
    .wxLogin{
        background: #52b62b;
        margin-top: 30px;
        position: relative;
        img{
            position: absolute;
            width: 45px;
            top: 25px;
            left: 175px;
        }
    }
</style>
