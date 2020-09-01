<template>
    <div class="box">
        <Box title="合同附件">
            <div class="equipment">
                <p class="title">设备信息</p>
                <div class="equipment-details">
                    <img :src="data.Images"/>
                    <div>
                        <div>
                            <p>资产名称：</p>
                            <p>合同编号：</p>
                            <p>合同名称：</p>
                            <p>合同单位：</p>
                        </div>
                        <div>
                            <p class="ellipsis">{{data.SBMX}}</p>
                            <p class="ellipsis">{{data.HTBH}}</p>
                            <p class="ellipsis">{{data.HTMC}}</p>
                            <p class="ellipsis">{{data.HTDW}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <ImgModule upload @changeImg="list => uploadImg = list" :img="uploadImg"/>
        </Box>
        <Footer button="提交" @change="change"/>
    </div>
</template>

<script>
    import Box from '../../components/commonBox/commonBox'
    import ImgModule from '../../components/imgModule/imgModule'
    import Footer from '../../components/footer/footer'
    export default {
        name: 'Accessory',
        components: {
            Box,
            ImgModule,
            Footer,
        },
        data() {
            return {
                data: this.$route.params.item,
                uploadImg: [],      //  图片
            }
        },
        mounted() {
            //  查询附件数据 后将返回的URL插入到uploadImg
            const HTTPList = [{
                    "FJMC": "合同附件-1",
                    "URL": "http://www.api.zlianyx.com/upload/htfj/HT202007280001-1.jpg?timestamp=1598977176366",
                    "HH": "1"
            }]
            HTTPList.map(e => !!e.URL && this.uploadImg.push({
                url: e.URL
            }))
            console.log(this.uploadImg)
        },
        methods: {
            change() {
                console.log(
                    this.uploadImg,
                )
                alert('报废')
            }
        }
    }
</script>

<style scoped lang="scss">
    .box{
        padding-bottom: 114px;
    }
    .FieldItems {
        height: 112px;
        border-bottom: 2px solid #F3F3F3;
        display: flex;
        align-items: center;
        font-size: 29px;
        color: #858585;

        .action {
            color: $TEXT-DARK-COLOR;
        }

        .title {
            font-size: 30px;
            color: $TEXT-DARK-COLOR;
            flex: 1;
        }

        div {
            display: flex;
            align-items: center;

            img {
                width: 32px;
                height: 30px;
                margin-left: 8px;
            }
        }

        &:last-child {
            border: none
        }
    }
    .FieldItemsTitle{
        font-size: 30px;
        color: $TEXT-DARK-COLOR;
        margin: 36px 0 20px;
    }
    .equipment{
        background: $BACKGROUND-COLOR;
        border-radius: 12px;
        padding: 34px 40px 20px;
        box-sizing: border-box;
        margin-bottom: 20px;
        .title{
            color: $TEXT-DARK-COLOR;
            font-size: 34px;
            font-weight: bold;
            margin-bottom: 30px;
        }
        img{
            width: 150px;
            height: 192px;
        }
        .equipment-details{
            display: flex;
            margin-top: 24px;
            &>div{
                margin-left: 34px;
                display: flex;
                div{
                    &:first-child{
                        color: #999;
                        line-height: 55px;
                    }
                    &:last-child{
                        color: #333;
                        line-height: 55px;
                        p{
                            width: 280px;
                            font-size: 29px;
                            color: #333;
                        }
                    }
                }
            }
        }
        .hiddenDepartment{
            display: flex;
            border-top: 2px solid #F3F3F3;
            margin-top: 20px;
            div{
                flex: 1;
                text-align: center;
                height: 66px;
                line-height: 66px;
                font-size: 29px;
                color: #999;
                &:first-child{
                    border-right: 2px solid #F3F3F3;
                }
            }
        }
    }
</style>
