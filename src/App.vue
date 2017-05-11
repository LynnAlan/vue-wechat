<template>
  <div id="app">
    <!--<transition name="slide" >-->
      <keep-alive>
         <router-view ></router-view>
      </keep-alive>
    <!--</transition>-->
    <page-footer></page-footer>

  </div>
</template>

<script>
import PageFooter from '@/components/PageFooter'
export default {
    name: 'app',
    components: {
      PageFooter
    },

}
</script>

<style lang="scss">
  @import "./assets/css/reset";
  @import "./assets/css/common";
  .slide-enter-active,.slide-leave-active{
    transition: .25s all ease;
    transform: translate3d(0, 0, 0);
  }

  .slide-enter,.slide-leave{
    opacity: 0;
    transform: translate3d(50%, 0, 0);
  }



</style>
