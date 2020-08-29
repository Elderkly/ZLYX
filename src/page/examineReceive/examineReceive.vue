<template>
    <div class="examineReceive">
        <Box title="科室验收">
            <FacilityDetails :data="WX"/>
            <RepairsDetails :data="WX" :RepairFee="JC[0].RepairFee"/>
            <ImgModule :img="WX.CLImages"/>
            <div class="infoBox record">
                <p class="title">维修记录</p>
                <p>已经维修过了</p>
            </div>
            <div class="infoBox receive">
                <p class="title">验收信息</p>
                <div class="receiveBox">
                    <div class="receiveItems" v-for="(item, index) in evaluate">
                        <span>{{item.type}}</span>
                        <Check @change="value => evaluate[index].score = value"/>
                    </div>
                </div>
                <p class="repairTitle">是否修复</p>
                <div class="repairBox">
                    <div :class="repair ? 'action' : ''" @click="repair = true">已修复</div>
                    <div :class="!repair ? 'action' : ''" @click="repair = false">未修复</div>
                </div>
                <Field title="停机时间" text="请输入时间(小时)" inputType="number" @onMessage="value => this.downtime = value"/>
                <Field title="验收建议" text="请输入" @onMessage="value => this.suggest = value"/>
            </div>
        </Box>
        <Footer button="验收" @change="change"/>
    </div>
</template>

