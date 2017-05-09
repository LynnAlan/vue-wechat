<template>
  <div class="homepage">
    <header class="homepage-header">
      <span>微信</span>
      <span class="header-add"></span>
    </header>

    <div class="homepage-content">
      <ul class="">
        <li class="homepage-content-item">
          <div class="head-portrait">
            <img src="../assets/img/dakang.jpg" alt="">
          </div>
          <div class="chat-text">
            <div class="name">
              <span class="memo-name">达康书记</span>
              <span class="time">下午4:19</span>
            </div>
            <div class="text">
              <span>晚上好</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div @click="goPage()">gopage</div>


  </div>
</template>

<script>
  export default {
      data() {
          return {}
      },
      computed: {},
      methods: {
          goPage(){
              this.$router.push("/minions");
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
      }
  }
</script>

<style lang="scss" scoped>
  .homepage {
    &-header {
      text-align: center;
      color: #fff;
      background: #000;
      font-size: 16px;
      padding: 10px 0;
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
    margin-top: 50px;

    &-item{
      margin-left: 10px;
      border-top:1px solid #bbbaba;
      padding: 10px 0;
      .name {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .time{
          font-size: 12px;
          color: #bbbaba;
        }
      }
      .text{
          font-size: 14px;
          color: #bbbaba;
      }
      .head-portrait {
        img{
          width: 50px;
        }
        display: inline-block;
      }
      .chat-text {
        width: calc(100% - 60px);
        display: inline-block;
        vertical-align: top;
      }

    }
    &-item:last-of-type{
      border-bottom: 1px solid #bbbaba;
    }
  }

</style>
