<template>
    <Box title="我的审批">
        <van-tabs
            swipeable
            background="rgba(0,0,0,0)"
            line-width="20px"
            v-model="tabsIndex"
            ref="tabs"
        >
            <van-tab title="待我审批">
                <div class="tagsBox">
                    <LoadingFooter
                        v-model="ListConfig1.loading"
                        :finished="ListConfig1.finished"
                        @load="onLoad1"
                    >
                        <div class="commonItems" v-for="item in List1" @click="$router.push({name: 'Examine', params: {item}})">
                            <div>
                                <img :src="item.Img"/>
                                <div>
                                    <p class="ellipsis">{{item.EquName}}</p>
                                    <div>
                                        <div>
                                            <p>资产编号：</p>
                                            <p>维修编号：</p>
                                            <p>报修科室：</p>
                                            <p>报修人员：</p>
                                            <p>维修费用：</p>
                                        </div>
                                        <div>
                                            <p class="ellipsis">{{item.AssetsId}}</p>
                                            <p class="ellipsis">{{item.RepairId}}</p>
                                            <p class="ellipsis">{{item.DepartmentName}}</p>
                                            <p class="ellipsis">{{item.RepairUserName}}</p>
                                            <p class="ellipsis">{{item.RepairCost}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>去审批</div>
                                </div>
                            </div>
                            <div>
                                <span>启用日期</span>
                                <span>{{item.RepairDate}}</span>
                            </div>
                        </div>
                    </LoadingFooter>
                </div>
            </van-tab>
            <van-tab title="我已审批">
                <div class="tagsBox">
                    <LoadingFooter
                        v-model="ListConfig2.loading"
                        :finished="ListConfig2.finished"
                        @load="onLoad2"
                    >
                        <div class="commonItems" v-for="item in List2">
                            <div>
                                <img :src="item.Img"/>
                                <div>
                                    <p class="ellipsis">{{item.EquName}}</p>
                                    <div>
                                        <div>
                                            <p>资产编号：</p>
                                            <p>维修编号：</p>
                                            <p>报修科室：</p>
                                            <p>报修人员：</p>
                                            <p>维修费用：</p>
                                        </div>
                                        <div>
                                            <p class="ellipsis">{{item.AssetsId}}</p>
                                            <p class="ellipsis">{{item.RepairId}}</p>
                                            <p class="ellipsis">{{item.DepartmentName}}</p>
                                            <p class="ellipsis">{{item.RepairUserName}}</p>
                                            <p class="ellipsis">{{item.RepairCost}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                            <div>
                                <span>启用日期</span>
                                <span>{{item.RepairDate}}</span>
                            </div>
                        </div>
                    </LoadingFooter>
                </div>
            </van-tab>
        </van-tabs>
    </Box>
</template>

<script>
    import Box from '../../components/commonBox/commonBox'
    import {Tab, Tabs} from 'vant'
    import LoadingFooter from '../../components/loadingFooter/loadingFooter'
    export default {
        name: 'DispatchList',
        components: {
            Box,
            LoadingFooter,
            [Tab.name]: Tab,
            [Tabs.name]: Tabs,
        },
        data() {
            return {
                tabsIndex: 0,
                ListConfig1: {
                    loading: false,
                    finished: false
                },
                ListConfig2: {
                    loading: false,
                    finished: false
                },
                "List1": [{
                    "AssetsId": "35020100084",
                    "PartsName": "阅读器",
                    "RepairId": "202004160002",
                    "DepartmentId": "1016",
                    "DepartmentName": "在库",
                    "RepairUserId": "taotao",
                    "RepairUserName": "涛涛",
                    "RepairCost": null,
                    "ApprovalState": "待我审批"
                }, {
                    "AssetsId": "08010200013",
                    "PartsName": "便携式呼吸机",
                    "RepairId": "202003240004",
                    "DepartmentId": "2026",
                    "DepartmentName": "急诊医学科门诊三诊室（急救中心）",
                    "RepairUserId": "taotao",
                    "RepairUserName": "涛涛",
                    "RepairCost": null,
                    "ApprovalState": "待我审批"
                }, {
                    "AssetsId": "35030200008",
                    "PartsName": "机房改造配件",
                    "RepairId": "202003240002",
                    "DepartmentId": "1004",
                    "DepartmentName": "信息网络中心",
                    "RepairUserId": "taotao",
                    "RepairUserName": "涛涛",
                    "RepairCost": null,
                    "ApprovalState": "待我审批"
                }, {
                    "AssetsId": "35020100085",
                    "PartsName": "阅读器",
                    "RepairId": "202003300002",
                    "DepartmentId": "1016",
                    "DepartmentName": "在库",
                    "RepairUserId": "999999",
                    "RepairUserName": "管理员",
                    "RepairCost": "0.0",
                    "ApprovalState": "待我审批"
                }, {
                    "AssetsId": "35020100085",
                    "PartsName": "阅读器",
                    "RepairId": "202003300002",
                    "DepartmentId": "1016",
                    "DepartmentName": "在库",
                    "RepairUserId": "999999",
                    "RepairUserName": "管理员",
                    "RepairCost": "0.0",
                    "ApprovalState": "待我审批"
                }, {
                    "AssetsId": "35020100085",
                    "PartsName": "阅读器",
                    "RepairId": "202003300002",
                    "DepartmentId": "1016",
                    "DepartmentName": "在库",
                    "RepairUserId": "999999",
                    "RepairUserName": "管理员",
                    "RepairCost": "0.0",
                    "ApprovalState": "待我审批"
                }, {
                    "AssetsId": "18020100002",
                    "PartsName": "胎心监护仪【报修地址】",
                    "RepairId": "202006120004",
                    "DepartmentId": "2002",
                    "DepartmentName": "产科病房一病区",
                    "RepairUserId": "taotao",
                    "RepairUserName": "涛涛",
                    "RepairCost": "5000.0",
                    "ApprovalState": "待我审批"
                }, {
                    "AssetsId": "35020100023",
                    "PartsName": "二代身份证阅读器",
                    "RepairId": "202007300001",
                    "DepartmentId": "3010",
                    "DepartmentName": "收费处（门诊）",
                    "RepairUserId": "taotao",
                    "RepairUserName": "涛涛",
                    "RepairCost": "5000.0",
                    "ApprovalState": "待我审批"
                }, {
                    "AssetsId": "34070100018",
                    "PartsName": "监控摄像系统",
                    "RepairId": "202008100001",
                    "DepartmentId": "2011",
                    "DepartmentName": "急诊医学科病房一病区（急诊内科）",
                    "RepairUserId": "taotao",
                    "RepairUserName": "涛涛",
                    "RepairCost": "5000.0",
                    "ApprovalState": "待我审批"
                }, {
                    "AssetsId": "14060700048",
                    "PartsName": "智能呼吸排痰系统",
                    "RepairId": "202008100002",
                    "DepartmentId": "2065",
                    "DepartmentName": "感染性疾病科",
                    "RepairUserId": "taotao",
                    "RepairUserName": "涛涛",
                    "RepairCost": "2000.0",
                    "ApprovalState": "待我审批"
                }, {
                    "AssetsId": "08061000004",
                    "PartsName": "简易呼吸器",
                    "RepairId": "202008100003",
                    "DepartmentId": "1024",
                    "DepartmentName": "应急设备库(设备科急救和生命支持设备）",
                    "RepairUserId": "taotao",
                    "RepairUserName": "涛涛",
                    "RepairCost": "3000.0",
                    "ApprovalState": "待我审批"
                }, {
                    "AssetsId": "08010200012",
                    "PartsName": "便携式呼吸机",
                    "RepairId": "202008130002",
                    "DepartmentId": "2026",
                    "DepartmentName": "急诊医学科门诊三诊室（急救中心）",
                    "RepairUserId": "taotao",
                    "RepairUserName": "涛涛",
                    "RepairCost": "150.0",
                    "ApprovalState": "待我审批"
                }, {
                    "AssetsId": "35020100032",
                    "PartsName": "身份证阅读器",
                    "RepairId": "202008100004",
                    "DepartmentId": "1012",
                    "DepartmentName": "财务处",
                    "RepairUserId": "taotao",
                    "RepairUserName": "涛涛",
                    "RepairCost": "20000.0",
                    "ApprovalState": "待我审批"
                }],
                "List2": [{
                    "AssetsId": "01010100015",
                    "PartsName": "强生超声刀",
                    "RepairId": "202008050003",
                    "DepartmentId": "1002",
                    "DepartmentName": "科研及教学处",
                    "RepairUserId": "taotao",
                    "RepairUserName": "涛涛",
                    "RepairCost": "10000.0",
                    "ApprovalState": "审批完成"
                }, {
                    "AssetsId": "06020100007",
                    "PartsName": "H3C无线AP（病房无线医疗使用）",
                    "RepairId": "202008050004",
                    "DepartmentId": "1004",
                    "DepartmentName": "信息网络中心",
                    "RepairUserId": "taotao",
                    "RepairUserName": "涛涛",
                    "RepairCost": "5000.0",
                    "ApprovalState": null
                }, {
                    "AssetsId": "35020100027",
                    "PartsName": "二代身份证阅读器",
                    "RepairId": "202008100008",
                    "DepartmentId": "3010",
                    "DepartmentName": "收费处（门诊）",
                    "RepairUserId": "admin",
                    "RepairUserName": "admin",
                    "RepairCost": "2000.0",
                    "ApprovalState": "审批完成"
                }, {
                    "AssetsId": "35030200010",
                    "PartsName": "电梯安装工程款",
                    "RepairId": "202003230004",
                    "DepartmentId": "1007",
                    "DepartmentName": "医学工程管理处",
                    "RepairUserId": "taotao",
                    "RepairUserName": "涛涛",
                    "RepairCost": "6000.0",
                    "ApprovalState": null
                }],
            }
        },
        methods: {
            onLoad1() {
                setTimeout(() => {
                    this.ListConfig1 = {
                        loading: false,
                        finished: true
                    }
                },1000)
            },
            onLoad2() {
                setTimeout(() => {
                    this.ListConfig2 = {
                        loading: false,
                        finished: true
                    }
                },1000)
            }
        },
        watch: {
            $route(to,from){
                if (from.name === 'Home') this.$refs.tabs.scrollTo(0)
            }
        }
    }
</script>

<style scoped lang="scss">
    .tagsBox{
        margin-top: 120px;
    }
</style>
