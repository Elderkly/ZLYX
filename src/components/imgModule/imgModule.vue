<template>
    <div class="imgModuleBox">
        <p class="title">{{title}}</p>
        <div class="imgBox">
            <img v-if="!upload" v-for="(item,index) in img" :src="img" @click="showImg(index)"/>
            <van-uploader
                v-if="upload"
                :after-read="afterRead"
                v-model="fileList"
                multiple
                :max-count="10"
                :max-size="10240 * 1024"
                @oversize="onOversize"
                @delete="_delete"
            />
        </div>
    </div>
</template>

<script>
    //  图片展示模块
    import {ImagePreview, Uploader, Toast} from 'vant'
    export default {
        name: 'ImgModule',
        props: {
            img: Array,
            title: {
                type: String | null,
                default: '图片'
            },
            upload: {
                type: Boolean,
                default: false
            }
        },
        data() {
          return {
              fileList: this.img ? this.img : [],
          }
        },
        methods: {
            showImg(index) {
                ImagePreview({
                    images: this.img,
                    startPosition: index,
                })
            },
            afterRead(file) {
                this.$emit('changeImg', this.fileList)
            },
            onOversize(file) {
                console.log(file);
                Toast('图片大小不能超过 10mb');
            },
            _delete() {
                this.$emit('changeImg', this.fileList)
            }
        },
        components: {
            [Uploader.name]: Uploader
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
