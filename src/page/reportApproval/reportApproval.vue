<template>
    <div class="ReportApproval">
        <Box :title="$route.params.Report ? '医疗设备购置申请审批表' :'大型医疗设备购置可行性论证报告'">
            <div class="infoBox info">
                <p class="title">设备信息</p>
                <p class="items">申请单号： <span>{{dt[0].DH}}</span></p>
                <p class="items">设备名称： <span>{{dt[0].SBMC}}</span></p>
                <p class="items">规格型号： <span>{{dt[0].SBGG}}</span></p>
                <p class="items">申请数量： <span>{{dt[0].CGSL}}</span></p>
                <p class="items">预估单价： <span>{{dt[0].CGDJ}}</span></p>
            </div>
            <div class="infoBox box2">
                <p class="title">设备购置申请</p>
                <Field title="推介品牌" placeholder="请输入" @onMessage="value => params.TJPP[0] = value"/>
                <Field title="推介品牌" placeholder="请输入" @onMessage="value => params.TJPP[1] = value"/>
                <Field title="推介品牌" placeholder="请输入" @onMessage="value => params.TJPP[2] = value"/>
                <p class="itemTitle">设备购置目的</p>
                <div class="checkBox">
                    <van-checkbox-group v-model="params.GZMD">
                        <van-checkbox v-for="(item, index) in GZMDArr" :name="item" :key="index" checked-color="#4fa69e">{{item}}</van-checkbox>
                    </van-checkbox-group>
                </div>
                <Field title="申购理由" placeholder="请输入" @onMessage="value => params.SGLY = value" type="textarea"/>
            </div>
            <div v-if="!$route.params.Report">
                <div class="infoBox">
                    <p class="title">可行性分析</p>
                    <textarea placeholder="请输入可行性评价，例如(诊疗技术、人员资质、场地 条件、收费标准、安全性等)" cols="3" v-model="params.KXXFX"/>
                </div>
                <div class="infoBox">
                    <p class="title">技术先进性评价</p>
                    <textarea placeholder="请输入技术先进性评价，例如(技术性本地区不落后，技术适宜，易掌握，应用技术功能明确)" cols="3" v-model="params.JSXJXPJ"/>
                </div>
                <div class="infoBox">
                    <p class="title">国内外同类设备性能价格对比</p>
                    <textarea placeholder="请输入国内外同类型设备性能价格对比，例如(关键性能、关键指标、适用范围、使用禁忌、安全性、价格等比较)" cols="3" v-model="params.XNJGDB"/>
                </div>
                <div class="infoBox">
                    <p class="title">科室同类型设备</p>
                    <textarea placeholder="请输入科室现有同类型号、数量、性能、使用情况" cols="3" v-model="params.KSTLXSB"/>
                </div>
            </div>
            <div class="infoBox box3">
                <p class="title">经济效益</p>
                <Field title="设备属性" placeholder="请选择" type="popup" :data="['检测','治疗','辅助']" @onMessage="value => params.SBSX = value"/>
                <Field title="预估单价" placeholder="请输入" @onMessage="value => params.YGDJ = value"/>
                <Field title="有无收费标准" type="teb" :data="['有','无']" @onMessage="value => params.SF = value === '有'"/>
                <Field title="收费是否近医保" type="teb" :data="['是','否']" @onMessage="value => params.YB = value === '是'"/>
                <Field title="月收入(元)" placeholder="请输入预计月收入" @onMessage="value => params.YSR = value"/>
                <Field title="用途" placeholder="请输入用途" @onMessage="value => params.YT = value"/>
                <Field title="月折旧" placeholder="请输入月折旧" @onMessage="value => params.YZK = value"/>
                <Field title="收费标准" placeholder="请输入收费标准" @onMessage="value => params.SFBZ = value"/>
                <Field title="治疗时间" placeholder="请输入治疗时间" @onMessage="value => params.ZLSJ = value"/>
                <Field title="投资回收期(月)" placeholder="请输入预计回收期" @onMessage="value => params.TZHSQ = value"/>
                <Field title="社会效益" placeholder="请输入社会效益" type="textarea" @onMessage="value => params.SHXY = value"/>
            </div>
        </Box>
        <Footer button="保存" @change="save"/>
    </div>
</template>

<script>
    import Box from '../../components/commonBox/commonBox'
    import Field from '../../components/field/field'
    import Footer from '../../components/footer/footer'
    import {CheckboxGroup, Checkbox} from 'vant'
    export default {
        name: 'ReportApproval',
        components: {
            Box,
            Footer,
            Field,
            [Checkbox.name]: Checkbox,
            [CheckboxGroup.name]: CheckboxGroup
        },
        data() {
            return {
                "dt": [{
                    "row": 1,
                    "SBMCBH": "",
                    "DH": "202007210017  ",
                    "CKH": "医学工程部          ",
                    "SBMC": "高频电刀",
                    "TJBrand": "",
                    "PPMC": "                                        ",
                    "SBDW": "台    ",
                    "SBGG": "DD-2型",
                    "RQ": "2020-07-21",
                    "ZDR": null,
                    "KS": "1005",
                    "CGDJ": 587500.0000,
                    "SCQY": "",
                    "SCQYMC": null,
                    "CGSL": 5.0,
                    "CGJE": 587500.0000,
                    "KSMC": "医疗保险办公室",
                    "KSID": "1005  ",
                    "SHBZ": "未审核",
                    "ZT": "0",
                    "GZLB": null,
                    "SFJKMC": "进口",
                    "SFJK": "1",
                    "BZ": "",
                    "JSR": ""
                }],
                GZMDArr: ['业务拓展需要','新技术开发需要','基础医疗安全需要','技术更新需要','经济效益需要','学科建设需要','科研教学需要','政策性需要','其它'],
                params: {
                    TJPP: [],
                    GZMD: [],
                    SGLY: null,
                    KXXFX: null,
                    JSXJXPJ: null,
                    XNJGDB: null,
                    KSTLXSB: null,
                    SBSX: null,
                    YGDJ: null,
                    SF: true,
                    YB: true,
                    YSR: null,
                    YT: null,
                    YZK: null,
                    SFBZ: null,
                    ZLSJ: null,
                    TZHSQ: null,
                    SHXY: null
                }
            }
        },
        methods: {
            save() {
                console.log(this.params)
            }
        }
    }
</script>

<style scoped lang="scss">
    .ReportApproval{
        padding-bottom: 112px;
    }
    .info{
        .items{
            margin-bottom: 25px;
            font-size: 28px;
            color: #999;
            span{
                color: #333;
            }
            &:last-child{
                margin-bottom: 0;
            }
        }
    }
    .box2,.box3{
        .title{
            margin-bottom: 0;
        }
    }
    .itemTitle{
        font-size: 30px;
        color: $TEXT-DARK-COLOR;
        margin: 38px 0;
    }
    .checkBox{
        &>div>div{
            height: 90px;
            border-bottom: 2px solid #f3f3f3;
            font-size: 28px;
            color: $TEXT-DARK-COLOR;
        }
    }
</style>
