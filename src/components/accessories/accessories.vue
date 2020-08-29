<template>
    <div class="infoBox Accessories">
        <p class="title"><span>配件信息</span> <span @click="$router.push('/accessoriesSearch')">添加</span></p>
        <div class="AccessoriesBox">
            <div class="AccessoriesItemBox" v-for="(item,index) in list">
                <p>{{item.PartsName}}</p>
                <van-swipe-cell>
                    <div class="AccessoriesItem">
                        <span class="ellipsis">规格： {{item.Specification}}</span>
                        <span class="ellipsis">单位： {{item.Unit}}</span>
                        <span class="ellipsis">数量： {{item.Count}}</span>
                        <span>¥</span>
                        <span>{{item.Price * item.Count}}</span>
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
            Bus.$on('selectAccessories', item => {
                console.log('选中了材料',item)
                this.list.push(item)
                this.$emit('Message',this.list)
            })
        },
    }
</script>

<style scoped lang="scss">
    .Accessories{
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
    .AccessoriesItemBox{
        margin-bottom: 15px;
        p{
            font-size: 28px;
            color: $TEXT-DARK-COLOR;
            margin-bottom: 14px;
        }
    }
    .AccessoriesItem{
        height: 64px;
        line-height: 64px;
        display: flex;
        span{
            font-size: 28px;
            color: #858585;
            /*margin-right: 50px;*/
            flex:1;
            &:nth-child(4){
                margin-right: 2px;
                color: $TEXT-DARK-COLOR;
                font-size: 26px;
                width: 15px;
                flex: 0.1;
            }
            &:last-child{
                font-size: 32px;
                color: $TEXT-DARK-COLOR;
                font-weight: bold;
                margin-right: 0;
                flex: 0.3;
            }
        }
    }
    .delete{
        width: 64px;
        height: 64px;
        background: #F25643;
        border-radius: 50%;
        text-align: center;
        /*margin-top: 24px;*/
        img{
            width: 40px;
            margin-top: 12px;
        }
    }
</style>
