<template>
    <div class="homepage">
        <page-header right-image="2" :center-text="msgHead"></page-header>
        <div class="homepage-content">
            <header class="homepage-content-search">
                <div></div>
                <div>
                    <i class="iconfont icon-normal-color">&#xe600;</i>
                    <span class="text">搜索</span>
                </div>
                <div>
                    <i class="iconfont icon-normal-color">&#xe601;</i>
                </div>
            </header>
            <ul  v-show="showMsg != 0">
                <transition name="fade" v-for="(item,index) in userMessage">
                    <li class="homepage-content-item"  @click="goDetail(item)"  v-if="item.readStatus!=3" >
                        <article v-touch:swiperight="{'fun':rightSwiperFun,'item':index}"
                                 v-touch:swipeleft="{'fun':leftSwiperFun,'item':index}"
                                 :class="{'animate-right-swiper':index==rightSwiper,'animate-left-swiper':index==leftSwiper}">
                            <div class="head-portrait">
                                <span :class="{'warning':item.readStatus==2}" v-show="item.readStatus==2" ><span class="warin-num">1</span></span>
                                <img :src="item.headPortrait" alt="">
                            </div>
                            <div class="chat-text">
                                <div class="name">
                                    <span class="memo-name">{{item.name}}</span>
                                    <span class="time">{{item.time}}</span>
                                </div>
                                <div class="text">
                                    <span>{{item.msg[0].text}}</span>
                                </div>
                            </div>
                        </article>
                        <div class="msg-status">
                            <span class="not-read" @click="changeMessageStatus($event,item.id,item.readStatus,'change')">{{item.readStatus==2?'标为已读':'标为未读'}}</span><span class="delete" @click="changeMessageStatus($event,item.id,'3')">删除</span>
                        </div>
                    </li>
                </transition>

            </ul>
        </div>
        <!--<div @click="goMinions()">去看小黄人</div>-->
    </div>
</template>

<script>
    import PageHeader from '@/components/widgets/PageHeader'
    import {mapGetters, mapActions} from 'vuex'
    export default {
        data() {
            return {
                rightSwiper: -1,
                leftSwiper: -1,
                test:false
            }
        },
        components: {
            PageHeader
        },
        computed: {
            ...mapGetters({
                userMessage: "message"
            }),
            showMsg(){
                let arr = [];
                for(let item of this.userMessage){
                    if(item.readStatus == 1||item.readStatus == 2){
                        arr.push('');
                    }
                }
                return arr.length;
            },
            msgHead(){
                let arr = [],msg='';
                for(let item of this.userMessage){
                    if(item.readStatus == 2){
                        arr.push('');
                    }
                }
                if(arr.length == 0){
                    msg = '微信'
                }else{
                    msg = "微信(" + arr.length + ")";
                }
                return msg;
            }
        },
        methods: {
            goMinions(){
                this.$router.push("/minions");
            },
            goDetail(data){
                this.$router.push("/messagedetail");
                this.add(data);
                this.$store.dispatch('changeMessageStatus', {id:data.id,status:1});
            },
            ...mapActions({
                add: 'addMessage'
            }),
            changeMessageStatus(e, id,status,str){
                e.stopPropagation();
                if(str){
                    if(status == 1){
                        status = 2
                    }else {
                        status = 1
                    }
                }
                this.$store.dispatch('changeMessageStatus', {id,status});

            },
            rightSwiperFun(el, binding, item){
                if (this.leftSwiper != -1) {
                    this.leftSwiper = -1;
                    return;
                }
                this.rightSwiper = item;
                setTimeout(() => {
                    this.rightSwiper = -1;
                }, 1000);
            },
            leftSwiperFun(el, binding, item){
                this.leftSwiper = item;
            }

        },
        mounted() {

        }
    }
</script>

<style lang="scss" scoped>
    .homepage {
        position: absolute;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        background: #ebebeb;
        &-header {
            text-align: center;
            color: #fff;
            background: #000;
            font-size: 16px;
            height: 40px;
            line-height: 40px;
            position: fixed;
            width: 100%;
            top: 0;
            .header-add {
                background: url("../assets/img/add.png") no-repeat;
                display: inline-block;
                width: 16px;
                height: 16px;
                background-size: contain;
                vertical-align: text-bottom;
                position: absolute;
                right: 12px;
                top: 12px;
            }
            .header-add:after {
                content: '';
                width: 24px;
                display: inline-block;
                height: 24px;
            }
        }

    }

    .homepage-content {
        margin-top: 46px;
        &-search {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            background: #fff;
            border-radius: 6px;
            margin: 5px;
            padding: 1px 4px;
            .text {
                vertical-align: text-bottom;
            }
        }
        ul{
            border-bottom: 1px solid #bbbaba;
            border-top: 1px solid #bbbaba;
        }
        &-item {
            position: relative;
            margin-left: 10px;
            border-top: 1px solid #bbbaba;
            min-height: 70px;
            overflow: hidden;
            article {
                padding: 10px 0;
                position: relative;
                background: #ebebeb;
                z-index: 99;
                transform: translateX(0);
                transition: all 0.8s ease;
            }
            article.animate-left-swiper {
                transform: translateX(-144px);
            }
            .msg-status {
                position: absolute;
                right: 0;
                top: 0px;
                z-index: 1;
                height: 70px;
                line-height: 70px;
                z-index: 9;
                .not-read {
                    display: inline-block;
                    color: #fff;
                    background: #a29e9e;
                    padding: 0 15px;
                }
                .delete {
                    color: #fff;
                    display: inline-block;
                    background: red;
                    padding: 0 15px;
                }
            }
            .name {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: Center;
                .time {
                    font-size: 12px;
                    color: #bbbaba;
                }
            }
            .text {
                font-size: 14px;
                color: #bbbaba;
                overflow: hidden;
                height: 26px;
            }
            .head-portrait {
                img {
                    width: 50px;
                    height: 50px;
                    border-radius: 5px;
                    margin-right: 5px;
                }
                display: inline-block;
            }
            .chat-text {
                width: calc(100% - 70px);
                display: inline-block;
                vertical-align: top;
                margin-right: 10px;
            }


        }
        &-item:nth-of-type(1) {
            border-top: none;
        }

        .warning {
            position: absolute;
            height: 16px;
            width: 16px;
            border-radius: 50%;
            background: red;
            left: 36px;
            top: 8px;
            .warin-num{
                position: absolute;
                color: #fff;
                font-size: 12px;
                left: 4px;
                top: -3px;
            }
        }
        .fade-enter-active, .fade-leave-active {
            transition: all 0.5s ease;
        }
        .fade-enter, .fade-leave-active {
            opacity: 0;
            height: 0;
            min-height:  0;
        }
    }

</style>
