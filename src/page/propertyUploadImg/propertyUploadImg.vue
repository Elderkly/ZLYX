<template>
    <div class="PropertyUploadImg">
        <Box title="资产图片上传">
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
                <p class="title">档案信息</p>
                <Field title="档案类型" placeholder="请选择档案类型" :data="popup" type="popup" popupInput :selectIndex="selectIndex"
                       @input="popupInput"
                       @onMessage="value => type = value"/>
            </div>
            <ImgModule upload @changeImg="list => uploadImg = list"/>
        </Box>
        <Footer button="完成" @change="upload"/>
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
        name: 'PropertyUploadImg',
        data() {
            return {
                data: this.$route.params.item,
                uploadImg: [],              //  图片
                type: null,                 //  档案类型
                selectIndex: 0,
                popup: ['申购审批表','合同信息','安装验收','技术支持','购置档案','质量检测','预防维护','安全检查','报废审批表','合格证','发票','资产图片']
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

        },
        methods: {
            upload() {
                alert('上传')
                console.log(
                    this.type,
                    this.uploadImg
                )
                this.type = null
                this.uploadImg = []
            },
            popupInput(value) {
                console.log(value)
                if (value === 'push') {
                    this.popup.splice(5,'','添加选项')
                    this.selectIndex = 5
                }
            }
        },
        watch: {
            $route(to, from) {
                if (from.name === 'PropertyRecord') {
                    this.type = null
                    this.uploadImg = null
                    console.log('清空')
                    this.data = this.$route.params.item ? this.$route.params.item : {}
                }
            }
        }
    }
</script>

<style scoped lang="scss">
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

    .PropertyUploadImg {
        padding-bottom: 112px;
    }
</style>
