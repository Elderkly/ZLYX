<template>
    <div class="StorageEquipment">
        <Box title="设备入库">
            <div class="infoBox">
                <Field title="仓库" placeholder="请输入仓库名" @onMessage="value => params1 = value"/>
                <Field title="日期" placeholder="请选择" type="calendar" @onMessage="value => params2 = value"/>
                <Field title="采购人" placeholder="请选择采购人" type="popup" :data="['user1','user2','user3']" @onMessage="value => params3 = value"/>
                <Field title="验收人" placeholder="请选择验收人" type="popup" :data="['user1','user2','user3']" @onMessage="value => params4 = value"/>
                <Field title="仓管员" placeholder="请选择仓管员" type="popup" :data="['user1','user2','user3']" @onMessage="value => params5 = value"/>
                <Field title="备注" placeholder="请输入备注内容" type="textarea" @onMessage="value => params6 = value"/>
            </div>
        </Box>
        <Footer button="提交" @change="upload"/>
    </div>
</template>

<script>
    import Box from '../..//components/commonBox/commonBox'
    import Field from '../../components/field/field'
    import Footer from '../../components/footer/footer'
    export default {
        name: 'StorageEquipment',
        components: {
            Box,
            Field,
            Footer
        },
        data() {
            return {
                params1: null,
                params2: null,
                params3: null,
                params4: null,
                params5: null,
                params6: null,
            }
        },
        methods: {
            upload() {
                console.log(this.params1,this.params2,this.params3,this.params4,this.params5,this.params6)
            }
        }
    }
</script>

<style scoped lang="scss">
    .StorageEquipment{
        padding-bottom: 112px;
    }
    .infoBox{
        padding: 0 30px;
    }
</style>
