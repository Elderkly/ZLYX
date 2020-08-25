<template>
    <div>
        <Box title="设置">
            <div class="content">
                <div class="items">
                    <span>仓库</span>
                    <span>医学工程部</span>
                    <img src="../../assets/img/right.png">
                </div>
                <div class="items">
                    <span>医院代码</span>
                    <span>ZLYY</span>
                    <img src="../../assets/img/right.png">
                </div>
                <div class="items">
                    <span>修改密码</span>
                    <img src="../../assets/img/right.png">
                </div>
            </div>
            <div class="logout" @click="logOut">退出登录</div>
        </Box>
    </div>
</template>

<script>
    import Box from '@/components/commonBox/commonBox'
    export default {
        name: 'setting',
        components: {
            Box
        },
        methods: {
            logOut() {
                localStorage.removeItem('userInfo')
                location.reload();
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
</style>
