<template>
    <div class="QualityTest" ref="Box">
        <div class="QualityTestHeader">
            <img src="../../assets/img/left.png" @click="$router.back()"/>
            质量检测
        </div>
        <div class="infoBox firstBox">
            <p class="title">设备信息</p>
            <div class="info">
                <div>
                    <img :src="data.Img" />
                </div>
                <div>
                    <p class="ellipsis">设备名称： <span>{{data.EquName}}</span></p>
                    <p class="ellipsis">使用科室： <span>{{data.DepName}}</span></p>
                </div>
                <div>
                    <p class="ellipsis">规格型号： <span>{{data.OrderNo}}</span></p>
                    <p class="ellipsis">生产日期： <span>{{data.QYRQ}}</span></p>
                </div>
                <div>
                    <p class="ellipsis">设备编号： <span>{{data.EquId}}</span></p>
                    <p class="ellipsis">启用日期： <span>{{data.KeepDate}}</span></p>
                </div>
            </div>
        </div>
        <div class="infoBox quality">
            <div class="tableTitle">
                <div>检测项目</div>
                <div>检测内容</div>
                <div>检测结果</div>
                <div>说明</div>
            </div>
            <div class="tableItems" v-for="item in list">
                <div class="tableItemsLeftBox">{{item.title}}</div>
                <div class="tableItemsRightBox">
                    <div v-for="itemList in item.list">
                        <div>{{itemList.ProName}}</div>
                        <div>
                            <div :class="itemList.ResultSuccess === itemList.DefalultResult ? 'action' : ''" @click="() => itemList.DefalultResult = itemList.ResultSuccess">{{itemList.ResultSuccess}}</div>
                            <div :class="itemList.ResultError === itemList.DefalultResult ? 'action' : ''" @click="() => itemList.DefalultResult = itemList.ResultError">{{itemList.ResultError}}</div>
                        </div>
                        <div>
                            <input type="text" placeholder="请输入" v-model="itemList.Explain"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="infoBox quality">
            <div class="tableItems" v-for="item in list2">
                <div class="tableItemsLeftBox">{{item.title}}</div>
                <div :class="'tableItemsRightBox2 ' + item.type">
                    <van-checkbox-group v-model="calibration" v-if="item.type === 'checkbox-group'">
                        <van-checkbox v-for="(itemList,index) in item.list" :key="index" :name="itemList" checked-color="#4fa69e">{{itemList}}</van-checkbox>
                    </van-checkbox-group>
                    <van-radio-group v-model="actuality" v-if="item.type === 'checkbox'">
                        <van-radio v-for="(itemList, index) in item.list" :key="index" :name="itemList" checked-color="#4fa69e">{{itemList}}</van-radio>
                    </van-radio-group>
                    <div class="input-group" v-if="item.type === 'input-group'">
                        <div v-for="itemList in item.list">
                            <p>{{itemList.text}}</p>
                            <input type="text" v-if="itemList.type !== 'calender'" placeholder="请输入" v-model="itemList.explain" :disabled="itemList.disabled ? 'disabled' : false"/>

                            <div class="calenderText" v-if="itemList.type === 'calender'" @click="(showCalendar = true,setData = itemList)">{{itemList.explain ? itemList.explain : "请输入"}}</div>
                            <van-calendar :round="false" v-if="itemList.type === 'calender'" v-model="showCalendar" @confirm="onConfirm"/>
                        </div>
                    </div>
                    <input v-if="item.type === 'input'" type="text" :placeholder="item.explain ? item.explain : '请输入'" v-model="item.explain"/>
                </div>
            </div>
        </div>
        <div class="imgBox">
            <ImgModule upload @changeImg="list => uploadImg = list" title=""/>
        </div>
        <div class="footer" @click="upload">提交</div>
    </div>
</template>

