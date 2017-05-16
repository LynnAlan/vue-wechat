<template>
    <div class="message-detail">
      <page-header go-url="/" right-image="1" :center-text="msg"></page-header>
      <section class="message-detail-content">
        <ul>
          <li v-for="item in message.msg">
            <div class="left-message-text" v-if="item.type == 1">
              <span class="img"><img src="../assets/img/dakang.jpg" alt=""></span>
              <span class="text">{{item.text}}</span>
            </div>
            <div class="right-message-text"  v-if="item.type == 2">
              <span class="img"><img src="../assets/img/dakang.jpg" alt=""></span>
              <span class="text">{{item.text}}</span>
            </div>
          </li>
        </ul>
      </section>
      <footer class="message-detail-footer-list">
        <ul >
          <li>
            <i  class=" iconfont icon-font icon-normal-color">&#xe68b;</i>
          </li>
          <li>
            <input type="text" class="input-text">
          </li>
          <li>
            <i class=" iconfont icon-font icon-normal-color">&#xe603;</i>
          </li>
          <li>
            <i class=" iconfont icon-font icon-normal-color">&#xe711;</i>
          </li>
        </ul>
      </footer>
    </div>
</template>

<script>
   import PageHeader from '@/components/widgets/PageHeader'
   import {mapGetters} from 'vuex'
    export default {
        components:{
          PageHeader
        },
        data() {
            return {
                msg:"达康手机"
            }
        },
        computed: {
          ...mapGetters({
              message:'itemMessage'
          })
        },
        methods: {
            goBack(){
                this.$router.push("/");
            }
        },
        created: function () {
          console.log(1)
        },
        mounted: function () {
          console.log(2)
        },
        activated: function () {
          console.log(3)
        },
        deactivated: function () {
          console.log(4)
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
        background: #ebebeb;
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
          }
          .left-message-text{
            overflow: hidden;
            .img{
              margin-right: 10px;
              float: left;
            }
            .text{
              background: #fff;
              color: #000;
              padding: 6px;
              border-radius: 3px;
              position: relative;
              border: 1px solid #d5d5d5;
              display: inline-block;
              word-wrap:break-word;
              max-width: 67%;
              float: left;
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
              border-color:transparent #d5d5d5 transparent transparent;/*透明 灰 透明 透明 */
              left:-7px;
              top:7px;
            }
          }
          .right-message-text{
            overflow: hidden;
            .img{
              margin-left: 6px;
              float: right;
            }
            .text{
              background: #9fe75a;
              color: #000;
              padding: 6px;
              border-radius: 3px;
              position: relative;
              border: 1px solid #d5d5d5;
              max-width: 67%;
              float: right;
              margin-right: 6px;
            }
            .text:after{
              position: absolute;
              content: '';
              border-width:6px 0 6px 6px ;
              border-style:solid;
              border-color:transparent transparent transparent  #9fe75a;/*透明 灰 透明 透明 */
              right:-6px;
              top:7px;
            }
            .text:before{
              position: absolute;
              content: '';
              border-width:6px 0 6px 6px ;
              border-style:solid;
              border-color:transparent transparent transparent  #d5d5d5;/*透明 灰 透明 透明 */
              right:-7px;
              top:7px;
            }
          }

        }
      }

      &-footer-list{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 40px;
        background: #f5f5f5;
        line-height: 40px;
        ul{
          display: flex;
          justify-content:space-around;
          flex-direction: row;

          li{
            .input-text{
              height:26px;
              width:250px;
              outline: none;
              box-sizing: border-box;
              border-radius: 3px;
              position: relative;
              top: -1px;

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
