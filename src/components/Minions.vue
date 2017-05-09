<template>
  <div class="container"><!-- 容器 -->
      <div class="body"  id="droptarget" draggable="true"><!-- 身体 -->
        <div class="trousers"><!-- 裤子 -->
          <div class="condoleBelt"><!-- 吊带 -->
            <div class="left"></div>
            <div class="right"></div>
          </div>
          <div class="trousers_top"></div><!-- 裤子突出的矩形部分 -->
          <div class="pocket"></div><!-- 裤袋 -->
          <!-- 三条线 -->
          <span class="line_left"></span>
          <span class="line_right"></span>
          <span class="line_bottom"></span>
        </div>
      </div>
      <div class="hair"><!-- 头发 -->
        <span class="left_hair_one"></span>
        <span class="left_hair_two"></span>
      </div>
      <div class="eyes"><!-- 眼睛 -->
        <div class="leftEye"><!-- 左眼 -->
          <div class="left_blackEye">
            <div class="left_white"></div>
          </div>
        </div>
        <div class="rightEye"><!-- 右眼 -->
          <div class="right_blackEye">
            <div class="right_white"></div>
          </div>
        </div>
      </div>
      <div class="mouse"><!-- 嘴巴 -->
        <div class="mouse_shape"></div>
      </div>
      <div class="hands"><!-- 双手 -->
        <div class="leftHand"></div>
        <div class="rightHand"></div>
      </div>
      <div class="feet"><!-- 双脚 -->
        <div class="left_foot"></div>
        <div class="right_foot"></div>
      </div>
      <div class="groundShadow"></div><!-- 脚底阴影 -->
    <div @click="goBack()">goBack</div>
    <div>{{num}}</div>
    <div @click="changename('我是谁')">测试</div>
    <div>{{name}}</div>
  </div>
</template>

<script>
  import EventUtil from '../assets/js/util'
  import {mapGetters,mapActions } from 'vuex'
  export default {
      data() {
          return {
              num:0
          }
      },
      computed: {
          ...mapGetters([
              'name'
          ])
      },
      methods: {
          goBack(){
              this.$router.push("/");
          },
          addNum(){
              this.num = 5;
              //this.$store.dispatch('changeName', "Yangliin")
          },
          ...mapActions({
              changename:'changeName'
          })

      },
      beforeCreate(){
          //this.num = '2'

          console.log("beforeCreate");
      },
      created(){

          this.num = this.num + 1;
          console.log("created");
      },
      beforeMount(){

          this.num = this.num + ' 11';
          console.log("beforeMount");
      },
      beforeUpdate(){

          console.log("beforeUpdate");
      },
      mounted() {
          console.log(this.$store.state.state.name);

          console.log("mounted");
          let droptarget = document.getElementById("droptarget");
          EventUtil.addHandler(droptarget,"dragover",function (event) {
              EventUtil.preventDefault(event);
          })
          EventUtil.addHandler(droptarget,"dragenter",function (event) {
              EventUtil.preventDefault(event);
          })
      }
  }
</script>

<style lang="scss" scoped="">
  @import "./../assets/css/minions";
  .container{
    width: 300px;
    margin:100px auto;
    position: relative;
  }
  .body{
    position: absolute;
    width: 240px;
    height: 400px;
    border:5px solid #000;
    border-radius: 115px;
    background: rgb(249,217,70);
    overflow: hidden;
    z-index: 2;
    .trousers{
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 100px;
      border-top: 6px solid #000;
      background: rgb(32,116,160);
      .trousers_top{
        width: 160px;
        height: 60px;
        border:6px solid #000;
        border-bottom: none;
        background: rgb(32,116,160);
        position: absolute;
        bottom: 100px;
        left:34px;
      }
      .left{
        width: 100px;
        height: 16px;
        border:5px solid #000;
        background: rgb(32,116,160);
        position: absolute;
        top:-90px;
        left:-35px;
        z-index: 2;
        transform:rotate(45deg);
        &::after{
          content: '';
          background: #000;
          width: 6px;
          height: 6px;
          border-radius: 3px;
          position: absolute;
          left: 86px;
          top:5px;
        }
      }
      .right{
        width: 100px;
        height: 16px;
        border:5px solid #000;
        background: rgb(32,116,160);
        position: absolute;
        top:-90px;
        left:162px;
        z-index: 2;
        transform:rotate(135deg);
        &::after{
          content: '';
          background: #000;
          width: 6px;
          height: 6px;
          border-radius: 3px;
          position: absolute;
          left: 86px;
          top:5px;
        }
      }
      .pocket{
        width: 60px;
        height: 45px;
        border:6px solid #000;
        border-radius: 0px 0px 25px 25px;
        position: absolute;
        bottom:65px;
        left:84px;
      }
      .line_right{
        width: 30px;
        height: 30px;
        border-bottom-left-radius: 100px;
        border-bottom:6px solid #000;
        border-left:6px solid #000;
        position: absolute;
        left: 0;
        bottom:60px;
        -webkit-transform:rotate(-75deg);
      }
      .line_left{
        width: 30px;
        height: 30px;
        border-bottom-right-radius: 100px;
        border-bottom:6px solid #000;
        border-right:6px solid #000;
        position: absolute;
        right: 0;
        bottom:63px;
        -webkit-transform:rotate(75deg);
      }
      .line_bottom{
        height: 40px;
        border:3px solid #000;
        border-radius: 3px;
        position: absolute;
        left:118px;
        bottom: 0px;
      }
    }
  }
  .eyes{
    position: relative;
    z-index: 3;
    .leftEye,.rightEye{
      width: 85px;
      height: 85px;
      border-radius: 50%;
      border:6px solid #000;
      background: #fff;
      position: absolute;
      top:60px;
      left: 27px;
    }
    .leftEye{
      left: 124px;
    }
  }
  .eyes .leftEye .left_blackEye,
  .eyes .rightEye .right_blackEye{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #000;
    position: absolute;
    top:24px;
    left:22px;
  }
  .eyes .leftEye .left_blackEye .left_white,
  .eyes .rightEye .right_blackEye .right_white{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    position: absolute;
    top:7px;
    left:17px;
  }
  .eyes .leftEye .left_blackEye .left_white{
    top:4px;
    left:17px;
  }
  .eyes .leftEye:after,
  .eyes .rightEye:after{
    content: '';
    width: 28px;
    height: 18px;
    background: #000;
    position: absolute;
    left:-30px;
    top:37px;
    -webkit-transform:skewX(20deg) rotate(7deg);
  }
  .eyes .leftEye:after{
    left:89px;
    top:37px;
    -webkit-transform:skewX(-20deg) rotate(-7deg);
  }

</style>
