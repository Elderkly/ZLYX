<template>
    <div class="infoBox ServicePerson">
        <p class="title"><span>维修人</span> <span @click="$router.push('/staffSearch')">添加</span></p>
        <div class="ServiceBox">
            <div class="ServiceItemBox" v-for="(item,index) in list">
                <van-swipe-cell>
                    <div class="ServiceItem">
                        <img :src="item.header"/>
                        <span>{{item.UserName}}</span>
                        <span>{{item.Time}}</span>
                        <span>{{item.RepairUserPhone}}</span>
                    </div>
                    <template #right>
                        <div class="delete" @click="_delete(index)">
                            <img src="../../assets/img/delete.png"/>
                        </div>
                    </template>
                </van-swipe-cell>
            </div>

        </div>
    </div>
</template>

<script>
    //  选择维修人 带添加删除功能
    import {SwipeCell} from 'vant'
    import Bus from "../bus/bus";
    export default {
        name: 'ServicePerson',
        components: {
            [SwipeCell.name]: SwipeCell
        },
        props: {
            data: Array
        },
        data() {
            return {
                list: this.data
            }
        },
        methods: {
            _delete(index) {
                this.list.splice(index,1)
                this.$emit('Message',this.list)
            }
        },
        mounted() {
            Bus.$on('selectStaff', item => {
                console.log('选中了工程师',item)
                this.list.push({
                    "RepairNo": "202006230002",
                    "RecordLineNumber": "1",
                    "UserLineNumber": "1",
                    "UserCode": item.UserCode,
                    "UserName": item.UserName,
                    "RepairUserPhone": "202006230002",
                    "UserType": "0",
                    "UserMark": "0",
                    "Remark": "",
                    Time:'30小时',
                    header: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg'
                })
                this.$emit('Message',this.list)
            })
        },
    }
</script>

<style scoped lang="scss">
    .ServicePerson{
        .title{
            display: flex;
            span:first-child{
                flex: 1;
            }
            span:last-child{
                font-size: 30px;
                color: $THEME-COLOR;
            }
        }
    }
    .ServiceBox{
        .ServiceItem{
            height: 110px;
            display: flex;
            align-items: center;
            color: #333;
            font-size: 28px;
            img{
                width: 60px;
                height: 60px;
                border-radius: 50%;
                margin-right: 40px;
            }
            span{
                margin-right: 58px;
            }
        }
        .ServiceItemBox{
            border-bottom: 2px solid #F3F3F3;
            &:last-child{
                border: none
            }
        }
    }
    .delete{
        width: 64px;
        height: 64px;
        background: #F25643;
        border-radius: 50%;
        text-align: center;
        margin-top: 24px;
        img{
            width: 40px;
            margin-top: 12px;
        }
    }
</style>
