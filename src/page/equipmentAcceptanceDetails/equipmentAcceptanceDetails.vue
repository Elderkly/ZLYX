<template>
    <div class="EquipmentAcceptanceDetails">
        <Box title="设备验收信息">
            <div class="tabs">
                <div v-for="(item, index) in ['基本信息','合同信息','招标采购','资金来源']" :class="selectIndex === index ? 'action' : ''" @click="selectIndex = index">{{item}}</div>
            </div>
            <div class="contentBox">
                <div class="firstBox" key="firstBox" v-if="selectIndex === 0">
                    <Field title="设备名称"
                           :action="true"
                           placeholder="请输入设备名称"
                           :text="AcceptanceInfoList[0].SBMC"
                           popupInput
                           type="popup"
                           :data="['超声吸引器','强生超声刀','半导体激光手术刀']"
                           @onMessage="value => AcceptanceInfoList[0].SBMC = value"
                    />
                    <Field title="品牌"
                           placeholder="请选择品牌"
                           :text="AcceptanceInfoList[0].PPMC"
                           popupInput
                           type="popup"
                           :data="['飞利浦','奥林巴斯','科惠']"
                           @onMessage="value => AcceptanceInfoList[0].PPMC = value"
                    />
                    <Field title="产地"
                           placeholder="请选择产地"
                           :text="AcceptanceInfoList[0].CDMC"
                           popupInput
                           type="popup"
                           :data="['深圳','郑州','广州']"
                           @onMessage="value => AcceptanceInfoList[0].CDMC = value"
                    />
                    <Field title="规格型号" placeholder="请输入" :text="AcceptanceInfoList[0].GGXH" @onMessage="value => AcceptanceInfoList[0].GGXH = value"/>
                    <Field title="单位" placeholder="请输入" :text="AcceptanceInfoList[0].DW" @onMessage="value => AcceptanceInfoList[0].DW = value"/>
                    <Field title="资产分类"
                           :action="true"
                           placeholder="请选择资产分类"
                           :text="AcceptanceInfoList[0].ZCFL"
                           popupInput
                           type="popup"
                           :data="['有源手术器械','超声手术设备','医用激光光纤']"
                           @onMessage="value => AcceptanceInfoList[0].ZCFL = value"
                    />
                    <Field title="注册证件号" placeholder="请输入" :text="AcceptanceInfoList[0].ZCZJH" @onMessage="value => AcceptanceInfoList[0].ZCZJH = value"/>
                    <Field title="出厂日期" placeholder="请选择" :text="AcceptanceInfoList[0].CCRQ" type="calendar" @onMessage="value => AcceptanceInfoList[0].CCRQ = value"/>
                    <Field title="设备序列号" placeholder="请输入" :text="AcceptanceInfoList[0].XLH" @onMessage="value => AcceptanceInfoList[0].XLH = value"/>
                    <Field title="出厂编号" placeholder="请输入" :text="AcceptanceInfoList[0].CCBH" @onMessage="value => AcceptanceInfoList[0].CCBH = value"/>
                    <Field title="数量" :action="true" placeholder="请输入" :text="AcceptanceInfoList[0].SL" @onMessage="value => AcceptanceInfoList[0].SL = value"/>
                    <Field title="资产类型"
                           placeholder="请选择资产类型"
                           :text="AcceptanceInfoList[0].ZCLX"
                           popupInput
                           type="popup"
                           :data="['呼吸机','婴儿培养箱','麻醉机']"
                           @onMessage="value => AcceptanceInfoList[0].ZCLX = value"
                    />
                    <Field title="是否国产" type="teb" :data="['是','否']" @onMessage="value => AcceptanceInfoList[0].GC = value === '是'"/>
                    <Field title="单价" :action="true" placeholder="输入单价" :text="AcceptanceInfoList[0].DJ" @onMessage="value => AcceptanceInfoList[0].DJ = value"/>
                    <Field title="附资产标志" type="teb" :data="['是','否']" @onMessage="value => AcceptanceInfoList[0].FZCBZ = value === '是'"/>
                    <Field title="主资产名称"
                           placeholder="请选择主资产名称"
                           :text="AcceptanceInfoList[0].ZZCMC"
                           popupInput
                           type="popup"
                           :data="['病人监护仪','心电图机','强生超声刀']"
                           @onMessage="value => AcceptanceInfoList[0].ZZCMC = value"
                    />
                    <p class="itemTitle">附属类别</p>
                    <div class="checkBox">
                        <van-checkbox-group v-model="AcceptanceInfoList[0].FSLB">
                            <van-checkbox v-for="(item, index) in ['急救物资','特种资产','计量资产','是否公用设备','参与效益分析']" :name="item" :key="index" checked-color="#4fa69e">{{item}}</van-checkbox>
                        </van-checkbox-group>
                    </div>
                    <p class="itemTitle">验收图片</p>
                    <ImgModule upload @changeImg="list => AcceptanceInfoList[0].YSTP = list" title=""/>
                </div>
                <div class="secondBox" key="secondBox1" v-if="selectIndex === 1">
                    <Field title="合同名称" placeholder="请输入合同名称" :text="AcceptanceInfoList[0].HTMC" @onMessage="value => AcceptanceInfoList[0].HTMC = value"/>
                    <Field title="签订日期" placeholder="请选择日期" :text="AcceptanceInfoList[0].HTSJ" type="calendar" @onMessage="value => AcceptanceInfoList[0].HTSJ = value"/>
                    <Field title="总金额" placeholder="请输入合总金额" :text="AcceptanceInfoList[0].ZJE" @onMessage="value => AcceptanceInfoList[0].ZJE = value"/>
                    <Field title="购入日期" placeholder="请选择日期" :text="AcceptanceInfoList[0].GRRQ" type="calendar" @onMessage="value => AcceptanceInfoList[0].GRRQ = value"/>
                    <Field title="验收合格日期" :action="true" placeholder="请选择日期" :text="AcceptanceInfoList[0].YSHGRQ" type="calendar" @onMessage="value => AcceptanceInfoList[0].YSHGRQ = value"/>
                    <Field title="保修到期" placeholder="请选择日期" :text="AcceptanceInfoList[0].YXRQ" type="calendar" @onMessage="value => AcceptanceInfoList[0].YXRQ = value"/>
                    <Field title="送审时间" placeholder="请选择日期" :text="AcceptanceInfoList[0].SSSJ" type="calendar" @onMessage="value => AcceptanceInfoList[0].SSSJ = value"/>
                    <Field title="中标日期" placeholder="请选择日期" :text="AcceptanceInfoList[0].ZBRQ" type="calendar" @onMessage="value => AcceptanceInfoList[0].ZBRQ = value"/>
                    <Field title="通知供货日期" placeholder="请选择日期" :text="AcceptanceInfoList[0].TZGHSJ" type="calendar" @onMessage="value => AcceptanceInfoList[0].TZGHSJ = value"/>
                    <Field title="交货截止日期" placeholder="请选择日期" :text="AcceptanceInfoList[0].JHJZRQ" type="calendar" @onMessage="value => AcceptanceInfoList[0].JHJZRQ = value"/>
                    <Field title="首次验收日期" placeholder="请选择日期" :text="AcceptanceInfoList[0].SCYSRQ" type="calendar" @onMessage="value => AcceptanceInfoList[0].SCYSRQ = value"/>
                    <Field title="二次验收日期" placeholder="请选择日期" :text="AcceptanceInfoList[0].ECYSRQ" type="calendar" @onMessage="value => AcceptanceInfoList[0].ECYSRQ = value"/>
                </div>
                <div class="secondBox" key="secondBox2" v-if="selectIndex === 1">
                    <p class="title">合同信息</p>
                    <Field title="供应商"
                           :action="true"
                           placeholder="请选择供应商"
                           :text="AcceptanceInfoList[0].GYSMC"
                           popupInput
                           type="popup"
                           :data="['中国北航','中西远大科技公司','浙江杭州']"
                           @onMessage="value => AcceptanceInfoList[0].GYSMC = value"
                    />
                    <Field title="供应商联系人" placeholder="请输入供应商联系人" :text="AcceptanceInfoList[0].GYSLXR" @onMessage="value => AcceptanceInfoList[0].GYSLXR = value"/>
                    <Field title="联系电话" placeholder="请输入联系电话" :text="AcceptanceInfoList[0].GYSDH" @onMessage="value => AcceptanceInfoList[0].GYSDH = value"/>
                    <Field title="维修联系人" placeholder="请输入维修联系人" :text="AcceptanceInfoList[0].WXRXM" @onMessage="value => AcceptanceInfoList[0].WXRXM = value"/>
                    <Field title="维修公司" placeholder="请输入维修公司" :text="AcceptanceInfoList[0].WXDWMC" @onMessage="value => AcceptanceInfoList[0].WXDWMC = value"/>
                    <Field title="维修电话" placeholder="请输入维修电话" :text="AcceptanceInfoList[0].WXDH" @onMessage="value => AcceptanceInfoList[0].WXDH = value"/>
                    <Field title="生产厂家"
                           :action="true"
                           placeholder="请选择生产厂家"
                           :text="AcceptanceInfoList[0].SCCSMC"
                           popupInput
                           type="popup"
                           :data="['中国北航','中西远大科技公司','浙江杭州']"
                           @onMessage="value => AcceptanceInfoList[0].SCCSMC = value"
                    />
                </div>
                <div class="thirdlybox" key="thirdly" v-if="selectIndex === 2">
                    <Field title="采购方式"
                           placeholder="请选择采购方式"
                           :text="AcceptanceInfoList[0].CGFS"
                           type="popup"
                           :data="['采购招标','集体议价询价采购','单一来源采购']"
                           @onMessage="value => AcceptanceInfoList[0].CGFS = value"
                    />
                    <Field title="招标形式"
                           placeholder="请选择招标形式"
                           :text="AcceptanceInfoList[0].ZBXS"
                           type="popup"
                           :data="['公开招标','询价','邀请招标','单一来源']"
                           @onMessage="value => AcceptanceInfoList[0].ZBXS = value"
                    />
                    <Field title="单项预算" placeholder="请输入单项预算" :text="AcceptanceInfoList[0].DXYS" @onMessage="value => AcceptanceInfoList[0].DXYS = value"/>
                    <Field title="立项依据" placeholder="请输入立项依据" :text="AcceptanceInfoList[0].LXYJ" @onMessage="value => AcceptanceInfoList[0].LXYJ = value"/>
                </div>
                <div class="fourthly" key="fourthly" v-if="selectIndex === 3">
                    <div class="fourthlyItems" v-for="(item, index) in AcceptanceInfoList[0].ZJLY">
                        <div>
                            <span>{{item.text}}</span>
                            <input type="number" placeholder="请输入" v-model="item.money">
                            <span>元</span>
                        </div>
                        <input type="text" placeholder="请输入备注内容" v-model="item.remark"/>
                    </div>
                </div>
            </div>
        </Box>
        <Footer button="保存" @change="save"/>
    </div>
