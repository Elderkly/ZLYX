<template>
    <Box title="资产档案">
        <LoadingFooter
            v-model="loading"
            :finished="finished"
            @load="onLoad"
        >
            <div class="menu">
                <Field title="资产名称" placeholder="请输入编号或者名称" @onMessage="value => search.params1 = value"/>
                <Field title="使用科室" placeholder="请输入使用科室名称" @onMessage="value => search.params2 = value"/>
                <Field title="开始时间" placeholder="请选择" type="calendar" @onMessage="value => search.params3 = value"/>
                <Field title="结束时间" placeholder="请选择" type="calendar" @onMessage="value => search.params4 = value"/>
                <div class="search" @click="serach">查询</div>
            </div>
            <p class="listLength">共计 <span>{{list.length}}条</span></p>
            <div class="items" v-for="item in list" @click="$router.push({name: 'PropertyDetails', params: {item} })">
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
                        <div>
                            <span>{{item.Status}}</span> <img src="../../assets/img/right.png"/>
                        </div>
                        <div @click.stop="$router.push({name: 'PropertyUploadImg', params: {item}})">上传</div>
                    </div>
                </div>
                <div>
                    <span>启用日期</span>
                    <span>2019-04-15</span>
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
        name: 'PropertyRecord',
        data() {
            return {
                search: {
                    params1: null,
                    params2: null,
                    params3: null,
                    params4: null
                },
                loading: false,
                finished: false,
                list: [{
                    "EquCode": "01020100013",
                    "EquName": "半导体激光手术刀",
                    "EquType": "HOP-100",
                    "EquUnit": "台",
                    "EquNumber": "",
                    "Number": "",
                    "DepartmentId": "1001  ",
                    "DepartmentName": "宣传处",
                    "FinanceName": "0101",
                    "FinanceClass": "设备类",
                    "AccountingId": "0102",
                    "EquClassify": "激光手术设备及附件",
                    "IsAnalysis": "否",
                    "IsMetering": "否",
                    "StartDate": "2019-07-17",
                    "ContractPrice": "1.0000",
                    "Depreciation": "0.0000",
                    "NetValue": "1.0000",
                    "EstimateDate": "5",
                    "BrandId": "000028",
                    "BrandName": "",
                    "CountriesId": "0009",
                    "CountriesName": "墨西哥",
                    "OriginId": "000009",
                    "OriginName": "山东",
                    "SupplierId": "000923",
                    "SupplierName": "",
                    "FactoryId": "000923",
                    "FactoryName": "",
                    "StatuId": "1",
                    "Status": "在用",
                    "DirectorName": "涛涛    ",
                    "KSFZR": "taotao  ",
                    'Img': "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg",
                    Address: '存放地址'
                }, {
                    "EquCode": "01020100017",
                    "EquName": "钬激光",
                    "EquType": "PowerSuite 60W",
                    "EquUnit": "台",
                    "EquNumber": "9846",
                    "Number": "456123654",
                    "DepartmentId": "1001  ",
                    "DepartmentName": "宣传处",
                    "FinanceName": "0101",
                    "FinanceClass": "设备类",
                    "AccountingId": "010201",
                    "EquClassify": "激光手术设备",
                    "IsAnalysis": "否",
                    "IsMetering": "否",
                    "StartDate": "2019-10-17",
                    "ContractPrice": "3000.0000",
                    "Depreciation": "0.0000",
                    "NetValue": "3000.0000",
                    "EstimateDate": "5",
                    "BrandId": "000002",
                    "BrandName": "",
                    "CountriesId": "0003",
                    "CountriesName": "德国",
                    "OriginId": "000003",
                    "OriginName": "拉斯维加斯",
                    "SupplierId": "000001",
                    "SupplierName": "",
                    "FactoryId": "000001",
                    "FactoryName": "",
                    "StatuId": "1",
                    "Status": "在用",
                    "DirectorName": "涛涛    ",
                    "KSFZR": "taotao  "
                }, {
                    "EquCode": "01020100020",
                    "EquName": "钬激光",
                    "EquType": "PowerSuite 60W",
                    "EquUnit": "台",
                    "EquNumber": "",
                    "Number": "",
                    "DepartmentId": "1001  ",
                    "DepartmentName": "宣传处",
                    "FinanceName": "0101",
                    "FinanceClass": "设备类",
                    "AccountingId": "010201",
                    "EquClassify": "激光手术设备",
                    "IsAnalysis": "是",
                    "IsMetering": "否",
                    "StartDate": "2019-12-13",
                    "ContractPrice": "4500.0000",
                    "Depreciation": "675.0000",
                    "NetValue": "3824.9999",
                    "EstimateDate": "60",
                    "BrandId": "000007                          ",
                    "BrandName": "迈瑞",
                    "CountriesId": "0002            ",
                    "CountriesName": "美国",
                    "OriginId": "000008                          ",
                    "OriginName": "江苏",
                    "SupplierId": "000007",
                    "SupplierName": "浙江杭州",
                    "FactoryId": "000008",
                    "FactoryName": "英国先德",
                    "StatuId": "1",
                    "Status": "在用",
                    "DirectorName": "涛涛    ",
                    "KSFZR": "taotao  "
                }, {
                    "EquCode": "01020100028",
                    "EquName": "病人监护仪",
                    "EquType": "im8",
                    "EquUnit": "",
                    "EquNumber": "",
                    "Number": "",
                    "DepartmentId": "1001",
                    "DepartmentName": "宣传处",
                    "FinanceName": "0102",
                    "FinanceClass": "病房护理类",
                    "AccountingId": "010201",
                    "EquClassify": "激光手术设备",
                    "IsAnalysis": "是",
                    "IsMetering": "是",
                    "StartDate": "2020-05-20",
                    "ContractPrice": "1.0000",
                    "Depreciation": "0.0666",
                    "NetValue": "0.9333",
                    "EstimateDate": "60",
                    "BrandId": "                                ",
                    "BrandName": "",
                    "CountriesId": "                ",
                    "CountriesName": "",
                    "OriginId": "                                ",
                    "OriginName": "",
                    "SupplierId": "001003",
                    "SupplierName": "深圳迈瑞生物医疗电子股份有限公司",
                    "FactoryId": "000003",
                    "FactoryName": "中国船舶702所",
                    "StatuId": "1",
                    "Status": "在用",
                    "DirectorName": "涛涛    ",
                    "KSFZR": "taotao  "
                }, {
                    "EquCode": "01080100024",
                    "EquName": "无影灯",
                    "EquType": "30066",
                    "EquUnit": "套",
                    "EquNumber": "300006 ",
                    "Number": "",
                    "DepartmentId": "1001  ",
                    "DepartmentName": "宣传处",
                    "FinanceName": "0101",
                    "FinanceClass": "设备类",
                    "AccountingId": "010801",
                    "EquClassify": "手术无影灯",
                    "IsAnalysis": "是",
                    "IsMetering": "是",
                    "StartDate": "2019-12-13",
                    "ContractPrice": "300006.0000",
                    "Depreciation": "45000.9000",
                    "NetValue": "255005.0999",
                    "EstimateDate": "60",
                    "BrandId": "000002                          ",
                    "BrandName": "",
                    "CountriesId": "                ",
                    "CountriesName": "",
                    "OriginId": "000001                          ",
                    "OriginName": "深圳",
                    "SupplierId": "000010",
                    "SupplierName": "英国佳士比",
                    "FactoryId": "000006",
                    "FactoryName": "郑州市中星医疗设备厂",
                    "StatuId": "1",
                    "Status": "在用",
                    "DirectorName": "涛涛    ",
                    "KSFZR": "taotao  "
                }, {
                    "EquCode": "03030100001",
                    "EquName": "组织钳",
                    "EquType": "",
                    "EquUnit": "把",
                    "EquNumber": "",
                    "Number": "",
                    "DepartmentId": "1001  ",
                    "DepartmentName": "宣传处",
                    "FinanceName": "02",
                    "FinanceClass": "专用设备",
                    "AccountingId": "030301",
                    "EquClassify": "组织钳",
                    "IsAnalysis": "是",
                    "IsMetering": "否",
                    "StartDate": "2020-01-03",
                    "ContractPrice": "200.0000",
                    "Depreciation": "26.6666",
                    "NetValue": "173.3333",
                    "EstimateDate": "60",
                    "BrandId": "000031                          ",
                    "BrandName": "深圳众联",
                    "CountriesId": "0021            ",
                    "CountriesName": "",
                    "OriginId": "000017                          ",
                    "OriginName": "杭州",
                    "SupplierId": "000005",
                    "SupplierName": "中国北航",
                    "FactoryId": "000002",
                    "FactoryName": "中西远大科技公司",
                    "StatuId": "1",
                    "Status": "在用",
                    "DirectorName": "涛涛    ",
                    "KSFZR": "taotao  "
                }, {
                    "EquCode": "03030100003",
                    "EquName": "组织钳",
                    "EquType": "",
                    "EquUnit": "把",
                    "EquNumber": "",
                    "Number": "",
                    "DepartmentId": "1001  ",
                    "DepartmentName": "宣传处",
                    "FinanceName": "02",
                    "FinanceClass": "专用设备",
                    "AccountingId": "030301",
                    "EquClassify": "组织钳",
                    "IsAnalysis": "是",
                    "IsMetering": "否",
                    "StartDate": "2020-01-03",
                    "ContractPrice": "200.0000",
                    "Depreciation": "26.6666",
                    "NetValue": "173.3333",
                    "EstimateDate": "60",
                    "BrandId": "000031                          ",
                    "BrandName": "深圳众联",
                    "CountriesId": "0021            ",
                    "CountriesName": "",
                    "OriginId": "000017                          ",
                    "OriginName": "杭州",
                    "SupplierId": "000005",
                    "SupplierName": "中国北航",
                    "FactoryId": "000002",
                    "FactoryName": "中西远大科技公司",
                    "StatuId": "1",
                    "Status": "在用",
                    "DirectorName": "涛涛    ",
                    "KSFZR": "taotao  "
                }, {
                    "EquCode": "03030100004",
                    "EquName": "组织钳",
                    "EquType": "",
                    "EquUnit": "把",
                    "EquNumber": "",
                    "Number": "",
                    "DepartmentId": "1001  ",
                    "DepartmentName": "宣传处",
                    "FinanceName": "02",
                    "FinanceClass": "专用设备",
                    "AccountingId": "030301",
                    "EquClassify": "组织钳",
                    "IsAnalysis": "是",
                    "IsMetering": "否",
                    "StartDate": "2020-01-03",
                    "ContractPrice": "200.0000",
                    "Depreciation": "26.6666",
                    "NetValue": "173.3333",
                    "EstimateDate": "60",
                    "BrandId": "000031                          ",
                    "BrandName": "深圳众联",
                    "CountriesId": "0021            ",
                    "CountriesName": "",
                    "OriginId": "000017                          ",
                    "OriginName": "杭州",
                    "SupplierId": "000005",
                    "SupplierName": "中国北航",
                    "FactoryId": "000002",
                    "FactoryName": "中西远大科技公司",
                    "StatuId": "1",
                    "Status": "在用",
                    "DirectorName": "涛涛    ",
                    "KSFZR": "taotao  "
                }, {
                    "EquCode": "03030100005",
                    "EquName": "组织钳",
                    "EquType": "",
                    "EquUnit": "把",
                    "EquNumber": "",
                    "Number": "",
                    "DepartmentId": "1001  ",
                    "DepartmentName": "宣传处",
                    "FinanceName": "02",
                    "FinanceClass": "专用设备",
                    "AccountingId": "030301",
                    "EquClassify": "组织钳",
                    "IsAnalysis": "是",
                    "IsMetering": "否",
                    "StartDate": "2020-01-03",
                    "ContractPrice": "200.0000",
                    "Depreciation": "26.6666",
                    "NetValue": "173.3333",
                    "EstimateDate": "60",
                    "BrandId": "000031                          ",
                    "BrandName": "深圳众联",
                    "CountriesId": "0021            ",
                    "CountriesName": "",
                    "OriginId": "000017                          ",
                    "OriginName": "杭州",
                    "SupplierId": "000005",
                    "SupplierName": "中国北航",
                    "FactoryId": "000002",
                    "FactoryName": "中西远大科技公司",
                    "StatuId": "1",
                    "Status": "在用",
                    "DirectorName": "涛涛    ",
                    "KSFZR": "taotao  "
                }, {
                    "EquCode": "03030100006",
                    "EquName": "组织钳",
                    "EquType": "",
                    "EquUnit": "把",
                    "EquNumber": "",
                    "Number": "",
                    "DepartmentId": "1001  ",
                    "DepartmentName": "宣传处",
                    "FinanceName": "02",
                    "FinanceClass": "专用设备",
                    "AccountingId": "030301",
                    "EquClassify": "组织钳",
                    "IsAnalysis": "是",
                    "IsMetering": "否",
                    "StartDate": "2020-01-03",
                    "ContractPrice": "200.0000",
                    "Depreciation": "26.6666",
                    "NetValue": "173.3333",
                    "EstimateDate": "60",
                    "BrandId": "000031                          ",
                    "BrandName": "深圳众联",
                    "CountriesId": "0021            ",
                    "CountriesName": "",
                    "OriginId": "000017                          ",
                    "OriginName": "杭州",
                    "SupplierId": "000005",
                    "SupplierName": "中国北航",
                    "FactoryId": "000002",
                    "FactoryName": "中西远大科技公司",
                    "StatuId": "1",
                    "Status": "在用",
                    "DirectorName": "涛涛    ",
                    "KSFZR": "taotao  "
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
                    this.list.push({
                        "EquCode": "01020100013",
                        "EquName": "半导体激光手术刀",
                        "EquType": "HOP-100",
                        "EquUnit": "台",
                        "EquNumber": "",
                        "Number": "",
                        "DepartmentId": "1001  ",
                        "DepartmentName": "宣传处",
                        "FinanceName": "0101",
                        "FinanceClass": "设备类",
                        "AccountingId": "0102",
                        "EquClassify": "激光手术设备及附件",
                        "IsAnalysis": "否",
                        "IsMetering": "否",
                        "StartDate": "2019-07-17",
                        "ContractPrice": "1.0000",
                        "Depreciation": "0.0000",
                        "NetValue": "1.0000",
                        "EstimateDate": "5",
                        "BrandId": "000028",
                        "BrandName": "",
                        "CountriesId": "0009",
                        "CountriesName": "墨西哥",
                        "OriginId": "000009",
                        "OriginName": "山东",
                        "SupplierId": "000923",
                        "SupplierName": "",
                        "FactoryId": "000923",
                        "FactoryName": "",
                        "StatuId": "1",
                        "Status": "在用",
                        "DirectorName": "涛涛    ",
                        "KSFZR": "taotao  ",
                        'Img': "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg",
                        Address: '存放地址'
                    })
                    //  数据是否加载完毕
                    // this.finished = true
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
                            width: 330px;
                            display: flex;
                        }
                        &>div{
                            display: flex;
                            p{
                                color: #999;
                                font-size: 26px;
                                line-height: 45px;
                                height: 45px;
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
                        &>div{
                            &:first-child{
                                color: $TEXT-DARK-COLOR;
                                font-size: 26px;
                                display: flex;
                                justify-content: center;
                                span{
                                    margin-left: 70px;
                                }
                                img{
                                    width: 32px;
                                    height: 32px;
                                }
                            }
                            &:last-child{
                                margin-left: 25px;
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
