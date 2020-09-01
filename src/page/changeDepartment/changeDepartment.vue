<template>
    <div class="ChangeDepartment">
        <Box title="申请转科">
            <FacilityDetails :data="{
            Images: data.Img,
            EquName: data.EquName,
            EquNo: data.EquCode,
            Size: data.EquType,
            EquNumber: data.EquNumber,
            DepartmentName: data.DepartmentName,
            deadline: data.deadline
        }" :hidden-department="true"/>
            <div class="infoBox">
                <p class="title">转科信息</p>
                <Field title="转科日期" placeholder="请选择" type="calendar"
                       @onMessage="value => time = value"/>
                <Field title="原负责人" placeholder="请选择" type="selectPeople" @click="action = 1" :listen="action === 1"
                       @onMessage="value => oldPrincipal = value"/>
                <Field title="转入科室" placeholder="请选择" :data="['宣传处','医疗部','保卫处']" type="popup"
                       @onMessage="value => Department = value"/>
                <Field title="新负责人" placeholder="请选择" type="selectPeople" @click="action = 2" :listen="action === 2"
                       @onMessage="value => newPrincipal = value"/>
                <Field title="转科文号" placeholder="请输入"
                       @onMessage="value => referenceNumber = value"/>
                <Field title="存放地址" placeholder="请输入存放地址"
                       @onMessage="value => address = value"/>
                <Field title="转科原因" placeholder="请输入转科原因" type="textarea"
                       @onMessage="value => reason = value"
                />
            </div>
        </Box>
        <Footer button="申请转科" @change="upload"/>
    </div>
</template>

<script>
    import Box from '../../components/commonBox/commonBox'
    import FacilityDetails from '../../components/facilityDetails/facilityDetails'
    import Footer from '../../components/footer/footer'
    import Field from '../../components/field/field'
    import Bus from "../../components/bus/bus";
    import ImgModule from '../../components/imgModule/imgModule'

    export default {
        name: 'Repairs',
        data() {
            return {
                data: this.$route.params.item,
                action: null,
                time: null,             //  转科时间
                oldPrincipal: null,     //  原负责人
                Department: null,       //  转入科室
                newPrincipal: null,     //  新负责人
                referenceNumber: null,  //  转科文号
                address: null,          //  存放地址
                reason: null,           //  转科原因
            }
        },
        components: {
            Box,
            FacilityDetails,
            Footer,
            Field,
            ImgModule
        },
        mounted() {
            Bus.$on('selectStaff', item => {
                console.log('选中了工程师', item)
                this.staff = item
            })
        },
        methods: {
            upload() {
                alert('转科')
                console.log(
                    this.time,
                    this.oldPrincipal,
                    this.Department,
                    this.newPrincipal,
                    this.referenceNumber,
                    this.address,
                    this.reason
                )
            }
        }
    }
</script>

<style scoped lang="scss">
    .ChangeDepartment {
        padding-bottom: 112px;
    }
</style>
