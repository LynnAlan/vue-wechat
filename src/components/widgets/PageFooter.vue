<template>
    <div class="footer" v-show="footerState < 5 ">
        <ul>
            <li @click="goPage('/')">
                <i class=" iconfont icon-font icon-normal-color"
                   :class="{'icon-active-color':footerState==1}">&#xe606;</i>
                <div :class="{'icon-active-color':footerState==1}">微信</div>
            </li>
            <li @click="goPage('/maillist')">
                <i class=" iconfont icon-font icon-normal-color"
                   :class="{'icon-active-color':footerState==2}">&#xe602;</i>
                <div :class="{'icon-active-color':footerState==2}">通讯录</div>
            </li>
            <li>
                <i @click="goPage('/find')" class=" iconfont icon-font icon-normal-color"
                   :class="{'icon-active-color':footerState==3}">&#xe607;</i>
                <div :class="{'icon-active-color':footerState==3}">发现</div>
            </li>
            <li>
                <i @click="goPage('/my')" class=" iconfont icon-font icon-normal-color"
                   :class="{'icon-active-color':footerState==4}">&#xe60d;</i>
                <div :class="{'icon-active-color':footerState==4}">我</div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            footerState: {
                type: Number,
                default: 1
            }
        },
        data() {
            return {}
        },
        computed: {},
        methods: {
            goPage(str){
                this.$router.push(str);
            }

        },
        mounted() {
            console.log(this.footerState)
        }
    }
</script>

<style lang="scss" scoped>
    .footer {
        border-top: 1px solid #e8e2e2; // #1aac19;
        background: #f9f9f9;
        position: fixed;
        bottom: 0;
        width: 100%;
        ul {
            display: flex;
            justify-content: space-around;
            li {
                font-size: 12px;
                text-align: center;
                margin: 6px 0;
                div {
                    line-height: 1;
                    margin-top: 4px;
                }
                .chat, .chat-active {
                    width: 24px;
                    height: 24px;

                }
                .chat {
                    background: url("../../assets/img/chat.png") no-repeat;
                    background-size: contain;
                }
                .chat-active {
                    background: url("../../assets/img/chat-active.png") no-repeat;
                    background-size: contain;;
                }
            }
        }
    }

</style>
