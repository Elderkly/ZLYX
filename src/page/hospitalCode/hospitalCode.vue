<template>
    <div>
        <Box title="医院代码">
            <div class="content">
                <p>医院代码</p>
                <input type="text" placeholder="请输入" v-model="code">
            </div>
        </Box>
        <div class="footer">
            <div class="button" @click="save">保存</div>
        </div>
    </div>

</template>

<script>
    import Box from '../../components/commonBox/commonBox'
    import {Toast} from 'vant'
    export default {
        name: 'HospitalCode',
        data() {
          return {
              code: null
          }
        },
        components: {
            Box
        },
        methods: {
            save() {
                if (!!this.code) {
                    this.$store.commit('SET_USER_INFO', {...this.$store.getters.userInfo,HOSCODE: this.code})
                    this.$router.back()
                } else {
                    Toast('请正确输入医院代码')
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .content{
        background: $BACKGROUND-COLOR;
        width: 710px;
        margin: auto;
        border-radius: 12px;
        padding: 44px 40px 72px;
        box-sizing: border-box;
        p{
            color: $TEXT-DARK-COLOR;
            font-size: 29px;
            margin-bottom: 32px;
        }
        input{
            height: 112px;
            width: 600px;
            background: #F2F2F2;
            text-indent: 36px;
            font-size: 29px;
            color: $TEXT-DARK-COLOR;
            border-radius: 12px;
        }
    }
    .footer{
        position: absolute;
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