</template>

<script>
    import Box from '../../components/commonBox/commonBox'
    import Footer from '../../components/footer/footer'
    import Field from '../../components/field/field'
    import {CheckboxGroup, Checkbox} from 'vant'
    import ImgModule from '../../components/imgModule/imgModule'
    export default {
        name: 'EquipmentAcceptanceDetails',
        components: {
            Box,
            Footer,
            Field,
            ImgModule,
            [Checkbox.name]: Checkbox,
            [CheckboxGroup.name]: CheckboxGroup
        },
        data() {
            return{
                selectIndex: 0,
                action: 0,
                "AcceptanceInfoList": [{
                    "SBBH": "000009              ",
                    "SBMC": "高频电刀",
                    "PP": "000002",
                    "PPMC": null,
                    "CD": "000001",
                    "CDMC": "深圳                                                            ",
                    "GB": "0001",
                    "GBMC": "中国                ",
                    "SBBM": "000009              ",
                    "Id": "439",
                    "GGXH": "DD-2型",
                    "DW": "台",
                    "KJKM": "010301    ",
                    "KJKMMC": "高频手术设备",
                    "ZCZJH": "",
                    "SL": "1.0000",
                    "HTBH": "HT202001030010                                    ",
                    "HTMC": "叫豪哥看",
                    "DJ": "30000.0000",
                    "GYSMC": "中国北航",
                    "HTDW": "000005",
                    "SCCS": "000005",
                    "SCCSMC": "中国北航",
                    "QYLXDH": "",
                    "QYLXR": "",
                    "WXDH": "",
                    "WXDW": "000005",
                    "WXDWMC": "中国北航",
                    "WXRXM": "",
                    "YXRQ": "2021-01-03",
                    "HTSJ": "2020-01-03",
                    "ISDomestic": "",
                    //  自增字段
                    //  tab1
                    ZCFL: '',           //  资产分类
                    CCRQ: '',           //  出厂日期
                    XLH: '',            //  设备序列号
                    CCBH:'',            //  出厂编号
                    ZCLX: '',           //  资产类型
                    GC: true,           //  是否国产
                    FZCBZ: true,        //  附资产标志
                    ZZCMC: '',          //  主资产名称
                    FSLB: [],           //  附属类别
                    YSTP: [],           //  验收图片
                    //  tab2
                    ZJE: '',            //  总金额
                    GRRQ: '',           //  购入日期
                    YSHGRQ: '',         //  验收合格日期
                    SSSJ:'',            //  送审时间
                    ZBRQ: '',           //  中标日期
                    TZGHSJ: '',         //  通知供货日期
                    JHJZRQ: '',         //  交货截止日期
                    SCYSRQ: '',         //  首次验收日期
                    ECYSRQ: '',         //  二次验收日期
                    GYSLXR: '',         //  供应商联系人
                    GYSDH: '',          //  供应商联系电话
                    //  tab3
                    CGFS:'',            //  采购方式
                    ZBXS:'',            //  招标形式
                    DXYS:'',            //  单项预算
                    LXYJ:'',            //  立项依据
                    //  tab4
                    ZJLY: [             //  资金来源
                        { text: '自筹资金', money: null, remark: null},
                        { text: '教学经费', money: null, remark: null},
                        { text: '项目拨款', money: null, remark: null},
                        { text: '基本拨款', money: null, remark: null},
                        { text: '科研经费', money: null, remark: null},
                        { text: '接受捐赠', money: null, remark: null},
                        { text: '融资租赁', money: null, remark: null},
                    ]
                }]
            }
        },
        methods: {
            save() {
                console.log(this.AcceptanceInfoList)
                alert('保存')
            }
        }
    }
