<template>
    <div class="messageBox">
        <div class="triangle"/>
        <div class="calendar">
            <div>
                <p>开始日期</p>
                <P>{{`${startTime.getFullYear()}-${startTime.getMonth() < 9 ? '0' + (startTime.getMonth() + 1) : startTime.getMonth() + 1}-${startTime.getDate() < 9 ? '0' + startTime.getDate() : startTime.getDate()}`}}</P>
            </div>
            <div>
                <div/>
                <div>{{endTime ? parseInt((endTime.getTime() - new Date(startTime.toLocaleDateString()).getTime()) / 86400000) : 0}}天</div>
            </div>
            <div @click="showCalendar = true">
                <p>结束日期</p>
                <p :class="endTime ? 'black' : 'while'">{{endTime ? `${endTime.getFullYear()}-${endTime.getMonth() < 9 ? '0' + (endTime.getMonth() + 1) : endTime.getMonth() + 1}-${endTime.getDate() < 9 ? '0' + endTime.getDate() : endTime.getDate()}` : '请选择'}}</p>
            </div>
        </div>
        <p class="dataLength">全部消息<span>{{NoticeList.length}}条</span></p>
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
            <div class="items" v-for="item in NoticeList" @click="config[config.findIndex(e => e.id === item.State)].router && $router.push(config[config.findIndex(e => e.id === item.State)].router)">
                <img :src="config[config.findIndex(e => e.id === item.State)] && config[config.findIndex(e => e.id === item.State)].img">
                <div>
                    <p class="ellipsis">{{item.EquName}}</p>
                    <div>
                        <div>{{item.DepartmentName}}</div>
                    </div>
                    <p>{{item.OrderNo}}</p>
                </div>
                <div>
                    <div :style="{background: config[config.findIndex(e => e.id === item.State)] && config[config.findIndex(e => e.id === item.State)].color}">
                        {{config[config.findIndex(e => e.id === item.State)] && config[config.findIndex(e => e.id === item.State)].text}}</div>
                    <p class="ellipsis">{{item.RepairDate}}</p>
                </div>
            </div>
            <van-calendar v-model="showCalendar" @confirm="onConfirm" />
        </van-list>
    </div>
</template>

