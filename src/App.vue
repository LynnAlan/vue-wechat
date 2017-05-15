<template>
  <div id="app">
    <!--<transition name="slide" >-->
      <keep-alive>
         <router-view ></router-view>
      </keep-alive>
    <!--</transition>-->
    <page-footer :footer-state="footerState"></page-footer>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
import PageFooter from '@/components/widgets/PageFooter'
export default {
    name: 'app',
    components: {
      PageFooter
    },
    computed: {
      ...mapGetters([
         'footerState'
      ])
    },
    methods:{
      ...mapActions(['changeFooterState'])
    },
    watch: {
      $route:function (val) {
         const arr = ['homepage'];
         if(!arr.includes(val.name)){
            this.changeFooterState(false)
         }else{
           this.changeFooterState(true)
         }
      }
    }

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
