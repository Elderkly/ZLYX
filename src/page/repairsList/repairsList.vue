<template>
    <Box title="科室报修" right-button="search">
        <van-tabs
            swipeable
            background="rgba(0,0,0,0)"
            line-width="20px"
            v-model="tabsIndex"
        >
            <van-tab title="未报修">
                <div class="tagsBox">
                    <LoadingFooter
                        v-model="DepartmentEquLoad.loading"
                        :finished="DepartmentEquLoad.finished"
                        @load="onLoad_DepartmentEqu"
                    >
                        <div class="commonItems" v-for="item in DepartmentEquList" @click="$router.push({name: 'Repairs', params: {item}})">
                            <div>
                                <img :src="item.Img"/>
                                <div>
                                    <p class="ellipsis">{{item.EquName}}</p>
                                    <div>
                                        <div>
                                            <p>资产编号：</p>
                                            <p>设备型号：</p>
                                            <p>使用科室：</p>
                                        </div>
                                        <div>
                                            <p class="ellipsis">{{item.EquCode}}</p>
                                            <p class="ellipsis">{{item.EquType}}</p>
                                            <p class="ellipsis">{{item.DepartmentName}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>去报修</div>
                                </div>
                            </div>
                            <div>
                                <span>启用日期</span>
                                <span>2019-04-15</span>
                            </div>
                        </div>
                    </LoadingFooter>
                </div>
            </van-tab>
            <van-tab title="已报修">
                <div class="tagsBox">
                    <LoadingFooter
                        v-model="DepartmentEquHasLoad.loading"
                        :finished="DepartmentEquHasLoad.finished"
                        @load="onLoad_DepartmentEquHas"
                    >
                        <div class="commonItems" v-for="item in DepartmentEquListHas">
                            <div>
                                <img :src="item.Img"/>
                                <div>
                                    <p class="ellipsis">{{item.EquName}}</p>
                                    <div>
                                        <div>
                                            <p>资产编号：</p>
                                            <p>设备型号：</p>
                                            <p>使用科室：</p>
                                        </div>
                                        <div>
                                            <p class="ellipsis">{{item.EquCode}}</p>
                                            <p class="ellipsis">{{item.EquType}}</p>
                                            <p class="ellipsis">{{item.DepartmentName}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                            <div>
                                <span>启用日期</span>
                                <span>2019-04-15</span>
                            </div>
                        </div>
                    </LoadingFooter>
                </div>
            </van-tab>
        </van-tabs>
    </Box>
</template>

<script>
    import Box from '../../components/commonBox/commonBox'
    import {Tab, Tabs} from 'vant'
    import LoadingFooter from '../../components/loadingFooter/loadingFooter'
    export default {
        name: 'RepairsList',
        components: {
            Box,
            LoadingFooter,
            [Tab.name]: Tab,
            [Tabs.name]: Tabs,
        },
        data() {
            return {
                tabsIndex: 0,
                DepartmentEquLoad: {
                    loading: false,
                    finished: false
                },
                DepartmentEquHasLoad: {
                    loading: false,
                    finished: false
                },
                "DepartmentEquList": [{
                    "EquCode": "35020100049",
                    "EquName": "身份证阅读器",
                    "EquType": null,
                    "EquNumber": null,
                    "FactoryId": "",
                    "FactoryName": "",
                    "DepartmentId": "1012  ",
                    "DepartmentName": "财务处",
                    "Deadline": null,
                    "BuyDate": "2018-12-27",
                    "EnableDate": "2018-12-27",
                    "CWKJKM": "350201",
                    "FinaceClass": null,
                    "ContractPrice": 2150.0,
                    "EquCompany": "台",
                    "CFDD": null,
                    "IsAnalysis": "N",
                    "IsMetering": "N",
                    "BrandName": "                                        ",
                    "EstimateDate": null,
                    "AddUpDep": null,
                    "NetValue": null,
                    "BrandId": null,
                    "SupplierId": "000981",
                    "SupplierName": "心医国际信息科技有限公司"
                }, {
                    "EquCode": "35020100033",
                    "EquName": "身份证阅读器",
                    "EquType": null,
                    "EquNumber": null,
                    "FactoryId": "",
                    "FactoryName": "",
                    "DepartmentId": "1012  ",
                    "DepartmentName": "财务处",
                    "Deadline": null,
                    "BuyDate": "2018-12-27",
                    "EnableDate": "2018-12-27",
                    "CWKJKM": "350201",
                    "FinaceClass": null,
                    "ContractPrice": 2150.0,
                    "EquCompany": "台",
                    "CFDD": null,
                    "IsAnalysis": "N",
                    "IsMetering": "N",
                    "BrandName": "                                        ",
                    "EstimateDate": null,
                    "AddUpDep": null,
                    "NetValue": null,
                    "BrandId": null,
                    "SupplierId": "000981",
                    "SupplierName": "心医国际信息科技有限公司"
                }, {
                    "EquCode": "35020100019",
                    "EquName": "二代身份证阅读器",
                    "EquType": "CVR-100U",
                    "EquNumber": null,
                    "FactoryId": "000698",
                    "FactoryName": "北京科力长远科技有限公司",
                    "DepartmentId": "3010",
                    "DepartmentName": "收费处（门诊）",
                    "Deadline": null,
                    "BuyDate": "2018-04-12",
                    "EnableDate": "2018-04-12",
                    "CWKJKM": "350201",
                    "FinaceClass": null,
                    "ContractPrice": 950.0,
                    "EquCompany": "台",
                    "CFDD": null,
                    "IsAnalysis": "N",
                    "IsMetering": "N",
                    "BrandName": "                                        ",
                    "EstimateDate": null,
                    "AddUpDep": null,
                    "NetValue": null,
                    "BrandId": null,
                    "SupplierId": "000698",
                    "SupplierName": "北京科力长远科技有限公司"
                }, {
                    "EquCode": "35020100018",
                    "EquName": "二代身份证阅读器",
                    "EquType": "CVR-100U",
                    "EquNumber": null,
                    "FactoryId": "000698",
                    "FactoryName": "北京科力长远科技有限公司",
                    "DepartmentId": "3010",
                    "DepartmentName": "收费处（门诊）",
                    "Deadline": null,
                    "BuyDate": "2018-04-12",
                    "EnableDate": "2018-04-12",
                    "CWKJKM": "350201",
                    "FinaceClass": null,
                    "ContractPrice": 950.0,
                    "EquCompany": "台",
                    "CFDD": null,
                    "IsAnalysis": "N",
                    "IsMetering": "N",
                    "BrandName": "                                        ",
                    "EstimateDate": null,
                    "AddUpDep": null,
                    "NetValue": null,
                    "BrandId": null,
                    "SupplierId": "000698",
                    "SupplierName": "北京科力长远科技有限公司"
                }, {
                    "EquCode": "35020100013",
                    "EquName": "阅读器",
                    "EquType": null,
                    "EquNumber": null,
                    "FactoryId": "",
                    "FactoryName": "",
                    "DepartmentId": "3007",
                    "DepartmentName": "收费处（住院）",
                    "Deadline": null,
                    "BuyDate": "2015-04-17",
                    "EnableDate": "2015-04-17",
                    "CWKJKM": "350201",
                    "FinaceClass": null,
                    "ContractPrice": 1650.0,
                    "EquCompany": "台",
                    "CFDD": null,
                    "IsAnalysis": "N",
                    "IsMetering": "N",
                    "BrandName": "                                        ",
                    "EstimateDate": null,
                    "AddUpDep": null,
                    "NetValue": null,
                    "BrandId": null,
                    "SupplierId": null,
                    "SupplierName": ""
                }, {
                    "EquCode": "35020100011",
                    "EquName": "阅读器",
                    "EquType": null,
                    "EquNumber": null,
                    "FactoryId": "",
                    "FactoryName": "",
                    "DepartmentId": "3007",
                    "DepartmentName": "收费处（住院）",
                    "Deadline": null,
                    "BuyDate": "2015-04-17",
                    "EnableDate": "2015-04-17",
                    "CWKJKM": "350201",
                    "FinaceClass": null,
                    "ContractPrice": 1650.0,
                    "EquCompany": "台",
                    "CFDD": null,
                    "IsAnalysis": "N",
                    "IsMetering": "N",
                    "BrandName": "                                        ",
                    "EstimateDate": null,
                    "AddUpDep": null,
                    "NetValue": null,
                    "BrandId": null,
                    "SupplierId": null,
                    "SupplierName": ""
                }, {
                    "EquCode": "35020100010",
                    "EquName": "第二代身份证阅读器",
                    "EquType": "CVR-100",
                    "EquNumber": null,
                    "FactoryId": "",
                    "FactoryName": "",
                    "DepartmentId": "3007",
                    "DepartmentName": "收费处（住院）",
                    "Deadline": null,
                    "BuyDate": "2014-04-04",
                    "EnableDate": "2014-04-04",
                    "CWKJKM": "350201",
                    "FinaceClass": null,
                    "ContractPrice": 1750.0,
                    "EquCompany": "台",
                    "CFDD": null,
                    "IsAnalysis": "N",
                    "IsMetering": "N",
                    "BrandName": "                                        ",
                    "EstimateDate": null,
                    "AddUpDep": null,
                    "NetValue": null,
                    "BrandId": null,
                    "SupplierId": null,
                    "SupplierName": ""
                }, {
                    "EquCode": "35020100008",
                    "EquName": "第二代身份证阅读器",
                    "EquType": "CVR-100",
                    "EquNumber": null,
                    "FactoryId": "",
                    "FactoryName": "",
                    "DepartmentId": "4002  ",
                    "DepartmentName": "在库待报废",
                    "Deadline": null,
                    "BuyDate": "2014-04-04",
                    "EnableDate": "2014-04-04",
                    "CWKJKM": "350201",
                    "FinaceClass": null,
                    "ContractPrice": 1750.0,
                    "EquCompany": "台",
                    "CFDD": null,
                    "IsAnalysis": "N",
                    "IsMetering": "N",
                    "BrandName": "                                        ",
                    "EstimateDate": null,
                    "AddUpDep": null,
                    "NetValue": null,
                    "BrandId": null,
                    "SupplierId": null,
                    "SupplierName": ""
                }, {
                    "EquCode": "35020100007",
                    "EquName": "第二代身份证阅读器",
                    "EquType": "CVR-100",
                    "EquNumber": null,
                    "FactoryId": "",
                    "FactoryName": "",
                    "DepartmentId": "3010",
                    "DepartmentName": "收费处（门诊）",
                    "Deadline": null,
                    "BuyDate": "2014-04-04",
                    "EnableDate": "2014-04-04",
                    "CWKJKM": "350201",
                    "FinaceClass": null,
                    "ContractPrice": 1750.0,
                    "EquCompany": "台",
                    "CFDD": null,
                    "IsAnalysis": "N",
                    "IsMetering": "N",
                    "BrandName": "                                        ",
                    "EstimateDate": null,
                    "AddUpDep": null,
                    "NetValue": null,
                    "BrandId": null,
                    "SupplierId": null,
                    "SupplierName": ""
                }, {
                    "EquCode": "35020100006",
                    "EquName": "第二代身份证阅读器",
                    "EquType": "CVR-100",
                    "EquNumber": null,
                    "FactoryId": "",
                    "FactoryName": "",
                    "DepartmentId": "3010",
                    "DepartmentName": "收费处（门诊）",
                    "Deadline": null,
                    "BuyDate": "2014-04-04",
                    "EnableDate": "2014-04-04",
                    "CWKJKM": "350201",
                    "FinaceClass": null,
                    "ContractPrice": 1750.0,
                    "EquCompany": "台",
                    "CFDD": null,
                    "IsAnalysis": "N",
                    "IsMetering": "N",
                    "BrandName": "                                        ",
                    "EstimateDate": null,
                    "AddUpDep": null,
                    "NetValue": null,
                    "BrandId": null,
                    "SupplierId": null,
                    "SupplierName": ""
                }],
                "DepartmentEquListHas": [{
                    "ApplyOrder": "202003190001",
                    "EquCode": "9010500002",
                    "EquName": "电子针疗仪",
                    "EquType": "SDZ-II",
                    "EquNumber": null,
                    "FactoryId": "",
                    "FactoryName": "",
                    "DepartmentId": "2078  ",
                    "DepartmentName": "康复医学科病房一病区（康复科）",
                    "Deadline": null,
                    "BuyDate": "2019-01-21",
                    "EnableDate": "2019-01-21",
                    "CWKJKM": "90105",
                    "FinaceClass": null,
                    "ContractPrice": 1100.0,
                    "EquCompany": null,
                    "CFDD": null,
                    "IsAnalysis": null,
                    "IsMetering": null,
                    "BrandName": null,
                    "EstimateDate": null,
                    "AddUpDep": null,
                    "NetValue": null,
                    "BrandId": null,
                    "SupplierId": null,
                    "SupplierName": null
                }, {
                    "ApplyOrder": "202003250005",
                    "EquCode": "9010500002",
                    "EquName": "电子针疗仪",
                    "EquType": "SDZ-II",
                    "EquNumber": null,
                    "FactoryId": "",
                    "FactoryName": "",
                    "DepartmentId": "2078  ",
                    "DepartmentName": "康复医学科病房一病区（康复科）",
                    "Deadline": null,
                    "BuyDate": "2019-01-21",
                    "EnableDate": "2019-01-21",
                    "CWKJKM": "90105",
                    "FinaceClass": null,
                    "ContractPrice": 1100.0,
                    "EquCompany": null,
                    "CFDD": null,
                    "IsAnalysis": null,
                    "IsMetering": null,
                    "BrandName": null,
                    "EstimateDate": null,
                    "AddUpDep": null,
                    "NetValue": null,
                    "BrandId": null,
                    "SupplierId": null,
                    "SupplierName": null
                }, {
                    "ApplyOrder": "202003200003",
                    "EquCode": "9010500001",
                    "EquName": "电子针疗仪",
                    "EquType": "SDZ-II",
                    "EquNumber": null,
                    "FactoryId": "",
                    "FactoryName": "",
                    "DepartmentId": "2078  ",
                    "DepartmentName": "康复医学科病房一病区（康复科）",
                    "Deadline": null,
                    "BuyDate": "2019-01-21",
                    "EnableDate": "2019-01-21",
                    "CWKJKM": "90105",
                    "FinaceClass": null,
                    "ContractPrice": 1100.0,
                    "EquCompany": null,
                    "CFDD": null,
                    "IsAnalysis": null,
                    "IsMetering": null,
                    "BrandName": null,
                    "EstimateDate": null,
                    "AddUpDep": null,
                    "NetValue": null,
                    "BrandId": null,
                    "SupplierId": null,
                    "SupplierName": null
                }, {
                    "ApplyOrder": "202003270001",
                    "EquCode": "9010500001",
                    "EquName": "电子针疗仪",
                    "EquType": "SDZ-II",
                    "EquNumber": null,
                    "FactoryId": "",
                    "FactoryName": "",
                    "DepartmentId": "2078  ",
                    "DepartmentName": "康复医学科病房一病区（康复科）",
                    "Deadline": null,
                    "BuyDate": "2019-01-21",
                    "EnableDate": "2019-01-21",
                    "CWKJKM": "90105",
                    "FinaceClass": null,
                    "ContractPrice": 1100.0,
                    "EquCompany": null,
                    "CFDD": null,
                    "IsAnalysis": null,
                    "IsMetering": null,
                    "BrandName": null,
                    "EstimateDate": null,
                    "AddUpDep": null,
                    "NetValue": null,
                    "BrandId": null,
                    "SupplierId": null,
                    "SupplierName": null
                }, {
                    "ApplyOrder": "202007020001",
                    "EquCode": "36000000002",
                    "EquName": "年度计量检测费",
                    "EquType": "NDJJ",
                    "EquNumber": "NDJJ",
                    "FactoryId": "001037",
                    "FactoryName": "赤峰市医院",
                    "DepartmentId": "1007",
                    "DepartmentName": "医学工程管理处",
                    "Deadline": null,
                    "BuyDate": null,
                    "EnableDate": "2020-05-13",
                    "CWKJKM": "36",
                    "FinaceClass": "维修配件",
                    "ContractPrice": 0.0,
                    "EquCompany": null,
                    "CFDD": null,
                    "IsAnalysis": null,
                    "IsMetering": null,
                    "BrandName": null,
                    "EstimateDate": null,
                    "AddUpDep": null,
                    "NetValue": null,
                    "BrandId": null,
                    "SupplierId": null,
                    "SupplierName": null
                }, {
                    "ApplyOrder": "202001160002",
                    "EquCode": "35030200015",
                    "EquName": "机房改造配件",
                    "EquType": null,
                    "EquNumber": null,
                    "FactoryId": "000441",
                    "FactoryName": "北京晋汇中天信息技术有限公司",
                    "DepartmentId": "1004  ",
                    "DepartmentName": "信息网络中心",
                    "Deadline": null,
                    "BuyDate": "2016-12-27",
                    "EnableDate": "2016-12-27",
                    "CWKJKM": "350302",
                    "FinaceClass": null,
                    "ContractPrice": 289927.24,
                    "EquCompany": null,
                    "CFDD": null,
                    "IsAnalysis": null,
                    "IsMetering": null,
                    "BrandName": null,
                    "EstimateDate": null,
                    "AddUpDep": null,
                    "NetValue": null,
                    "BrandId": null,
                    "SupplierId": null,
                    "SupplierName": null
                }, {
                    "ApplyOrder": "202003200006",
                    "EquCode": "35030200011",
                    "EquName": "电梯安装工程款",
                    "EquType": "GeN2-MR",
                    "EquNumber": null,
                    "FactoryId": "000667",
                    "FactoryName": "奥梯斯",
                    "DepartmentId": "1007  ",
                    "DepartmentName": "医学工程管理处",
                    "Deadline": null,
                    "BuyDate": "2016-06-13",
                    "EnableDate": "2016-06-13",
                    "CWKJKM": "350302",
                    "FinaceClass": null,
                    "ContractPrice": 85000.0,
                    "EquCompany": null,
                    "CFDD": null,
                    "IsAnalysis": null,
                    "IsMetering": null,
                    "BrandName": null,
                    "EstimateDate": null,
                    "AddUpDep": null,
                    "NetValue": null,
                    "BrandId": null,
                    "SupplierId": null,
                    "SupplierName": null
                }, {
                    "ApplyOrder": "202003240001",
                    "EquCode": "35030200011",
                    "EquName": "电梯安装工程款",
                    "EquType": "GeN2-MR",
                    "EquNumber": null,
                    "FactoryId": "000667",
                    "FactoryName": "奥梯斯",
                    "DepartmentId": "1007  ",
                    "DepartmentName": "医学工程管理处",
                    "Deadline": null,
                    "BuyDate": "2016-06-13",
                    "EnableDate": "2016-06-13",
                    "CWKJKM": "350302",
                    "FinaceClass": null,
                    "ContractPrice": 85000.0,
                    "EquCompany": null,
                    "CFDD": null,
                    "IsAnalysis": null,
                    "IsMetering": null,
                    "BrandName": null,
                    "EstimateDate": null,
                    "AddUpDep": null,
                    "NetValue": null,
                    "BrandId": null,
                    "SupplierId": null,
                    "SupplierName": null
                }, {
                    "ApplyOrder": "202003230004",
                    "EquCode": "35030200010",
                    "EquName": "电梯安装工程款",
                    "EquType": "GeN2-MR",
                    "EquNumber": null,
                    "FactoryId": "000667",
                    "FactoryName": "奥梯斯",
                    "DepartmentId": "1007  ",
                    "DepartmentName": "医学工程管理处",
                    "Deadline": null,
                    "BuyDate": "2016-06-13",
                    "EnableDate": "2016-06-13",
                    "CWKJKM": "350302",
                    "FinaceClass": null,
                    "ContractPrice": 85000.0,
                    "EquCompany": null,
                    "CFDD": null,
                    "IsAnalysis": null,
                    "IsMetering": null,
                    "BrandName": null,
                    "EstimateDate": null,
                    "AddUpDep": null,
                    "NetValue": null,
                    "BrandId": null,
                    "SupplierId": null,
                    "SupplierName": null
                }, {
                    "ApplyOrder": "202003240002",
                    "EquCode": "35030200008",
                    "EquName": "机房改造配件",
                    "EquType": "详见清单",
                    "EquNumber": null,
                    "FactoryId": "000441",
                    "FactoryName": "北京晋汇中天信息技术有限公司",
                    "DepartmentId": "1004  ",
                    "DepartmentName": "信息网络中心",
                    "Deadline": null,
                    "BuyDate": "2016-04-12",
                    "EnableDate": "2016-04-12",
                    "CWKJKM": "350302",
                    "FinaceClass": null,
                    "ContractPrice": 435072.76,
                    "EquCompany": null,
                    "CFDD": null,
                    "IsAnalysis": null,
                    "IsMetering": null,
                    "BrandName": null,
                    "EstimateDate": null,
                    "AddUpDep": null,
                    "NetValue": null,
                    "BrandId": null,
                    "SupplierId": null,
                    "SupplierName": null
                }],
            }
        },
        methods: {
            onLoad_DepartmentEqu() {
                setTimeout(() => {
                    this.DepartmentEquLoad = {
                        loading: false,
                        finished: true
                    }
                },1000)
            },
            onLoad_DepartmentEquHas() {
                setTimeout(() => {
                    this.DepartmentEquHasLoad = {
                        loading: false,
                        finished: true
                    }
                },1000)
            }
        }
    }
</script>

<style scoped lang="scss">
    .tagsBox{
        margin-top: 120px;
    }
</style>
