<template>
    <Box title="验收记录">
        <LoadingFooter
            v-model="loading"
            :finished="finished"
            @load="onLoad"
        >
            <div class="menu">
                <Field title="供应商" placeholder="请输入供应商编号或名称" @onMessage="value => search.params1 = value"/>
                <Field title="单号" placeholder="请输入单号" @onMessage="value => search.params2 = value"/>
                <Field title="设备名称" placeholder="请输入设备名称" @onMessage="value => search.params3 = value"/>
                <Field title="开始时间" placeholder="请选择" type="calendar" @onMessage="value => search.params4 = value"/>
                <Field title="结束时间" placeholder="请选择" type="calendar" @onMessage="value => search.params5 = value"/>
                <Field title="状态" type="teb" :data="['入库','未审核','已审核']" @onMessage="value => search.params6 = value"/>
                <div class="search" @click="serach">查询</div>
            </div>
            <p class="listLength">共计 <span>{{list.length}}条</span></p>
            <div class="items listItems" v-for="(item, index) in list" @click="$router.push({name: 'EquipmentAcceptanceDetails', params: {item} })">
                <div class="itemTopBox">
                    <div>
                        <span>单号</span>
                        <span>{{item.DH}}</span>
                    </div>
                    <div>
                        <span>编号</span>
                        <span>{{item.HTBH}}</span>
                    </div>
                    <div>
                        <span>设备名称</span>
                        <span>{{item.SBMC}}</span>
                    </div>
                    <div>
                        <span>规格型号</span>
                        <span>{{item.SBGG}}</span>
                    </div>
                    <div>
                        <span>数量</span>
                        <span>{{item.SL}}</span>
                    </div>
                    <div>
                        <span>设备单价</span>
                        <span>{{item.CGDJ}}</span>
                    </div>
                    <div>
                        <span>总金额</span>
                        <span>{{item.ZJE}}</span>
                    </div>
                    <div>
                        <span>供应商</span>
                        <span>{{item.GYSMC}}</span>
                    </div>
                    <div>
                        <span>生产厂家</span>
                        <span>{{item.SCQYMC}}</span>
                    </div>
                </div>
                <div class="itemBottomBox">
                    <div @click.stop="_delete(item, index)">删除</div>
                    <div @click.stop="$router.push({name: 'StorageEquipment', params: {item}})">入库</div>
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
        name: 'History',
        data() {
            return {
                search: {
                    params1: null,
                    params2: null,
                    params3: null,
                    params4: null,
                    params5: null,
                    params6: '入库',
                },
                loading: false,
                finished: false,
                list: [{
                    "DH": "SR2020080006  ",
                    "HTBH": "HT202007280001",
                    "HTId": 578,
                    "SBBM": "",
                    "SBMCBH": "003375",
                    "SBMC": "李友远",
                    "SBPP": "000032                                  ",
                    "PPMC": "                                        ",
                    "SBGG": "规格",
                    "SBDW": "个    ",
                    "SL": 2.0,
                    "CGDJ": 1000.0,
                    "ZJE": 2000.0,
                    "GB": "                    ",
                    "GBMC": null,
                    "CD": "                                                                ",
                    "CDMC": null,
                    "SCQY": "000008",
                    "SCQYMC": "英国先德",
                    "ZCZJH": "",
                    "CCBH": "",
                    "CCRQ": "1900-01-01",
                    "BZHG": "Y",
                    "YSHG": "Y",
                    "SHBZ": "0",
                    "YSBZ": "0",
                    "SBLX": "010103    ",
                    "SBLXMC": null,
                    "YSHGRQ": "2020-08-25",
                    "GYSMC": null
                }, {
                    "DH": "SR2020080007  ",
                    "HTBH": "HT202007280001",
                    "HTId": 578,
                    "SBBM": "",
                    "SBMCBH": "003375",
                    "SBMC": "李友远",
                    "SBPP": "000032                                  ",
                    "PPMC": "                                        ",
                    "SBGG": "规格",
                    "SBDW": "个    ",
                    "SL": 2.0,
                    "CGDJ": 1000.0,
                    "ZJE": 2000.0,
                    "GB": "                    ",
                    "GBMC": null,
                    "CD": "                                                                ",
                    "CDMC": null,
                    "SCQY": "000008",
                    "SCQYMC": "英国先德",
                    "ZCZJH": "",
                    "CCBH": "",
                    "CCRQ": "1900-01-01",
                    "BZHG": "Y",
                    "YSHG": "Y",
                    "SHBZ": "0",
                    "YSBZ": "0",
                    "SBLX": "010103    ",
                    "SBLXMC": null,
                    "YSHGRQ": "2020-08-25",
                    "GYSMC": null
                }, {
                    "DH": "SR2020080008  ",
                    "HTBH": "HT202007280001",
                    "HTId": 578,
                    "SBBM": "",
                    "SBMCBH": "003375",
                    "SBMC": "李友远",
                    "SBPP": "000032                                  ",
                    "PPMC": "                                        ",
                    "SBGG": "规格",
                    "SBDW": "个    ",
                    "SL": 2.0,
                    "CGDJ": 1000.0,
                    "ZJE": 2000.0,
                    "GB": "                    ",
                    "GBMC": null,
                    "CD": "                                                                ",
                    "CDMC": null,
                    "SCQY": "000008",
                    "SCQYMC": "英国先德",
                    "ZCZJH": "",
                    "CCBH": "",
                    "CCRQ": "1900-01-01",
                    "BZHG": "Y",
                    "YSHG": "Y",
                    "SHBZ": "0",
                    "YSBZ": "0",
                    "SBLX": "010103    ",
                    "SBLXMC": null,
                    "YSHGRQ": "2020-08-25",
                    "GYSMC": null
                }, {
                    "DH": "SR2020080009  ",
                    "HTBH": "HT202007280001",
                    "HTId": 578,
                    "SBBM": "",
                    "SBMCBH": "003375",
                    "SBMC": "李友远",
                    "SBPP": "000032                                  ",
                    "PPMC": "                                        ",
                    "SBGG": "规格",
                    "SBDW": "个    ",
                    "SL": 2.0,
                    "CGDJ": 1000.0,
                    "ZJE": 2000.0,
                    "GB": "                    ",
                    "GBMC": null,
                    "CD": "                                                                ",
                    "CDMC": null,
                    "SCQY": "000008",
                    "SCQYMC": "英国先德",
                    "ZCZJH": "",
                    "CCBH": "",
                    "CCRQ": "1900-01-01",
                    "BZHG": "Y",
                    "YSHG": "Y",
                    "SHBZ": "0",
                    "YSBZ": "0",
                    "SBLX": "010103    ",
                    "SBLXMC": null,
                    "YSHGRQ": "2020-08-25",
                    "GYSMC": null
                }, {
                    "DH": "SR2020080010  ",
                    "HTBH": "HT202001130003",
                    "HTId": 448,
                    "SBBM": "",
                    "SBMCBH": "003351",
                    "SBMC": "Le测试设备",
                    "SBPP": "000005                                  ",
                    "PPMC": "奥林巴斯                                ",
                    "SBGG": "11",
                    "SBDW": "11    ",
                    "SL": 1.0,
                    "CGDJ": 1.0,
                    "ZJE": 1.0,
                    "GB": "0003                ",
                    "GBMC": "德国                ",
                    "CD": "000002                                                          ",
                    "CDMC": "郑州                                                            ",
                    "SCQY": "000005",
                    "SCQYMC": "中国北航",
                    "ZCZJH": "11",
                    "CCBH": "111",
                    "CCRQ": "2020-08-25",
                    "BZHG": "Y",
                    "YSHG": "Y",
                    "SHBZ": "0",
                    "YSBZ": "0",
                    "SBLX": "15                  ",
                    "SBLXMC": "麻醉机                                                                                              ",
                    "YSHGRQ": "2020-08-25",
                    "GYSMC": "2014年盘点厂家赠送"
                }, {
                    "DH": "SR2020080004  ",
                    "HTBH": "",
                    "HTId": 0,
                    "SBBM": "强生超声刀",
                    "SBMCBH": "000003",
                    "SBMC": "强生超声刀",
                    "SBPP": "000006                                  ",
                    "PPMC": "科惠                                    ",
                    "SBGG": "GEN04",
                    "SBDW": "套    ",
                    "SL": 1.0,
                    "CGDJ": 10000.0,
                    "ZJE": 10000.0,
                    "GB": "0003                ",
                    "GBMC": "德国                ",
                    "CD": "000002                                                          ",
                    "CDMC": "郑州                                                            ",
                    "SCQY": "000005",
                    "SCQYMC": "中国北航",
                    "ZCZJH": "1123321132",
                    "CCBH": "212523415",
                    "CCRQ": "2020-08-19",
                    "BZHG": "Y",
                    "YSHG": "Y",
                    "SHBZ": "0",
                    "YSBZ": "0",
                    "SBLX": "15",
                    "SBLXMC": "麻醉机                                                                                              ",
                    "YSHGRQ": "2020-08-19",
                    "GYSMC": "英国佳士比"
                }, {
                    "DH": "SR2020070055  ",
                    "HTBH": "HT202003200008",
                    "HTId": 458,
                    "SBBM": "",
                    "SBMCBH": "002014",
                    "SBMC": "超声切割止血刀系统",
                    "SBPP": "深圳众联                                ",
                    "PPMC": null,
                    "SBGG": "CSUS6000",
                    "SBDW": "套    ",
                    "SL": 1.0,
                    "CGDJ": 3400.0,
                    "ZJE": 3400.0,
                    "GB": "                    ",
                    "GBMC": null,
                    "CD": "000006                                                          ",
                    "CDMC": "青岛                                                            ",
                    "SCQY": "000010",
                    "SCQYMC": "英国佳士比",
                    "ZCZJH": "",
                    "CCBH": "",
                    "CCRQ": "1900-01-01",
                    "BZHG": "Y",
                    "YSHG": "Y",
                    "SHBZ": "0",
                    "YSBZ": "0",
                    "SBLX": "010201    ",
                    "SBLXMC": null,
                    "YSHGRQ": "2020-07-25",
                    "GYSMC": "2014年盘点厂家赠送"
                }, {
                    "DH": "SR2020070057  ",
                    "HTBH": "HT202001130002",
                    "HTId": 447,
                    "SBBM": "",
                    "SBMCBH": "003351",
                    "SBMC": "Le测试设备",
                    "SBPP": "                                        ",
                    "PPMC": null,
                    "SBGG": "",
                    "SBDW": "      ",
                    "SL": 1.0,
                    "CGDJ": 1.0,
                    "ZJE": 1.0,
                    "GB": "                    ",
                    "GBMC": null,
                    "CD": "                                                                ",
                    "CDMC": null,
                    "SCQY": "000008",
                    "SCQYMC": "英国先德",
                    "ZCZJH": "",
                    "CCBH": "",
                    "CCRQ": "1900-01-01",
                    "BZHG": "Y",
                    "YSHG": "Y",
                    "SHBZ": "0",
                    "YSBZ": "0",
                    "SBLX": "",
                    "SBLXMC": null,
                    "YSHGRQ": "2020-07-25",
                    "GYSMC": null
                }, {
                    "DH": "SR2020070054  ",
                    "HTBH": "",
                    "HTId": 0,
                    "SBBM": "导光束",
                    "SBMCBH": "000006",
                    "SBMC": "导光束",
                    "SBPP": "                                        ",
                    "PPMC": null,
                    "SBGG": "",
                    "SBDW": "根    ",
                    "SL": 1.0,
                    "CGDJ": 1.0,
                    "ZJE": 1.0,
                    "GB": "                    ",
                    "GBMC": null,
                    "CD": "                                                                ",
                    "CDMC": null,
                    "SCQY": "000004",
                    "SCQYMC": "中国船舶701所",
                    "ZCZJH": "",
                    "CCBH": "",
                    "CCRQ": "2020-07-24",
                    "BZHG": "Y",
                    "YSHG": "Y",
                    "SHBZ": "0",
                    "YSBZ": "0",
                    "SBLX": "",
                    "SBLXMC": null,
                    "YSHGRQ": "2020-07-24",
                    "GYSMC": "2014年盘点厂家赠送"
                }, {
                    "DH": "SR2020070044  ",
                    "HTBH": "HT202004140006",
                    "HTId": 476,
                    "SBBM": "",
                    "SBMCBH": "002313",
                    "SBMC": "笔记本电脑",
                    "SBPP": "                                        ",
                    "PPMC": null,
                    "SBGG": "Ideapad110",
                    "SBDW": "套    ",
                    "SL": 1.0,
                    "CGDJ": 5000.0,
                    "ZJE": 5000.0,
                    "GB": "                    ",
                    "GBMC": null,
                    "CD": "                                                                ",
                    "CDMC": null,
                    "SCQY": "000007",
                    "SCQYMC": "浙江杭州",
                    "ZCZJH": "",
                    "CCBH": "",
                    "CCRQ": "1900-01-01",
                    "BZHG": "Y",
                    "YSHG": "Y",
                    "SHBZ": "0",
                    "YSBZ": "0",
                    "SBLX": "",
                    "SBLXMC": null,
                    "YSHGRQ": "2020-07-24",
                    "GYSMC": null
                }, {
                    "DH": "SR2020070045  ",
                    "HTBH": "HT202007140001",
                    "HTId": 576,
                    "SBBM": "",
                    "SBMCBH": "003362",
                    "SBMC": "减脂聚焦超声治疗系统",
                    "SBPP": "科惠                                    ",
                    "PPMC": null,
                    "SBGG": "",
                    "SBDW": "      ",
                    "SL": 1.0,
                    "CGDJ": 1.0,
                    "ZJE": 1.0,
                    "GB": "0001                ",
                    "GBMC": "中国                ",
                    "CD": "000004                                                          ",
                    "CDMC": "广州                                                            ",
                    "SCQY": "000008",
                    "SCQYMC": "英国先德",
                    "ZCZJH": "",
                    "CCBH": "",
                    "CCRQ": "1900-01-01",
                    "BZHG": "Y",
                    "YSHG": "Y",
                    "SHBZ": "0",
                    "YSBZ": "0",
                    "SBLX": "",
                    "SBLXMC": null,
                    "YSHGRQ": "2020-07-24",
                    "GYSMC": null
                }, {
                    "DH": "SR2020070048  ",
                    "HTBH": "HT202003200004",
                    "HTId": 455,
                    "SBBM": "",
                    "SBMCBH": "002160",
                    "SBMC": "弯剪刀（双动）",
                    "SBPP": "深圳众联                                ",
                    "PPMC": null,
                    "SBGG": "5*330",
                    "SBDW": "把    ",
                    "SL": 1.0,
                    "CGDJ": 30000.0,
                    "ZJE": 30000.0,
                    "GB": "                    ",
                    "GBMC": null,
                    "CD": "                                                                ",
                    "CDMC": null,
                    "SCQY": "000008",
                    "SCQYMC": "英国先德",
                    "ZCZJH": "",
                    "CCBH": "",
                    "CCRQ": "1900-01-01",
                    "BZHG": "Y",
                    "YSHG": "Y",
                    "SHBZ": "0",
                    "YSBZ": "0",
                    "SBLX": "",
                    "SBLXMC": null,
                    "YSHGRQ": "2020-07-24",
                    "GYSMC": "英国先德"
                }, {
                    "DH": "SR2020070049  ",
                    "HTBH": "HT202003200005",
                    "HTId": 456,
                    "SBBM": "",
                    "SBMCBH": "002160",
                    "SBMC": "弯剪刀（双动）",
                    "SBPP": "深圳众联                                ",
                    "PPMC": null,
                    "SBGG": "5*330",
                    "SBDW": "把    ",
                    "SL": 1.0,
                    "CGDJ": 30000.0,
                    "ZJE": 30000.0,
                    "GB": "                    ",
                    "GBMC": null,
                    "CD": "                                                                ",
                    "CDMC": null,
                    "SCQY": "000009",
                    "SCQYMC": "英国杉顿",
                    "ZCZJH": "",
                    "CCBH": "",
                    "CCRQ": "1900-01-01",
                    "BZHG": "Y",
                    "YSHG": "Y",
                    "SHBZ": "0",
                    "YSBZ": "0",
                    "SBLX": "",
                    "SBLXMC": null,
                    "YSHGRQ": "2020-07-24",
                    "GYSMC": "2014年盘点厂家赠送"
                }, {
                    "DH": "SR2020070052  ",
                    "HTBH": "HT202003200007",
                    "HTId": 457,
                    "SBBM": "",
                    "SBMCBH": "002014",
                    "SBMC": "超声切割止血刀系统",
                    "SBPP": "深圳众联                                ",
                    "PPMC": null,
                    "SBGG": "CSUS6000",
                    "SBDW": "套    ",
                    "SL": 1.0,
                    "CGDJ": 3400.0,
                    "ZJE": 3400.0,
                    "GB": "                    ",
                    "GBMC": null,
                    "CD": "                                                                ",
                    "CDMC": null,
                    "SCQY": "000007",
                    "SCQYMC": "浙江杭州",
                    "ZCZJH": "",
                    "CCBH": "",
                    "CCRQ": "1900-01-01",
                    "BZHG": "Y",
                    "YSHG": "Y",
                    "SHBZ": "0",
                    "YSBZ": "0",
                    "SBLX": "",
                    "SBLXMC": null,
                    "YSHGRQ": "2020-07-23",
                    "GYSMC": "英国杉顿"
                }, {
                    "DH": "SR2020070034  ",
                    "HTBH": "HT202004230008",
                    "HTId": 524,
                    "SBBM": "",
                    "SBMCBH": "003365",
                    "SBMC": "医学装备管理系统",
                    "SBPP": "                                        ",
                    "PPMC": null,
                    "SBGG": "",
                    "SBDW": "      ",
                    "SL": 1.0,
                    "CGDJ": 1.0,
                    "ZJE": 1.0,
                    "GB": "                    ",
                    "GBMC": null,
                    "CD": "                                                                ",
                    "CDMC": null,
                    "SCQY": "000008",
                    "SCQYMC": "英国先德",
                    "ZCZJH": "",
                    "CCBH": "",
                    "CCRQ": "1900-01-01",
                    "BZHG": "Y",
                    "YSHG": "Y",
                    "SHBZ": "0",
                    "YSBZ": "0",
                    "SBLX": "",
                    "SBLXMC": null,
                    "YSHGRQ": "2020-07-23",
                    "GYSMC": null
                }, {
                    "DH": "SR2020070035  ",
                    "HTBH": "HT202004230008",
                    "HTId": 524,
                    "SBBM": "",
                    "SBMCBH": "003365",
                    "SBMC": "医学装备管理系统",
                    "SBPP": "                                        ",
                    "PPMC": null,
                    "SBGG": "",
                    "SBDW": "      ",
                    "SL": 1.0,
                    "CGDJ": 1.0,
                    "ZJE": 1.0,
                    "GB": "                    ",
                    "GBMC": null,
                    "CD": "                                                                ",
                    "CDMC": null,
                    "SCQY": "000008",
                    "SCQYMC": "英国先德",
                    "ZCZJH": "",
                    "CCBH": "",
                    "CCRQ": "1900-01-01",
                    "BZHG": "Y",
                    "YSHG": "Y",
                    "SHBZ": "0",
                    "YSBZ": "0",
                    "SBLX": "",
                    "SBLXMC": null,
                    "YSHGRQ": "2020-07-23",
                    "GYSMC": null
                }, {
                    "DH": "SR2020070036  ",
                    "HTBH": "HT202004230008",
                    "HTId": 524,
                    "SBBM": "",
                    "SBMCBH": "003365",
                    "SBMC": "医学装备管理系统",
                    "SBPP": "                                        ",
                    "PPMC": null,
                    "SBGG": "",
                    "SBDW": "      ",
                    "SL": 1.0,
                    "CGDJ": 1.0,
                    "ZJE": 1.0,
                    "GB": "                    ",
                    "GBMC": null,
                    "CD": "                                                                ",
                    "CDMC": null,
                    "SCQY": "000008",
                    "SCQYMC": "英国先德",
                    "ZCZJH": "",
                    "CCBH": "",
                    "CCRQ": "1900-01-01",
                    "BZHG": "Y",
                    "YSHG": "Y",
                    "SHBZ": "0",
                    "YSBZ": "0",
                    "SBLX": "",
                    "SBLXMC": null,
                    "YSHGRQ": "2020-07-23",
                    "GYSMC": null
                }, {
                    "DH": "SR2020070037  ",
                    "HTBH": "HT202004230008",
                    "HTId": 524,
                    "SBBM": "",
                    "SBMCBH": "003365",
                    "SBMC": "医学装备管理系统",
                    "SBPP": "                                        ",
                    "PPMC": null,
                    "SBGG": "",
                    "SBDW": "      ",
                    "SL": 1.0,
                    "CGDJ": 1.0,
                    "ZJE": 1.0,
                    "GB": "                    ",
                    "GBMC": null,
                    "CD": "                                                                ",
                    "CDMC": null,
                    "SCQY": "000008",
                    "SCQYMC": "英国先德",
                    "ZCZJH": "",
                    "CCBH": "",
                    "CCRQ": "1900-01-01",
                    "BZHG": "Y",
                    "YSHG": "Y",
                    "SHBZ": "0",
                    "YSBZ": "0",
                    "SBLX": "",
                    "SBLXMC": null,
                    "YSHGRQ": "2020-07-23",
                    "GYSMC": null
                }, {
                    "DH": "SR2020070038  ",
                    "HTBH": "HT202004230008",
                    "HTId": 524,
                    "SBBM": "",
                    "SBMCBH": "003365",
                    "SBMC": "医学装备管理系统",
                    "SBPP": "                                        ",
                    "PPMC": null,
                    "SBGG": "",
                    "SBDW": "      ",
                    "SL": 1.0,
                    "CGDJ": 1.0,
                    "ZJE": 1.0,
                    "GB": "                    ",
                    "GBMC": null,
                    "CD": "                                                                ",
                    "CDMC": null,
                    "SCQY": "000008",
                    "SCQYMC": "英国先德",
                    "ZCZJH": "",
                    "CCBH": "",
                    "CCRQ": "1900-01-01",
                    "BZHG": "Y",
                    "YSHG": "Y",
                    "SHBZ": "0",
                    "YSBZ": "0",
                    "SBLX": "",
                    "SBLXMC": null,
                    "YSHGRQ": "2020-07-23",
                    "GYSMC": null
                }, {
                    "DH": "SR2020070039  ",
                    "HTBH": "HT202004230008",
                    "HTId": 524,
                    "SBBM": "",
                    "SBMCBH": "003365",
                    "SBMC": "医学装备管理系统",
                    "SBPP": "                                        ",
                    "PPMC": null,
                    "SBGG": "",
                    "SBDW": "      ",
                    "SL": 1.0,
                    "CGDJ": 1.0,
                    "ZJE": 1.0,
                    "GB": "                    ",
                    "GBMC": null,
                    "CD": "                                                                ",
                    "CDMC": null,
                    "SCQY": "000008",
                    "SCQYMC": "英国先德",
                    "ZCZJH": "",
                    "CCBH": "",
                    "CCRQ": "1900-01-01",
                    "BZHG": "Y",
                    "YSHG": "Y",
                    "SHBZ": "0",
                    "YSBZ": "0",
                    "SBLX": "",
                    "SBLXMC": null,
                    "YSHGRQ": "2020-07-23",
                    "GYSMC": null
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
                width: 200px;
                height: 80px;
                border-radius: 8px;
                text-align: center;
                line-height: 80px;
                font-size: 26px;
                margin-right: 42px;
                &:first-child{
                    background: #dedede;
                    color: #858585;
                }
                &:nth-child(2) {
                    background: $THEME-COLOR;
                    color: #fff;
                }
                &:last-child{
                    background: $THEME-COLOR;
                    color: #fff;
                    margin-right: 0;
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
        top: 940px;
    }
    .listItems:nth-child(3){
        margin-top: 930px;
    }
</style>
