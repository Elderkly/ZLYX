<template>
    <div class="borrowDetailsBox">
        <Box title="设备借用明细">
            <div class="equipment box">
                <p class="title">设备信息</p>
                <div class="equipment-details">
                    <img :src="equipment.img"/>
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
                <Field title="申请科室" placeholder="请选择科室" type='popup' :action="true" :data="['医学院工程部', '总务资产库','信息中心库']" @onMessage="onMessage(arguments[0], 'administrative')"/>
                <Field title="申请人" :text="borrow.userName"  @onMessage="onMessage(arguments[0], 'userName')"/>
                <Field title="申请日期" :text="`${new Date().getFullYear()}-${new Date().getMonth() < 9 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1}-${new Date().getDate() < 9 ? '0' + new Date().getDate() : new Date().getDate()}`" type="text" @onMessage="onMessage(arguments[0], 'startTime')"/>
                <Field title="使用日期" placeholder="请选择日期" type='calendar' :action="true" @onMessage="onMessage(arguments[0], 'startTime')"/>
                <Field title="联系电话" :text="borrow.phone" type="text"/>
                <Field title="预计归还日期" placeholder="请选择日期" type="calendar" @onMessage="onMessage(arguments[0], 'endTime')"/>
                <Field title="借用单位" :text="borrow.unit" type="text"/>
            </div>
            <div class="explain box">
                <p class="title">申请说明</p>
                <input type="text" placeholder="请输入申请内容" v-model="explain"/>
            </div>
        </Box>
        <div class="footer">
            <div class="button" @click="upload">提交申请</div>
        </div>
    </div>
</template>

<script>
    import Box from '@/components/commonBox/commonBox'
    import { Checkbox, CheckboxGroup} from 'vant'
    import Field from '@/components/field/field'
    export default {
        name: 'BorrowDetails',
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
                  administrative: null,             //  科室
                  userName: '涛涛',                  //  申请人
                  startTime: null,                  //  使用日期
                  phone: '17700661770',             //  联系电话
                  endTime: null,                    //  归还日期
                  unit: '5元/每小时'                 //   借用单位
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
        .title{
            margin-bottom: 10px;
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
</style>