<script>
    import {Calendar, List} from 'vant'
    export default {
        name: 'MessageList',
        data() {
            return {
                //    是否正在上拉加载
                loading: false,
                //    是否没有更多数据了
                finished: false,
                //    开始时间
                startTime: new Date(),
                //    结束时间
                endTime: null,
                //    是否显示日历
                showCalendar: false,
                //    数据
                NoticeList: []
            }
        },
        props: {
            State: String,      //  每个标签页对应的state
            config: {           //  每个标签页对应的配置
                type: Array,
                default: []
            }

        },
        components: {
            [Calendar.name]: Calendar,
            [List.name]: List
        },
        mounted() {
            //  假数据
            const data = this.State === '1' ? [{"Id":758,"OrderNo":"202008250003","TypeId":"1","EquId":"06090300002","EquName":"1.5T核磁共振系统","StoreId":"0101","DepartmentId":"4015","DepartmentName":"X线诊断一诊室(放射线科）","RepairUserCode":"taotao","RepairUserName":"涛涛    ","RepairDate":"2020-08-25","UserCode":"taotao","HandleUserName":"涛涛    ","State":"6","IsRead":0},{"Id":755,"OrderNo":"202008200002","TypeId":"1","EquId":"01020100008","EquName":"半导体激光手术刀","StoreId":"0101","DepartmentId":"1001","DepartmentName":"宣传处","RepairUserCode":"taotao","RepairUserName":"涛涛    ","RepairDate":"2020-08-20","UserCode":"taotao","HandleUserName":"涛涛    ","State":"1","IsRead":0},{"Id":751,"OrderNo":"202008130002","TypeId":"1","EquId":"08010200012","EquName":"便携式呼吸机","StoreId":"0101","DepartmentId":"2026","DepartmentName":"急诊医学科门诊三诊室（急救中心）","RepairUserCode":"taotao","RepairUserName":"涛涛    ","RepairDate":"2020-08-13","UserCode":"taotao","HandleUserName":"涛涛    ","State":"8","IsRead":0},{"Id":744,"OrderNo":"202008100004","TypeId":"1","EquId":"35020100032","EquName":"身份证阅读器","StoreId":"0101","DepartmentId":"1012","DepartmentName":"财务处","RepairUserCode":"taotao","RepairUserName":"涛涛    ","RepairDate":"2020-08-10","UserCode":"taotao","HandleUserName":"涛涛    ","State":"8","IsRead":0},{"Id":743,"OrderNo":"202008100003","TypeId":"1","EquId":"08061000004","EquName":"简易呼吸器","StoreId":"0101","DepartmentId":"1024","DepartmentName":"应急设备库(设备科急救和生命支持设备）","RepairUserCode":"taotao","RepairUserName":"涛涛    ","RepairDate":"2020-08-10","UserCode":"taotao","HandleUserName":"涛涛    ","State":"8","IsRead":0},{"Id":742,"OrderNo":"202008100002","TypeId":"1","EquId":"14060700048","EquName":"智能呼吸排痰系统","StoreId":"0101","DepartmentId":"2065","DepartmentName":"感染性疾病科","RepairUserCode":"taotao","RepairUserName":"涛涛    ","RepairDate":"2020-08-10","UserCode":"taotao","HandleUserName":"涛涛    ","State":"8","IsRead":0},{"Id":741,"OrderNo":"202008100001","TypeId":"1","EquId":"34070100018","EquName":"监控摄像系统","StoreId":"0101","DepartmentId":"2011","DepartmentName":"急诊医学科病房一病区（急诊内科）","RepairUserCode":"taotao","RepairUserName":"涛涛    ","RepairDate":"2020-08-10","UserCode":"taotao","HandleUserName":"涛涛    ","State":"8","IsRead":0},{"Id":732,"OrderNo":"202007310002","TypeId":"1","EquId":"35020100025","EquName":"二代身份证阅读器","StoreId":"0101","DepartmentId":"3010","DepartmentName":"收费处（门诊）","RepairUserCode":"taotao","RepairUserName":"涛涛    ","RepairDate":"2020-07-31","UserCode":"taotao","HandleUserName":"涛涛    ","State":"6","IsRead":0},{"Id":731,"OrderNo":"202007310001","TypeId":"1","EquId":"35020100020","EquName":"二代身份证阅读器","StoreId":"0101","DepartmentId":"3010","DepartmentName":"收费处（门诊）","RepairUserCode":"taotao","RepairUserName":"涛涛    ","RepairDate":"2020-07-31","UserCode":"taotao","HandleUserName":"涛涛    ","State":"6","IsRead":0},{"Id":730,"OrderNo":"202007300001","TypeId":"1","EquId":"35020100023","EquName":"二代身份证阅读器","StoreId":"0101","DepartmentId":"3010","DepartmentName":"收费处（门诊）","RepairUserCode":"taotao","RepairUserName":"涛涛    ","RepairDate":"2020-07-30","UserCode":"taotao","HandleUserName":"涛涛    ","State":"8","IsRead":0}] :
                            this.State === '2' ? [{
                                "Id": 705,
                                "OrderNo": "202006230002",
                                "TypeId": "1",
                                "EquId": "010000100010001",
                                "EquName": "穆舜坤cs623故障222",
                                "StoreId": "0101",
                                "DepartmentId": "1001",
                                "DepartmentName": "宣传处",
                                "RepairUserCode": "225",
                                "RepairUserName": "msk     ",
                                "RepairDate": "2020-06-23",
                                "UserCode": null,
                                "HandleUserName": "涛涛    ",
                                "State": "5",
                                "IsRead": 0
                            }, {
                                "Id": 704,
                                "OrderNo": "202006230001",
                                "TypeId": "1",
                                "EquId": "001106000010001",
                                "EquName": "穆舜坤cs623【办公室】来不起机器623",
                                "StoreId": "0101",
                                "DepartmentId": "1001",
                                "DepartmentName": "宣传处",
                                "RepairUserCode": "225",
                                "RepairUserName": "msk     ",
                                "RepairDate": "2020-06-23",
                                "UserCode": null,
                                "HandleUserName": "涛涛    ",
                                "State": "2",
                                "IsRead": 0
                            }, {
                                "Id": 702,
                                "OrderNo": "202006120003",
                                "TypeId": "1",
                                "EquId": "35020100029",
                                "EquName": "二代身份证阅读器【住院部3楼】电路异常，闪屏。",
                                "StoreId": "0101",
                                "DepartmentId": "3010",
                                "DepartmentName": "收费处（门诊）",
                                "RepairUserCode": "admin",
                                "RepairUserName": "admin   ",
                                "RepairDate": "2020-06-12",
                                "UserCode": null,
                                "HandleUserName": "涛涛    ",
                                "State": "2",
                                "IsRead": 0
                            }, {
                                "Id": 696,
                                "OrderNo": "202005170002",
                                "TypeId": "1",
                                "EquId": "35020100043",
                                "EquName": "身份证阅读器",
                                "StoreId": "0101",
                                "DepartmentId": "1012",
                                "DepartmentName": "财务处",
                                "RepairUserCode": "admin",
                                "RepairUserName": "admin   ",
                                "RepairDate": "2020-05-17",
                                "UserCode": null,
                                "HandleUserName": "涛涛    ",
                                "State": "2",
                                "IsRead": 0
                            }, {
                                "Id": 691,
                                "OrderNo": "202004270001",
                                "TypeId": "1",
                                "EquId": "35020100044",
                                "EquName": "身份证阅读器线路故障",
                                "StoreId": "0101",
                                "DepartmentId": "1012",
                                "DepartmentName": "财务处",
                                "RepairUserCode": "999999",
                                "RepairUserName": "管理员  ",
                                "RepairDate": "2020-04-27",
                                "UserCode": null,
                                "HandleUserName": "涛涛    ",
                                "State": "2",
                                "IsRead": 0
                            }, {
                                "Id": 479,
                                "OrderNo": "201910310012",
                                "TypeId": "1",
                                "EquId": "14010100347",
                                "EquName": "靶控泵（注射泵）",
                                "StoreId": "0101",
                                "DepartmentId": "4010",
                                "DepartmentName": "麻醉科",
                                "RepairUserCode": "taotao",
                                "RepairUserName": "涛涛    ",
                                "RepairDate": "2019-10-31",
                                "UserCode": null,
                                "HandleUserName": "涛涛    ",
                                "State": "2",
                                "IsRead": 0
                            }] : [{
                                "Id": 757,
                                "OrderNo": "202008250002",
                                "TypeId": "1",
                                "EquId": "06090300002",
                                "EquName": "1.5T核磁共振系统",
                                "StoreId": "0101",
                                "DepartmentId": "4015",
                                "DepartmentName": "X线诊断一诊室(放射线科）",
                                "RepairUserCode": "taotao",
                                "RepairUserName": "涛涛    ",
                                "RepairDate": "2020-08-25 14:53:28",
                                "UserCode": null,
                                "HandleUserName": "涛涛    ",
                                "State": "4",
                                "IsRead": 0
                            }, {
                                "Id": 756,
                                "OrderNo": "202008250001",
                                "TypeId": "1",
                                "EquId": "06090300002",
                                "EquName": "1.5T核磁共振系统",
                                "StoreId": "0101",
                                "DepartmentId": "4015",
                                "DepartmentName": "X线诊断一诊室(放射线科）",
                                "RepairUserCode": "taotao",
                                "RepairUserName": "涛涛    ",
                                "RepairDate": "2020-08-25 14:27:02",
                                "UserCode": null,
                                "HandleUserName": "涛涛    ",
                                "State": "4",
                                "IsRead": 0
                            }, {
                                "Id": 754,
                                "OrderNo": "202008200001",
                                "TypeId": "1",
                                "EquId": "01020100008",
                                "EquName": "半导体激光手术刀",
                                "StoreId": "0101",
                                "DepartmentId": "1001",
                                "DepartmentName": "宣传处",
                                "RepairUserCode": "taotao",
                                "RepairUserName": "涛涛    ",
                                "RepairDate": "2020-08-20 09:37:41",
                                "UserCode": null,
                                "HandleUserName": null,
                                "State": "9",
                                "IsRead": 0
                            }, {
                                "Id": 753,
                                "OrderNo": "202008130004",
                                "TypeId": "1",
                                "EquId": "01020100008",
                                "EquName": "半导体激光手术刀",
                                "StoreId": "0101",
                                "DepartmentId": "1001",
                                "DepartmentName": "宣传处",
                                "RepairUserCode": "taotao",
                                "RepairUserName": "涛涛    ",
                                "RepairDate": "2020-08-13 19:03:42",
                                "UserCode": null,
                                "HandleUserName": null,
                                "State": "9",
                                "IsRead": 0
                            }, {
                                "Id": 729,
                                "OrderNo": "202007200002",
                                "TypeId": "1",
                                "EquId": "35020100033",
                                "EquName": "身份证阅读器",
                                "StoreId": "0101",
                                "DepartmentId": "1012",
                                "DepartmentName": "财务处",
                                "RepairUserCode": "admin",
                                "RepairUserName": "admin   ",
                                "RepairDate": "2020-07-20 16:02:21",
                                "UserCode": null,
                                "HandleUserName": null,
                                "State": "9",
                                "IsRead": 0
                            }, {
                                "Id": 727,
                                "OrderNo": "202007170012",
                                "TypeId": "1",
                                "EquId": "35020100033",
                                "EquName": "身份证阅读器",
                                "StoreId": "0101",
                                "DepartmentId": "1012",
                                "DepartmentName": "财务处",
                                "RepairUserCode": "admin",
                                "RepairUserName": "admin   ",
                                "RepairDate": "2020-07-17 17:17:51",
                                "UserCode": null,
                                "HandleUserName": "admin   ",
                                "State": "4",
                                "IsRead": 0
                            }, {
                                "Id": 726,
                                "OrderNo": "202007170011",
                                "TypeId": "1",
                                "EquId": "35020100026",
                                "EquName": "二代身份证阅读器",
                                "StoreId": "0101",
                                "DepartmentId": "3010",
                                "DepartmentName": "收费处（门诊）",
                                "RepairUserCode": "admin",
                                "RepairUserName": "admin   ",
                                "RepairDate": "2020-07-17 17:15:19",
                                "UserCode": null,
                                "HandleUserName": "admin   ",
                                "State": "4",
                                "IsRead": 0
                            }, {
                                "Id": 721,
                                "OrderNo": "202007170007",
                                "TypeId": "1",
                                "EquId": "06090300020",
                                "EquName": "1.5T核磁共振系统",
                                "StoreId": "0101",
                                "DepartmentId": "1003",
                                "DepartmentName": "院长办公室",
                                "RepairUserCode": "taotao",
                                "RepairUserName": "涛涛    ",
                                "RepairDate": "2020-07-17 15:52:51",
                                "UserCode": null,
                                "HandleUserName": null,
                                "State": "9",
                                "IsRead": 0
                            }, {
                                "Id": 711,
                                "OrderNo": "202007010002",
                                "TypeId": "1",
                                "EquId": "01010100030",
                                "EquName": "超声吸引器",
                                "StoreId": "0101",
                                "DepartmentId": "1005",
                                "DepartmentName": "医疗保险办公室",
                                "RepairUserCode": "admin",
                                "RepairUserName": "admin   ",
                                "RepairDate": "2020-07-01 10:33:54",
                                "UserCode": null,
                                "HandleUserName": "涛涛    ",
                                "State": "4",
                                "IsRead": 0
                            }, {
                                "Id": 707,
                                "OrderNo": "202006300002",
                                "TypeId": "1",
                                "EquId": "01010100036",
                                "EquName": "超声吸引器",
                                "StoreId": "0101",
                                "DepartmentId": "1002",
                                "DepartmentName": "科研及教学处",
                                "RepairUserCode": "admin",
                                "RepairUserName": "admin   ",
                                "RepairDate": "2020-06-30 11:15:51",
                                "UserCode": null,
                                "HandleUserName": "涛涛    ",
                                "State": "4",
                                "IsRead": 0
                            }]
            this.NoticeList = data

        },
        methods: {
            //  上拉加载
            onLoad() {
                setTimeout(() => {
                    this.loading = false
                    this.finished = true
                },1000)
            },
            //  日历
            onConfirm(data) {
                this.showCalendar = false
                this.endTime = data
                //  选择完结束日期 在这里做数据刷新
                //  ...
            }
        }
    }