<script>
    import ImgModule from '../../components/imgModule/imgModule'
    import {CheckboxGroup, Checkbox, RadioGroup, Radio, Calendar} from 'vant'
    export default {
        name: 'QualityTest',
        data() {
            return {
                data: this.$route.params.item,
                list: [],
                list2: [
                    {title: '维护校准',list: ['内部除尘','电路调整','润滑加油','参数调整','内部管路清洁','机内灰尘清洁','安全测试校准'],type:'checkbox-group'},
                    {title: '仪器现状',list: ['工作正常','有小问题可以使用','有故障需进一步维修','不能使用'],type:'checkbox'},
                    {title: '机房环境',list: [{text:'机房温度',explain: null},{text:'机房温度',explain: null},{text:'供电电压',explain: null},{text:'重要事项',explain: null},],type:'input-group'},
                    {title: '预防维护评价',explain: null,type:'input'},
                    {title: '改进措施',explain: null,type:'input'},
                    {title: '操作者意见',explain: null,type:'input'},
                    {title: '备注',explain: null,type:'input'},
                    {title: '其它',list: [{text:'科主任签名',explain: null},{text:'执行人',explain: 'taotao', disabled: true},{text:'时间',explain: null, type: 'calender'},{text:'执行时间',explain: null,type: 'calender'},],type:'input-group'},
                ],
                calibration:[],                //  维护校准选中内容
                actuality: '工作正常',          //  仪器现状选中内容
                uploadImg:[],                  //   图片
                showCalendar: false,           //   显示日历
                setData: null,                 //   用于区分日历组件指向哪一个item
            }
        },
        components: {
            ImgModule,
            [Calendar.name]: Calendar,
            [Checkbox.name]: Checkbox,
            [CheckboxGroup.name]: CheckboxGroup,
            [RadioGroup.name]: RadioGroup,
            [Radio.name]: Radio
        },
        mounted() {
            //  获取数据
            this.getApiData().then(() => {
                window.scrollTo(0,0)
            })
        },
        methods: {
            getApiData() {
                return new Promise(reject => {
                    //  重组数据
                    const HttpList =  {
                        "BYTMPList1": [{
                            "ShowType": 8,
                            "DetcType": 0,
                            "DetcName": "预防性维护",
                            "MainName": "操作安全",
                            "ProName": "1.有无特种设备安全管理，安全操作和岗位责任制度，是否严格执行",
                            "TMPName": null,
                            "AcceptVal": null,
                            "AcceptUnit": null,
                            "TMPId": "01-0001",
                            "TMPSortNum": 1,
                            "ResultSuccess": "合格",
                            "ResultError": "不合格",
                            "ResultOther": null,
                            "DefalultResult": "合格",
                            "Result": null,
                            "Explain": null,
                            "TMPIdOtherOne": "TP-YC0001",
                            "TMPIdOtherTwo": null,
                            "TMPIdOtherOneResult": null,
                            "TMPIdOtherTwoResult": null,
                            "TotalNum": 5
                        }, {
                            "ShowType": 8,
                            "DetcType": 0,
                            "DetcName": "预防性维护",
                            "MainName": "操作安全",
                            "ProName": "2.确保操作间内通风良好，不得存放易燃易爆物品",
                            "TMPName": null,
                            "AcceptVal": null,
                            "AcceptUnit": null,
                            "TMPId": "01-0002",
                            "TMPSortNum": 2,
                            "ResultSuccess": "合格",
                            "ResultError": "不合格",
                            "ResultOther": null,
                            "DefalultResult": "合格",
                            "Result": null,
                            "Explain": null,
                            "TMPIdOtherOne": "TP-YC0002",
                            "TMPIdOtherTwo": null,
                            "TMPIdOtherOneResult": null,
                            "TMPIdOtherTwoResult": null,
                            "TotalNum": 5
                        }, {
                            "ShowType": 8,
                            "DetcType": 0,
                            "DetcName": "预防性维护",
                            "MainName": "操作安全",
                            "ProName": "3.机器操作规范要张贴在机器明显位置",
                            "TMPName": null,
                            "AcceptVal": null,
                            "AcceptUnit": null,
                            "TMPId": "01-0003",
                            "TMPSortNum": 3,
                            "ResultSuccess": "合格",
                            "ResultError": "不合格",
                            "ResultOther": null,
                            "DefalultResult": "合格",
                            "Result": null,
                            "Explain": null,
                            "TMPIdOtherOne": "TP-YC0003",
                            "TMPIdOtherTwo": null,
                            "TMPIdOtherOneResult": null,
                            "TMPIdOtherTwoResult": null,
                            "TotalNum": 5
                        }, {
                            "ShowType": 8,
                            "DetcType": 0,
                            "DetcName": "预防性维护",
                            "MainName": "操作安全",
                            "ProName": "4.操作员持证上岗",
                            "TMPName": null,
                            "AcceptVal": null,
                            "AcceptUnit": null,
                            "TMPId": "01-0004",
                            "TMPSortNum": 4,
                            "ResultSuccess": "合格",
                            "ResultError": "不合格",
                            "ResultOther": null,
                            "DefalultResult": "合格",
                            "Result": null,
                            "Explain": null,
                            "TMPIdOtherOne": "TP-YC0004",
                            "TMPIdOtherTwo": null,
                            "TMPIdOtherOneResult": null,
                            "TMPIdOtherTwoResult": null,
                            "TotalNum": 5
                        }, {
                            "ShowType": 8,
                            "DetcType": 0,
                            "DetcName": "预防性维护",
                            "MainName": "操作安全",
                            "ProName": "5.开机前仔细检查各系统是否正常，确保各仪表读数准确，各阀门动作可靠",
                            "TMPName": null,
                            "AcceptVal": null,
                            "AcceptUnit": null,
                            "TMPId": "01-0005",
                            "TMPSortNum": 5,
                            "ResultSuccess": "合格",
                            "ResultError": "不合格",
                            "ResultOther": null,
                            "DefalultResult": "合格",
                            "Result": null,
                            "Explain": null,
                            "TMPIdOtherOne": "TP-YC0005",
                            "TMPIdOtherTwo": null,
                            "TMPIdOtherOneResult": null,
                            "TMPIdOtherTwoResult": null,
                            "TotalNum": 5
                        }],
                        "BYTMPList2": [{
                            "ShowType": 8,
                            "DetcType": 0,
                            "DetcName": "预防性维护",
                            "MainName": "舱体",
                            "ProName": "1.保温材料有无剥离或脱落",
                            "TMPName": null,
                            "AcceptVal": null,
                            "AcceptUnit": null,
                            "TMPId": "02-0006",
                            "TMPSortNum": 6,
                            "ResultSuccess": "合格",
                            "ResultError": "不合格",
                            "ResultOther": null,
                            "DefalultResult": "合格",
                            "Result": null,
                            "Explain": null,
                            "TMPIdOtherOne": "TP-YC0006",
                            "TMPIdOtherTwo": null,
                            "TMPIdOtherOneResult": null,
                            "TMPIdOtherTwoResult": null,
                            "TotalNum": 6
                        }, {
                            "ShowType": 8,
                            "DetcType": 0,
                            "DetcName": "预防性维护",
                            "MainName": "舱体",
                            "ProName": "2.本体、夹套、管道有无损伤、变形、腐蚀",
                            "TMPName": null,
                            "AcceptVal": null,
                            "AcceptUnit": null,
                            "TMPId": "02-0007",
                            "TMPSortNum": 7,
                            "ResultSuccess": "合格",
                            "ResultError": "不合格",
                            "ResultOther": null,
                            "DefalultResult": "合格",
                            "Result": null,
                            "Explain": null,
                            "TMPIdOtherOne": "TP-YC0007",
                            "TMPIdOtherTwo": null,
                            "TMPIdOtherOneResult": null,
                            "TMPIdOtherTwoResult": null,
                            "TotalNum": 6
                        }, {
                            "ShowType": 8,
                            "DetcType": 0,
                            "DetcName": "预防性维护",
                            "MainName": "舱体",
                            "ProName": "3.螺栓及螺帽有无松动、脱落或明显损伤",
                            "TMPName": null,
                            "AcceptVal": null,
                            "AcceptUnit": null,
                            "TMPId": "02-0008",
                            "TMPSortNum": 8,
                            "ResultSuccess": "合格",
                            "ResultError": "不合格",
                            "ResultOther": null,
                            "DefalultResult": "合格",
                            "Result": null,
                            "Explain": null,
                            "TMPIdOtherOne": "TP-YC0008",
                            "TMPIdOtherTwo": null,
                            "TMPIdOtherOneResult": null,
                            "TMPIdOtherTwoResult": null,
                            "TotalNum": 6
                        }, {
                            "ShowType": 8,
                            "DetcType": 0,
                            "DetcName": "预防性维护",
                            "MainName": "舱体",
                            "ProName": "4.基础有无异常沉陷",
                            "TMPName": null,
                            "AcceptVal": null,
                            "AcceptUnit": null,
                            "TMPId": "02-0009",
                            "TMPSortNum": 9,
                            "ResultSuccess": "合格",
                            "ResultError": "不合格",
                            "ResultOther": null,
                            "DefalultResult": "合格",
                            "Result": null,
                            "Explain": null,
                            "TMPIdOtherOne": "TP-YC0009",
                            "TMPIdOtherTwo": null,
                            "TMPIdOtherOneResult": null,
                            "TMPIdOtherTwoResult": null,
                            "TotalNum": 6
                        }, {
                            "ShowType": 8,
                            "DetcType": 0,
                            "DetcName": "预防性维护",
                            "MainName": "舱体",
                            "ProName": "5.垫圈有无损伤、劣化或异位",
                            "TMPName": null,
                            "AcceptVal": null,
                            "AcceptUnit": null,
                            "TMPId": "02-0010",
                            "TMPSortNum": 10,
                            "ResultSuccess": "合格",
                            "ResultError": "不合格",
                            "ResultOther": null,
                            "DefalultResult": "合格",
                            "Result": null,
                            "Explain": null,
                            "TMPIdOtherOne": "TP-YC0010",
                            "TMPIdOtherTwo": null,
                            "TMPIdOtherOneResult": null,
                            "TMPIdOtherTwoResult": null,
                            "TotalNum": 6
                        }, {
                            "ShowType": 8,
                            "DetcType": 0,
                            "DetcName": "预防性维护",
                            "MainName": "舱体",
                            "ProName": "6.盖板及固定组件有无损伤、变形、磨损或腐蚀",
                            "TMPName": null,
                            "AcceptVal": null,
                            "AcceptUnit": null,
                            "TMPId": "02-0011",
                            "TMPSortNum": 11,
                            "ResultSuccess": "合格",
                            "ResultError": "不合格",
                            "ResultOther": null,
                            "DefalultResult": "合格",
                            "Result": null,
                            "Explain": null,
                            "TMPIdOtherOne": "TP-YC0011",
                            "TMPIdOtherTwo": null,
                            "TMPIdOtherOneResult": null,
                            "TMPIdOtherTwoResult": null,
                            "TotalNum": 6
                        }],
                        "BYTMPList3": [{
                            "ShowType": 8,
                            "DetcType": 0,
                            "DetcName": "预防性维护",
                            "MainName": "附属设施",
                            "ProName": "1.管路全线有无油漆脱落或锈蚀",
                            "TMPName": null,
                            "AcceptVal": null,
                            "AcceptUnit": null,
                            "TMPId": "03-0012",
                            "TMPSortNum": 12,
                            "ResultSuccess": "合格",
                            "ResultError": "不合格",
                            "ResultOther": null,
                            "DefalultResult": "合格",
                            "Result": null,
                            "Explain": null,
                            "TMPIdOtherOne": "TP-YC0012",
                            "TMPIdOtherTwo": null,
                            "TMPIdOtherOneResult": null,
                            "TMPIdOtherTwoResult": null,
                            "TotalNum": 4
                        }, {
                            "ShowType": 8,
                            "DetcType": 0,
                            "DetcName": "预防性维护",
                            "MainName": "附属设施",
                            "ProName": "2.管路结合部份有无锈蚀及渗漏、变形",
                            "TMPName": null,
                            "AcceptVal": null,
                            "AcceptUnit": null,
                            "TMPId": "03-0013",
                            "TMPSortNum": 13,
                            "ResultSuccess": "合格",
                            "ResultError": "不合格",
                            "ResultOther": null,
                            "DefalultResult": "合格",
                            "Result": null,
                            "Explain": null,
                            "TMPIdOtherOne": "TP-YC0013",
                            "TMPIdOtherTwo": null,
                            "TMPIdOtherOneResult": null,
                            "TMPIdOtherTwoResult": null,
                            "TotalNum": 4
                        }, {
                            "ShowType": 8,
                            "DetcType": 0,
                            "DetcName": "预防性维护",
                            "MainName": "附属设施",
                            "ProName": "3.有无管路内液体或气体流向标识",
                            "TMPName": null,
                            "AcceptVal": null,
                            "AcceptUnit": null,
                            "TMPId": "03-0014",
                            "TMPSortNum": 14,
                            "ResultSuccess": "合格",
                            "ResultError": "不合格",
                            "ResultOther": null,
                            "DefalultResult": "合格",
                            "Result": null,
                            "Explain": null,
                            "TMPIdOtherOne": "TP-YC0014",
                            "TMPIdOtherTwo": null,
                            "TMPIdOtherOneResult": null,
                            "TMPIdOtherTwoResult": null,
                            "TotalNum": 4
                        }, {
                            "ShowType": 8,
                            "DetcType": 0,
                            "DetcName": "预防性维护",
                            "MainName": "附属设施",
                            "ProName": "4.管路阀门相关装置有无明确标示开关的方向",
                            "TMPName": null,
                            "AcceptVal": null,
                            "AcceptUnit": null,
                            "TMPId": "03-0015",
                            "TMPSortNum": 15,
                            "ResultSuccess": "合格",
                            "ResultError": "不合格",
                            "ResultOther": null,
                            "DefalultResult": "合格",
                            "Result": null,
                            "Explain": null,
                            "TMPIdOtherOne": "TP-YC0015",
                            "TMPIdOtherTwo": null,
                            "TMPIdOtherOneResult": null,
                            "TMPIdOtherTwoResult": null,
                            "TotalNum": 4
                        }],
                        "BYTMPList4": [{
                            "ShowType": 8,
                            "DetcType": 0,
                            "DetcName": "预防性维护",
                            "MainName": "压力表",
                            "ProName": "1.表面玻璃有无模糊破裂及表壳有无损伤",
                            "TMPName": null,
                            "AcceptVal": null,
                            "AcceptUnit": null,
                            "TMPId": "04-0016",
                            "TMPSortNum": 16,
                            "ResultSuccess": "合格",
                            "ResultError": "不合格",
                            "ResultOther": null,
                            "DefalultResult": "合格",
                            "Result": null,
                            "Explain": null,
                            "TMPIdOtherOne": "TP-YC0016",
                            "TMPIdOtherTwo": null,
                            "TMPIdOtherOneResult": null,
                            "TMPIdOtherTwoResult": null,
                            "TotalNum": 4
                        }, {
                            "ShowType": 8,
                            "DetcType": 0,
                            "DetcName": "预防性维护",
                            "MainName": "压力表",
                            "ProName": "2.与本体接合部有无裂痕、腐蚀、渗漏",
                            "TMPName": null,
                            "AcceptVal": null,
                            "AcceptUnit": null,
                            "TMPId": "04-0017",
                            "TMPSortNum": 17,
                            "ResultSuccess": "合格",
                            "ResultError": "不合格",
                            "ResultOther": null,
                            "DefalultResult": "合格",
                            "Result": null,
                            "Explain": null,
                            "TMPIdOtherOne": "TP-YC0017",
                            "TMPIdOtherTwo": null,
                            "TMPIdOtherOneResult": null,
                            "TMPIdOtherTwoResult": null,
                            "TotalNum": 4
                        }, {
                            "ShowType": 8,
                            "DetcType": 0,
                            "DetcName": "预防性维护",
                            "MainName": "压力表",
                            "ProName": "3.试验指针有无归零",
                            "TMPName": null,
                            "AcceptVal": null,
                            "AcceptUnit": null,
                            "TMPId": "04-0018",
                            "TMPSortNum": 18,
                            "ResultSuccess": "合格",
                            "ResultError": "不合格",
                            "ResultOther": null,
                            "DefalultResult": "合格",
                            "Result": null,
                            "Explain": null,
                            "TMPIdOtherOne": "TP-YC0018",
                            "TMPIdOtherTwo": null,
                            "TMPIdOtherOneResult": null,
                            "TMPIdOtherTwoResult": null,
                            "TotalNum": 4
                        }, {
                            "ShowType": 8,
                            "DetcType": 0,
                            "DetcName": "预防性维护",
                            "MainName": "压力表",
                            "ProName": "4.压力表是否在校验周期内",
                            "TMPName": null,
                            "AcceptVal": null,
                            "AcceptUnit": null,
                            "TMPId": "04-0019",
                            "TMPSortNum": 19,
                            "ResultSuccess": "合格",
                            "ResultError": "不合格",
                            "ResultOther": null,
                            "DefalultResult": "合格",
                            "Result": null,
                            "Explain": null,
                            "TMPIdOtherOne": "TP-YC0019",
                            "TMPIdOtherTwo": null,
                            "TMPIdOtherOneResult": null,
                            "TMPIdOtherTwoResult": null,
                            "TotalNum": 4
                        }],
                        "BYTMPList5": [{
                            "ShowType": 8,
                            "DetcType": 0,
                            "DetcName": "预防性维护",
                            "MainName": "仪表",
                            "ProName": "1.表面玻璃有无模糊不清",
                            "TMPName": null,
                            "AcceptVal": null,
                            "AcceptUnit": null,
                            "TMPId": "05-0020",
                            "TMPSortNum": 20,
                            "ResultSuccess": "合格",
                            "ResultError": "不合格",
                            "ResultOther": null,
                            "DefalultResult": "合格",
                            "Result": null,
                            "Explain": null,
                            "TMPIdOtherOne": "TP-YC0020",
                            "TMPIdOtherTwo": null,
                            "TMPIdOtherOneResult": null,
                            "TMPIdOtherTwoResult": null,
                            "TotalNum": 3
                        }, {
                            "ShowType": 8,
                            "DetcType": 0,
                            "DetcName": "预防性维护",
                            "MainName": "仪表",
                            "ProName": "2.指针有无掉落弯曲",
                            "TMPName": null,
                            "AcceptVal": null,
                            "AcceptUnit": null,
                            "TMPId": "05-0021",
                            "TMPSortNum": 21,
                            "ResultSuccess": "合格",
                            "ResultError": "不合格",
                            "ResultOther": null,
                            "DefalultResult": "合格",
                            "Result": null,
                            "Explain": null,
                            "TMPIdOtherOne": "TP-YC0021",
                            "TMPIdOtherTwo": null,
                            "TMPIdOtherOneResult": null,
                            "TMPIdOtherTwoResult": null,
                            "TotalNum": 3
                        }, {
                            "ShowType": 8,
                            "DetcType": 0,
                            "DetcName": "预防性维护",
                            "MainName": "仪表",
                            "ProName": "3.刻度指示板是否正常",
                            "TMPName": null,
                            "AcceptVal": null,
                            "AcceptUnit": null,
                            "TMPId": "05-0022",
                            "TMPSortNum": 22,
                            "ResultSuccess": "合格",
                            "ResultError": "不合格",
                            "ResultOther": null,
                            "DefalultResult": "合格",
                            "Result": null,
                            "Explain": null,
                            "TMPIdOtherOne": "TP-YC0022",
                            "TMPIdOtherTwo": null,
                            "TMPIdOtherOneResult": null,
                            "TMPIdOtherTwoResult": null,
                            "TotalNum": 3
                        }],
                        "BYTMPList6": [{
                            "ShowType": 8,
                            "DetcType": 0,
                            "DetcName": "预防性维护",
                            "MainName": "排水（气）阀",
                            "ProName": "1.阀及管道有无泄漏",
                            "TMPName": null,
                            "AcceptVal": null,
                            "AcceptUnit": null,
                            "TMPId": "06-0023",
                            "TMPSortNum": 23,
                            "ResultSuccess": "合格",
                            "ResultError": "不合格",
                            "ResultOther": null,
                            "DefalultResult": "合格",
                            "Result": null,
                            "Explain": null,
                            "TMPIdOtherOne": "TP-YC0023",
                            "TMPIdOtherTwo": null,
                            "TMPIdOtherOneResult": null,
                            "TMPIdOtherTwoResult": null,
                            "TotalNum": 2
                        }, {
                            "ShowType": 8,
                            "DetcType": 0,
                            "DetcName": "预防性维护",
                            "MainName": "排水（气）阀",
                            "ProName": "2.布局是否合理，对周围环境有无污染",
                            "TMPName": null,
                            "AcceptVal": null,
                            "AcceptUnit": null,
                            "TMPId": "06-0024",
                            "TMPSortNum": 24,
                            "ResultSuccess": "合格",
                            "ResultError": "不合格",
                            "ResultOther": null,
                            "DefalultResult": "合格",
                            "Result": null,
                            "Explain": null,
                            "TMPIdOtherOne": "TP-YC0024",
                            "TMPIdOtherTwo": null,
                            "TMPIdOtherOneResult": null,
                            "TMPIdOtherTwoResult": null,
                            "TotalNum": 2
                        }],
                        "BYTMPList7": [{
                            "ShowType": 8,
                            "DetcType": 0,
                            "DetcName": "预防性维护",
                            "MainName": "安全阀",
                            "ProName": "1.安装是否正常，有无渗漏",
                            "TMPName": null,
                            "AcceptVal": null,
                            "AcceptUnit": null,
                            "TMPId": "07-0025",
                            "TMPSortNum": 25,
                            "ResultSuccess": "合格",
                            "ResultError": "不合格",
                            "ResultOther": null,
                            "DefalultResult": "合格",
                            "Result": null,
                            "Explain": null,
                            "TMPIdOtherOne": "TP-YC0025",
                            "TMPIdOtherTwo": null,
                            "TMPIdOtherOneResult": null,
                            "TMPIdOtherTwoResult": null,
                            "TotalNum": 3
                        }, {
                            "ShowType": 8,
                            "DetcType": 0,
                            "DetcName": "预防性维护",
                            "MainName": "安全阀",
                            "ProName": "2.安全阀是否在规定之压力内开启",
                            "TMPName": null,
                            "AcceptVal": null,
                            "AcceptUnit": null,
                            "TMPId": "07-0026",
                            "TMPSortNum": 26,
                            "ResultSuccess": "合格",
                            "ResultError": "不合格",
                            "ResultOther": null,
                            "DefalultResult": "合格",
                            "Result": null,
                            "Explain": null,
                            "TMPIdOtherOne": "TP-YC0026",
                            "TMPIdOtherTwo": null,
                            "TMPIdOtherOneResult": null,
                            "TMPIdOtherTwoResult": null,
                            "TotalNum": 3
                        }, {
                            "ShowType": 8,
                            "DetcType": 0,
                            "DetcName": "预防性维护",
                            "MainName": "安全阀",
                            "ProName": "3.安全阀每年至少校验一次",
                            "TMPName": null,
                            "AcceptVal": null,
                            "AcceptUnit": null,
                            "TMPId": "07-0027",
                            "TMPSortNum": 27,
                            "ResultSuccess": "合格",
                            "ResultError": "不合格",
                            "ResultOther": null,
                            "DefalultResult": "合格",
                            "Result": null,
                            "Explain": null,
                            "TMPIdOtherOne": "TP-YC0027",
                            "TMPIdOtherTwo": null,
                            "TMPIdOtherOneResult": null,
                            "TMPIdOtherTwoResult": null,
                            "TotalNum": 3
                        }],
                        "BYTMPList8": [{
                            "ShowType": 8,
                            "DetcType": 0,
                            "DetcName": "预防性维护",
                            "MainName": "周围环境",
                            "ProName": "1.压力容器四周有无堆放杂物阻碍通路",
                            "TMPName": null,
                            "AcceptVal": null,
                            "AcceptUnit": null,
                            "TMPId": "08-0028",
                            "TMPSortNum": 28,
                            "ResultSuccess": "合格",
                            "ResultError": "不合格",
                            "ResultOther": null,
                            "DefalultResult": "合格",
                            "Result": null,
                            "Explain": null,
                            "TMPIdOtherOne": "TP-YC0028",
                            "TMPIdOtherTwo": null,
                            "TMPIdOtherOneResult": null,
                            "TMPIdOtherTwoResult": null,
                            "TotalNum": 2
                        }, {
                            "ShowType": 8,
                            "DetcType": 0,
                            "DetcName": "预防性维护",
                            "MainName": "周围环境",
                            "ProName": "2.压力容器有无警示标识及检验合格证明",
                            "TMPName": null,
                            "AcceptVal": null,
                            "AcceptUnit": null,
                            "TMPId": "08-0029",
                            "TMPSortNum": 29,
                            "ResultSuccess": "合格",
                            "ResultError": "不合格",
                            "ResultOther": null,
                            "DefalultResult": "合格",
                            "Result": null,
                            "Explain": null,
                            "TMPIdOtherOne": "TP-YC0029",
                            "TMPIdOtherTwo": null,
                            "TMPIdOtherOneResult": null,
                            "TMPIdOtherTwoResult": null,
                            "TotalNum": 2
                        }],
                        "BYTMPList9": [{
                            "ShowType": 8,
                            "DetcType": 0,
                            "DetcName": "预防性维护",
                            "MainName": "空调系统",
                            "ProName": "室内、外机",
                            "TMPName": null,
                            "AcceptVal": null,
                            "AcceptUnit": null,
                            "TMPId": "09-0030",
                            "TMPSortNum": 30,
                            "ResultSuccess": "合格",
                            "ResultError": "不合格",
                            "ResultOther": null,
                            "DefalultResult": "合格",
                            "Result": null,
                            "Explain": null,
                            "TMPIdOtherOne": "TP-YC0030",
                            "TMPIdOtherTwo": null,
                            "TMPIdOtherOneResult": null,
                            "TMPIdOtherTwoResult": null,
                            "TotalNum": 1
                        }],
                        "BYTMPList10": [{
                            "ShowType": 8,
                            "DetcType": 0,
                            "DetcName": "预防性维护",
                            "MainName": "电气线路",
                            "ProName": "机柜、控制台、线路",
                            "TMPName": null,
                            "AcceptVal": null,
                            "AcceptUnit": null,
                            "TMPId": "10-0031",
                            "TMPSortNum": 31,
                            "ResultSuccess": "合格",
                            "ResultError": "不合格",
                            "ResultOther": null,
                            "DefalultResult": "合格",
                            "Result": null,
                            "Explain": null,
                            "TMPIdOtherOne": "TP-YC0031",
                            "TMPIdOtherTwo": null,
                            "TMPIdOtherOneResult": null,
                            "TMPIdOtherTwoResult": null,
                            "TotalNum": 1
                        }],
                    }
                    const newJson = []
                    for (let x in HttpList) {
                        //  为了优化算法速度 将切换检测结果时直接修改DefalultResult字段
                        newJson.push({
                            title: HttpList[x][0].MainName,
                            list: HttpList[x]
                        })
                    }
                    this.list = newJson
                    console.log(newJson)
                    reject()
                })
            },
            //  日历
            onConfirm(date) {
                const _Date = `${date.getFullYear()}-${date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}-${date.getDate() < 9 ? '0' + date.getDate() : date.getDate()}`
                this.setData.explain = _Date
                this.showCalendar = false
            },
            //  提交
            upload() {
                console.log(this.list2)
                // console.log(this.list,'\n',this.list2,'\n',this.uploadImg,'\n',this.calibration,'\n',this.actuality)
            }
        },
    }
