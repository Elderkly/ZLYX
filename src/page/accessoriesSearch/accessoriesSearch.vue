<template>
    <Box title="配件搜索">
        <div class="inputBox">
            <img src="../../assets/img/search.png"/>
            <input type="text" placeholder="搜索"/>
        </div>
        <div class="itemBox">
            <div class="items" v-for="(item,index) in PartsList" @click="emit(item)">
                <p>{{item.PartsName}}</p>
                <div>
                    <span class="ellipsis">规格： {{item.Size}}</span>
                    <span class="ellipsis">单位： {{item.Unit}}</span>
                    <span class="ellipsis">¥{{item.Price}}</span>
                    <van-stepper @change="change(arguments, index)" input-width="25px" button-size="20px"/>
                </div>
            </div>
        </div>
    </Box>
</template>

<script>
    import Box from '../../components/commonBox/commonBox'
    import Bus from '../../components/bus/bus'
    import {Stepper} from 'vant'
    export default {
        name: 'AccessoriesSearch',
        components: {
            Box,
            [Stepper.name]: Stepper
        },
        data() {
            return {
                "PartsList": [{
                    "PartsCode": "003250",
                    "PartsName": "螺丝",
                    "Supplier": "000420",
                    "Size": "20*36",
                    "Price": "60.0000",
                    "Unit": "个",
                    Count: 1
                }, {
                    "PartsCode": "003282",
                    "PartsName": "插排线",
                    "Supplier": "001003",
                    "Size": "0.5*1",
                    "Price": "30.0000",
                    "Unit": "根",
                    Count: 1
                }, {
                    "PartsCode": "003313",
                    "PartsName": "键盘",
                    "Supplier": "",
                    "Size": "",
                    "Price": "200.0000",
                    "Unit": "个    ",
                    Count: 1
                }, {
                    "PartsCode": "003317",
                    "PartsName": "监护零件",
                    "Supplier": "000008",
                    "Size": "x523-1",
                    "Price": "3000.0000",
                    "Unit": "个    ",
                    Count: 1
                }, {
                    "PartsCode": "003323",
                    "PartsName": "显示器",
                    "Supplier": null,
                    "Size": "AOC",
                    "Price": "500.0000",
                    "Unit": "台    ",
                    Count: 1
                }, {
                    "PartsCode": "003324",
                    "PartsName": "显示器",
                    "Supplier": null,
                    "Size": "AOC",
                    "Price": "700.0000",
                    "Unit": "台    ",
                    Count: 1
                }, {
                    "PartsCode": "003325",
                    "PartsName": "插排线",
                    "Supplier": null,
                    "Size": "csw",
                    "Price": "30.0000",
                    "Unit": "根    ",
                    Count: 1
                }, {
                    "PartsCode": "003326",
                    "PartsName": "针头线",
                    "Supplier": null,
                    "Size": "20*36",
                    "Price": "630.0000",
                    "Unit": "个    ",
                    Count: 1
                }, {
                    "PartsCode": "003328",
                    "PartsName": "插排线",
                    "Supplier": null,
                    "Size": "csw/wsc",
                    "Price": "30.0000",
                    "Unit": "根    ",
                    Count: 1
                }, {
                    "PartsCode": "003334",
                    "PartsName": "摄像头",
                    "Supplier": "",
                    "Size": "",
                    "Price": "150.0000",
                    "Unit": "外网  ",
                    Count: 1
                }]
            }
        },
        methods: {
            emit(item) {
                Bus.$emit('selectAccessories', item)
                this.$router.back()
            },
            change(nums,index) {
                event.stopPropagation()
                this.PartsList[index].Count = nums[0]
            }
        },
    }
</script>

<style scoped lang="scss">
    .inputBox{
        height: 86px;
        display: flex;
        align-items: center;
        background: #369189;
        border-radius: 10px;
        padding: 0 30px;
        box-sizing: border-box;
        img{
            width: 30px;
        }
        input{
            margin-left: 26px;
            font-size: 29px;
            color: #fff;
            flex: 1;
            &::-webkit-input-placeholder{
                color: rgba(255,255,255,.35);
            }
        }
    }
    .itemBox{
        background: #fff;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 0 40px;
        margin-top: 20px;
        .items{
            /*height: 112px;*/
            border-bottom: 2px solid #f3f3f3;
            padding: 20px 0;
            p{
                color: $TEXT-DARK-COLOR;
                font-size: 28px;
                margin-bottom: 10px;
            }
            div{
                display: flex;
                align-items: center;
                span{
                    color: #999;
                    font-size: 26px;
                    flex: 1;
                    text-align: left;
                    &:nth-child(2),&:nth-child(3) {
                        text-indent: 10px;
                    }
                }
            }
        }
    }
</style>