</script>

<style scoped lang="scss">
    .messageBox{
        .triangle{
            width: 0;
            height: 0;
            border-left: 30px solid transparent;
            border-right: 30px solid transparent;
            border-bottom: 22px solid $BACKGROUND-COLOR;
            margin-left: 85px;
            margin-top: 10px;
        }
        .calendar{
            display: flex;
            height: 166px;
            border-radius: 16px;
            background: $BACKGROUND-COLOR;
            align-items: center;
            padding: 0 70px 0 56px;
            box-sizing: border-box;
            &>div{
                flex: 1;
                position: relative;
                p{
                    &:first-child{
                        font-size: 28px;
                        color: #4A4A4A;
                    }
                    &:last-child{
                        font-size: 32px;
                        color: $TEXT-DARK-COLOR;
                        font-weight: bold;
                        margin-top: 12px;
                    }
                }
                &:first-child{
                    text-align: left;
                }
                &:nth-child(2){
                    text-align: center;
                    div {
                        &:first-child{
                            width: 100%;
                            background: #F4F4F4;
                            height: 2px;
                        }
                        &:last-child{
                            position: absolute;
                            width: 86px;
                            height: 32px;
                            border-radius: 20px;
                            background: $BACKGROUND-COLOR;
                            border:  2px solid #F4F4F4;
                            color: #969799;
                            font-size: 20px;
                            text-align: center;
                            line-height: 32px;
                            left: 0;
                            right: 0;
                            margin: auto;
                            top: 0;
                            bottom: 0;
                        }
                    }
                }
                &:last-child{
                    text-align: right;
                }
            }
            .black{
                font-size: 32px!important;
                color: $TEXT-DARK-COLOR!important;
                font-weight: bold!important;
            }
            .while{
                font-size: 28px!important;
                color: #969799!important;
                font-weight: 400!important;
            }
        }
        .dataLength{
            font-size: 28px;
            color: #4A4A4A;
            margin: 32px 0 16px 30px;
            span{
                color: $THEME-COLOR;
                margin-left: 26px;
                font-weight: bold;
            }
        }
        .items{
            height: 202px;
            background: $BACKGROUND-COLOR;
            border-radius: 16px;
            display: flex;
            padding: 28px 26px 24px;
            box-sizing: border-box;
            margin-bottom: 20px;
            img{
                width: 48px;
                height: 48px;
            }
            &>div{
                &:nth-child(2) {
                    margin-left: 24px;
                    flex: 1;
                    p{
                        &:first-child{
                            color: $TEXT-DARK-COLOR;
                            font-size: 32px;
                            font-weight: bold;
                            width: 450px;
                        }
                        &:last-child{
                            font-size: 24px;
                            color: #4A4A4A;
                            margin-top: 14px;
                        }
                    }
                    &>div{
                        display: flex;
                        margin-top: 14px;
                        div{
                            min-width: 82px;
                            height: 42px;
                            background: #f3f3f3;
                            border-radius: 6px;
                            font-size: 22px;
                            color: #858585;
                            text-align: center;
                            line-height: 42px;
                            padding: 0 12px;
                            margin-right: 8px;
                        }
                    }
                }
                &:last-child{
                    div{
                        min-width: 86px;
                        height: 40px;
                        padding: 0 5px;
                        background: #FF9E48;
                        color: $TEXT-LIGHT-COLOR;
                        font-size: 22px;
                        text-align: center;
                        line-height: 40px;
                        border-radius: 0px 20px 20px 20px;
                        float: right;
                    }
                    p{
                        color: #A7A7A7;
                        font-size: 22px;
                        margin-top: 113px;
                        width: 132px;
                    }
                }
            }
        }
    }
</style>
