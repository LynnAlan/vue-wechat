<template>
  <div class="container"><!-- 容器 -->
      <div class="body"><!-- 身体 -->
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
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    computed: {},
    methods: {},
    mounted() {
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
        left:34px
      }
    }
  }

</style>
