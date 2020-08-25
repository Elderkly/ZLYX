<template>
    <input :type="type" :placeholder="placeholder" @focus="focusPrice"  @blur="blurPrice" :class="focus ? 'focusInput' : ''" @input="change">
</template>

<script>
    export default {
        name:'baseInput',
        props: {
            placeholder: String,
            type: {
                type: String,
                default: 'text'
            }
        },
        data() {
            return {
                focus: false
            }
        },
        methods: {
            focusPrice() {
                this.focus = true
            },
            blurPrice() {
                this.focus = false
            },
            change(e) {
                this.$emit('change',e.currentTarget.value)
            }
        }
    }
</script>

<style lang="scss" scoped>
    input{
        width: 600px;
        height: 100px;
        border-radius: 12px;
        border: 3px solid #E5E5E5;
        caret-color: #4FA69E;
        font-size: 28px;
        text-indent: 34px;
        margin-top: 17px;
        margin-bottom: 20px;
        box-sizing: border-box;
    }
    input::-webkit-input-placeholder{
        color: #AFAFAF;
    }
    .focusInput{
        border-color: #4FA69E;
    }
</style>
