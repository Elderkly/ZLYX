<template>
    <Box title="合同附件">
        <LoadingFooter
            v-model="loading"
            :finished="finished"
            @load="onLoad"
        >
            <div class="menu">
                <Field title="合同编号" placeholder="请输入合同编号" @onMessage="value => search.params1 = value"/>
                <Field title="开始时间" placeholder="请选择" type="calendar" @onMessage="value => search.params2 = value"/>
                <Field title="结束时间" placeholder="请选择" type="calendar" @onMessage="value => search.params3 = value"/>
                <div class="search" @click="serach">查询</div>
            </div>
            <p class="listLength">共计 <span>{{list.length}}条</span></p>
            <div class="listItems items" v-for="item in list" @click="$router.push({name: 'Accessory', params: {item} })">
                <div>
                    <img :src="item.Img"/>
                    <div>
                        <div>
                            <span class="ellipsis">{{item.SBMX}}</span>
                            <span class="ellipsis">¥ {{item.HTJE}}</span>
                            <img src="../../assets/img/right.png"/>
                        </div>
                        <div>
                            <div>
                                <p>合同名称：</p>
                                <p>合同编号：</p>
                                <p>乙方单位：</p>
                            </div>
                            <div>
                                <p class="ellipsis">{{item.HTMC}}</p>
                                <p class="ellipsis">{{item.HTBH}}</p>
                                <p class="ellipsis">{{item.HTDW}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <span>录入时间</span>
                    <span>{{item.LRSJ}}</span>
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
        name: 'ScrapList',
        data() {
            return {
                search: {
                    params1: null,
                    params2: null,
                    params3: null,
                },
                loading: false,
                finished: false,
                list: [{
                    "HTBH": "201901100002                                      ",
                    "HTMC": "采购20190110",
                    "HTDW": "北京博尔晟科技发展有限公司",
                    "LRSJ": "2020-07-31 10:28:40",
                    "SBMX": "超声手术系统123213123123123132",
                    "SBMXSL": 1,
                    "FJSL": 11,
                    "HTLXMC": "采购合同",
                    "HTJE": 0.0000
                }, {
                    "HTBH": "HT202007280001                                    ",
                    "HTMC": "ssssbbb",
                    "HTDW": "郑州市中星医疗设备厂",
                    "LRSJ": "2020-07-28 11:56:46",
                    "SBMX": "李友远",
                    "SBMXSL": 1,
                    "FJSL": 1,
                    "HTLXMC": "采购合同",
                    "HTJE": 2000.0000
                }, {
                    "HTBH": "HT202007140001                                    ",
                    "HTMC": "多道心电图机采购合同",
                    "HTDW": "郑州市中星医疗设备厂",
                    "LRSJ": "2020-07-14 09:14:17",
                    "SBMX": "减脂聚焦超声治疗系统,监护仪配件",
                    "SBMXSL": 2,
                    "FJSL": 0,
                    "HTLXMC": "采购合同",
                    "HTJE": 2.0000
                }, {
                    "HTBH": "HT202007020001                                    ",
                    "HTMC": "多道心电图机采购合同",
                    "HTDW": "2014年盘点厂家赠送",
                    "LRSJ": "2020-07-02 16:21:08",
                    "SBMX": "穆舜坤cs623",
                    "SBMXSL": 1,
                    "FJSL": 1,
                    "HTLXMC": "采购合同",
                    "HTJE": 1.0000
                }, {
                    "HTBH": "HT202006290002                                    ",
                    "HTMC": "多道心电图机",
                    "HTDW": "安徽淳康生物科技有限公司",
                    "LRSJ": "2020-06-29 15:51:06",
                    "SBMX": "多道心电图机",
                    "SBMXSL": 1,
                    "FJSL": 1,
                    "HTLXMC": "采购合同",
                    "HTJE": 1.0000
                }, {
                    "HTBH": "121212                                            ",
                    "HTMC": "织金合同",
                    "HTDW": "中国北航",
                    "LRSJ": "2020-06-29 10:22:05",
                    "SBMX": "msk",
                    "SBMXSL": 1,
                    "FJSL": 2,
                    "HTLXMC": "采购合同",
                    "HTJE": 1.0000
                }, {
                    "HTBH": "HT202006280001                                    ",
                    "HTMC": "22",
                    "HTDW": "浙江杭州",
                    "LRSJ": "2020-06-28 11:57:35",
                    "SBMX": "穆舜坤cs623",
                    "SBMXSL": 1,
                    "FJSL": 0,
                    "HTLXMC": "采购合同",
                    "HTJE": 1.0000
                }, {
                    "HTBH": "123123                                            ",
                    "HTMC": "mu",
                    "HTDW": "中国北航",
                    "LRSJ": "2020-06-23 11:19:37",
                    "SBMX": "穆舜坤cs623,穆舜坤cs623",
                    "SBMXSL": 2,
                    "FJSL": 3,
                    "HTLXMC": "采购合同",
                    "HTJE": 5100.0000
                }, {
                    "HTBH": "CFSYY20200529                                     ",
                    "HTMC": "多道心电图机采购合同",
                    "HTDW": "深圳迈瑞生物医疗电子股份有限公司",
                    "LRSJ": "2020-05-29 14:42:23",
                    "SBMX": "进口激光光导纤维,超高清影像平台系统",
                    "SBMXSL": 2,
                    "FJSL": 0,
                    "HTLXMC": "采购合同",
                    "HTJE": 1968000.0000
                }, {
                    "HTBH": "HT202005190001                                    ",
                    "HTMC": "病人监护仪采购合同",
                    "HTDW": "深圳迈瑞生物医疗电子股份有限公司",
                    "LRSJ": "2020-05-19 15:42:51",
                    "SBMX": "病人监护仪",
                    "SBMXSL": 1,
                    "FJSL": 6,
                    "HTLXMC": "采购合同",
                    "HTJE": 200000.0000
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
                            &:last-child{
                                p{
                                    color: #999;
                                    font-size: 26px;
                                    line-height: 45px;
                                    height: 45px;
                                }
                                &>div{
                                    &:last-child{
                                        p{
                                            width: 370px;
                                        }
                                    }
                                }
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
    .listLength{
        top: 600px;
    }
    .listItems{
        &:nth-child(3){
            margin-top: 580px;
        }
    }
</style>
