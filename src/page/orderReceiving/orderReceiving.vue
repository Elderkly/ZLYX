<template>
    <div class="box">
        <Box title="接单">
            <Title text="待接单"/>
            <FacilityDetails :data="RepairInfo"/>
            <RepairsDetails :data="RepairInfo"/>
            <ImgModule :img="RepairInfo.CLImages"/>
        </Box>
        <Footer text="接单" @change="change"/>
    </div>
</template>

<script>
    import Box from '../../components/commonBox/commonBox'
    import Title from '../../components/commonTitle/commonTitle'
    import FacilityDetails from '../../components/facilityDetails/facilityDetails'
    import RepairsDetails from '../../components/repairsDetails/repairsDetails'
    import ImgModule from '../../components/imgModule/imgModule'
    import Footer from '../../components/footer/footer'
    export default {
        name: 'OrderReceiving',
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
                    "deadline": "2年"
                }
            }
        },
        methods: {
            change() {
                alert('接单')
            }
        }
    }
</script>

<style scoped lang="scss">
    .box{
        padding-bottom: 114px;
    }
</style>
