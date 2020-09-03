<template>
    <Box title="申请列表">
        <LoadingFooter
            v-model="loading"
            :finished="finished"
            @load="onLoad"
        >
            <div class="menu">
                <Field title="申请单号" placeholder="请输入" @onMessage="value => search.params1 = value"/>
                <Field title="申请科室" placeholder="请输入" @onMessage="value => search.params2 = value"/>
                <Field title="设备名称" placeholder="请输入" @onMessage="value => search.params3 = value"/>
                <Field title="审核状态" type="teb" :data="['未审核','审核中','已审核','全部']" @onMessage="value => search.params4 = value"/>
                <Field title="计划类型" type="teb" :data="['科室申请','年度计划']" @onMessage="value => search.params5 = value"/>
                <Field title="开始时间" placeholder="请选择" type="calendar" @onMessage="value => search.params6 = value"/>
                <Field title="结束时间" placeholder="请选择" type="calendar" @onMessage="value => search.params7 = value"/>
                <div class="search" @click="serach">查询</div>
            </div>
            <p class="listLength">共计 <span>{{list.length}}条</span></p>
            <div class="items" v-for="(item, index) in list" @click="$router.push({name: 'Ask', params: {item} })">
                <div class="itemTopBox">
                    <div>
                        <span>申请单号</span>
                        <span>{{item.DH}}</span>
                    </div>
                    <div>
                        <span>申请科室</span>
                        <span>{{item.KSMC}}</span>
                    </div>
                    <div>
                        <span>申请日期</span>
                        <span>{{item.RQ}}</span>
                    </div>
                    <div>
                        <span>申请人</span>
                        <span>{{item.ZDRXM}}</span>
                    </div>
                    <div>
                        <span>申请设备</span>
                        <span>{{item.SQSBMX}}</span>
                    </div>
                    <div>
                        <span>申请理由</span>
                        <span>{{item.SQYY}}</span>
                    </div>
                    <div>
                        <span>申请标志</span>
                        <span>{{item.SHBZ}}</span>
                    </div>
                </div>
                <div class="itemBottomBox">
                    <div @click.stop="_delete(item, index)">删除</div>
                    <div>修改</div>
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
        name: 'AskList',
        data() {
            return {
                search: {
                    params1: null,
                    params2: null,
                    params3: null,
                    params4: '未审核',
                    params5: '科室申请',
                    params6: null,
                    params7: null,
                },
                loading: false,
                finished: false,
                list: [{
                    "DH": "202008100001  ",
                    "STORE": "0101                ",
                    "SQSBMX": "水杯123",
                    "STOREMC": "医学工程部          ",
                    "RQ": "2020-08-10",
                    "ZDR": "admin   ",
                    "ZDRXM": "admin   ",
                    "KS": "1024",
                    "KSMC": "应急设备库(设备科急救和生命支持设备）",
                    "SQYY": "",
                    "NDJH": "0",
                    "SHBZ": "未审核",
                    "ZT": "0",
                    "row": 1
                }, {
                    "DH": "202008100002  ",
                    "STORE": "0101                ",
                    "SQSBMX": "磨削刀",
                    "STOREMC": "医学工程部          ",
                    "RQ": "2020-08-10",
                    "ZDR": "admin",
                    "ZDRXM": "admin   ",
                    "KS": "1024",
                    "KSMC": "应急设备库(设备科急救和生命支持设备）",
                    "SQYY": "",
                    "NDJH": "0",
                    "SHBZ": "未审核",
                    "ZT": "0",
                    "row": 2
                }, {
                    "DH": "202007290001  ",
                    "STORE": "0101                ",
                    "SQSBMX": "进口激光光导纤维",
                    "STOREMC": "医学工程部          ",
                    "RQ": "2020-07-29",
                    "ZDR": "taotao",
                    "ZDRXM": "涛涛    ",
                    "KS": "1010",
                    "KSMC": "总务处",
                    "SQYY": "ryuufdj",
                    "NDJH": "0",
                    "SHBZ": "未审核",
                    "ZT": "0",
                    "row": 3
                }, {
                    "DH": "202007290002  ",
                    "STORE": "0101                ",
                    "SQSBMX": "半导体激光手术刀",
                    "STOREMC": "医学工程部          ",
                    "RQ": "2020-07-29",
                    "ZDR": "taotao",
                    "ZDRXM": "涛涛    ",
                    "KS": "1006",
                    "KSMC": "院感办公室",
                    "SQYY": "",
                    "NDJH": "0",
                    "SHBZ": "未审核",
                    "ZT": "0",
                    "row": 4
                }, {
                    "DH": "202007280009  ",
                    "STORE": "0101                ",
                    "SQSBMX": "病人监护仪11",
                    "STOREMC": "医学工程部          ",
                    "RQ": "2020-07-28",
                    "ZDR": "admin",
                    "ZDRXM": "admin   ",
                    "KS": "1001",
                    "KSMC": "宣传处",
                    "SQYY": "",
                    "NDJH": "0",
                    "SHBZ": "未审核",
                    "ZT": "0",
                    "row": 5
                }, {
                    "DH": "202007280010  ",
                    "STORE": "0101                ",
                    "SQSBMX": "穆舜坤cs623",
                    "STOREMC": "医学工程部          ",
                    "RQ": "2020-07-28",
                    "ZDR": "taotao",
                    "ZDRXM": "涛涛    ",
                    "KS": "1001",
                    "KSMC": "宣传处",
                    "SQYY": "",
                    "NDJH": "0",
                    "SHBZ": "未审核",
                    "ZT": "0",
                    "row": 6
                }, {
                    "DH": "202007250003  ",
                    "STORE": "0101                ",
                    "SQSBMX": "强生超声刀",
                    "STOREMC": "医学工程部          ",
                    "RQ": "2020-07-24",
                    "ZDR": "taotao",
                    "ZDRXM": "涛涛    ",
                    "KS": "1002",
                    "KSMC": "科研及教学处",
                    "SQYY": "",
                    "NDJH": "0",
                    "SHBZ": "未审核",
                    "ZT": "0",
                    "row": 7
                }, {
                    "DH": "202007230001  ",
                    "STORE": "0101                ",
                    "SQSBMX": "病人监护仪",
                    "STOREMC": "医学工程部          ",
                    "RQ": "2020-07-23",
                    "ZDR": "admin   ",
                    "ZDRXM": "admin   ",
                    "KS": "1024",
                    "KSMC": "应急设备库(设备科急救和生命支持设备）",
                    "SQYY": "哈哈",
                    "NDJH": "0",
                    "SHBZ": "未审核",
                    "ZT": "0",
                    "row": 8
                }, {
                    "DH": "202007210011  ",
                    "STORE": "0101                ",
                    "SQSBMX": "木头",
                    "STOREMC": "医学工程部          ",
                    "RQ": "2020-07-21",
                    "ZDR": "msk",
                    "ZDRXM": null,
                    "KS": "1006",
                    "KSMC": "院感办公室",
                    "SQYY": "111",
                    "NDJH": "0",
                    "SHBZ": "未审核",
                    "ZT": "0",
                    "row": 9
                }, {
                    "DH": "202007210012  ",
                    "STORE": "0101                ",
                    "SQSBMX": "木头",
                    "STOREMC": "医学工程部          ",
                    "RQ": "2020-07-21",
                    "ZDR": "msk",
                    "ZDRXM": null,
                    "KS": "1006",
                    "KSMC": "院感办公室",
                    "SQYY": "111",
                    "NDJH": "0",
                    "SHBZ": "未审核",
                    "ZT": "0",
                    "row": 10
                }, {
                    "DH": "202007210013  ",
                    "STORE": "0101                ",
                    "SQSBMX": "超声吸引器",
                    "STOREMC": "医学工程部          ",
                    "RQ": "2020-07-21",
                    "ZDR": "涛涛",
                    "ZDRXM": null,
                    "KS": "1008",
                    "KSMC": "门诊办公室",
                    "SQYY": "thanks\n",
                    "NDJH": "0",
                    "SHBZ": "未审核",
                    "ZT": "0",
                    "row": 11
                }, {
                    "DH": "202007210014  ",
                    "STORE": "0101                ",
                    "SQSBMX": null,
                    "STOREMC": "医学工程部          ",
                    "RQ": "2020-07-21",
                    "ZDR": "涛涛",
                    "ZDRXM": null,
                    "KS": "1002",
                    "KSMC": "科研及教学处",
                    "SQYY": "",
                    "NDJH": "0",
                    "SHBZ": "未审核",
                    "ZT": "0",
                    "row": 12
                }, {
                    "DH": "202007210015  ",
                    "STORE": "0101                ",
                    "SQSBMX": "超声吸引器",
                    "STOREMC": "医学工程部          ",
                    "RQ": "2020-07-21",
                    "ZDR": "涛涛",
                    "ZDRXM": null,
                    "KS": "1008",
                    "KSMC": "门诊办公室",
                    "SQYY": "thanks",
                    "NDJH": "0",
                    "SHBZ": "未审核",
                    "ZT": "0",
                    "row": 13
                }, {
                    "DH": "202007210016  ",
                    "STORE": "0101                ",
                    "SQSBMX": "超声吸引器",
                    "STOREMC": "医学工程部          ",
                    "RQ": "2020-07-21",
                    "ZDR": "",
                    "ZDRXM": null,
                    "KS": "1008",
                    "KSMC": "门诊办公室",
                    "SQYY": "thanks",
                    "NDJH": "0",
                    "SHBZ": "未审核",
                    "ZT": "0",
                    "row": 14
                }, {
                    "DH": "202007210017  ",
                    "STORE": "0101                ",
                    "SQSBMX": "高频电刀",
                    "STOREMC": "医学工程部          ",
                    "RQ": "2020-07-21",
                    "ZDR": "",
                    "ZDRXM": null,
                    "KS": "1005",
                    "KSMC": "医疗保险办公室",
                    "SQYY": "",
                    "NDJH": "0",
                    "SHBZ": "未审核",
                    "ZT": "0",
                    "row": 15
                }, {
                    "DH": "202007210018  ",
                    "STORE": "0101                ",
                    "SQSBMX": "无影灯",
                    "STOREMC": "医学工程部          ",
                    "RQ": "2020-07-21",
                    "ZDR": "",
                    "ZDRXM": null,
                    "KS": "1004",
                    "KSMC": "信息网络中心",
                    "SQYY": "",
                    "NDJH": "0",
                    "SHBZ": "未审核",
                    "ZT": "0",
                    "row": 16
                }, {
                    "DH": "202007140001  ",
                    "STORE": "0101                ",
                    "SQSBMX": "减脂聚焦超声治疗系统",
                    "STOREMC": "医学工程部          ",
                    "RQ": "2020-07-14",
                    "ZDR": "admin   ",
                    "ZDRXM": "admin   ",
                    "KS": "1024",
                    "KSMC": "应急设备库(设备科急救和生命支持设备）",
                    "SQYY": "呵呵111",
                    "NDJH": "0",
                    "SHBZ": "未审核",
                    "ZT": "0",
                    "row": 17
                }, {
                    "DH": "202001020003  ",
                    "STORE": "0101                ",
                    "SQSBMX": "刮匙",
                    "STOREMC": "医学工程部          ",
                    "RQ": "2020-01-02",
                    "ZDR": "999999",
                    "ZDRXM": "管理员  ",
                    "KS": "1007",
                    "KSMC": "医学工程管理处",
                    "SQYY": "",
                    "NDJH": "0",
                    "SHBZ": "未审核",
                    "ZT": "0",
                    "row": 18
                }, {
                    "DH": "202001020004  ",
                    "STORE": "0101                ",
                    "SQSBMX": "组织钳",
                    "STOREMC": "医学工程部          ",
                    "RQ": "2020-01-02",
                    "ZDR": "999999",
                    "ZDRXM": "管理员  ",
                    "KS": "1007",
                    "KSMC": "医学工程管理处",
                    "SQYY": "",
                    "NDJH": "0",
                    "SHBZ": "未审核",
                    "ZT": "0",
                    "row": 19
                }, {
                    "DH": "201911080002  ",
                    "STORE": "0101                ",
                    "SQSBMX": "手持终端PDA",
                    "STOREMC": "医学工程部          ",
                    "RQ": "2019-11-08",
                    "ZDR": "999999",
                    "ZDRXM": "管理员  ",
                    "KS": "1007",
                    "KSMC": "医学工程管理处",
                    "SQYY": "2019-11-08",
                    "NDJH": "0",
                    "SHBZ": "未审核",
                    "ZT": "0",
                    "row": 20
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
            _delete(item, index) {
                console.log('删除',item)
                this.list.splice(index,1)
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
        padding: 36px 30px;
        .itemTopBox{
            border-bottom: 2px solid #eee;
            div{
                display: flex;
                align-items: center;
                font-size: 28px;
                margin-bottom: 32px;
                span:first-child{
                    flex: 1;
                    color: #858585;
                }
                span:last-child{
                    color: $TEXT-DARK-COLOR;
                    font-weight: bold;
                    width: 326px;
                    text-align: right;
                }
            }
        }
        .itemBottomBox{
            margin-top: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            div{
                width: 300px;
                height: 80px;
                border-radius: 8px;
                text-align: center;
                line-height: 80px;
                font-size: 26px;
                &:first-child{
                    background: #dedede;
                    color: #858585;
                    margin-right: 42px;
                }
                &:last-child{
                    background: $THEME-COLOR;
                    color: #fff;
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
