<template>
    <Box title="资产明细">
        <ImgModule v-if="data && data.Img" title="设备图片" :img="[data.Img]"/>
        <div class="infoBox">
            <p class="title">设备信息</p>
            <div>
                <span>资产名称：</span>
                <span>{{data.EquName}}</span>
            </div>
            <div>
                <span>资产编号：</span>
                <span>{{data.EquCode}}</span>
            </div>
            <div>
                <span>规格型号：</span>
                <span>{{data.EquType}}</span>
            </div>
            <div>
                <span>资产单位：</span>
                <span>{{data.EquUnit}}</span>
            </div>
            <div>
                <span>序列号：</span>
                <span>{{data.EquNumber}}</span>
            </div>
            <div>
                <span>注册证件号：</span>
                <span>{{data.Number}}</span>
            </div>
            <div>
                <span>使用科室：</span>
                <span>{{data.DepartmentName}}</span>
            </div>
            <div>
                <span>存放地址：</span>
                <span>{{data.Address}}</span>
            </div>
            <div>
                <span>财产分类：</span>
                <span>{{data.EquClassify}}</span>
            </div>
            <div>
                <span>财务分类：</span>
                <span>{{data.FinanceClass}}</span>
            </div>
            <div>
                <span>是否效益分析：</span>
                <span>{{data.IsAnalysis}}</span>
            </div>
            <div>
                <span>是否计量设备：</span>
                <span>{{data.IsMetering}}</span>
            </div>
            <div>
                <span>启用日期：</span>
                <span>{{data.StartDate}}</span>
            </div>
            <div>
                <span>原值：</span>
                <span>{{data.ContractPrice}}</span>
            </div>
            <div>
                <span>折旧：</span>
                <span>{{data.Depreciation}}</span>
            </div>
            <div>
                <span>净值：</span>
                <span>{{data.NetValue}}</span>
            </div>
            <div>
                <span>使用年限（月）：</span>
                <span>{{data.EstimateDate}}</span>
            </div>
            <div>
                <span>品牌：</span>
                <span>{{data.BrandName}}</span>
            </div>
            <div>
                <span>国别：</span>
                <span>{{data.CountriesName}}</span>
            </div>
            <div>
                <span>产地：</span>
                <span>{{data.OriginName}}</span>
            </div>
            <div>
                <span>生产厂家：</span>
                <span>{{data.FinanceClass}}</span>
            </div>
            <div>
                <span>供应商：</span>
                <span>{{data.FactoryName}}</span>
            </div>
            <div>
                <span>状态：</span>
                <span>{{data.Status}}</span>
            </div>
        </div>
    </Box>
</template>

<script>
    import Box from '../../components/commonBox/commonBox'
    import ImgModule from '../../components/imgModule/imgModule'
    export default {
        name: 'PropertyDetails',
        data() {
            return {
                data: {}
            }
        },
        mounted() {
            this.data = this.$route.params.item
        },
        components: {
            Box,
            ImgModule
        },
        watch:{
            $route() {
                this.data = this.$route.params.item ? this.$route.params.item : {}
            }
        }
    }
</script>

<style scoped lang="scss">
    .imgModuleBox{
        margin-top: 15px;
    }
    .infoBox{
        div{
            display: flex;
            align-items: center;
            font-size: 29px;
            margin-bottom: 26px;
            span:first-child{
                flex: 1;
                color: #999;
            }
            span:last-child{
                color: $TEXT-DARK-COLOR;
            }
        }
    }
</style>
