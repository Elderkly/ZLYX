<template>
    <Box title="关于我们">
        <div class="content">
            <img src="../../assets/img/logo-big.png"/>
            <p class="projectName">{{projectName}}</p>
            <p class="versions">{{versions}}</p>
            <p class="afterSalePhone">售后电话：{{afterSalePhone}}</p>
            <p class="companyName">{{companyName}}</p>
        </div>
    </Box>
</template>

<script>
    import Box from '../../components/commonBox/commonBox'
    import * as Config from '../../config'
    export default {
        name: 'About',
        data() {
            return {
                projectName: Config.projectName,
                afterSalePhone: Config.afterSalePhone,
                companyName: Config.companyName,
                versions: Config.versions,
            }
        },
        components: {
            Box
        }
    }
</script>

<style scoped lang="scss">
    .content{
        background: $BACKGROUND-COLOR;
        text-align: center;
        width: 710px;
        margin: auto;
        border-radius: 12px;
        padding-bottom: 56px;
        img{
            width: 188px;
            margin-top: 214px;
        }
        .projectName{
            font-size:48px;
            font-weight:bold;
            margin-top: 18px;
        }
        .versions{
            font-size:40px;
            margin-top: 18px;
            font-weight:500;
        }
        .afterSalePhone{
            font-size:26px;
            color: #FB4444;
            font-weight:bold;
            margin-top: 300px;
        }
        .companyName{
            font-size:30px;
            color: #858585;
            font-weight:bold;
            margin-top: 16px;
        }
    }
</style>
