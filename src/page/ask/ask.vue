<template>
    <div class="Ask">
        <Box title="设备申请" rightButton="添加明细" path="/askAdd">
            <div class="infoBox">
                <Field title="申请单号" placeholder="请输入" :text="data.DH" @onMessage="value => uploadData.DH = value"/>
                <Field title="审核状态" type="teb" :data="['科室申请','年度计划',]" @onMessage="value => uploadData.Type = value"/>
                <Field title="申请科室" placeholder="请选择" :text="uploadData.STOREMC" :action="true" type="popup" :data="['行政管理','宣传处','科研及教学处']" @onMessage="value => uploadData.STOREMC = value"/>
                <Field title="申请时间" placeholder="请选择" :text="uploadData.RQ" type="calendar" @onMessage="value => uploadData.RQ = value"/>
                <Field title="申请人" :text="uploadData.ZDRXM" type="text"/>
                <Field title="申请理由" placeholder="请输入" :text="uploadData.SQYY" type="textarea" @onMessage="value => uploadData.SQYY = value"/>
            </div>
            <div class="infoBox items" v-for="(item, index) in rows">
                <div class="itemTopBox">
                    <div>
                        <span>设备名称</span>
                        <span>{{item.SBMC}}</span>
                    </div>
                    <div>
                        <span>设备别名</span>
                        <span>{{item.SBBM}}</span>
                    </div>
                    <div>
                        <span>数量</span>
                        <span>{{item.CGSL}}</span>
                    </div>
                    <div>
                        <span>单价(元)</span>
                        <span>{{item.CGDJ}}</span>
                    </div>
                    <div>
                        <span>规格型号</span>
                        <span>{{item.SBGG}}</span>
                    </div>
                    <div>
                        <span>单位</span>
                        <span>{{item.SBDW}}</span>
                    </div>
                    <div>
                        <span>购置类别</span>
                        <span>{{item.GZLBMC}}</span>
                    </div>
                    <div>
                        <span>是否国产</span>
                        <span>{{item.SFJKMC}}</span>
                    </div>
                    <div>
                        <span>生产厂家</span>
                        <span>{{item.SCQYMC}}</span>
                    </div>
                    <div>
                        <span>供应商</span>
                        <span>{{item.GYSMC}}</span>
                    </div>
                </div>
                <div class="itemBottomBox">
                    <div @click="preview">预览</div>
                    <div @click="$router.push({name: 'ReportApproval', params: {Report: item.GZLB === '03'}})">{{item.GZLB === '03' ? '申请审批表' : '论证报告'}}</div>
                    <div @click="$router.push({name: 'AskAdd',params: {item}})">修改</div>
                </div>
            </div>
        </Box>
        <Footer :button="[{text:'提交',color:'#fff',background:'#4FA69E',event:'upload'},{text:'保存',color:'#fff',background:'#4FA69E',event:'save'}]"
                @upload="upload"
                @save="save"
        />
    </div>
</template>

<script>
    import Box from '../../components/commonBox/commonBox'
    import Field from '../../components/field/field'
    import Footer from '../../components/footer/footer'
    import {Toast} from 'vant'
    import Bus from "../../components/bus/bus";
    export default {
        name: 'Ask',
        data() {
            return {
                data: this.$route.params.item,
                uploadData: JSON.parse(JSON.stringify(this.$route.params.item)),
                "rows": [{
                    "SBMCBH": "",
                    "SBMC": "超声吸引器",
                    "SBBM": "we will have",
                    "SBDW": "台    ",
                    "SBGG": "CUSA-DISSCETRO",
                    "DH": "202007210016  ",
                    "CGDJ": "21222.0000",
                    "CGSL": "9.0",
                    "CGJE": "21222.0000",
                    "SFJK": "1",
                    "GZLB": "03",
                    "TJSCQY": "英国杉顿",
                    "SCQYMC": "英国杉顿",
                    "TJGYS": "英国佳士比",
                    "GYSMC": "英国佳士比",
                    "TJBrand": "",
                    "GZLBMC": "新增",
                    "PPMC": "                                        ",
                    "SFJKMC": "进口"
                },{
                    "SBMCBH": "",
                    "SBMC": "高频电刀",
                    "SBBM": "oooo",
                    "SBDW": "台    ",
                    "SBGG": "DD-2型",
                    "DH": "202007210017  ",
                    "CGDJ": "587500.0000",
                    "CGSL": "5.0",
                    "CGJE": "587500.0000",
                    "SFJK": "1",
                    "GZLB": "0",
                    "TJSCQY": "易迈科技",
                    "SCQYMC": "易迈科技",
                    "TJGYS": "安徽淳康生物科技有限公司",
                    "GYSMC": "安徽淳康生物科技有限公司",
                    "TJBrand": "",
                    "GZLBMC": null,
                    "PPMC": "                                        ",
                    "SFJKMC": "进口"
                }],
            }
        },
        mounted() {
            console.log(this.data)
            //  修改/添加明细
            Bus.$on('updateAskRows', res => {
                const index = this.rows.findIndex(e => e.DH === res.DH)
                if (index !== -1) {
                    this.$set(this.rows, index, res)
                } else {
                    this.rows.push(res)
                }
            })
        },
        methods: {
            upload() {
                console.log(this.rows,this.uploadData)
                alert('提交')
            },
            save() {
                alert('保存')
            },
            preview() {
                Toast({
                    message: '点击了预览，暂时没有链接，有链接就可以跳转了',
                    position: 'bottom',
                });
            }
        },
        components: {
            Box,
            Field,
            Footer
        }
    }
</script>

<style scoped lang="scss">
    .Ask{
        padding-bottom: 112px;
    }
    .infoBox{
        padding: 0 30px;
    }
    .items{
        padding: 36px 30px 24px;
        .itemTopBox{
            border-bottom: 2px solid #eee;
            div{
                display: flex;
                align-items: center;
                font-size: 28px;
                margin-bottom: 32px;
                span:first-child{
                    flex: 1;
                    color: #858585;
                }
                span:last-child{
                    color: $TEXT-DARK-COLOR;
                    font-weight: bold;
                    width: 326px;
                    text-align: right;
                }
            }
        }
        .itemBottomBox{
            margin-top: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            div{
                width: 200px;
                height: 80px;
                border-radius: 8px;
                text-align: center;
                line-height: 80px;
                font-size: 26px;
                margin-right: 42px;
                &:first-child{
                    background: #dedede;
                    color: #858585;
                }
                &:nth-child(2) {
                    background: $THEME-COLOR;
                    color: #fff;
                }
                &:last-child{
                    background: $THEME-COLOR;
                    color: #fff;
                    margin-right: 0;
                }
            }
        }
    }
</style>
