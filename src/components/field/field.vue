<template>
    <div class="Field-Box">
        <span class="title">{{title}} <span v-if="action">*</span></span>
        <span v-if="type === 'text'">{{text}}</span>
        <!--弹窗-->
        <div v-if="type === 'popup' || type=== 'calendar'" class="popup" @click="showDiaLog = true">
            {{showText}}
            <img src="../../assets/img/right-min.png"/>
        </div>
        <van-popup v-if="type === 'popup'" v-model="showDiaLog" position="bottom" :style="{ height: '50%', borderRadius: '10px 10px 0 0'}">
            <div class="picker-header">
                <span @click="showDiaLog = false">取消</span>
                <span @click="confirm">确定</span>
            </div>
            <van-picker
                :columns="data"
                @cancel="showPicker = false"
                @change="onChange"
                item-height="15vw"
                swipe-duration="500"
            />
        </van-popup>
        <!--输入框-->
        <input v-if="type === 'input'" :type="inputType" :placeholder="text" @input="input"/>
        <!--日历-->
        <van-calendar v-if="type === 'calendar'" v-model="showDiaLog" @confirm="onConfirm" />
    </div>
</template>

<script>
    import {Popup, Picker, Calendar } from 'vant'
    export default {
        name: 'Field',
        props: {
            type: {
                type: String | Array,
                default: 'input'
            },
            title: String,
            text: String,
            action: {
                type: Boolean,
                default: false
            },
            data: {
                type: Array | Object,
                default: null
            },
            inputType: {
                type: String,
                default: 'text'
            }
        },
        data() {
            return {
                //  是否显示弹窗
                showDiaLog: false,
                //  弹窗记录选择项
                renderData: null,
                //  用于弹窗或日期选择器 需要更改显示文本的场景
                showText: this.text
            }
        },
        methods: {
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
            //  日历
            onConfirm(date) {
                const _Date = `${date.getFullYear()}-${date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}-${date.getDate() < 9 ? '0' + date.getDate() : date.getDate()}`
                this.showDiaLog = false
                this.showText = _Date
                this.$emit('onMessage', _Date)
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
        height: 112px;
        border-bottom: 2px solid #F3F3F3;
        display: flex;
        align-items: center;
        font-size: 29px;
        color: #858585;
        .title{
            font-size: 30px;
            color: $TEXT-DARK-COLOR;
        }
        &:last-child{
            border: none;
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
    }
</style>
