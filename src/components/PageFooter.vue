<template>
    <div class="footer">
      <ul>
        <li @click="goHome()">
          <!-- <router-link :to="/"> test </router-link> -->
            <div class="chat chat-active"></div>
            <div>微信</div>
        </li>
        <li>
          <div>通讯录</div>
        </li>
        <li>
          <div>发现</div>
        </li>
        <li>
          <div>我</div>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {}
        },
        computed: {},
        methods: {
            goHome(){
                this.$router.push("/");
            }

        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
  .footer{
    border-top: 1px solid #e8e2e2;// #1aac19;
    background: #f9f9f9;
    position: fixed;
    bottom: 0;
    width: 100%;
    ul{
      display: flex;
      justify-content:space-around;
      li{
        font-size: 12px;
        .chat,.chat-active{
          width: 24px;
          height: 24px;

        }
        .chat{
          background: url("../assets/img/chat.png") no-repeat;
          background-size: contain;
        }
        .chat-active{
          background: url("../assets/img/chat-active.png")no-repeat;
          background-size: contain;;
        }
      }
    }
  }

</style>
