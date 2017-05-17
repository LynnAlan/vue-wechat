<template>
    <div class="my">
        <page-header right-image="0" center-text="我"></page-header>
        <section class="my-content">
            <header class="my-content-header">
                <div class="header-left">
                    <img src="http://i1.piimg.com/594571/092995e67ddf365bt.jpg" alt="">
                </div><!--
            -->
                <div class="header-right">
                    <div class="fl">
                        <div>侯亮平</div>
                        <div>
                            <span>微信号：houliangping</span>
                        </div>
                    </div>

                    <div class="fr">
                        <span class="iconfont qrcode-font  icon-normal-color">&#xe630;</span>
                        <span class="right-arrow"></span>
                    </div>
                </div>
            </header>
            <article>
                <ul class="item-content">
                    <li class="item-content-list" v-for="item in listData">
                        <div>
                            <span class="icon-font" :class="item.class"></span>
                            <span>{{item.text}}</span>
                        </div>
                        <div class="right-arrow"></div>
                    </li>
                </ul>
                <ul class="item-content">
                    <li class="item-content-list">
                        <div>
                            <span class="icon-font expression"></span>
                            <span>表情</span>
                        </div>
                        <div class="right-arrow"></div>
                    </li>
                </ul>
                <ul class="item-content">
                    <li class="item-content-list">
                        <div>
                            <span class="icon-font my-setting"></span>
                            <span>设置</span>
                        </div>
                        <div class="right-arrow"></div>
                    </li>
                </ul>
            </article>
        </section>
    </div>
</template>

<script>
    import PageHeader from '@/components/widgets/PageHeader'
    export default {
        components: {
            PageHeader
        },
        data() {
            return {
                'listData': [
                    {
                        class: 'my-album',
                        text: '相册'
                    },
                    {
                        class: 'my-favorites',
                        text: '收藏'
                    },
                    {
                        class: 'my-bank-card',
                        text: '钱包'
                    },
                    {
                        class: 'my-card-package',
                        text: '卡包'
                    }
                ]
            }
        },
        computed: {},
        methods: {},
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
    .my-content {
        margin-top: 40px;
        position: absolute;
        background: #ebebeb;
        height: calc(100% - 40px);
        width: 100%;
        &-header {
            background: #fff;
            padding: 10px;
            margin-top: 10px;
            border-top: 1px solid #e8e2e2;
            border-bottom: 1px solid #e8e2e2;
            .header-left {
                display: inline-block;
                img {
                    width: 50px;
                    height: 50px;
                    border-radius: 5px;
                }
            }
            .header-right {
                margin-left: 10px;
                display: inline-block;
                vertical-align: middle;
                overflow: hidden;
                width: calc(100% - 60px);
                .fr {
                    line-height: 40px;
                    height: 40px;
                    margin-right: 5px;
                    color: #a7a7a7;
                    .qrcode-font {
                        font-size: 20px;
                    }
                }
            }

        }
        .icon-font {
            display: inline-block;
            height: 20px;
            width: 20px;
            background-size: contain;
            vertical-align: middle;
        }
    }
</style>
