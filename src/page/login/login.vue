<template>
    <div>
        <img src="../../assets/img/logo-opacity.png" class="logo-opacity"/>
        <img src="../../assets/img/logo.png" class="logo"/>
        <div class="content">
            <p>医院代码</p>
            <Input type="text" placeholder="请输入医院代码" @change="change(arguments[0],'code')"/>
            <p>账号</p>
            <Input type="text" placeholder="请输入手机号" @change="change(arguments[0],'user')"/>
            <p>密码</p>
            <Input type="password" placeholder="请输入密码" @change="change(arguments[0],'password')"/>
        </div>
        <div class="login" @click="login">登录</div>
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
                password: null
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
                    localStorage.setItem('userInfo','userID: 123123')
                    this.$router.push('/')
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .logo-opacity{
        position: absolute;
        top: -240px;
        right: -180px;
        width: 600px;
        height: 600px;
    }
    .logo{
        width: 258px;
        height: 144px;
        margin-top: 169px;
        margin-left: 52px;
    }
    .content {
        margin-top: 80px;
        padding: 0 70px;
        box-sizing: border-box;
        p {
            font-size: 40px;
            color: $TEXT-DARK-COLOR;
            font-weight: 500;
        }
    }
    .login {
        width: 600px;
        height: 110px;
        border-radius: 12px;
        background: $THEME-COLOR;
        line-height: 110px;
        text-align: center;
        font-size: 36px;
        color: $TEXT-LIGHT-COLOR;
        margin-left: 70px;
        margin-top: 68px;
        margin-bottom: 100px;
    }
</style>
