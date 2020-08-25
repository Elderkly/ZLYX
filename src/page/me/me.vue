<template>
    <div class="me">
        <div class="header">
            <p>我的</p>
        </div>
        <div class="user-info">
            <div class="user-header">
                <img src="../../assets/img/header.png">
            </div>
            <div class="user-text">
                <p>{{$store.getters.userInfo.UserName}}</p>
                <p>{{$store.getters.userInfo.DepartmentId}} ｜ {{$store.getters.userInfo.HOSCODE}}</p>
            </div>
        </div>
        <div class="content">
            <div @click="jump('setting')">
                <img src="../../assets/img/setting.png">
                <span>相关设置</span>
                <img src="../../assets/img/right.png">
            </div>
            <div @click="jump('about')">
                <img src="../../assets/img/info.png">
                <span>关于我们</span>
                <img src="../../assets/img/right.png">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Me',
        mounted() {
          console.log(this.$store.getters.userInfo)
        },
        methods: {
            jump(route) {
                !!route && this.$router.push(route)
            }
        }
    }
</script>

<style scoped lang="scss">
    .me {
        background: $THEME-COLOR;
        .header{
            background: $THEME-COLOR;
            p{
                color: $TEXT-LIGHT-COLOR;
            }
        }
        .user-info{
            padding-top: 178px;
            display: flex;
            align-items: center;
            margin-bottom: 64px;
            .user-header{
                width: 120px;
                height: 120px;
                border-radius: 50%;
                margin-left: 56px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .user-text{
                margin-left: 48px;
                p{
                    color: $TEXT-LIGHT-COLOR;
                    &:first-child{
                        font-size: 36px;
                        font-weight: bold;
                    }
                    &:last-child{
                        font-size: 28px;
                        margin-top: 26px;
                        font-weight: 400;
                    }
                }
            }
        }
        .content{
            background: $BACKGROUND-COLOR;
            padding: 46px 50px 46px 60px;
            box-sizing: border-box;
            border-radius: 24px 24px 0 0;
            &>div{
                height: 128px;
                display: flex;
                align-items: center;
                span{
                    flex: 1;
                    margin-left: 20px;
                    color: $TEXT-DARK-COLOR;
                    font-weight: bold;
                }
                img{
                    &:first-child{
                        width: 54px;
                    }
                    &:last-child{
                        width: 32px;
                    }
                }
            }
        }
    }
</style>
