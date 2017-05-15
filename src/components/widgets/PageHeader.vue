<template>
    <div class="page-header">
        <ul>
          <li @click="goBack()" :class="{'hide-left-text':goUrl==0}">
            <span class="left-arrow"></span>
            <span>微信</span>
          </li>
          <li>
            {{centerText}}
          </li>
          <li>
            <span :class="{'right-head':rightImage==1,'right-add':rightImage==2}"></span>
          </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:{
            propD: {
                type: Number,
                default: 100
            },
            goUrl:{
                type: String,
                default:'0'
            },
            centerText:{
                type:String
            },
            rightImage:{
                type:String,
                default:''
            }

        },
        data() {
            return {}
        },
        computed: {},
        methods: {
              goBack(){
                  if(this.goUrl == ''){
                      return
                  }else {
                      this.$router.push(this.goUrl);
                  }

              }
        },
        mounted() {
            console.log(this.goBack)

        }
    }
</script>

<style lang="scss" scoped="">
  .page-header{
    .hide-left-text{
      opacity: 0;
    }
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

    }
    .right-head{
      display: inline-block;
      width: 18px;
      height: 18px;
      background: url("../../assets/img/head.png") no-repeat ;
      background-size: contain;
      vertical-align: text-bottom;
      position: relative;
      right:6px;
    }
    .right-add{
      display: inline-block;
      width: 18px;
      height: 18px;
      background: url("../../assets/img/add.png") no-repeat ;
      background-size: contain;
      vertical-align: text-bottom;
      position: relative;
      right:6px;
    }
  }
</style>
