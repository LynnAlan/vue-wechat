<template>
  <div class="homepage">
    <page-header right-image="2" center-text="微信"></page-header>
    <div class="homepage-content">
      <header class="homepage-content-search" >
        <div></div>
        <div>
          <i class="iconfont icon-normal-color">&#xe600;</i>
          <span class="text">搜索</span>
        </div>
        <div>
          <i class="iconfont icon-normal-color">&#xe601;</i>
        </div>
      </header>
      <ul class="">

        <li class="homepage-content-item"  v-for="(item,index) in userMessage"  >
          <article v-touch:swiperight="{'fun':rightSwiperFun,'item':index}"  v-touch:swipeleft="{'fun':leftSwiperFun,'item':index}" :class="{'animate-right-swiper':index==rightSwiper,'animate-left-swiper':index==leftSwiper}">
              <div class="head-portrait">
                <span class="warning"></span>
                <img src="../assets/img/dakang.jpg" alt="">
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
            <span class="not-read">标为未读</span><span class="delete">删除</span>
          </div>
        </li>
      </ul>
    </div>
    <div @click="goMinions()">去看小黄人</div>
  </div>
</template>

<script>
  import PageHeader from '@/components/widgets/PageHeader'
  import {mapGetters,mapActions} from 'vuex'
  export default {
      data() {
          return {
            rightSwiper:-1,
            leftSwiper:-1
          }
      },
      components:{
          PageHeader
      },
      computed: {
          ...mapGetters({
              userMessage:"message"
          })
      },
      methods: {
          goMinions(){
              this.$router.push("/minions");
          },
          goDetail(data){
              this.$router.push("/messagedetail");
              this.add(data);
          },
          ...mapActions({
              add: 'addMessage'
          }),
          rightSwiperFun(el, binding, item){
               if(this.leftSwiper != -1){
                   this.leftSwiper = -1;
                   return;
               }
               this.rightSwiper = item;
               setTimeout(()=>{
                 this.rightSwiper = -1;
               },1000);
          },
          leftSwiperFun(el, binding, item){
            this.leftSwiper = item;
          }

      },
      mounted() {
          var str = "pydaaasdsrhksaoashgas";

          function findMinLetter(str) {

              if (!!!str && typeof(str) !== "string"){
                  return; //如果是空串或者非字符串返回
              }
              var arr = [], letter = str.split("")[0], count = 0;//arr 目标数组 内容为letter: 字母, count: 字母存在的个数, letter第一个字母(初始值), count 个数(初始值0)

              while (str.includes(letter)) {//循环如果str中含有letter, 执行以下代码, 首次肯定会往下执行
                  count++;//count++
                  str = str.replace(letter, "");//从str中删除当前letter并重新赋值给str, 从前往后
                  if (!str.includes(letter)) {//再次判断是否含有letter 如果没有执行以下代码
                      arr.push({letter: letter, count: count});//往arr中push当前letter的字母和个数
                      letter = str.split("")[0];//letter重新赋值为字符串的第一个字母
                      count = 0;//同时count重置为0
                  }
              }
              //返回一个立即执行函数 获取arr中count最少的且最先出现的字母, 输出为字符串
              return (function (arr) {
                  var letter = "", count = 0;
                  arr.forEach(function (o) {
                      if (!!!letter || count > o.count) {//这里判断 如果letter不存在(即为第一次, 非第一次均为false) 或 count > 当前循环的o.count时, 相等时也不会进入函数域赋值, 所以一定会循环到一个最少且最先出现的值
                          letter = o.letter;
                          count = o.count;
                      }
                  });
                  console.dir(arr);
                  console.log("最少且最靠前的字符为: " + letter + ", 出现次数为: " + count)
                  return "最少且最靠前的字符为: " + letter + ", 出现次数为: " + count;
              })(arr);
          }
          findMinLetter(str);
          console.log(this.userMessage,'userMessage');
          console.log(this.$store.state,'this.$store.state');
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
    &-search{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items:center;
      background: #fff;
      border-radius: 6px;
      margin: 5px;
      padding: 1px 4px;
      .text{
        vertical-align: text-bottom;
      }
    }
    &-item{
      position: relative;
      margin-left: 10px;
      border-top:1px solid #bbbaba;

      article{
        padding: 10px 0;
        position: relative;
        background: #ebebeb;
        z-index: 99;
        transform: translateX(0);
        transition: all 0.8s ease;
      }
      article.animate-left-swiper{
        transform: translateX(-144px);

      }
      .msg-status{
        position: absolute;
        right: 0;
        top: 0px;
        z-index: 1;
        height: 68px;
        line-height: 68px;
        z-index: 9;
        .not-read{
          display: inline-block;
          color: #fff;
          background: #a29e9e;
          padding: 0 15px;
        }
        .delete{
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
        align-items:Center;
        .time{
          font-size: 12px;
          color: #bbbaba;
        }
      }
      .text{
          font-size: 14px;
          color: #bbbaba;
          overflow: hidden;
          height: 26px;
      }
      .head-portrait {
        img{
          width: 50px;
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
    &-item:last-of-type{
      border-bottom: 1px solid #bbbaba;
    }
    .warning{
      position: absolute;
      content: '';
      height: 6px;
      width:6px;
      border-radius: 50%;
      background: red;
      left: 46px;
      top: 8px;
    }
  }

</style>
