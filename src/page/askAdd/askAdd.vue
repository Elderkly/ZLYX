<template>
    <div class="Ask">
        <Box title="添加明细">
            <div class="infoBox">
                <Field title="设备名称" :action="true" placeholder="请输入" :text="data.SBMC" @onMessage="value => uploadData.SBMC = value"/>
                <Field title="设备别名" placeholder="请输入" :text="data.SBBM" @onMessage="value => uploadData.SBBM = value"/>
                <Field title="数量" :action="true" placeholder="请输入" :text="data.CGSL" @onMessage="value => uploadData.CGSL = value"/>
                <Field title="单价(元)" :action="true" placeholder="请输入" :text="data.CGDJ" @onMessage="value => uploadData.CGDJ = value"/>
                <Field title="规格型号" placeholder="请输入" :text="data.SBGG" @onMessage="value => uploadData.SBGG = value"/>
            </div>
            <div class="infoBox">
                <Field title="单位" placeholder="请输入" :text="data.SBDW" @onMessage="value => uploadData.SBDW = value"/>
                <Field title="生产厂家" placeholder="请输入" :text="data.SCQYMC" @onMessage="value => uploadData.SCQYMC = value"/>
                <Field title="供应商"  placeholder="请输入" :text="data.GYSMC" @onMessage="value => uploadData.GYSMC = value"/>
                <Field title="购置类别" placeholder="请输入" :text="data.GZLBMC" @onMessage="value => uploadData.GZLBMC = value"/>
            </div>
            <div class="infoBox GC">
                <p class="title">是否国产</p>
                <div>
                    <div v-for="item in ['国产','进口','未知']" :class="uploadData.SFJKMC === item ? 'action' : ''" @click="uploadData.SFJKMC = item">{{item}}</div>
                </div>
            </div>
        </Box>
        <Footer button="保存" @change="save"/>
    </div>
</template>

<script>
    import Box from '../../components/commonBox/commonBox'
    import Field from '../../components/field/field'
    import Footer from '../../components/footer/footer'
    import Bus from '../../components/bus/bus'
    export default {
        name: 'AskAdd',
        data() {
            return {
                data: this.$route.params.item ? this.$route.params.item : {},
                uploadData: this.$route.params.item ? JSON.parse(JSON.stringify(this.$route.params.item)) : {SFJKMC: ''},
            }
        },
        mounted() {
            console.log(this.data)
        },
        methods: {
            save() {
                Bus.$emit('updateAskRows',this.uploadData)
                this.$router.back()
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
        .title{
            font-weight: 400;
        }
    }
    .GC{
        padding: 34px 30px;
        &>div{
            display: flex;
            align-items: center;
            div{
                width: 198px;
                height: 76px;
                border-radius: 8px;
                text-align: center;
                line-height: 76px;
                background: #F3F3F3;
                color: #858585;
                font-size: 30px;
                margin-right: 30px;
                &:last-child{
                    margin-right: 0;
                }
            }
            .action{
                color: #fff;
                background: $THEME-COLOR;
            }
        }
    }
</style>
