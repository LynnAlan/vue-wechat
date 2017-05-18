<template>
    <div id="app">
        <transition name="fade" >
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
        <page-footer :footer-state="footerState"></page-footer>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
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
        methods: {
            ...mapActions(['changeFooterState'])
        },
        watch: {
            $route: function (val) {
                const arr = ['homepage', 'mailList', 'find', 'my'];
                if (!arr.includes(val.name)) {
                    this.changeFooterState(6)
                } else {
                    let ind = arr.indexOf(val.name) + 1;
                    this.changeFooterState(ind)
                }
            }
        }

    }
</script>

<style lang="scss">
    @import "./assets/css/reset";
    @import "./assets/css/common";
    #app{
        position: absolute;
        background: #ebebeb;
        width: 100%;
        height: 100%;
    }
    .fade-enter-active, .fade-leave-active {
        /*transform: translateX(0);*/
        transition:all .25s ease;
    }
    .fade-enter{
        transform: translateX(30%);
    }
    .fade-leave-active{
        opacity: 0;
    }


</style>