</script>

<style scoped lang="scss">
    .QualityTest{
        /*transform: rotate(90deg);*/
        /*width: 100vh;*/
        /*min-height: 750px;*/
        background: #F0F4F7;
        /*transform-origin: left top;*/
        /*margin-left: 100%;*/
        padding-bottom: 20px;
        padding-top: 48px;
    }
    .QualityTestHeader{
        width: 100vw;
        height: 48px;
        text-align: center;
        line-height: 48px;
        position: fixed;
        font-size: 18px;
        color: #fff;
        background: $THEME-COLOR;
        top:0;
        z-index: 10;
        img{
            width: 23px;
            position: absolute;
            left: 2px;
            top: 2px;
            padding: 10px
        }
    }
    .infoBox{
        width: 96%;
        margin: 10px auto;
        padding: 10px 20px;
        .title{
            font-size: 12px;
            margin-bottom: 7px;
        }
    }
    .info{
        display: flex;
        &>div{
            flex:1;
            text-align: left;
            font-size: 12px;
            color: #999;
            &:first-child{
                flex: 0.35
            }
            p{
                margin-top: 5px;
                margin-bottom: 9px;
                width: 95%;
            }
            span{
                color: $TEXT-DARK-COLOR;
            }
            img{
                width: 50px;
                height: 60px;
                border-radius: 1px;
            }
        }
    }
    .quality{
        padding: 0;
    }
    .tableTitle{
        display: flex;
        height: 33px;
        line-height: 33px;
        border-bottom: 1px solid #e8e8e8;
        font-weight: bold;
        div{
            flex:1;
            font-size: 12px;
            color: $TEXT-DARK-COLOR;
            &:first-child{
                text-indent: 34px;
            }
            &:nth-child(3) {
                text-align: center;
                text-indent: 10px;
            }
            &:last-child{
                text-indent: 30px;
            }
        }
    }
    .tableItems{
        display: flex;
        font-size: 12px;
        color: #333;
        font-weight: bold;
        .tableItemsLeftBox{
            width: 100px;
            border-right: 1px solid #e8e8e8;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 1px solid #e8e8e8;
        }
        &:last-child .tableItemsLeftBox,&:last-child .tableItemsRightBox>div, &:last-child .tableItemsRightBox2{
            border-bottom: none;
        }
        .tableItemsRightBox{
            flex: 1;
            &>div{
                display: flex;
                border-bottom: 1px solid #e8e8e8;
                &>div{
                    &:first-child{
                        width: 240px;
                        padding: 19px 21px 12px;
                        text-align: left;
                    }
                    &:nth-child(2) {
                        flex: 0.8;
                        align-items: center;
                        justify-content: center;
                        display: flex;
                        div{
                            width: 47px;
                            height: 25px;
                            background: #F3F3F3;
                            border-radius: 2px;
                            color: #858585;
                            font-size: 8px;
                            line-height: 25px;
                            text-align: center;
                            font-weight: 400;
                            margin-right: 14px;
                            &:last-child{
                                margin-right: 0;
                            }
                        }
                        .action{
                            background: $THEME-COLOR;
                            color: #fff;
                            border-color: rgba(0,0,0,0);
                        }
                    }
                    &:last-child{
                        flex: 1;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        input{
                            width: 115px;
                            height: 25px;
                            background: #f3f3f3;
                            border-radius: 4px;
                            font-size: 10px;
                            font-weight: 400;
                            text-indent: 12px;
                            ::-webkit-input-placeholder{
                                color: #858585;
                            }
                        }
                    }
                }
            }
        }
        .tableItemsRightBox2{
            flex: 1;
            padding: 10px;
            border-bottom: 1px solid #e8e8e8;
            &>input{
                width: 95%;
                border: 1px solid #e8e8e8;
                margin: auto;
                border-radius: 4px;
                height: 40px;
                background: #f3f3f3;
                font-size: 10px;
                text-indent: 10px;
                font-weight: 400;
            }
        }
        .checkbox-group{
            padding-bottom: 0;
            &>div {
                display: flex;
                flex-wrap: wrap;
                &>div{
                    margin-right: 25px;
                    margin-bottom: 10px;
                }
            }
        }
        .checkbox{
            &>div{
                display: flex;
                &>div{
                    margin-right: 20px;
                }
            }
        }
        .input-group{
            display: flex;
            &>div{
                flex: 1;
                text-align: center;
                input,.calenderText{
                    width: 80%;
                    text-align: center;
                    border: 1px solid #e8e8e8;
                    margin: auto;
                    margin-top: 10px;
                    border-radius: 4px;
                    height: 25px;
                    background: #f3f3f3;
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 25px;
                    padding:0;
                    ::-webkit-input-placeholder{
                        color: #858585;
                    }
                    &:disabled{
                        background-color: #f3f3f3;
                        color: $TEXT-DARK-COLOR;
                        opacity: 1;
                    }
                }
            }
        }
    }
    .lastBox{
        padding: 0 10px;
        span{
            color: #F4F4F4!important;
        }
    }
    .imgBox{
        width: 96%;
        margin: auto;
    }
    .footer{
        width: 96%;
        margin: auto;
        height: 40px;
        background: $THEME-COLOR;
        border-radius: 4px;
        color: #fff;
        font-size: 12px;
        line-height: 40px;
        text-align: center;
    }
</style>
