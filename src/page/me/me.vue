<template>
    <div>
        <p>Me</p>
        <div class="logout" @click="logOut">退出登录</div>
    </div>
</template>

<script>
    export default {
        name: 'Me',
        methods: {
            logOut() {
                localStorage.removeItem('userInfo')
                location.reload();
            }
        }
    }
</script>

<style scoped lang="scss">
    .logout{
        width:500px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        background: #999;
    }
</style>
