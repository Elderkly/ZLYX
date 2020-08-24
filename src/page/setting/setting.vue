<template>
    <div>
        <Box title="设置">
            <div class="content">

            </div>
        </Box>
    </div>
</template>

<script>
    import Box from '@/components/commonBox/commonBox'
    export default {
        name: 'setting',
        components: {
            Box
        }
    }
</script>

<style scoped lang="scss">
    .content{
        height: 500px;
        background: $BACKGROUND-COLOR;
        width: 710px;
        margin-left: 20px;
        border-radius: 12px;
    }
</style>
