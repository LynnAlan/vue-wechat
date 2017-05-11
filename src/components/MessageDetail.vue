<template>
    <div class="message-detail">
      <header class="message-detail-header">
        <ul>
          <li @click="goBack()">
            <span class="left-arrow"></span>
            <span>微信</span>
          </li>
          <li>
            大康书记
          </li>
          <li>
            <span class="right-head"></span>
          </li>
        </ul>
      </header>
      <section class="message-detail-content">
        <ul>
          <li class="left-message-text">
            <span class="img"><img src="../assets/img/dakang.jpg" alt=""></span>
            <span class="text">这是一个测试数据</span>
          </li>
          <li class="right-message-text">

            <span class="text">这是一个测试数据</span>
            <span class="img"><img src="../assets/img/dakang.jpg" alt=""></span>
          </li>
        </ul>
      </section>
      <footer></footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        computed: {},
        methods: {
            goBack(){
                this.$router.push("/");
            }
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped="">
  .message-detail{
      &-header{
        z-index: 99;
        background: #000;
        color: #fff;
        font-size: 16px;
        height: 40px;
        line-height: 40px;
        position: fixed;
        width: 100%;
        top: 0;
        ul{
           display: flex;
           justify-content:space-between;
           li:nth-last-child(3){
             position: relative;
             left: 10px;
             font-size: 14px;
           }
          li:nth-last-of-type(1){

          }
        }

      }

      &-content{
        background: #efefef;
        margin-top: 40px;
        height: calc(100% - 40px);
        position: absolute;
        width: 100%;
        ul{
          padding: 5px 12px;
          li{
            margin: 10px 0;
          }
          img{
            display: inline-block;
            height: 40px;
            width: 40px;
          }
          .left-message-text{
            .img{
              margin-right: 6px;
            }
            .text{
              background: #fff;
              color: #000;
              padding: 6px;
              border-radius: 3px;
              position: relative;
              border: 1px solid #bbb8b8;
            }
            .text:after{
              position: absolute;
              content: '';
              border-width:6px 6px 6px 0;
              border-style:solid;
              border-color:transparent #fff transparent transparent;/*透明 灰 透明 透明 */
              left:-6px;
              top:7px;
            }
            .text:before{
              position: absolute;
              content: '';
              border-width:6px 6px 6px 0;
              border-style:solid;
              border-color:transparent #bbb8b8 transparent transparent;/*透明 灰 透明 透明 */
              left:-7px;
              top:7px;
            }
          }

          .right-message-text{
            .img{
              margin-left: 6px;
            }
            text-align: right;
            .text{
              background: #86f186;
              color: #000;
              padding: 6px;
              border-radius: 3px;
              position: relative;
              border: 1px solid #bbb8b8;
            }
            .text:after{
              position: absolute;
              content: '';
              border-width:6px 0 6px 6px ;
              border-style:solid;
              border-color:transparent transparent transparent  #86f186;/*透明 灰 透明 透明 */
              right:-6px;
              top:7px;
            }
            .text:before{
              position: absolute;
              content: '';
              border-width:6px 0 6px 6px ;
              border-style:solid;
              border-color:transparent transparent transparent  #bbb8b8;/*透明 灰 透明 透明 */
              right:-7px;
              top:7px;
            }
          }

        }
      }
  }
  .right-head{
    display: inline-block;
    width: 18px;
    height: 18px;
    background: url("../assets/img/head.png") no-repeat ;
    background-size: contain;
    vertical-align: text-bottom;
    position: relative;
    right:6px;
  }


</style>
