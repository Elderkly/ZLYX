<template>
    <Box title="维修进度">
        <LoadingFooter
            v-model="loading"
            :finished="finished"
            @load="onLoad"
        >
            <div class="menu">
                <Field title="资产名称" placeholder="请输入编号或者名称" @onMessage="value => search.params1 = value"/>
                <Field title="产品单号" placeholder="请输入" @onMessage="value => search.params2 = value"/>
                <Field title="维修状态" placeholder="请选择" :data="['全部','报修中','已响应','已接单(维修处理中)','审批中','审批未通过','已维修未验收','已验收','已忽略']" type="popup"
                       @onMessage="value => search.params3 = value"
                />
                <Field title="使用科室" placeholder="请输入" @onMessage="value => search.params4 = value"/>
                <Field title="开始时间" placeholder="请选择" type="calendar" @onMessage="value => search.params5 = value"/>
                <Field title="结束时间" placeholder="请选择" type="calendar" @onMessage="value => search.params6 = value"/>
                <div class="search" @click="serach">查询</div>
            </div>
            <p class="listLength">共计 <span>{{list.length}}条</span></p>
            <div class="items" v-for="item in list" @click="$router.push({name: 'MaintenanceProgress', params: {item} })">
                <div>
                    <img :src="item.Img"/>
                    <div>
                        <div>
                            <span class="ellipsis">{{item.EquName}}</span>
                            <span class="ellipsis">¥ {{item.Status}}</span>
                            <img src="../../assets/img/right.png"/>
                        </div>
                        <div>
                            <div>
                                <p>资产编号：</p>
                                <p>设备型号：</p>
                                <p>使用科室：</p>
                            </div>
                            <div>
                                <p class="ellipsis">{{item.EquId}}</p>
                                <p class="ellipsis">{{item.Standard}}</p>
                                <p class="ellipsis">{{item.DepName}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <span>维修日期</span>
                    <span>{{item.RepairDate}}</span>
                </div>
            </div>
        </LoadingFooter>
    </Box>
</template>

<script>
    import Box from '@/components/commonBox/commonBox'
    import Field from '../../components/field/field'
    import LoadingFooter from '../../components/loadingFooter/loadingFooter'
    export default {
        name: 'MaintenanceProgressList',
        data() {
            return {
                search: {
                    params1: null,
                    params2: null,
                    params3: null,
                    params4: null,
                    params5: null,
                    params6: null
                },
                loading: false,
                finished: false,
                list: [{
                    "OrderNo": "202003270003",
                    "RepairName": "管理员  ",
                    "EquId": "35020100086",
                    "EquName": "阅读器123123123123123123123121231232133123123",
                    "Standard": "CVR-100U",
                    "DepName": "宣传处12312123123123312",
                    "RepairDate": "2020-03-27 10:11:49",
                    "Reason": "",
                    "Status": "已响应"
                }, {
                    "OrderNo": "202004140001",
                    "RepairName": "涛涛    ",
                    "EquId": "06090300003",
                    "EquName": "1.5T核磁共振系统",
                    "Standard": "Magnaton avanto",
                    "DepName": "宣传处",
                    "RepairDate": "2020-04-14 15:44:16",
                    "Reason": "",
                    "Status": "已响应"
                }, {
                    "OrderNo": "202004140002",
                    "RepairName": "涛涛    ",
                    "EquId": "06090300018",
                    "EquName": "1.5T核磁共振系统",
                    "Standard": "Magnaton avanto",
                    "DepName": "宣传处",
                    "RepairDate": "2020-04-14 15:46:24",
                    "Reason": "",
                    "Status": "已响应"
                }, {
                    "OrderNo": "202006230001",
                    "RepairName": "msk     ",
                    "EquId": "001106000010001",
                    "EquName": "穆舜坤cs623【办公室】",
                    "Standard": "mskgg",
                    "DepName": "宣传处",
                    "RepairDate": "2020-06-23 11:05:21",
                    "Reason": "早上一直黑屏",
                    "Status": "审批中"
                }, {
                    "OrderNo": "202006230002",
                    "RepairName": "msk     ",
                    "EquId": "010000100010001",
                    "EquName": "穆舜坤cs623",
                    "Standard": "mskgg",
                    "DepName": "宣传处",
                    "RepairDate": "2020-06-23 11:12:22",
                    "Reason": "故障描述222",
                    "Status": "已接单(维修处理中)"
                }, {
                    "OrderNo": "202006230003",
                    "RepairName": "msk     ",
                    "EquId": "01000010007",
                    "EquName": "穆舜坤cs623【宣传】",
                    "Standard": "mskgg",
                    "DepName": "宣传处",
                    "RepairDate": "2020-06-23 18:37:10",
                    "Reason": "开不了李萍11",
                    "Status": "已维修未验收"
                }, {
                    "OrderNo": "202007170002",
                    "RepairName": "涛涛    ",
                    "EquId": "06090300017",
                    "EquName": "1.5T核磁共振系统",
                    "Standard": "Magnaton avanto",
                    "DepName": "宣传处",
                    "RepairDate": "2020-07-17 15:17:12",
                    "Reason": "",
                    "Status": "已响应"
                }, {
                    "OrderNo": "202008130004",
                    "RepairName": "涛涛    ",
                    "EquId": "01020100008",
                    "EquName": "半导体激光手术刀",
                    "Standard": "HOP-100",
                    "DepName": "宣传处",
                    "RepairDate": "2020-08-13 19:03:42",
                    "Reason": "",
                    "Status": "已忽略"
                }, {
                    "OrderNo": "202008200001",
                    "RepairName": "涛涛    ",
                    "EquId": "01020100008",
                    "EquName": "半导体激光手术刀",
                    "Standard": "HOP-100",
                    "DepName": "宣传处",
                    "RepairDate": "2020-08-20 09:37:41",
                    "Reason": "",
                    "Status": "已忽略"
                }, {
                    "OrderNo": "202008200002",
                    "RepairName": "涛涛    ",
                    "EquId": "01020100008",
                    "EquName": "半导体激光手术刀",
                    "Standard": "HOP-100",
                    "DepName": "宣传处",
                    "RepairDate": "2020-08-20 14:06:33",
                    "Reason": "",
                    "Status": "报修中"
                }],
            }
        },
        components: {
            Box,
            Field,
            LoadingFooter
        },
        methods: {
            serach() {
                alert(JSON.stringify(this.search))
            },
            onLoad() {
                setTimeout(() => {
                    console.log('Box触底')
                    this.loading = false
                    //  数据是否加载完毕
                    this.finished = true
                },1000)
            }
        }
    }
</script>

<style scoped lang="scss">
    .menu{
        background: $BACKGROUND-COLOR;
        border-radius: 12px;
        padding: 0 29px 35px 40px;
        box-sizing: border-box;
        margin-bottom: 20px;
        .items{
            display: flex;
            height: 112px;
            align-items: center;
            border-bottom: 2px solid #F3F3F3;
            span{
                flex: 1;
            }
            input{
                width: 215px;
                font-size: 29px;
                text-align: center;
                &::-webkit-input-placeholder{
                    color: #858585;
                }
            }
        }
        .search{
            height: 88px;
            background: $THEME-COLOR;
            border-radius: 8px;
            font-size: 32px;
            color: $TEXT-LIGHT-COLOR;
            text-align: center;
            line-height: 88px;
            margin-top: 35px;
        }
    }
    .items{
        background: $BACKGROUND-COLOR;
        border-radius: 16px;
        margin-bottom: 20px;
        padding-bottom: 20px;
        &>div{
            &:first-child{
                display: flex;
                padding: 34px 16px 27px 26px;
                box-sizing: border-box;
                border-bottom: 2px solid #EFEFEF;
                img {
                    width: 150px;
                    height: 192px;
                    border-radius: 4px;
                }
                &>div {
                    &:nth-child(2){
                        margin-left: 16px;
                        flex: 1;
                        &>div{
                            display: flex;
                            &:first-child{
                                margin-bottom: 18px;
                                display: flex;
                                span:first-child{
                                    color: $TEXT-DARK-COLOR;
                                    font-weight: bold;
                                    font-size: 32px;
                                    flex: 1;
                                    width: 208px;
                                }
                                span:nth-child(2) {
                                    color: $TEXT-DARK-COLOR;
                                    font-size: 28px;
                                    margin-left: 10px;
                                    width: 158px;
                                    text-align: right;
                                }
                                img{
                                    width: 32px;
                                    height: 32px;
                                    margin-left: 10px;
                                }
                            }
                            &:last-child{
                                p{
                                    color: #999;
                                    font-size: 26px;
                                    line-height: 45px;
                                    height: 45px;
                                }
                                &>div{
                                    &:last-child{
                                        p{
                                            width: 370px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            &:last-child{
                margin-top: 16px;
                padding: 0 26px 0 31px;
                box-sizing: border-box;
                display: flex;
                span{
                    color: #999;
                    font-size: 26px;
                    &:first-child {
                        flex: 1
                    }
                }
            }
        }
    }
    .listLength{
        font-size: 29px;
        color: #4a4a4a;
        margin-bottom: 18px;
        margin-left: 30px;
        span{
            margin-left: 20px;
            color: $THEME-COLOR;
            font-weight: bold;
        }
    }
</style>
