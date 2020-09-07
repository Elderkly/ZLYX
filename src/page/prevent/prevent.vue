<template>
    <Box title="预防计划实施">
        <LoadingFooter
            v-model="loading"
            :finished="finished"
            @load="onLoad"
        >
            <div class="menu">
                <Field title="资产名称" placeholder="请输入编号或者名称" @onMessage="value => search.params1 = value"/>
                <Field title="使用科室" placeholder="请输入" @onMessage="value => search.params2 = value"/>
                <Field title="开始时间" placeholder="请选择" type="calendar" @onMessage="value => search.params3 = value"/>
                <Field title="结束时间" placeholder="请选择" type="calendar" @onMessage="value => search.params4 = value"/>
                <div class="search" @click="serach">查询</div>
            </div>
            <p class="listLength">共计 <span>{{list.length}}条</span></p>
            <div class="listItems items" v-for="item in list" @click="$router.push({name: 'QualityTest', params: {item} })">
                <div>
                    <img :src="item.Img"/>
                    <div>
                        <div>
                            <span class="ellipsis">{{item.EquName}}</span>
                            <img src="../../assets/img/right.png"/>
                        </div>
                        <div>
                            <div>
                                <p>资产编号：</p>
                                <p>计划单号：</p>
                                <p>使用科室：</p>
                                <p>检测类型：</p>
                            </div>
                            <div>
                                <p class="ellipsis">{{item.EquId}}</p>
                                <p class="ellipsis">{{item.OrderNo}}</p>
                                <p class="ellipsis">{{item.DepName}}</p>
                                <p class="ellipsis">{{item.TestingName}}</p>
                            </div>
                            <div class="button">
                                <div>执行计划</div>
                                <div @click.stop="stop(item)">终止计划</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <span>下次维护时间</span>
                    <span>{{item.NextKeepDate}}</span>
                </div>
            </div>
        </LoadingFooter>
    </Box>
</template>

<script>
    import Box from '@/components/commonBox/commonBox'
    import Field from '../../components/field/field'
    import LoadingFooter from '../../components/loadingFooter/loadingFooter'
    export default {
        name: 'Prevent',
        data() {
            return {
                search: {
                    params1: null,
                    params2: null,
                    params3: null,
                    params4: null,
                },
                loading: false,
                finished: false,
                list: [{
                    "OrderNo": "PM-202009-SN-00001",
                    "EquId": "07030100017",
                    "EquName": "ACT监测仪",
                    "DepNo": "1001",
                    "Standards": "100B",
                    "TestingName": "预防性维护检测",
                    "TestingNo": "11",
                    "DepName": "麻醉科",
                    "Factory": "北京科议诚",
                    "KeepCycle": "1日",
                    "KeepDate": "2020-09-02",
                    "NextKeepDate": "2020-09-02",
                    "SBXLH": null,
                    "QYRQ": "2005-07-14 00:00:00",
                    "CCRQ": null,
                    "SBGYSMC": null,
                    "OrderName": "医疗设备预防20200902",
                    "SSDHList": []
                }, {
                    "OrderNo": "PM-202009-SN-00002",
                    "EquId": "01020000003",
                    "EquName": "半导体激光手术刀",
                    "DepNo": "1001",
                    "Standards": "HOP-100",
                    "TestingName": "预防性维护检测",
                    "TestingNo": "11",
                    "DepName": "院感办公室",
                    "Factory": null,
                    "KeepCycle": "1月",
                    "KeepDate": "2020-09-02",
                    "NextKeepDate": "2020-09-02",
                    "SBXLH": "",
                    "QYRQ": "2020-01-03 00:00:00",
                    "CCRQ": null,
                    "SBGYSMC": null,
                    "OrderName": "医疗设备预防20200902",
                    "SSDHList": []
                }],
            }
        },
        components: {
            Box,
            Field,
            LoadingFooter
        },
        methods: {
            serach() {
                alert(JSON.stringify(this.search))
            },
            onLoad() {
                setTimeout(() => {
                    console.log('Box触底')
                    this.loading = false
                    //  数据是否加载完毕
                    this.finished = true
                },1000)
            },
            stop(item) {
                alert(JSON.stringify(item))
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
        background: $BACKGROUND-COLOR;
        border-radius: 16px;
        margin-bottom: 20px;
        padding-bottom: 20px;
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
                        flex: 1;
                        &>div{
                            display: flex;
                            &:first-child{
                                margin-bottom: 18px;
                                display: flex;
                                span:first-child{
                                    color: $TEXT-DARK-COLOR;
                                    font-weight: bold;
                                    font-size: 32px;
                                    flex: 1;
                                    width: 208px;
                                }
                                span:nth-child(2) {
                                    color: $TEXT-DARK-COLOR;
                                    font-size: 28px;
                                    margin-left: 10px;
                                    width: 158px;
                                    text-align: right;
                                }
                                img{
                                    width: 32px;
                                    height: 32px;
                                    margin-left: 10px;
                                }
                            }
                            &:nth-child(2){
                                p{
                                    color: #999;
                                    font-size: 26px;
                                    line-height: 45px;
                                    height: 45px;
                                }
                                &>div:nth-child(2){
                                    p{
                                        width: 200px;
                                    }
                                }
                            }
                        }
                        .button{
                            margin-left: 10px;
                            margin-top: 20px;
                            div{
                                width: 152px;
                                height: 60px;
                                border-radius: 30px;
                                background: $THEME-COLOR;
                                font-size: 26px;
                                color: #fff;
                                text-align: center;
                                line-height: 60px;
                                margin-bottom: 12px;
                            }
                        }
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
    .listLength{
        font-size: 29px;
        color: #4a4a4a;
        margin-bottom: 18px;
        margin-left: 30px;
        span{
            margin-left: 20px;
            color: $THEME-COLOR;
            font-weight: bold;
        }
    }
</style>
