<template>
    <div class="ServiceDetails">
        <Box title="维修详情">
            <Title v-if="$route.params.item" :text="$route.params.item.State === '4' ? '已验收' : $route.params.item.State === '7' ? '审批未通过' : '已忽略'"/>
            <FacilityDetails :data="WX"/>
            <RepairsDetails :data="WX"/>
            <ImgModule :img="WX.CLImages"/>
            <ServicePerson :data="RY" @Message="value => RY = value"/>
            <div class="infoBox info">
                <p class="title">维修信息</p>
                <Field title="配件费用" :text="JC[0].PartsFee" type="text"/>
                <Field title="维修费用" :text="JC[0].RepairFee" type="text"/>
                <Field title="合计费用" :text="Number(JC[0].PartsFee) + Number(JC[0].RepairFee)" type="text"/>
                <Field title="维修厂家" placeholder="请输入" :text="!!JC[0].RepairFactory ? JC[0].RepairFactory : ''" @onMessage="value => JC[0].RepairFactory = value"/>
                <Field title="维修类型" placeholder="点击选择维修类型" :text="!!JC[0].RepairMarkName ? JC[0].RepairMarkName : ''" type='popup' :data="['自修', '第三方维修','原厂','报修']" @onMessage="value => JC[0].RepairMarkName = value"/>
            </div>
            <div class="infoBox record">
                <p class="title">维修记录</p>
                <textarea type="text" placeholder="请输入" cols="3" v-model="JC[0].RepairMark"/>
            </div>
            <ImgModule v-if="$route.params.item && $route.params.item.State === '4'" :img="serviceEndImg" title="维修后的图片"/>
        </Box>
    </div>
</template>

<script>
    import Box from '../../components/commonBox/commonBox'
    import Title from '../../components/commonTitle/commonTitle'
    import FacilityDetails from '../../components/facilityDetails/facilityDetails'
    import RepairsDetails from '../../components/repairsDetails/repairsDetails'
    import Footer from '../../components/footer/footer'
    import ImgModule from '../../components/imgModule/imgModule'
    import Check from '../../components/check/check'
    import Field from '../../components/field/field'
    import ServicePerson from '../../components/servicePerson/servicePerson'
    import Accessories from '../../components/accessories/accessories'
    export default {
        name: 'Pending',
        components: {
            Box,
            Title,
            FacilityDetails,
            Footer,
            RepairsDetails,
            ImgModule,
            Check,
            Field,
            ServicePerson,
            Accessories
        },
        data() {
            return {
                "WX": {
                    "RepairNo": "202006230002",
                    "EquName": "穆舜坤cs623",
                    "EquNo": "010000100010001",
                    "Size": "mskgg",
                    "EquNumber": "2",
                    "RepairStatus": "5",
                    "DepartmentId": "1001",
                    "DepartmentName": "宣传处",
                    "RepairDate": "2020-06-23",
                    "RepairPeopleId": "225",
                    "RepairPeople": "msk",
                    "FaultType": "故障222",
                    "FaultDescribe": "故障描述222",
                    "LineNumber": "1",
                    "AssignRepairPeopleId": "taotao",
                    "AssignRepairPeople": "涛涛    ",
                    "RepairPhone": "",
                    "RepairAddress": "",
                    "Images": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg",
                    "Remarks": "222",
                    "CLImages": ["https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg"]
                },
                "PJ": [{
                    "RepairNo": "202006230002",
                    "StoreNo": "",
                    "LineNumber": 1,
                    "PartsLineNumber": 1,
                    "PartsId": "涛涛    (null)",
                    "PartsName": "涛涛    螺丝",
                    "Specification": "0.5*1",
                    "Unit": "根",
                    "Count": 1.0,
                    "Price": 0.0000,
                    "Money": 0.0000,
                    "Date": "2020-08-30",
                    "Remark": "",
                    "Supplier": null
                }],
                "RY": [{
                    "RepairNo": "202006230002",
                    "RecordLineNumber": "1",
                    "UserLineNumber": "1",
                    "UserCode": "taotao",
                    "UserName": "涛涛 1   ",
                    "RepairUserPhone": "202006230002",
                    "UserType": "0",
                    "UserMark": "0",
                    "Remark": "",
                    Time:'30小时',
                    header: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg'
                },{
                    "RepairNo": "202006230002",
                    "RecordLineNumber": "1",
                    "UserLineNumber": "1",
                    "UserCode": "taotao",
                    "UserName": "涛涛2    ",
                    "RepairUserPhone": "202006230002",
                    "UserType": "0",
                    "UserMark": "0",
                    "Remark": "",
                    Time:'30小时',
                    header: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg'
                },{
                    "RepairNo": "202006230002",
                    "RecordLineNumber": "1",
                    "UserLineNumber": "1",
                    "UserCode": "taotao",
                    "UserName": "涛涛3    ",
                    "RepairUserPhone": "202006230002",
                    "UserType": "0",
                    "UserMark": "0",
                    "Remark": "",
                    Time:'30小时',
                    header: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg'
                }],
                "TP": [],
                "JC": [{
                    "RepairFee": 0.0000,
                    "PartsFee": 0.0000,
                    "RepairWorkingHours": 0.0,
                    "RepairFactory": "",
                    "RepairResult": "11",
                    "RepairMark": "0",
                    "RepairMarkName": "自修",
                    "PartsState": "配件已到达"
                }],
                //  维修后的图片
                serviceEndImg: ['https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg','https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg']
            }
        },
        methods: {
        }
    }
</script>

<style scoped lang="scss">
    .record{
        p:last-child{
            font-size: 28px;
            color: #858585;
        }
    }
    .receiveBox{
        border-bottom: 2px solid #F3F3F3;
        .receiveItems{
            display: flex;
            margin-bottom: 38px;
            &>span{
                color: #858585;
                font-size: 28px;
                margin-right: 32px;
            }
        }
    }
    .repairTitle{
        font-size: 28px;
        color: $TEXT-DARK-COLOR;
        margin-top: 30px;
    }
    .repairBox{
        display: flex;
        margin-top: 28px;
        padding-bottom: 30px;
        border-bottom: 2px solid #F3F3F3;
        div{
            width: 148px;
            height: 76px;
            border-radius: 8px;
            background: #f3f3f3;
            color: #858585;
            line-height: 76px;
            text-align: center;
            font-size: 30px;
            margin-right: 24px;
        }
        .action{
            background: $THEME-COLOR;
            color: #fff;
        }
    }
    .receive{
        padding-bottom: 0;
    }
    textarea{
        font-size: 30px;
        width: 100%;
        border: none;
        resize: none;
        &::-webkit-input-placeholder{
            color: #858585;
        }
    }
</style>
