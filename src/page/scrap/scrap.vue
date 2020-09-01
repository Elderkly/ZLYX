<template>
    <div class="box">
        <Box title="资产报废">
            <FacilityDetails :data="{
                Images: data.Img,
                EquName: data.EquName,
                EquNo: data.EquCode,
                Size: data.EquType,
                EquNumber: data.EquNumber,
                DepartmentName: data.DepartmentName,
                deadline: data.deadline
            }"/>
            <div class="infoBox">
                <p class="title">报修信息</p>
                <Field title="科室留用" type="teb" :data="['是','否']" @onMessage="value => keepOn = value === '是'"/>
                <div class="FieldItems">
                    <span class="title">报修人员</span>
                    <div :class="staff ? 'action' : ''" @click="$router.push('/staffSearch')">
                        {{staff ? staff.UserName : '请选择'}}
                        <img src="../../assets/img/right-min.png"/>
                    </div>
                </div>
                <p class="FieldItemsTitle">报废原因</p>
                <textarea type="text" placeholder="请输入" cols="3" v-model="cause"/>
            </div>
            <ImgModule upload @changeImg="list => uploadImg = list"/>
        </Box>
        <Footer button="申请报废" @change="change"/>
    </div>
</template>

<script>
    import Box from '../../components/commonBox/commonBox'
    import FacilityDetails from '../../components/facilityDetails/facilityDetails'
    import ImgModule from '../../components/imgModule/imgModule'
    import Footer from '../../components/footer/footer'
    import Field from '../../components/field/field'
    import Bus from "../../components/bus/bus";
    export default {
        name: 'Scrap',
        components: {
            Box,
            FacilityDetails,
            ImgModule,
            Footer,
            Field
        },
        data() {
            return {
                data: this.$route.params.item,
                uploadImg: [],      //  图片
                staff: null,        //  报修人员
                keepOn: true,       //  留用
                cause: null,        //  报废原因
            }
        },
        mounted() {
            Bus.$on('selectStaff', item => {
                console.log('选中了工程师', item)
                this.staff = item
            })
        },
        methods: {
            change() {
                console.log(
                    this.uploadImg,
                    this.staff,
                    this.keepOn,
                    this.cause
                )
                alert('报废')
            }
        }
    }
</script>

<style scoped lang="scss">
    .box{
        padding-bottom: 114px;
    }
    .FieldItems {
        height: 112px;
        border-bottom: 2px solid #F3F3F3;
        display: flex;
        align-items: center;
        font-size: 29px;
        color: #858585;

        .action {
            color: $TEXT-DARK-COLOR;
        }

        .title {
            font-size: 30px;
            color: $TEXT-DARK-COLOR;
            flex: 1;
        }

        div {
            display: flex;
            align-items: center;

            img {
                width: 32px;
                height: 30px;
                margin-left: 8px;
            }
        }

        &:last-child {
            border: none
        }
    }
    .FieldItemsTitle{
        font-size: 30px;
        color: $TEXT-DARK-COLOR;
        margin: 36px 0 20px;
    }
</style>
