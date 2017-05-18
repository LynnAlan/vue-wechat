<template>
    <div class="find">
        <page-header right-image="0" center-text="发现"></page-header>
        <section class="find-content">
            <ul class="item-content" v-for="i in itemData">
                <li class="item-content-list" v-for="item in i.item">
                    <div>
                        <span class="icon-font " :class="item.class"></span>
                        <span>{{item.text}}</span>
                    </div>
                    <div class="right-arrow"></div>
                </li>
            </ul>
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
                itemData:[
                    {
                        item:[
                            {
                                'class':'friend-circle',
                                'text':'朋友圈'
                            }
                        ]
                    },
                    {
                        item:[
                            {
                                'class':'qrcode',
                                'text':'扫一扫'
                            },
                            {
                                'class':'shake',
                                'text':'摇一摇'
                            }
                        ]
                    },
                    {
                        item:[
                            {
                                'class':'location-service',
                                'text':'附近的人'
                            },
                            {
                                'class':'bottle',
                                'text':'漂流瓶'
                            }
                        ]
                    },
                    {
                        item:[
                            {
                                'class':'shopping',
                                'text':'购物'
                            },
                            {
                                'class':'play-game',
                                'text':'游戏'
                            }
                        ]
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

    .find {
        .find-content{
            position: absolute;
            width: 100%;
            height: calc(100% - 40px);
            margin-top: 40px;
            box-sizing: border-box;
            background: #ebebeb;
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