<script>
    import Box from '../../components/commonBox/commonBox'
    import FacilityDetails from '../../components/facilityDetails/facilityDetails'
    import RepairsDetails from '../../components/repairsDetails/repairsDetails'
    import Footer from '../../components/footer/footer'
    import ImgModule from '../../components/imgModule/imgModule'
    import Check from '../../components/check/check'
    import Field from '../../components/field/field'
    export default {
        name: 'ExamineReceive',
        components: {
            Box,
            FacilityDetails,
            Footer,
            RepairsDetails,
            ImgModule,
            Check,
            Field
        },
        data() {
            return {
                "WX": {
                    "RepairNo": "202004220014",
                    "EquName": "身份证阅读器",
                    "EquNo": "35020100064",
                    "Size": "CVR-100U",
                    "EquNumber": "123213123123",
                    "RepairStatus": "3",
                    "DepartmentId": "1012",
                    "DepartmentName": "财务处",
                    "RepairDate": "2020-04-22",
                    "RepairPeopleId": "taotao",
                    "RepairPeople": "涛涛",
                    "FaultType": " 故障问题名称",
                    "FaultDescribe": "故障描述",
                    "LineNumber": "1",
                    "AssignRepairPeopleId": "taotao",
                    "AssignRepairPeople": "涛涛    ",
                    "RepairPhone": "17770291026",
                    "RepairAddress": "xxxxx",
                    "Images": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg",
                    "Remarks": "aaa",
                    "deadline": "2年",
                    "CLImages": ["https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg"]
                },
                "PJ": [],
                "RY": [{
                    "RepairNo": "202004220014",
                    "RecordLineNumber": "1",
                    "UserLineNumber": "1",
                    "UserCode": "taotao",
                    "UserName": "涛涛    ",
                    "RepairUserPhone": "202004220014",
                    "UserType": "0",
                    "UserMark": "0",
                    "Remark": ""
                }],
                "TP": [{
                    "RepairNo": "202004220014",
                    "LineNumber": 1,
                    "PartsLineNumber": 1,
                    "PicUrl": "http://www.api.zlianyx.com//upload/wxfj/upload20200422202853771-4.jpg",
                    "PicName": "upload20200422202853771-4",
                    "BZ": "",
                    "ZHXGR": "taotao",
                    "ZHXGRQ": "2020-04-22 20:29:35"
                }, {
                    "RepairNo": "202004220014",
                    "LineNumber": 1,
                    "PartsLineNumber": 2,
                    "PicUrl": "http://www.api.zlianyx.com//upload/wxfj/upload20200422202853817-9.jpg",
                    "PicName": "upload20200422202853817-9",
                    "BZ": "",
                    "ZHXGR": "taotao",
                    "ZHXGRQ": "2020-04-22 20:29:35"
                }, {
                    "RepairNo": "202004220014",
                    "LineNumber": 1,
                    "PartsLineNumber": 3,
                    "PicUrl": "http://www.api.zlianyx.com//upload/wxfj/upload20200422202853866-5.jpg",
                    "PicName": "upload20200422202853866-5",
                    "BZ": "",
                    "ZHXGR": "taotao",
                    "ZHXGRQ": "2020-04-22 20:29:35"
                }, {
                    "RepairNo": "202004220014",
                    "LineNumber": 1,
                    "PartsLineNumber": 4,
                    "PicUrl": "http://www.api.zlianyx.com//upload/wxfj/upload20200422202853927-8.jpg",
                    "PicName": "upload20200422202853927-8",
                    "BZ": "",
                    "ZHXGR": "taotao",
                    "ZHXGRQ": "2020-04-22 20:29:35"
                }, {
                    "RepairNo": "202004220014",
                    "LineNumber": 1,
                    "PartsLineNumber": 5,
                    "PicUrl": "http://www.api.zlianyx.com//upload/wxfj/upload20200422202853992-7.jpg",
                    "PicName": "upload20200422202853992-7",
                    "BZ": "",
                    "ZHXGR": "taotao",
                    "ZHXGRQ": "2020-04-22 20:29:35"
                }, {
                    "RepairNo": "202004220014",
                    "LineNumber": 1,
                    "PartsLineNumber": 6,
                    "PicUrl": "http://www.api.zlianyx.com//upload/wxfj/upload20200422202854050-2.jpg",
                    "PicName": "upload20200422202854050-2",
                    "BZ": "",
                    "ZHXGR": "taotao",
                    "ZHXGRQ": "2020-04-22 20:29:35"
                }, {
                    "RepairNo": "202004220014",
                    "LineNumber": 1,
                    "PartsLineNumber": 7,
                    "PicUrl": "http://www.api.zlianyx.com//upload/wxfj/upload20200422202854155-6.jpg",
                    "PicName": "upload20200422202854155-6",
                    "BZ": "",
                    "ZHXGR": "taotao",
                    "ZHXGRQ": "2020-04-22 20:29:35"
                }, {
                    "RepairNo": "202004220014",
                    "LineNumber": 1,
                    "PartsLineNumber": 8,
                    "PicUrl": "http://www.api.zlianyx.com//upload/wxfj/upload20200422202854211-2.jpg",
                    "PicName": "upload20200422202854211-2",
                    "BZ": "",
                    "ZHXGR": "taotao",
                    "ZHXGRQ": "2020-04-22 20:29:35"
                }, {
                    "RepairNo": "202004220014",
                    "LineNumber": 1,
                    "PartsLineNumber": 9,
                    "PicUrl": "http://www.api.zlianyx.com//upload/wxfj/upload20200422202854273-6.jpg",
                    "PicName": "upload20200422202854273-6",
                    "BZ": "",
                    "ZHXGR": "taotao",
                    "ZHXGRQ": "2020-04-22 20:29:35"
                }],
                "JC": [{
                    "RepairFee": 0.0000,
                    "PartsFee": 0.0000,
                    "RepairWorkingHours": 0.0,
                    "RepairFactory": "",
                    "RepairResult": "1的撒打算发发安抚as发顺丰安抚as发顺丰安抚安抚as啊碍事法师发送1的撒打算发发安抚as发顺丰安抚as发顺丰安抚安抚as啊碍事法师发送1的撒打算发发安抚as发顺丰安抚as发顺丰安抚安抚as啊碍事法师发送",
                    "RepairMark": "0",
                    "RepairMarkName": "自修",
                    "PartsState": "配件申请中"
                }],
                //  评价
                evaluate: [
                    { type: '服务态度', score: 'A'},
                    { type: '技术水平', score: 'A'},
                    { type: '相应时效', score: 'A'},
                ],
                //  是否已修复
                repair: true,
                //  停机时间
                downtime: null,
                //  验收建议
                suggest: null
            }
        },
        methods: {
            change() {
                console.log(this.repair,this.evaluate,this.downtime,this.suggest)
                alert('验收')
            }
        }
    }
</script>

<style scoped lang="scss">
    .examineReceive{
        padding-bottom: 112px;
    }
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

</style>
