<template>
    <div class="mail-list">
      <page-header  right-image="1" center-text="通讯录"></page-header>
      <div class="mail-list-content">
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
        <ul>
          <li class="item-text">
            <span class="new-friend icon"></span>
            <span class="text">新的朋友</span>
          </li>
          <li class="item-text">
            <span class="group-chat icon"></span>
            <span class="text">群聊</span>
          </li>
          <li class="item-text">
            <span class="label-icon icon"></span>
            <span class="text">标签</span>
          </li>
          <li class="item-text">
            <span class="public-number icon"></span>
            <span class="text">公众号</span>
          </li>
        </ul>
      </div>
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

<style lang="scss" scoped="">
  $font-size-max:16px;
  $font-size-mid:14px;
  $font-size-min:12px;
  $font-color-normal:#666;
  $font-color-notes:#999;
  .mail-list{
    background: #ebebeb;
    position: absolute;
    width: 100%;
    height: 100%;
    &-content{
      margin-top: 46px;
      ul{
        background: #fff;
        .item-text{
          padding: 8px 0;
          font-size: 0;
          box-sizing: border-box;
          border-bottom: 1px solid #e8e2e2;
          margin-left: 10px;
          .text{
            display: inline-block;
            vertical-align: middle;
            font-size: $font-size-mid;
            margin-left: 10px;

          }

        }
      }
    }
    .icon{
      display: inline-block;
      height: 30px;
      width: 30px;
      vertical-align: middle;
    }
    .new-friend{
      background: url("../assets/img/new-friend.png") no-repeat;
      background-size: contain;
    }
    .group-chat{
      background: url("../assets/img/group-chat.png") no-repeat;
      background-size: contain;
    }
    .label-icon{
      background: url("../assets/img/label.png") no-repeat;
      background-size: contain;
    }
    .label-icon{
      background: url("../assets/img/label.png") no-repeat;
      background-size: contain;
    }
    .public-number{
      background: url("../assets/img/public-number.png") no-repeat;
      background-size: contain;
    }
    .homepage-content-search{
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
  }

</style>
