<template>
    <Box title="派工">
        <van-tabs
            swipeable
            background="rgba(0,0,0,0)"
            line-width="20px"
            v-model="tabsIndex"
        >
            <van-tab title="未派工">
                <div class="tagsBox">
                    <LoadingFooter
                        v-model="NotDispatch.loading"
                        :finished="NotDispatch.finished"
                        @load="onLoad_NotDispatch"
                    >
                        <div class="commonItems" v-for="item in NotDispatchList" @click="$router.push({name: 'Dispatch', params: {item}})">
                            <div>
                                <img :src="item.Img"/>
                                <div>
                                    <p class="ellipsis">{{item.EquName}}</p>
                                    <div>
                                        <div>
                                            <p>资产编号：</p>
                                            <p>设备型号：</p>
                                            <p>使用科室：</p>
                                        </div>
                                        <div>
                                            <p class="ellipsis">{{item.EquCode}}</p>
                                            <p class="ellipsis">{{item.EquType}}</p>
                                            <p class="ellipsis">{{item.DepartmentName}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>去派工</div>
                                </div>
                            </div>
                            <div>
                                <span>启用日期</span>
                                <span>2019-04-15</span>
                            </div>
                        </div>
                    </LoadingFooter>
                </div>
            </van-tab>
            <van-tab title="已派工">
                <div class="tagsBox">
                    <LoadingFooter
                        v-model="Dispatch.loading"
                        :finished="Dispatch.finished"
                        @load="onLoad_Dispatch"
                    >
                        <div class="commonItems" v-for="item in DispatchList">
                            <div>
                                <img :src="item.Img"/>
                                <div>
                                    <p class="ellipsis">{{item.EquName}}</p>
                                    <div>
                                        <div>
                                            <p>资产编号：</p>
                                            <p>设备型号：</p>
                                            <p>报修科室：</p>
                                            <p>报修人员</p>
                                        </div>
                                        <div>
                                            <p class="ellipsis">{{item.EquCode}}</p>
                                            <p class="ellipsis">{{item.EquType}}</p>
                                            <p class="ellipsis">{{item.DepartmentName}}</p>
                                            <p class="ellipsis">{{item.RepairPeople}}</p>
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                            <div>
                                <span>启用日期</span>
                                <span>2019-04-15</span>
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
                NotDispatch: {
                    loading: false,
                    finished: false
                },
                Dispatch: {
                    loading: false,
                    finished: false
                },
                "NotDispatchList": [{
                    "RepairOrder": "202008200002",
                    "EquCode": "01020100008",
                    "EquName": "半导体激光手术刀",
                    "EquNumber": "",
                    "RepairStatus": "1",
                    "DepartmentId": "1001",
                    "DepartmentName": "宣传处",
                    "RepairPeople": "涛涛",
                    "RepairDate": "2020-08-20",
                    "FaultDescribe": "",
                    "LineNumber": "1",
                    "AssignRepairPeople": null,
                    "ReResult": null,
                    "RepairFee": "0.0",
                    "PartsFee": "0.0"
                }, {
                    "RepairOrder": "202007170009",
                    "EquCode": "06090300019",
                    "EquName": "1.5T核磁共振系统",
                    "EquNumber": "",
                    "RepairStatus": "1",
                    "DepartmentId": "1003",
                    "DepartmentName": "院长办公室",
                    "RepairPeople": "涛涛",
                    "RepairDate": "2020-07-17",
                    "FaultDescribe": "",
                    "LineNumber": "1",
                    "AssignRepairPeople": null,
                    "ReResult": null,
                    "RepairFee": "0.0",
                    "PartsFee": "0.0"
                }, {
                    "RepairOrder": "202007170008",
                    "EquCode": "06090300020",
                    "EquName": "1.5T核磁共振系统",
                    "EquNumber": "",
                    "RepairStatus": "1",
                    "DepartmentId": "1003",
                    "DepartmentName": "院长办公室",
                    "RepairPeople": "涛涛",
                    "RepairDate": "2020-07-17",
                    "FaultDescribe": "",
                    "LineNumber": "1",
                    "AssignRepairPeople": null,
                    "ReResult": null,
                    "RepairFee": "0.0",
                    "PartsFee": "0.0"
                }, {
                    "RepairOrder": "202007170006",
                    "EquCode": "35020100035",
                    "EquName": "身份证阅读器",
                    "EquNumber": null,
                    "RepairStatus": "1",
                    "DepartmentId": "1012",
                    "DepartmentName": "财务处",
                    "RepairPeople": "admin",
                    "RepairDate": "2020-07-17",
                    "FaultDescribe": "",
                    "LineNumber": "1",
                    "AssignRepairPeople": null,
                    "ReResult": null,
                    "RepairFee": "0.0",
                    "PartsFee": "0.0"
                }, {
                    "RepairOrder": "202007170005",
                    "EquCode": "35020100036",
                    "EquName": "身份证阅读器",
                    "EquNumber": null,
                    "RepairStatus": "1",
                    "DepartmentId": "1012",
                    "DepartmentName": "财务处",
                    "RepairPeople": "admin",
                    "RepairDate": "2020-07-17",
                    "FaultDescribe": "",
                    "LineNumber": "1",
                    "AssignRepairPeople": null,
                    "ReResult": null,
                    "RepairFee": "0.0",
                    "PartsFee": "0.0"
                }, {
                    "RepairOrder": "202007170001",
                    "EquCode": "06090300016",
                    "EquName": "1.5T核磁共振系统",
                    "EquNumber": "",
                    "RepairStatus": "1",
                    "DepartmentId": "1002",
                    "DepartmentName": "科研及教学处",
                    "RepairPeople": "涛涛",
                    "RepairDate": "2020-07-17",
                    "FaultDescribe": "",
                    "LineNumber": "1",
                    "AssignRepairPeople": null,
                    "ReResult": null,
                    "RepairFee": "0.0",
                    "PartsFee": "0.0"
                }],
                "DispatchList": [{
                    "RepairOrder": "202008250003",
                    "EquCode": "06090300002",
                    "EquName": "1.5T核磁共振系统",
                    "EquNumber": "2508001010",
                    "RepairStatus": "2",
                    "DepartmentId": "4015",
                    "DepartmentName": "X线诊断一诊室(放射线科）",
                    "RepairPeople": "涛涛",
                    "RepairDate": "2020-08-25",
                    "FaultDescribe": "",
                    "LineNumber": "1",
                    "AssignRepairPeople": "taotao",
                    "ReResult": null,
                    "RepairFee": "0.0",
                    "PartsFee": "0.0"
                }, {
                    "RepairOrder": "202008250002",
                    "EquCode": "06090300002",
                    "EquName": "1.5T核磁共振系统",
                    "EquNumber": "2508001010",
                    "RepairStatus": "4",
                    "DepartmentId": "4015",
                    "DepartmentName": "X线诊断一诊室(放射线科）",
                    "RepairPeople": "涛涛",
                    "RepairDate": "2020-08-25",
                    "FaultDescribe": "",
                    "LineNumber": "1",
                    "AssignRepairPeople": "taotao",
                    "ReResult": "1",
                    "RepairFee": "0.0",
                    "PartsFee": "0.0"
                }, {
                    "RepairOrder": "202008250001",
                    "EquCode": "06090300002",
                    "EquName": "1.5T核磁共振系统",
                    "EquNumber": "2508001010",
                    "RepairStatus": "4",
                    "DepartmentId": "4015",
                    "DepartmentName": "X线诊断一诊室(放射线科）",
                    "RepairPeople": "涛涛",
                    "RepairDate": "2020-08-25",
                    "FaultDescribe": "",
                    "LineNumber": "1",
                    "AssignRepairPeople": "taotao",
                    "ReResult": "12",
                    "RepairFee": "0.0",
                    "PartsFee": "0.0"
                }, {
                    "RepairOrder": "202008200001",
                    "EquCode": "01020100008",
                    "EquName": "半导体激光手术刀",
                    "EquNumber": "",
                    "RepairStatus": "9",
                    "DepartmentId": "1001",
                    "DepartmentName": "宣传处",
                    "RepairPeople": "涛涛",
                    "RepairDate": "2020-08-20",
                    "FaultDescribe": "",
                    "LineNumber": "1",
                    "AssignRepairPeople": null,
                    "ReResult": null,
                    "RepairFee": "0.0",
                    "PartsFee": "0.0"
                }, {
                    "RepairOrder": "202008130004",
                    "EquCode": "01020100008",
                    "EquName": "半导体激光手术刀",
                    "EquNumber": "",
                    "RepairStatus": "9",
                    "DepartmentId": "1001",
                    "DepartmentName": "宣传处",
                    "RepairPeople": "涛涛",
                    "RepairDate": "2020-08-13",
                    "FaultDescribe": "",
                    "LineNumber": "1",
                    "AssignRepairPeople": null,
                    "ReResult": null,
                    "RepairFee": "0.0",
                    "PartsFee": "0.0"
                }, {
                    "RepairOrder": "202008130003",
                    "EquCode": "35020100024",
                    "EquName": "二代身份证阅读器",
                    "EquNumber": null,
                    "RepairStatus": "6",
                    "DepartmentId": "3010",
                    "DepartmentName": "收费处（门诊）",
                    "RepairPeople": "涛涛",
                    "RepairDate": "2020-08-13",
                    "FaultDescribe": "",
                    "LineNumber": "1",
                    "AssignRepairPeople": "1     ",
                    "ReResult": null,
                    "RepairFee": "0.0",
                    "PartsFee": "0.0"
                }, {
                    "RepairOrder": "202008130002",
                    "EquCode": "08010200012",
                    "EquName": "便携式呼吸机",
                    "EquNumber": null,
                    "RepairStatus": "8",
                    "DepartmentId": "2026",
                    "DepartmentName": "急诊医学科门诊三诊室（急救中心）",
                    "RepairPeople": "涛涛",
                    "RepairDate": "2020-08-13",
                    "FaultDescribe": "",
                    "LineNumber": "1",
                    "AssignRepairPeople": "taotao",
                    "ReResult": "110",
                    "RepairFee": "0.0",
                    "PartsFee": "150.0"
                }, {
                    "RepairOrder": "202008130001",
                    "EquCode": "35020100015",
                    "EquName": "阅读器",
                    "EquNumber": null,
                    "RepairStatus": "6",
                    "DepartmentId": "3007",
                    "DepartmentName": "收费处（住院）",
                    "RepairPeople": "涛涛",
                    "RepairDate": "2020-08-13",
                    "FaultDescribe": "",
                    "LineNumber": "1",
                    "AssignRepairPeople": "1     ",
                    "ReResult": null,
                    "RepairFee": "0.0",
                    "PartsFee": "0.0"
                }, {
                    "RepairOrder": "202008110001",
                    "EquCode": "01010000001",
                    "EquName": "强生超声刀",
                    "EquNumber": "",
                    "RepairStatus": "8",
                    "DepartmentId": "1002",
                    "DepartmentName": "科研及教学处",
                    "RepairPeople": null,
                    "RepairDate": "2020-08-11",
                    "FaultDescribe": "无法开机！",
                    "LineNumber": "1",
                    "AssignRepairPeople": null,
                    "ReResult": "10",
                    "RepairFee": "2000.0",
                    "PartsFee": "0.0"
                }, {
                    "RepairOrder": "202008100008",
                    "EquCode": "35020100027",
                    "EquName": "二代身份证阅读器",
                    "EquNumber": null,
                    "RepairStatus": "5",
                    "DepartmentId": "3010",
                    "DepartmentName": "收费处（门诊）",
                    "RepairPeople": "admin",
                    "RepairDate": "2020-08-10",
                    "FaultDescribe": "",
                    "LineNumber": "1",
                    "AssignRepairPeople": "",
                    "ReResult": "11111",
                    "RepairFee": "2000.0",
                    "PartsFee": "0.0"
                }],
            }
        },
        methods: {
            onLoad_NotDispatch() {
                setTimeout(() => {
                    this.NotDispatch = {
                        loading: false,
                        finished: true
                    }
                },1000)
            },
            onLoad_Dispatch() {
                setTimeout(() => {
                    this.Dispatch = {
                        loading: false,
                        finished: true
                    }
                },1000)
            }
        }
    }
</script>

<style scoped lang="scss">
    .tagsBox{
        margin-top: 120px;
    }
</style>
