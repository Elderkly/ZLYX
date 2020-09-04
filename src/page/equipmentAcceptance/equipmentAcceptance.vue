<template>
    <Box title="设备验收" :rightButton="[{text:'新增设备', router: '/equipmentAcceptanceDetails'},{text:'历史记录', router: '/history'}]">
        <LoadingFooter
            v-model="loading"
            :finished="finished"
            @load="onLoad"
        >
            <div class="menu">
                <Field title="合同编号" placeholder="请输入合同编号" @onMessage="value => search.params1 = value"/>
                <Field title="供应商" placeholder="请输入供应商" @onMessage="value => search.params2 = value"/>
                <Field title="设备名称" placeholder="请输入设备名称" @onMessage="value => search.params3 = value"/>
                <Field title="开始时间" placeholder="请选择" type="calendar" @onMessage="value => search.params4 = value"/>
                <Field title="结束时间" placeholder="请选择" type="calendar" @onMessage="value => search.params5 = value"/>
                <div class="search" @click="serach">查询</div>
            </div>
            <p class="listLength">共计 <span>{{list.length}}条</span></p>
            <div class="items" v-for="item in list" @click="$router.push({name: 'EquipmentAcceptanceDetails', params: {item} })">
                <div>
                    <img :src="item.Img"/>
                    <div>
                        <p class="ellipsis">{{item.HTMC}}</p>
                        <div>
                            <div>
                                <p>设备名称：</p>
                                <p>单价：</p>
                                <p>数量：</p>
                                <p>乙方单位：</p>
                            </div>
                            <div>
                                <p class="ellipsis">{{item.MC}}</p>
                                <p class="ellipsis">{{item.DJ}}</p>
                                <p class="ellipsis">{{item.SL}}</p>
                                <p class="ellipsis">{{item.GYSMC}}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span class="ellipsis">¥<span>{{item.HTJE}}</span></span> <img src="../../assets/img/right.png"/>
                        </div>
                        <div>验收</div>
                    </div>
                </div>
                <div>
                    <span>合同编号</span>
                    <span>{{item.HTBH}}</span>
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
        name: 'EquipmentAcceptance',
        data() {
            return {
                search: {
                    params1: null,
                    params2: null,
                    params3: null,
                    params4: null,
                    params5: null
                },
                loading: false,
                finished: false,
                list: [{
                    "HTBH": "HT202001070002                                    ",
                    "HTMC": "HT202001070002",
                    "HTR": "",
                    "HTLX": "1",
                    "HTDW": "000009",
                    "GYSMC": "英国杉顿",
                    "QYLXR": "",
                    "QYLXDH": "",
                    "HTSJ": "2020-01-07",
                    "Id": 445,
                    "YXRQ": "2021-01-07",
                    "CGFZR": null,
                    "DHRQ": "2020-01-07",
                    "LRSJ": "2020-01-07",
                    "LRR": "管理员  ",
                    "FJBH": null,
                    "HTJE": 1,
                    "BZ": "",
                    "HTNR": null,
                    "SBBH": "003357              ",
                    "MC": "刮匙",
                    "SL": 1,
                    "DW": "",
                    "DJ": 1,
                    "GGXH": "10#",
                    "SCCS": "",
                    "SCCSMC": null
                }, {
                    "HTBH": "HT202001060001                                    ",
                    "HTMC": "病人监护仪采购合同",
                    "HTR": "",
                    "HTLX": "1",
                    "HTDW": "000420",
                    "GYSMC": "安徽淳康生物科技有限公司",
                    "QYLXR": "王晓冬 15011249555",
                    "QYLXDH": "王晓冬 15011249555",
                    "HTSJ": "2020-01-06",
                    "Id": 440,
                    "YXRQ": "2021-01-06",
                    "CGFZR": null,
                    "DHRQ": "2020-01-06",
                    "LRSJ": "2020-01-06",
                    "LRR": "管理员  ",
                    "FJBH": null,
                    "HTJE": 1,
                    "BZ": "",
                    "HTNR": null,
                    "SBBH": "003286              ",
                    "MC": "病人监护仪",
                    "SL": 1,
                    "DW": "",
                    "DJ": 1,
                    "GGXH": "im8",
                    "SCCS": "",
                    "SCCSMC": null
                }, {
                    "HTBH": "HT202001030005                                    ",
                    "HTMC": "测试合同",
                    "HTR": "",
                    "HTLX": "1",
                    "HTDW": "000005",
                    "GYSMC": "中国北航",
                    "QYLXR": "",
                    "QYLXDH": "",
                    "HTSJ": "2020-01-03",
                    "Id": 434,
                    "YXRQ": "2021-01-03",
                    "CGFZR": null,
                    "DHRQ": "2020-01-03",
                    "LRSJ": "2020-01-03",
                    "LRR": "admin   ",
                    "FJBH": null,
                    "HTJE": 7777,
                    "BZ": "",
                    "HTNR": null,
                    "SBBH": "003349              ",
                    "MC": "呼吸机保养",
                    "SL": 1,
                    "DW": " ",
                    "DJ": 7777,
                    "GGXH": "",
                    "SCCS": "000923",
                    "SCCSMC": ""
                }, {
                    "HTBH": "HT202001030006                                    ",
                    "HTMC": "飞达拉斯开发",
                    "HTR": "",
                    "HTLX": "1",
                    "HTDW": "000005",
                    "GYSMC": "中国北航",
                    "QYLXR": "",
                    "QYLXDH": "",
                    "HTSJ": "2020-01-03",
                    "Id": 435,
                    "YXRQ": "2021-01-03",
                    "CGFZR": null,
                    "DHRQ": "2020-01-03",
                    "LRSJ": "2020-01-03",
                    "LRR": "admin   ",
                    "FJBH": null,
                    "HTJE": 5000,
                    "BZ": "",
                    "HTNR": null,
                    "SBBH": "000004              ",
                    "MC": "半导体激光手术刀",
                    "SL": 1,
                    "DW": "台",
                    "DJ": 5000,
                    "GGXH": "HOP-100",
                    "SCCS": "000923",
                    "SCCSMC": ""
                }, {
                    "HTBH": "HT202001030007                                    ",
                    "HTMC": "发的说法",
                    "HTR": "",
                    "HTLX": "1",
                    "HTDW": "000420",
                    "GYSMC": "安徽淳康生物科技有限公司",
                    "QYLXR": "王晓冬 15011249555",
                    "QYLXDH": "王晓冬 15011249555",
                    "HTSJ": "2020-01-03",
                    "Id": 436,
                    "YXRQ": "2021-01-03",
                    "CGFZR": null,
                    "DHRQ": "2020-01-03",
                    "LRSJ": "2020-01-03",
                    "LRR": "admin   ",
                    "FJBH": null,
                    "HTJE": 4600,
                    "BZ": "",
                    "HTNR": null,
                    "SBBH": "000004              ",
                    "MC": "半导体激光手术刀",
                    "SL": 1,
                    "DW": "台",
                    "DJ": 4600,
                    "GGXH": "HOP-100",
                    "SCCS": "000923",
                    "SCCSMC": ""
                }, {
                    "HTBH": "HT202001030009                                    ",
                    "HTMC": "而高速吧",
                    "HTR": "",
                    "HTLX": "1",
                    "HTDW": "001036",
                    "GYSMC": null,
                    "QYLXR": "",
                    "QYLXDH": "",
                    "HTSJ": "2020-01-03",
                    "Id": 438,
                    "YXRQ": "2021-01-03",
                    "CGFZR": null,
                    "DHRQ": "2020-01-03",
                    "LRSJ": "2020-01-03",
                    "LRR": "admin   ",
                    "FJBH": null,
                    "HTJE": 300,
                    "BZ": "",
                    "HTNR": null,
                    "SBBH": "003337              ",
                    "MC": "键盘",
                    "SL": 1,
                    "DW": "个",
                    "DJ": 300,
                    "GGXH": "csw/wsc",
                    "SCCS": "000923",
                    "SCCSMC": ""
                }, {
                    "HTBH": "HT202001030010                                    ",
                    "HTMC": "叫豪哥看",
                    "HTR": "",
                    "HTLX": "1",
                    "HTDW": "000005",
                    "GYSMC": "中国北航",
                    "QYLXR": "",
                    "QYLXDH": "",
                    "HTSJ": "2020-01-03",
                    "Id": 439,
                    "YXRQ": "2021-01-03",
                    "CGFZR": null,
                    "DHRQ": "2020-01-03",
                    "LRSJ": "2020-01-03",
                    "LRR": "admin   ",
                    "FJBH": null,
                    "HTJE": 30000,
                    "BZ": "",
                    "HTNR": null,
                    "SBBH": "000009              ",
                    "MC": "高频电刀",
                    "SL": 1,
                    "DW": "台",
                    "DJ": 30000,
                    "GGXH": "DD-2型",
                    "SCCS": "000005",
                    "SCCSMC": "中国北航"
                }, {
                    "HTBH": "HT202001020002                                    ",
                    "HTMC": "HT20200102000211",
                    "HTR": "",
                    "HTLX": "1",
                    "HTDW": "000007",
                    "GYSMC": "浙江杭州",
                    "QYLXR": "",
                    "QYLXDH": "",
                    "HTSJ": "2020-01-02",
                    "Id": 429,
                    "YXRQ": "2021-01-02",
                    "CGFZR": null,
                    "DHRQ": "2020-01-02",
                    "LRSJ": "2020-01-02",
                    "LRR": "admin   ",
                    "FJBH": null,
                    "HTJE": 3000,
                    "BZ": "",
                    "HTNR": null,
                    "SBBH": "003281              ",
                    "MC": "前列腺电切",
                    "SL": 1,
                    "DW": "台",
                    "DJ": 3000,
                    "GGXH": "",
                    "SCCS": "000923",
                    "SCCSMC": ""
                }, {
                    "HTBH": "HT201912310003                                    ",
                    "HTMC": "HT201912310002",
                    "HTR": "",
                    "HTLX": "1",
                    "HTDW": "000006",
                    "GYSMC": "郑州市中星医疗设备厂",
                    "QYLXR": "洗大大",
                    "QYLXDH": "",
                    "HTSJ": "2019-12-31",
                    "Id": 422,
                    "YXRQ": "2020-12-31",
                    "CGFZR": null,
                    "DHRQ": "2019-12-31",
                    "LRSJ": "2019-12-31",
                    "LRR": "管理员  ",
                    "FJBH": null,
                    "HTJE": 393800,
                    "BZ": "",
                    "HTNR": null,
                    "SBBH": "003281              ",
                    "MC": "前列腺电切",
                    "SL": 11,
                    "DW": "台",
                    "DJ": 35800,
                    "GGXH": "",
                    "SCCS": "000923",
                    "SCCSMC": ""
                }, {
                    "HTBH": "HT201912270002                                    ",
                    "HTMC": "HT201912270002",
                    "HTR": "",
                    "HTLX": "1",
                    "HTDW": "000001",
                    "GYSMC": null,
                    "QYLXR": "",
                    "QYLXDH": "",
                    "HTSJ": "2019-12-27",
                    "Id": 413,
                    "YXRQ": "2020-12-27",
                    "CGFZR": null,
                    "DHRQ": "2019-12-27",
                    "LRSJ": "2019-12-27",
                    "LRR": "管理员  ",
                    "FJBH": null,
                    "HTJE": 4300,
                    "BZ": "",
                    "HTNR": null,
                    "SBBH": "003350              ",
                    "MC": "剪刀内芯",
                    "SL": 1,
                    "DW": "件",
                    "DJ": 4300,
                    "GGXH": "",
                    "SCCS": "000923",
                    "SCCSMC": ""
                }, {
                    "HTBH": "HT201912270003                                    ",
                    "HTMC": "HT201912270003",
                    "HTR": "",
                    "HTLX": "1",
                    "HTDW": "001003",
                    "GYSMC": "深圳迈瑞生物医疗电子股份有限公司",
                    "QYLXR": "曾经理",
                    "QYLXDH": "18899767530",
                    "HTSJ": "2019-12-27",
                    "Id": 414,
                    "YXRQ": "2020-12-27",
                    "CGFZR": null,
                    "DHRQ": "2019-12-27",
                    "LRSJ": "2019-12-27",
                    "LRR": "管理员  ",
                    "FJBH": null,
                    "HTJE": 3500,
                    "BZ": "",
                    "HTNR": null,
                    "SBBH": "003207              ",
                    "MC": "肠内输液泵",
                    "SL": 1,
                    "DW": "台",
                    "DJ": 3500,
                    "GGXH": "Fiocare Infinity II",
                    "SCCS": "000923",
                    "SCCSMC": ""
                }, {
                    "HTBH": "HT201912170002                                    ",
                    "HTMC": "HT201912170002",
                    "HTR": "",
                    "HTLX": "1",
                    "HTDW": "000006",
                    "GYSMC": "郑州市中星医疗设备厂",
                    "QYLXR": "洗大大",
                    "QYLXDH": "",
                    "HTSJ": "2019-12-17",
                    "Id": 406,
                    "YXRQ": "2020-12-17",
                    "CGFZR": null,
                    "DHRQ": "2019-12-17",
                    "LRSJ": "2019-12-17",
                    "LRR": "管理员  ",
                    "FJBH": null,
                    "HTJE": 1,
                    "BZ": "",
                    "HTNR": null,
                    "SBBH": "003349              ",
                    "MC": "呼吸机保养",
                    "SL": 1,
                    "DW": "",
                    "DJ": 1,
                    "GGXH": "",
                    "SCCS": "",
                    "SCCSMC": null
                }, {
                    "HTBH": "HT201912170001                                    ",
                    "HTMC": "茶杯",
                    "HTR": "",
                    "HTLX": "1",
                    "HTDW": "000007",
                    "GYSMC": "浙江杭州",
                    "QYLXR": "",
                    "QYLXDH": "",
                    "HTSJ": "2019-12-17",
                    "Id": 410,
                    "YXRQ": "2019-12-22",
                    "CGFZR": null,
                    "DHRQ": "2019-12-17",
                    "LRSJ": "2019-12-23",
                    "LRR": "管理员  ",
                    "FJBH": null,
                    "HTJE": 900,
                    "BZ": "",
                    "HTNR": null,
                    "SBBH": "003341              ",
                    "MC": "茶杯",
                    "SL": 30,
                    "DW": "个    ",
                    "DJ": 30,
                    "GGXH": "20*52",
                    "SCCS": "",
                    "SCCSMC": null
                }, {
                    "HTBH": "HT201912130002                                    ",
                    "HTMC": "钬激光",
                    "HTR": "",
                    "HTLX": "1",
                    "HTDW": "000007",
                    "GYSMC": "浙江杭州",
                    "QYLXR": "",
                    "QYLXDH": "",
                    "HTSJ": "2019-12-13",
                    "Id": 411,
                    "YXRQ": "2019-12-26",
                    "CGFZR": null,
                    "DHRQ": "2019-12-13",
                    "LRSJ": "2019-12-23",
                    "LRR": "管理员  ",
                    "FJBH": null,
                    "HTJE": 4500,
                    "BZ": "",
                    "HTNR": null,
                    "SBBH": "000005              ",
                    "MC": "钬激光",
                    "SL": 1,
                    "DW": "台",
                    "DJ": 4500,
                    "GGXH": "PowerSuite 60W",
                    "SCCS": "000923",
                    "SCCSMC": ""
                }, {
                    "HTBH": "HT201912130005                                    ",
                    "HTMC": "呼吸机保养",
                    "HTR": "",
                    "HTLX": "1",
                    "HTDW": "000009",
                    "GYSMC": "英国杉顿",
                    "QYLXR": "",
                    "QYLXDH": "",
                    "HTSJ": "2019-12-13",
                    "Id": 380,
                    "YXRQ": "2020-12-13",
                    "CGFZR": null,
                    "DHRQ": "2019-12-13",
                    "LRSJ": "2019-12-13",
                    "LRR": "管理员  ",
                    "FJBH": null,
                    "HTJE": 2,
                    "BZ": "",
                    "HTNR": null,
                    "SBBH": "003349              ",
                    "MC": "呼吸机保养",
                    "SL": 1,
                    "DW": "",
                    "DJ": 1,
                    "GGXH": "",
                    "SCCS": "000004",
                    "SCCSMC": "中国船舶701所"
                }, {
                    "HTBH": "HT201912130005                                    ",
                    "HTMC": "呼吸机保养",
                    "HTR": "",
                    "HTLX": "1",
                    "HTDW": "000009",
                    "GYSMC": "英国杉顿",
                    "QYLXR": "",
                    "QYLXDH": "",
                    "HTSJ": "2019-12-13",
                    "Id": 381,
                    "YXRQ": "2020-12-13",
                    "CGFZR": null,
                    "DHRQ": "2019-12-13",
                    "LRSJ": "2019-12-13",
                    "LRR": "管理员  ",
                    "FJBH": null,
                    "HTJE": 2,
                    "BZ": "",
                    "HTNR": null,
                    "SBBH": "003329              ",
                    "MC": null,
                    "SL": 1,
                    "DW": "",
                    "DJ": 1,
                    "GGXH": "csw/wsc",
                    "SCCS": "000007",
                    "SCCSMC": "浙江杭州"
                }, {
                    "HTBH": "HT201912130006                                    ",
                    "HTMC": "钬激光\t",
                    "HTR": "",
                    "HTLX": "1",
                    "HTDW": "000009",
                    "GYSMC": "英国杉顿",
                    "QYLXR": "",
                    "QYLXDH": "",
                    "HTSJ": "2019-12-13",
                    "Id": 382,
                    "YXRQ": "2020-12-13",
                    "CGFZR": null,
                    "DHRQ": "2019-12-13",
                    "LRSJ": "2019-12-13",
                    "LRR": "管理员  ",
                    "FJBH": null,
                    "HTJE": 4500,
                    "BZ": "",
                    "HTNR": null,
                    "SBBH": "000005              ",
                    "MC": "钬激光",
                    "SL": 1,
                    "DW": "台",
                    "DJ": 4500,
                    "GGXH": "PowerSuite 60W",
                    "SCCS": "000923",
                    "SCCSMC": ""
                }, {
                    "HTBH": "HT201912130007                                    ",
                    "HTMC": "茶杯\t",
                    "HTR": "",
                    "HTLX": "1",
                    "HTDW": "000007",
                    "GYSMC": "浙江杭州",
                    "QYLXR": "",
                    "QYLXDH": "",
                    "HTSJ": "2019-12-13",
                    "Id": 383,
                    "YXRQ": "2020-12-13",
                    "CGFZR": null,
                    "DHRQ": "2019-12-13",
                    "LRSJ": "2019-12-13",
                    "LRR": "管理员  ",
                    "FJBH": null,
                    "HTJE": 1,
                    "BZ": "",
                    "HTNR": null,
                    "SBBH": "003341              ",
                    "MC": "茶杯",
                    "SL": 1,
                    "DW": "",
                    "DJ": 1,
                    "GGXH": "20*52",
                    "SCCS": "",
                    "SCCSMC": null
                }, {
                    "HTBH": "HT201912130009                                    ",
                    "HTMC": "摄像头\t",
                    "HTR": "",
                    "HTLX": "1",
                    "HTDW": "000008",
                    "GYSMC": "英国先德",
                    "QYLXR": "",
                    "QYLXDH": "",
                    "HTSJ": "2019-12-13",
                    "Id": 385,
                    "YXRQ": "2020-12-13",
                    "CGFZR": null,
                    "DHRQ": "2019-12-13",
                    "LRSJ": "2019-12-13",
                    "LRR": "管理员  ",
                    "FJBH": null,
                    "HTJE": 1000,
                    "BZ": "",
                    "HTNR": null,
                    "SBBH": "003334              ",
                    "MC": "摄像头",
                    "SL": 20,
                    "DW": "外网  ",
                    "DJ": 50,
                    "GGXH": "",
                    "SCCS": "",
                    "SCCSMC": null
                }, {
                    "HTBH": "HT201912130011                                    ",
                    "HTMC": "彩超\t",
                    "HTR": "",
                    "HTLX": "1",
                    "HTDW": "000007",
                    "GYSMC": "浙江杭州",
                    "QYLXR": "",
                    "QYLXDH": "",
                    "HTSJ": "2019-12-13",
                    "Id": 388,
                    "YXRQ": "2020-12-13",
                    "CGFZR": null,
                    "DHRQ": "2019-12-13",
                    "LRSJ": "2019-12-13",
                    "LRR": "管理员  ",
                    "FJBH": null,
                    "HTJE": 5000,
                    "BZ": "",
                    "HTNR": null,
                    "SBBH": "003104              ",
                    "MC": "超声手术系统",
                    "SL": 1,
                    "DW": " ",
                    "DJ": 5000,
                    "GGXH": "",
                    "SCCS": "000923",
                    "SCCSMC": ""
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
                        &>p {
                            color: $TEXT-DARK-COLOR;
                            font-weight: bold;
                            font-size: 32px;
                            margin-bottom: 18px;
                            width: 350px;
                        }
                        &>div{
                            display: flex;
                            p{
                                color: #999;
                                font-size: 26px;
                                line-height: 45px;
                                height: 45px;
                                width: 130px;
                            }
                            &>div{
                                &:last-child{
                                    p{
                                        width: 220px;
                                    }
                                }
                            }
                        }
                    }
                    &:last-child{
                        &>div{
                            &:first-child{
                                color: $TEXT-DARK-COLOR;
                                font-size: 32px;
                                display: flex;
                                justify-content: flex-end;
                                align-items: center;
                                span:first-child{
                                    margin-left: 10px;
                                    font-size: 20px;
                                    width: 100px;
                                    text-align: right;
                                    span{
                                        margin-left: 5px;
                                        font-size: 32px;
                                    }
                                }
                                img{
                                    width: 32px;
                                    height: 32px;
                                }
                            }
                            &:last-child{
                                width: 152px;
                                height: 61px;
                                background: $THEME-COLOR;
                                border-radius: 30px;
                                text-align: center;
                                line-height: 61px;
                                font-size: 26px;
                                color: $TEXT-LIGHT-COLOR;
                                margin-top: 62px;
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
