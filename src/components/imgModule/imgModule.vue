<template>
    <div class="imgModuleBox">
        <p class="title">{{title}}</p>
        <div class="imgBox">
            <img v-for="(item,index) in img" :src="img" @click="showImg(index)"/>
        </div>
    </div>
</template>

<script>
    //  图片展示模块
    import {ImagePreview} from 'vant'
    export default {
        name: 'ImgModule',
        props: {
            img: Array,
            title: {
                type: String,
                default: '图片'
            }
        },
        methods: {
            showImg(index) {
                ImagePreview({
                    images: this.img,
                    startPosition: index,
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .imgModuleBox{
        background: $BACKGROUND-COLOR;
        border-radius: 12px;
        padding: 34px 38px 40px;
        box-sizing: border-box;
        margin-bottom: 20px;
        .title{
            color: $TEXT-DARK-COLOR;
            font-size: 34px;
            font-weight: bold;
            margin-bottom: 30px;
        }
        .imgBox{
            display: flex;
            flex-wrap: wrap;
            img{
                width: 106px;
                height: 106px;
                margin-right: 26px;
                border-radius: 4px;
                margin-bottom: 15px;
                &:nth-child(5n){
                    margin-right: 0;
                }
            }
        }
    }
</style>
