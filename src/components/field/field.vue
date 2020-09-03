<template>
    <div class="Field-Box">
        <div>
            <span class="title">{{title}} <span v-if="action">*</span></span>
            <span v-if="type === 'text'">{{text}}</span>
            <!--弹窗-->
            <div v-if="type === 'popup' || type=== 'calendar' || type === 'selectPeople'" :class="placeholder === showText ? 'popup' : 'action popup'" @click.stop="menuClick">
                {{showText}}
                <img src="../../assets/img/right-min.png"/>
            </div>
            <van-popup v-if="type === 'popup'" v-model="showDiaLog" position="bottom" :style="{ height: '50%', borderRadius: '10px 10px 0 0'}">
                <div class="picker-header">
                    <span @click="showDiaLog = false">取消</span>
                    <input type="text" placeholder="搜索" v-if="popupInput" @input="_popupInput"/>
                    <span @click="confirm">确定</span>
                </div>
                <van-picker
                        :columns="data"
                        @cancel="showPicker = false"
                        @change="onChange"
                        item-height="15vw"
                        swipe-duration="500"
                        :default-index="selectIndex"
                />
            </van-popup>
            <!--输入框-->
            <input v-if="type === 'input'" :type="inputType" :placeholder="placeholder" @input="input" :value="text"/>
            <!--日历-->
            <van-calendar v-if="type === 'calendar'" v-model="showDiaLog" @confirm="onConfirm"/>
            <!--tab-->
            <div class="tab" v-if="type === 'teb'">
                <div v-for="(item, index) in data" :class="index === tabSelectIndex ? 'actionTab' : ''" @click="tabChange(item, index)">{{item}}</div>
            </div>
        </div>
        <!--textarea-->
        <textarea v-if="type === 'textarea'" :placeholder="placeholder" cols="3" :value="text" @input="input"/>
    </div>
</template>

<script>
    import {Popup, Picker, Calendar } from 'vant'
    import Bus from "../bus/bus";
    export default {
        name: 'Field',
        props: {
            type: {                         //  类型 input text teb popup calendar
                type: String | Array,
                default: 'input'
            },
            title: String,                  //  左侧高亮字体
            text: String | Number,          //  右侧字体
            action: {                       //  是否显示红标*
                type: Boolean,
                default: false
            },
            data: {                         //  列表数据
                type: Array | Object,
                default: null
            },
            inputType: {                    //  当type值为input时 设置input type
                type: String,
                default: 'text'
            },
            placeholder: String,            //  默认文本
            listen: Boolean,                //  用于应对一个组件有多个监听的情况下 区分是哪个选项卡的监听
            popupInput: {                   //  popup搜索框
                type: Boolean,
                default: false
            },
            selectIndex: Number,            //  popup默认聚焦index
        },
        data() {
            return {
                //  是否显示弹窗
                showDiaLog: false,
                //  弹窗记录选择项
                renderData: this.type === 'popup' ? this.data[0] : null,
                //  用于弹窗或日期选择器 需要更改显示文本的场景
                showText: !!this.text ? this.text : this.placeholder,
                //  tab默认选中
                tabSelectIndex: 0
            }
        },
        mounted() {
            if (this.type === 'selectPeople') {
                Bus.$on('selectStaff', item => {
                    if (this.listen) {
                        console.log('选中了工程师',item)
                        this.showText = item.UserName
                        this.$emit('onMessage', item)
                    }
                })
            }
        },
        methods: {
            //  公用点击
            menuClick() {
                //  选中工程师
                if (this.type === 'selectPeople') {
                    this.$router.push('/staffSearch')
                    this.$emit('click')
                } else {
                    this.showDiaLog = true
                }
            },
            //  弹窗滚动
            onChange(picker, value) {
                this.renderData = value
            },
            //  弹窗提交
            confirm() {
                if (!!this.renderData) {
                    this.showDiaLog = false
                    this.showText = this.renderData
                    this.$emit('onMessage', this.renderData)
                }
            },
            //  输入框
            input() {
                this.$emit('onMessage', event.target.value)
            },
            //  popup输入框
            _popupInput() {
                this.$emit('input', event.target.value)
            },
            //  日历
            onConfirm(date) {
                const _Date = `${date.getFullYear()}-${date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}-${date.getDate() < 9 ? '0' + date.getDate() : date.getDate()}`
                this.showDiaLog = false
                this.showText = _Date
                this.$emit('onMessage', _Date)
            },
            //  tab
            tabChange(item, index) {
                this.tabSelectIndex = index
                this.$emit('onMessage', item)
            }
        },
        components: {
            [Popup.name]: Popup,
            [Picker.name]: Picker,
            [Calendar.name]: Calendar
        }
    }
</script>

<style scoped lang="scss">
    .Field-Box{
        border-bottom: 2px solid #F3F3F3;
        &>div{
            display: flex;
            align-items: center;
            font-size: 29px;
            height: 112px;
            color: $TEXT-DARK-COLOR;
            .title{
                font-size: 30px;
                color: $TEXT-DARK-COLOR;
            }
            &>span{
                &:first-child{
                    flex:1;
                    span{
                        color: #FF2947;
                        font-size: 44px;
                        position: absolute;
                        margin-left: 5px;
                    }
                }
                &:nth-child(2) {
                    color: $TEXT-DARK-COLOR;
                }
            }
            .popup{
                display: flex;
                align-items: center;
                color: #858585;
                img{
                    width: 32px;
                    height: 30px;
                    margin-left: 8px;
                }
            }
            input{
                min-width: 215px;
                font-size: 29px;
                text-align: right;
                &::-webkit-input-placeholder{
                    color: #858585;
                }
            }
            .action{
                color: $TEXT-DARK-COLOR;
            }
            .tab{
                display: flex;
                justify-content: flex-end;
                div{
                    min-width: 60px;
                    height: 50px;
                    background: #F3F3F3;
                    border: 2px solid #E8E8E8;
                    border-radius: 8px;
                    padding: 0 12px;
                    margin-left: 12px;
                    text-align: center;
                    line-height: 50px;
                    font-size: 26px;
                    color: #858585;
                    &:first-child{
                        margin-left: 0;
                    }
                }
                .actionTab{
                    background: $THEME-COLOR;
                    color: #fff;
                    border-color: rgba(0,0,0,0);
                }
            }
        }
        &:last-child{
            border: none;
        }
        textarea{
            font-size: 30px;
            width: 100%;
            border: none;
            resize: none;
            &::-webkit-input-placeholder{
                color: #858585;
            }
        }
    }
</style>
