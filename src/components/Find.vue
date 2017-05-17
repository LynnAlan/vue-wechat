<template>
    <div class="find">
      <page-header right-image="0" center-text="发现"></page-header>
      <ul class="item-content">
        <li class="item-content-list">
          <div>
            <span class="icon-font friend-circle"></span>
            <span>朋友圈</span>
          </div>
          <div class="right-arrow"></div>
        </li>
      </ul>
      <ul class="item-content">
        <li class="item-content-list">
          <div>
            <span class="icon-font qrcode"></span>
            <span>扫一扫</span>
          </div>
          <div class="right-arrow"></div>
        </li>
        <li class="item-content-list">
          <div>
            <span class="icon-font shake"></span>
            <span>摇一摇</span>
          </div>
          <div class="right-arrow"></div>
        </li>
      </ul>

      <ul class="item-content">
        <li class="item-content-list">
          <div>
            <span class="icon-font location-service"></span>
            <span>附近的人</span>
          </div>
          <div class="right-arrow"></div>
        </li>
        <li class="item-content-list">
          <div>
            <span class="icon-font bottle"></span>
            <span>漂流瓶</span>
          </div>
          <div class="right-arrow"></div>
        </li>
      </ul>

      <ul class="item-content">
        <li class="item-content-list">
          <div>
            <span class="icon-font shop"></span>
            <span>购物</span>
          </div>
          <div class="right-arrow"></div>
        </li>
        <li class="item-content-list">
          <div>
            <span class="icon-font play-game"></span>
            <span>游戏</span>
          </div>
          <div class="right-arrow"></div>
        </li>
      </ul>
    </div>
</template>

<script>
    import PageHeader from '@/components/widgets/PageHeader'
    export default {
        components:{
            PageHeader
        },
        data() {
            return {}
        },
        computed: {},
        methods: {},
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
  .find{
      position: absolute;
      width: 100%;
      height: calc(100% - 40px);
      margin-top: 40px;
      box-sizing: border-box;
      background: #ebebeb;
      .item-content{
        margin: 10px 0;
        background: #fff;
        border-bottom:  1px solid #e8e2e2;
        border-top: 1px solid #e8e2e2;
        &-list{
          display: flex;
          justify-content: space-between;
          margin-left: 10px;
          padding: 10px 0;
          border-bottom: 1px solid #d6d0d0;
          .right-arrow{
            margin-right: 16px;
            color: #a7a7a7;
            margin-top: 6px;
          }
        }
        &-list:nth-last-of-type(1){
          border-bottom: none;
        }
      }
      .friend-circle{
        background: url("../assets/img/friend-circle.png");
      }
      .shake{
        background: url("../assets/img/shake.png");
      }
      .qrcode{
        background: url("../assets/img/qrcode.png");
      }
      .play-game{
        background: url("../assets/img/play-game.png");
      }
      .location-service{
        background: url("../assets/img/location-service.png");
      }
      .bottle{
        background: url("../assets/img/bottle.png")
      }
      .shop{
        background: url("../assets/img/shopping.png")
      }
      .icon-font{
        display: inline-block;
        height: 20px;
        width: 20px;
        background-size: contain;
        vertical-align: middle;
      }

  }
</style>
