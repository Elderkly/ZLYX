<template>
    <div class="borrowDetailsBox">
        <Box title="设备借用明细">
            <div class="equipment box">
                <p class="title">设备信息</p>
                <div class="equipment-details">
                    <img :src="equipment.img" @click="showImg(equipment.img)"/>
                    <div>
                        <div>
                            <p>资产名称：</p>
                            <p>资产编号：</p>
                            <p>规格类型：</p>
                            <p>序列号：</p>
                        </div>
                        <div>
                            <p class="ellipsis">{{equipment.name}}</p>
                            <p class="ellipsis">{{equipment.id}}</p>
                            <p class="ellipsis">{{equipment.type}}</p>
                            <p class="ellipsis">{{equipment.serialNumber}}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="ellipsis">使用科室：  {{equipment.administrative}}</div>
                    <div>使用年限：  {{equipment.deadline}}</div>
                </div>
            </div>
            <div class="accessories box">
                <p class="title">配件信息</p>
                <van-checkbox-group v-model="result">
                    <div class="check-box" v-for="(item, index) in accessories">
                        <van-checkbox :name="index" checked-color="#4fa69e">{{item}}</van-checkbox>
                        <input type="text" placeholder="请输入备注" @input="changeAccessories(index)"/>
                    </div>
                </van-checkbox-group>
            </div>
            <div class="borrow box">
                <p class="title">借用信息</p>
                <div class="items">
                    <span>申请科室</span>
                    <span>{{borrow.administrative}}</span>
                </div>
                <div class="items">
                    <span>申请人</span>
                    <span>{{borrow.userName}}</span>
                </div>
                <div class="items">
                    <span>申请日期</span>
                    <span>{{borrow.time}}</span>
                </div>
                <div class="items">
                    <span>实际借用日期</span>
                    <span>{{borrow.startTime}}</span>
                </div>
                <div class="items">
                    <span>联系电话</span>
                    <span>{{borrow.phone}}</span>
                </div>
                <div class="items">
                    <span>归还申请日期</span>
                    <span>{{borrow.endTime}}</span>
                </div>
                <div class="items">
                    <span>借用单价</span>
                    <span>{{borrow.unit}}</span>
                </div>
                <div class="items">
                    <span>预计借用金额</span>
                    <span>{{borrow.money}}</span>
                </div>
                <div class="items">
                    <span>预计借用时长</span>
                    <span>{{borrow.duration}}</span>
                </div>
                <p>此设备累计使用550小时，本次借用享受9折优惠。</p>
            </div>
            <div class="explain box">
                <p class="title">申请说明</p>
                <textarea type="text" placeholder="请输入申请内容" cols="3" v-model="explain"/>
            </div>
        </Box>
        <div class="footer">
            <div class="button" @click="upload">提交申请</div>
        </div>
    </div>
</template>

<script>
    import Box from '@/components/commonBox/commonBox'
    import {Checkbox, CheckboxGroup, ImagePreview} from 'vant'
    import Field from '@/components/field/field'
    export default {
        name: 'GiveBack',
        data() {
            return {
                //    设备信息
                equipment: {
                    img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3041974687,1312568471&fm=26&gp=0.jpg',       //   图片地址
                    name: '半导体激光手术刀',                                                                                       //   资产名称
                    id: '1000280002312312',                                                                                      //   资产编号
                    type: 'HOP-100123123123',                                                                                    //   规格类型
                    serialNumber: 'GD202001238999999',                                                                           //   序列号
                    administrative:'宣传处',                                                                                      //   使用科室
                    deadline: '2年'                                                                                              //    使用年限
                },
                //    配件信息
                accessories: ['电源线','有创压主电缆','血氧探头主电缆','心电导连线'],
                //    选中的配件信息
                result: [],
                //    配件信息备注
                resultText: [],
                //    借用信息
                borrow: {
                    administrative: '宣传处',             //  科室
                    userName: '涛涛',                     //  申请人
                    startTime: '2020-06-20',             //  使用日期
                    phone: '17700661770',                //  联系电话
                    endTime: '2020-08-30',               //  归还日期
                    unit: '5元/每小时',                    //  借用单位
                    money: '10000',                       //  预计借用金额
                    duration: '72月',                     //   预计借用时长
                    time: '2020-06-19',                   //   申请日期
                },
                //    申请说明
                explain: null
            }
        },
        components: {
            Box,
            Field,
            [Checkbox.name]: Checkbox,
            [CheckboxGroup.name]: CheckboxGroup
        },
        methods: {
            //  配件信息备注
            changeAccessories(index) {
                this.resultText[index] = event.target.value
            },
            //  收到表单消息
            onMessage(value, key) {
                console.log(value, key,this.borrow['administrative'])
                if (this.borrow[key] !== undefined) this.borrow[key] = value
            },
            upload() {
                const newResult = []
                this.result.map(e => {
                    newResult.push({name: this.accessories[e],remark: this.resultText[e]})
                })
                const uploadData = {
                    result: newResult,
                    equipment: this.equipment,
                    borrow: this.borrow,
                    explain: this.explain
                }
                alert(JSON.stringify(uploadData))
                console.log('设备信息:',this.equipment,'\n','选中的配件信息:',newResult,'\n','借用信息:',this.borrow,'\n','申请说明:',this.explain)
            },
            showImg(src) {
                if (src) {
                    ImagePreview([src])
                } else {
                    // Toast('没有图片')
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .borrowDetailsBox{
        padding-bottom: 120px;
    }
    .box{
        background: $BACKGROUND-COLOR;
        border-radius: 12px;
        padding: 34px 40px 0;
        box-sizing: border-box;
        margin-bottom: 20px;
    }
    .title{
        color: $TEXT-DARK-COLOR;
        font-size: 34px;
        font-weight: bold;
    }
    .equipment{
        height: 424px;
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
        &>div:last-child{
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
    .accessories{
        .title{
            margin-bottom: 10px;
        }
        .check-box{
            display: flex;
            height: 112px;
            border-bottom: 2px solid #F3F3F3;
            &:last-child{
                border: none
            }
            .van-checkbox{
                flex: 1;
            }
        }
    }
    .borrow{
        padding-bottom: 44px;
        .title{
            margin-bottom: 10px;
        }
        .items{
            display: flex;
            margin-bottom: 26px;
            span{
                &:first-child{
                    color: #999999;
                    font-size: 29px;
                    flex: 1;
                }
                &:last-child{
                    font-size: 29px;
                    color: #333;
                }
            }
        }
        p:last-child{
            color: #FF4D39;
            font-size: 24px;
        }
    }
    .explain{
        input {
            width: 100%;
            text-align: left;
            margin: 20px 0 48px;
        }
    }
    input{
        width: 150px;
        font-size: 29px;
        text-align: center;
        color: #858585;
        &::-webkit-input-placeholder{
            color: #858585;
        }
    }
    .footer{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 114px;
        background: $BACKGROUND-COLOR;
        box-shadow:0px 6px 12px rgba(0,0,0,0.16);
        padding-top: 24px;
        .button{
            width:690px;
            height:96px;
            background:$THEME-COLOR;
            border-radius:8px;
            color: $TEXT-LIGHT-COLOR;
            font-size: 30px;
            text-align: center;
            line-height: 96px;
            margin: auto;
        }
    }
    textarea{
        font-size: 30px;
        width: 100%;
        border: none;
        resize: none;
        margin: 20px 0;
        &::-webkit-input-placeholder{
            color: #858585;
        }
    }
</style>
