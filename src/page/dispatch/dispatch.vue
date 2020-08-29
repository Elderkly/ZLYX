<template>
    <div class="box">
        <Box title="派工">
            <Title text="待派工"/>
            <FacilityDetails :data="RepairInfo"/>
            <RepairsDetails :data="RepairInfo"/>
            <ImgModule :img="RepairInfo.CLImages"/>
            <div class="engineer">
                <p class="title">派工信息</p>
                <div @click="$router.push('/staffSearch')">
                    <span>工程师</span>
                    <span>{{RepairInfo.AssignUser ? RepairInfo.AssignUser.UserName : '请选择'}}</span>
                    <img src="../../assets/img/right-min.png"/>
                </div>
            </div>
        </Box>
        <Footer
            :button="[{text:'忽略',background:'#DEDEDE',color:'#858585',event: 'overlook'},{text:'派工',background:'#4FA69E',color:'#fff',event: 'dispatch'}]"
            @overlook="overlook"
            @dispatch="dispatch"
        />
    </div>
</template>

<script>
    import Box from '../../components/commonBox/commonBox'
    import Title from '../../components/commonTitle/commonTitle'
    import FacilityDetails from '../../components/facilityDetails/facilityDetails'
    import RepairsDetails from '../../components/repairsDetails/repairsDetails'
    import ImgModule from '../../components/imgModule/imgModule'
    import Footer from '../../components/footer/footer'
    import Bus from '../../components/bus/bus'
    export default {
        name: 'Dispatch',
        components: {
            Box,
            Title,
            FacilityDetails,
            RepairsDetails,
            ImgModule,
            Footer
        },
        data() {
            return {
                RepairInfo: {
                    "RepairNo": "202007310002",
                    "EquName": "二代身份证阅读器",
                    "EquNo": "35020100025",
                    "Size": "CVR-100U",
                    "EquNumber": "123213123123",
                    "RepairStatus": "6",
                    "DepartmentId": "3010",
                    "DepartmentName": "收费处（门诊）",
                    "RepairDate": "2020-07-31",
                    "RepairPeopleId": "taotao",
                    "RepairPeople": "涛涛",
                    "FaultType": " 故障问题名称",
                    "FaultDescribe": "故障描述",
                    "LineNumber": "1",
                    "AssignRepairPeopleId": "taotao",
                    "AssignRepairPeople": "涛涛",
                    "RepairPhone": "17770291026",
                    "RepairAddress": "报修地址",
                    "Images": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg",
                    "Remarks": "备注",
                    "CLImages": ["https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg","https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg"],
                    "deadline": "2年",
                    "AssignUser": null,         //  工程师
                }
            }
        },
        mounted() {
            Bus.$on('selectStaff', item => {
                console.log('选中了工程师',item)
                this.RepairInfo.AssignUser = item
            })
        },
        methods: {
            dispatch() {
                alert('派工')
            },
            overlook() {
                alert('忽略')
            }
        }
    }
</script>

<style scoped lang="scss">
    .box{
        padding-bottom: 114px;
    }
    .engineer{
        background: $BACKGROUND-COLOR;
        border-radius: 12px;
        padding: 36px 40px 55px;
        box-sizing: border-box;
        margin-bottom: 20px;
        .title{
            color: $TEXT-DARK-COLOR;
            font-size: 34px;
            font-weight: bold;
            margin-bottom: 30px;
        }
        div{
            display: flex;
            align-items: center;
            span {
                font-size: 29px;
                &:first-child{
                    color: $TEXT-DARK-COLOR;
                    flex: 1
                }
                &:nth-child(2) {
                    color: #999;
                }
            }
            img{
                width: 32px;
                height: 30px;
                margin-left: 8px;
            }
        }
    }
</style>
