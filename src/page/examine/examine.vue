<template>
    <div class="examine">
        <Box title="审批">
            <Title text="待审批"/>
            <FacilityDetails :data="ProcessModel"/>
            <div class="infoBox">
                <p class="title">配件信息</p>
                <div class="accessoriesItems" v-for="item in RepairPartsList">
                    <p>{{item.PartsName}}</p>
                    <div>
                        <span>规格：{{item.Specification}}</span>
                        <span>单位：{{item.Unit}}</span>
                        <span>数量：{{item.Count}}</span>
                        <span>¥ {{item.Price}}</span>
                    </div>
                </div>
            </div>
            <div class="infoBox">
                <p class="title">维修费用</p>
                <div class="maintainItems">
                    <span>配件费用</span>
                    <span>¥ {{ProcessModel.RepairFee}}</span>
                </div>
                <div class="maintainItems">
                    <span>维修费用</span>
                    <span>¥ {{ProcessModel.PartsFee}}</span>
                </div>
                <div class="maintainItems">
                    <span>维修总费用</span>
                    <span>¥ {{ProcessModel.ALLFee}}</span>
                </div>
            </div>
            <div class="infoBox flowBox">
                <p class="title">审批流程</p>
                <StepModule :StepList="AuiitorList"/>
            </div>
            <div class="infoBox ideaBox">
                <p class="title">审批意见</p>
                <textarea type="text" placeholder="请输入" cols="3" v-model="Remark"/>
            </div>
        </Box>
        <Footer
            @reject="reject"
            @resolve="resolve"
            :button="[{text:'拒绝',color:'#858585',background:'#DEDEDE',event:'reject'},{text:'同意',color:'#fff',background:'#4FA69E',event:'resolve'}]"
        />
    </div>
</template>

<script>
    import Box from '../../components/commonBox/commonBox'
    import Title from '../../components/commonTitle/commonTitle'
    import FacilityDetails from '../../components/facilityDetails/facilityDetails'
    import Footer from '../../components/footer/footer'
    import StepModule from '../../components/stepModule/stepModule'
    export default {
        name: 'Examine',
        data() {
            return {
                "ProcessModel": {
                    "EquCode": "08010200012",
                    "RepairNo": "202008130002",
                    "AssetName": "便携式呼吸机",
                    "ProcessNumber": 1,
                    "ProcessCode": "202008200001",
                    "ProcessName": "维修审批流程设置",
                    "RepairDate": "2020-08-13",
                    "DepartmentId": "2026",
                    "DepartmentName": "急诊医学科门诊三诊室（急救中心）",
                    "HandlingId": "taotao",
                    "HandlingName": "涛涛    ",
                    "ProcessState": "0",
                    "RepairFee": 0.0000,
                    "PartsFee": 150.0000,
                    "ALLFee": 150.0000,
                    //  自增字段   用于公用设备信息模块数据渲染
                    "Images": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg",
                    "EquName": "便携式呼吸机",
                    "EquNo": "08010200012",
                    "Size": "CVR-100U",
                    "EquNumber": "123213123123",
                    "deadline": "2年",
                },
                "RepairPartsList": [{
                    "RepairNo": "202008130002",
                    "StoreNo": "",
                    "LineNumber": 1,
                    "PartsLineNumber": 1,
                    "PartsId": "003282",
                    "PartsName": "插排线",
                    "Specification": "0.5*1",
                    "Unit": "根",
                    "Count": 5.0,
                    "Price": 30.0,
                    "Money": 150.0,
                    "Date": "2020-08-20",
                    "Remark": "",
                    "Supplier": "深圳迈瑞生物医疗电子股份有限公司"
                },{
                    "RepairNo": "202008130002",
                    "StoreNo": "",
                    "LineNumber": 1,
                    "PartsLineNumber": 1,
                    "PartsId": "003282              ",
                    "PartsName": "插排线",
                    "Specification": "0.5*1",
                    "Unit": "根    ",
                    "Count": 5.0,
                    "Price": 30.0,
                    "Money": 150.0,
                    "Date": "2020-08-20",
                    "Remark": "",
                    "Supplier": "深圳迈瑞生物医疗电子股份有限公司"
                },{
                    "RepairNo": "202008130002",
                    "StoreNo": "",
                    "LineNumber": 1,
                    "PartsLineNumber": 1,
                    "PartsId": "003282              ",
                    "PartsName": "插排线",
                    "Specification": "0.5*1",
                    "Unit": "根    ",
                    "Count": 5.0,
                    "Price": 30.0,
                    "Money": 150.0,
                    "Date": "2020-08-20",
                    "Remark": "",
                    "Supplier": "深圳迈瑞生物医疗电子股份有限公司"
                }],
                "AuiitorList": [{
                    "UserCode": "taotao",
                    "AuditState": "发起申请",
                    "WaitDate": "2020-08-14 14:22:51"
                }, {
                    "UserCode": "taotao",
                    "AuditState": "审批中",
                    "WaitDate": "已等待9天40小时14分钟"
                },{
                    "UserCode": "taotao",
                    "AuditState": "审批中",
                    "WaitDate": "已等待9天40小时14分钟"
                },{
                    "UserCode": "taotao",
                    "AuditState": "审批中",
                    "WaitDate": "已等待9天40小时14分钟"
                },{
                    "UserCode": "taotao",
                    "AuditState": "审批中",
                    "WaitDate": "已等待9天40小时14分钟"
                },{
                    "UserCode": "taotao",
                    "AuditState": "审批中",
                    "WaitDate": "已等待9天40小时14分钟"
                }],
                Remark: null
            }
        },
        mounted() {
            console.log('携带参数',this.$route.params.item)
        },
        components: {
            Box,
            Title,
            FacilityDetails,
            Footer,
            StepModule
        },
        methods: {
            resolve() {
                alert('同意'+this.Remark)
            },
            reject(){
                alert('拒绝')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .examine{
        padding-bottom: 112px;
    }
    .accessoriesItems{
        margin-bottom: 20px;
        p{
            color: $TEXT-DARK-COLOR;
            font-size: 28px;
            margin-bottom: 14px;
        }
        div{
            color: #858585;
            font-size: 28px;
            display: flex;
            span{
                margin-right: 35px;
                &:last-child{
                    margin-right: 0;
                    font-size: 32px;
                    color: $TEXT-DARK-COLOR;
                    flex:1;
                    text-align: right;
                    font-weight: bold;
                }
            }
        }
    }
    .maintainItems{
        display: flex;
        align-items: center;
        margin-bottom: 32px;
        span{
            &:first-child{
                font-size: 28px;
                color: #999;
                flex: 1;
            }
            &:last-child{
                font-size: 32px;
                color: $TEXT-DARK-COLOR;
                font-weight: bold;
            }
        }
        &:last-child{
            margin-bottom: 0;
        }
    }
    .flowBox{
        .title{
            margin-bottom: 50px;
        }
    }
    .ideaBox{
        textarea{
            font-size: 30px;
            width: 100%;
            border: none;
            resize: none;
            &::-webkit-input-placeholder{
                color: #858585;
            }
        }
    }
</style>
