<template>
    <Box title="设备借用明细">
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
            <div class="menu">
                <div class="items">
                    <span>设备名称</span>
                    <input type="text" placeholder="请输入设备名称" v-model="name">
                </div>
                <div class="items">
                    <span>规格型号</span>
                    <input type="text" placeholder="请输入规格型号" v-model="model">
                </div>
                <div class="search" @click="serach">查询</div>
            </div>
            <div class="items">
                <div>
                    <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg"/>
                    <div>
                        <p class="ellipsis">半导体激光手术刀123123123123123123</p>
                        <div>
                            <div>
                                <p>资产编号：</p>
                                <p>资产序列号：</p>
                                <p>设备型号：</p>
                                <p>存放地点：</p>
                            </div>
                            <div>
                                <p class="ellipsis">1000280002312312</p>
                                <p class="ellipsis">DK01CFU43123123</p>
                                <p class="ellipsis">HOP-100123123123</p>
                                <p class="ellipsis">医学院工程部123123</p>
                            </div>
                        </div>
                    </div>
                    <div @click="jump">申请借用</div>
                </div>
                <div>
                    <span>启用日期</span>
                    <span>2019-04-15</span>
                </div>
            </div>
            <div class="items">
                <div>
                    <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg"/>
                    <div>
                        <p>半导体激光手术刀</p>
                        <div>
                            <div>
                                <p>资产编号：</p>
                                <p>资产序列号：</p>
                                <p>设备型号：</p>
                                <p>存放地点：</p>
                            </div>
                            <div>
                                <p>100028000</p>
                                <p>DK01CFU4</p>
                                <p>HOP-100</p>
                                <p>医学院工程部</p>
                            </div>
                        </div>
                    </div>
                    <div>申请借用</div>
                </div>
                <div>
                    <span>启用日期</span>
                    <span>2019-04-15</span>
                </div>
            </div>
            <div class="items">
                <div>
                    <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg"/>
                    <div>
                        <p>半导体激光手术刀</p>
                        <div>
                            <div>
                                <p>资产编号：</p>
                                <p>资产序列号：</p>
                                <p>设备型号：</p>
                                <p>存放地点：</p>
                            </div>
                            <div>
                                <p>100028000</p>
                                <p>DK01CFU4</p>
                                <p>HOP-100</p>
                                <p>医学院工程部</p>
                            </div>
                        </div>
                    </div>
                    <div>申请借用</div>
                </div>
                <div>
                    <span>启用日期</span>
                    <span>2019-04-15</span>
                </div>
            </div>
            <div class="items">
                <div>
                    <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg"/>
                    <div>
                        <p>半导体激光手术刀</p>
                        <div>
                            <div>
                                <p>资产编号：</p>
                                <p>资产序列号：</p>
                                <p>设备型号：</p>
                                <p>存放地点：</p>
                            </div>
                            <div>
                                <p>100028000</p>
                                <p>DK01CFU4</p>
                                <p>HOP-100</p>
                                <p>医学院工程部</p>
                            </div>
                        </div>
                    </div>
                    <div @click="jump">申请借用</div>
                </div>
                <div>
                    <span>启用日期</span>
                    <span>2019-04-15</span>
                </div>
            </div>
            <div class="items">
                <div>
                    <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg"/>
                    <div>
                        <p>半导体激光手术刀</p>
                        <div>
                            <div>
                                <p>资产编号：</p>
                                <p>资产序列号：</p>
                                <p>设备型号：</p>
                                <p>存放地点：</p>
                            </div>
                            <div>
                                <p>100028000</p>
                                <p>DK01CFU4</p>
                                <p>HOP-100</p>
                                <p>医学院工程部</p>
                            </div>
                        </div>
                    </div>
                    <div>申请借用</div>
                </div>
                <div>
                    <span>启用日期</span>
                    <span>2019-04-15</span>
                </div>
            </div>
            <div class="items">
                <div>
                    <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg"/>
                    <div>
                        <p>半导体激光手术刀</p>
                        <div>
                            <div>
                                <p>资产编号：</p>
                                <p>资产序列号：</p>
                                <p>设备型号：</p>
                                <p>存放地点：</p>
                            </div>
                            <div>
                                <p>100028000</p>
                                <p>DK01CFU4</p>
                                <p>HOP-100</p>
                                <p>医学院工程部</p>
                            </div>
                        </div>
                    </div>
                    <div>申请借用</div>
                </div>
                <div>
                    <span>启用日期</span>
                    <span>2019-04-15</span>
                </div>
            </div>
        </van-list>
    </Box>
</template>

<script>
    import {List} from 'vant'
    import Box from '@/components/commonBox/commonBox'
    export default {
        name: 'BorrowList',
        data() {
            return {
                name: null,
                model: null,
                loading: false,
                finished: false,
            }
        },
        components: {
            Box,
            [List.name]: List
        },
        methods: {
            serach() {
                alert('名称:' + this.name + '型号:' + this.model)
            },
            jump() {
                this.$router.push('/borrowDetails')
            },
            onLoad() {
                setTimeout(() => {
                    this.loading = false
                    this.finished = true
                },1000)
            }
        }
    }
</script>

<style scoped lang="scss">
    .menu{
        background: $BACKGROUND-COLOR;
        border-radius: 12px;
        padding: 0 29px 35px 40px;
        box-sizing: border-box;
        margin-bottom: 20px;
        .items{
            display: flex;
            height: 112px;
            align-items: center;
            border-bottom: 2px solid #F3F3F3;
            span{
                flex: 1;
            }
            input{
                width: 215px;
                font-size: 29px;
                text-align: center;
                &::-webkit-input-placeholder{
                    color: #858585;
                }
            }
        }
        .search{
            height: 88px;
            background: $THEME-COLOR;
            border-radius: 8px;
            font-size: 32px;
            color: $TEXT-LIGHT-COLOR;
            text-align: center;
            line-height: 88px;
            margin-top: 35px;
        }
    }
    .items{
        height: 364px;
        background: $BACKGROUND-COLOR;
        border-radius: 16px;
        margin-bottom: 20px;
        &>div{
            &:first-child{
                display: flex;
                padding: 34px 16px 27px 26px;
                box-sizing: border-box;
                border-bottom: 2px solid #EFEFEF;
                img {
                    width: 150px;
                    height: 192px;
                    border-radius: 4px;
                }
                &>div {
                    &:nth-child(2){
                        margin-left: 16px;
                        &>p {
                            color: $TEXT-DARK-COLOR;
                            font-weight: bold;
                            font-size: 32px;
                            margin-bottom: 18px;
                            width: 330px;
                        }
                        &>div{
                            display: flex;
                            p{
                                color: #999;
                                font-size: 26px;
                                line-height: 45px;
                            }
                            &>div{
                                &:last-child{
                                    p{
                                        width: 170px;
                                    }
                                }
                            }
                        }
                    }
                    &:last-child{
                        margin-left: 35px;
                        width: 152px;
                        height: 61px;
                        background: $THEME-COLOR;
                        border-radius: 30px;
                        text-align: center;
                        line-height: 61px;
                        font-size: 26px;
                        color: $TEXT-LIGHT-COLOR;
                        margin-top: 103px;
                    }
                }
            }
            &:last-child{
                margin-top: 16px;
                padding: 0 26px 0 31px;
                box-sizing: border-box;
                display: flex;
                span{
                    color: #999;
                    font-size: 26px;
                    &:first-child {
                        flex: 1
                    }
                }
            }
        }
    }
</style>