</script>

<style scoped lang="scss">
    .EquipmentAcceptanceDetails{
        padding-bottom: 112px;
    }
    .tabs{
        display: flex;
        align-items: center;
        background: #45918A;
        border-radius: 14px 14px 0 0;
        div{
            width: 178px;
            height: 96px;
            text-align: center;
            line-height: 96px;
            font-size: 28px;
            color: rgba(255,255,255,.7);
        }
        .action{
            color: $THEME-COLOR;
            background: #fff;
            border-radius: 12px 12px 0 0;
        }
    }
    .contentBox{
        position: relative;
        top: -1px;
        &>div{
            padding: 0 30px;
            border-radius: 14px;
            background: #fff;
            margin-bottom: 30px;
            &:first-child{
                border-radius: 0 0 14px 14px;
            }
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
    .firstBox{
        padding-bottom: 20px!important;
    }
    .firstBox>div:last-child{
        padding: 0;
    }
    .secondBox{
        .title{
            font-size: 32px;
            color: $TEXT-DARK-COLOR;
            font-weight: bold;
            padding-top: 44px;
        }
    }
    .fourthly{
        padding: 34px 36px 12px!important;
    }
    .fourthlyItems{
        margin-bottom: 36px;
        div{
            display: flex;
            align-items: center;
            margin-bottom: 12px;
            span:first-child{
                flex: 1;
                font-size: 30px;
                color: $TEXT-DARK-COLOR;
            }
            span:last-child{
                font-size: 28px;
                color: $TEXT-DARK-COLOR;
                margin-left: 10px;
            }
            input{
                font-size: 32px;
                font-weight: bold;
                text-align: right;
                &::-webkit-input-placeholder{
                    color: #858585;
                    font-size: 28px;
                    font-weight: 400;
                }
            }
        }
        &>input{
            width: 650px;
            height: 88px;
            background: #F3F3F3;
            border-radius: 12px;
            font-size: 26px;
            text-indent: 32px;
            &::-webkit-input-placeholder{
                color: #858585;
            }
        }
    }
</style>
