<template>
    <div class="Repairs">
        <Box title="科室报修">
            <FacilityDetails :data="{
            Images: data.Img,
            EquName: data.EquName,
            EquNo: data.EquCode,
            Size: data.EquType,
            EquNumber: data.EquNumber,
        }" :hidden-department="true"/>
            <div class="infoBox">
                <p class="title">报修信息</p>
                <Field title="报修科室" placeholder="请选择" :data="['宣传处','医疗部','保卫处']" type="popup"
                       @onMessage="value => DepartmentName = value"/>
                <div class="FieldItems">
                    <span class="title">报修人员</span>
                    <div :class="staff ? 'action' : ''" @click="$router.push('/staffSearch')">
                        {{staff ? staff.UserName : '请选择'}}
                        <img src="../../assets/img/right-min.png"/>
                    </div>
                </div>
                <Field title="报修电话" placeholder="请输入" @onMessage="value => phone = value"/>
                <Field title="报修地址" placeholder="请输入" @onMessage="value => address = value"/>
                <div class="FieldItems">
                    <span class="title">故障问题</span>
                    <div :class="question ? 'action' : ''" @click="$router.push('/questionSearch')">
                        {{question ? question.Question : '请选择'}}
                        <img src="../../assets/img/right-min.png"/>
                    </div>
                </div>
            </div>
            <div class="infoBox">
                <p class="title">故障描述</p>
                <textarea type="text" placeholder="请输入" cols="3" v-model="describe"/>
            </div>
            <div class="infoBox">
                <p class="title">备注</p>
                <input type="text" placeholder="请输入" v-model="remark"/>
            </div>
            <ImgModule upload @changeImg="list => uploadImg = list"/>
        </Box>
        <Footer button="申请报修" @change="upload"/>
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
                staff: null,                //  报修人员
                question: null,             //  故障问题
                uploadImg: [],              //  图片
                address: null,              //  地址
                phone: null,                //  电话
                DepartmentName: null,       //  科室
                describe: null,             //  描述
                remark: null                //  备注
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
            Bus.$on('selectQuestion', item => {
                console.log('选中了问题', item)
                this.question = item
            })
        },
        methods: {
            upload() {
                alert('上传')
                console.log(
                    this.staff,
                    this.question,
                    this.uploadImg,
                    this.address,
                    this.phone,
                    this.DepartmentName,
                    this.describe,
                    this.remark
                )
            }
        },
        watch: {
            $route(to, from) {
                if (from.name === 'PropertySearch') {
                    this.staff = null
                    this.question = null
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

    .Repairs {
        padding-bottom: 112px;
    }
</style>
