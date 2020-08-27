<template>
    <Box title="众联医修" right-button="search">
        <div class="message-content">
            <van-tabs
                swipeable
                background="rgba(0,0,0,0)"
                line-width="0"
            >
                <van-tab title="消息">
                    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
                        <div class="messageBox">
                            <div class="triangle"/>
                            <div class="calendar">
                                <div>
                                    <p>开始日期</p>
                                    <P>2020-08-19</P>
                                </div>
                                <div>
                                    <div/>
                                    <div>0天</div>
                                </div>
                                <div>
                                    <p>结束日期</p>
                                    <p>请选择</p>
                                </div>
                            </div>
                            <p class="dataLength">全部消息<span>{{NoticeList.length}}条</span></p>
                                <van-list
                                    v-model="loading"
                                    :finished="finished"
                                    finished-text="没有更多了"
                                    @load="onLoad"
                                >
                                    <div class="items" v-for="item in NoticeList">
                                        <img :src="item.State == 6 ? require('../../assets/img/djd.png') :
                                            item.State == 1 ? require('../../assets/img/dpg.png') :
                                             item.State === 3 ? require('../../assets/img/dys.png') :
                                              require('../../assets/img/dsp.png')">
                                        <div>
                                            <p>{{item.EquName}}</p>
                                            <div>
                                                <div>{{item.DepartmentName}}</div>
                                            </div>
                                            <p>{{item.OrderNo}}</p>
                                        </div>
                                        <div>
                                            <div :style="{background: item.State == 1 ? '#FF9E48' : '#48A4FF'}">
                                                {{item.State == 1 ? '待派工' :
                                                item.State == 3 ? '待验收' :
                                                item.State == 6 ? '待接单' : '待审批'}}</div>
                                            <p>{{item.RepairDate}}</p>
                                        </div>
                                    </div>
                                </van-list>
                        </div>
                    </van-pull-refresh>
                </van-tab>
                <van-tab title="待处理">
                    <div class="messageBox">

                    </div>
                </van-tab>
                <van-tab title="已完成">
                    <div class="messageBox">

                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </Box>
</template>

<script>
    import Box from '../../components/commonBox/commonBox'
    import {Tab, Tabs, List, PullRefresh} from 'vant'
    export default {
        name: 'message',
        data() {
          return {
              //    是否正在上拉加载
              loading: false,
              //    是否没有更多数据了
              finished: false,
              //    是否正在下拉刷新
              refreshing: false,
              //    数据
              "NoticeList":[{"Id":758,"OrderNo":"202008250003","TypeId":"1","EquId":"06090300002","EquName":"1.5T核磁共振系统","StoreId":"0101","DepartmentId":"4015","DepartmentName":"X线诊断一诊室(放射线科）","RepairUserCode":"taotao","RepairUserName":"涛涛    ","RepairDate":"2020-08-25","UserCode":"taotao","HandleUserName":"涛涛    ","State":"6 ","IsRead":0},{"Id":755,"OrderNo":"202008200002","TypeId":"1","EquId":"01020100008","EquName":"半导体激光手术刀","StoreId":"0101","DepartmentId":"1001","DepartmentName":"宣传处","RepairUserCode":"taotao","RepairUserName":"涛涛    ","RepairDate":"2020-08-20","UserCode":"taotao","HandleUserName":"涛涛    ","State":"1 ","IsRead":0},{"Id":751,"OrderNo":"202008130002","TypeId":"1","EquId":"08010200012","EquName":"便携式呼吸机","StoreId":"0101","DepartmentId":"2026","DepartmentName":"急诊医学科门诊三诊室（急救中心）","RepairUserCode":"taotao","RepairUserName":"涛涛    ","RepairDate":"2020-08-13","UserCode":"taotao","HandleUserName":"涛涛    ","State":"8 ","IsRead":0},{"Id":744,"OrderNo":"202008100004","TypeId":"1","EquId":"35020100032","EquName":"身份证阅读器","StoreId":"0101","DepartmentId":"1012","DepartmentName":"财务处","RepairUserCode":"taotao","RepairUserName":"涛涛    ","RepairDate":"2020-08-10","UserCode":"taotao","HandleUserName":"涛涛    ","State":"8 ","IsRead":0},{"Id":743,"OrderNo":"202008100003","TypeId":"1","EquId":"08061000004","EquName":"简易呼吸器","StoreId":"0101","DepartmentId":"1024","DepartmentName":"应急设备库(设备科急救和生命支持设备）","RepairUserCode":"taotao","RepairUserName":"涛涛    ","RepairDate":"2020-08-10","UserCode":"taotao","HandleUserName":"涛涛    ","State":"8 ","IsRead":0},{"Id":742,"OrderNo":"202008100002","TypeId":"1","EquId":"14060700048","EquName":"智能呼吸排痰系统","StoreId":"0101","DepartmentId":"2065","DepartmentName":"感染性疾病科","RepairUserCode":"taotao","RepairUserName":"涛涛    ","RepairDate":"2020-08-10","UserCode":"taotao","HandleUserName":"涛涛    ","State":"8 ","IsRead":0},{"Id":741,"OrderNo":"202008100001","TypeId":"1","EquId":"34070100018","EquName":"监控摄像系统","StoreId":"0101","DepartmentId":"2011","DepartmentName":"急诊医学科病房一病区（急诊内科）","RepairUserCode":"taotao","RepairUserName":"涛涛    ","RepairDate":"2020-08-10","UserCode":"taotao","HandleUserName":"涛涛    ","State":"8 ","IsRead":0},{"Id":732,"OrderNo":"202007310002","TypeId":"1","EquId":"35020100025","EquName":"二代身份证阅读器","StoreId":"0101","DepartmentId":"3010","DepartmentName":"收费处（门诊）","RepairUserCode":"taotao","RepairUserName":"涛涛    ","RepairDate":"2020-07-31","UserCode":"taotao","HandleUserName":"涛涛    ","State":"6 ","IsRead":0},{"Id":731,"OrderNo":"202007310001","TypeId":"1","EquId":"35020100020","EquName":"二代身份证阅读器","StoreId":"0101","DepartmentId":"3010","DepartmentName":"收费处（门诊）","RepairUserCode":"taotao","RepairUserName":"涛涛    ","RepairDate":"2020-07-31","UserCode":"taotao","HandleUserName":"涛涛    ","State":"6 ","IsRead":0},{"Id":730,"OrderNo":"202007300001","TypeId":"1","EquId":"35020100023","EquName":"二代身份证阅读器","StoreId":"0101","DepartmentId":"3010","DepartmentName":"收费处（门诊）","RepairUserCode":"taotao","RepairUserName":"涛涛    ","RepairDate":"2020-07-30","UserCode":"taotao","HandleUserName":"涛涛    ","State":"8 ","IsRead":0}],
          }
        },
        components: {
            Box,
            [Tab.name]: Tab,
            [Tabs.name]: Tabs,
            [List.name]: List,
            [PullRefresh.name]: PullRefresh
        },
        methods: {
            //  上拉加载
            onLoad() {
                setTimeout(() => {
                    this.loading = false
                    this.finished = true
                },1000)
            },
            //  下拉刷新
            onRefresh() {
                setTimeout(() => {
                    this.refreshing = false
                    this.finished = false
                },1000)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .message-content{
        width: 710px;
        margin: auto;
        padding-top: 95px;
        /*padding-bottom: 20px;*/
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
                            width: 96px;
                            height: 40px;
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
                        }
                    }
                }
            }
        }
    }
</style>
