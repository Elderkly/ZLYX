<template>
    <Box title="维修管理">
        <div class="infoBox">
            <div>
                <div v-for="item in list" @click="$router.push(item.router)">
                    <img :src="item.img"/>
                    <p>{{item.text}}</p>
                </div>
            </div>
        </div>
    </Box>
</template>

<script>
    import Box from '../../components/commonBox/commonBox'
    export default {
        name: 'MaintenanceManagement',
        components: {
            Box
        },
        data(){
            return {
                list: [
                    { text: '派工', img: require('../../assets/img/pg.png'), router: '/dispatchList'},
                    { text: '转单', img: require('../../assets/img/zd.png'), router: '/TransferOrderList'},
                    { text: '接单', img: require('../../assets/img/jd.png'), router: '/'},
                    { text: '维修处理', img: require('../../assets/img/wxcl.png'), router: '/'},
                    { text: '科室验收', img: require('../../assets/img/ksys.png'), router: '/'},
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
    .infoBox{
        padding-top: 100px;
        &>div{
            width: 95%;
            display: flex;
            flex-wrap: wrap;
            margin-left: 2.5%;
            div{
                width: 33%;
                text-align: center;
                margin-bottom: 60px;
                height: 130px;
                position: relative;
                img{
                    width: 53px;
                }
                &:first-child img{
                    width: 67px;
                }
                &:last-child img{
                    margin-top: 5px;
                }
                p{
                    color: $TEXT-DARK-COLOR;
                    font-size: 30px;
                    position: absolute;
                    bottom: 0;
                    text-align: center;
                    width: 100%;
                }
            }
        }
    }
</style>
