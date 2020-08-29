<template>
    <div>
        <div class="flowItems" v-for="item in StepList">
            <img src="../../assets/img/step.png"/>
            <div>
                <div><span>{{item.AuditState}}</span> <span>{{item.UserCode}}</span></div>
                <p>{{item.WaitDate}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'StepModule',
        props: {
            StepList: Array
        }
    }
</script>

<style lang="scss" scoped>
    .flowItems{
        display: flex;
        padding-bottom: 50px;
        border-left: 2px dashed #DCDCDC;
        margin: 0 18px;
        img{
            width: 16px;
            height: 16px;
            position: relative;
            left: -8px;
        }
        &:last-child{
            border: none;
        }
        &>div{
            margin-left: 38px;
            flex: 1;
            position: relative;
            top: -5px;
            div{
                display: flex;
                span{
                    &:first-child{
                        color: #666;
                        font-size: 28px;
                        flex: 1;
                    }
                    &:last-child{
                        font-size: 32px;
                        color: $TEXT-DARK-COLOR;
                        font-weight: bold;
                    }
                }
            }
            p{
                font-size: 24px;
                color: #999;
                margin-top: 12px;
            }

        }
    }
</style>
