import Vue from 'vue'
import Router from 'vue-router'

const Test = resolve => require(['@/components/Test'], resolve)
const Minions = resolve => require(['@/components/Minions'],resolve)
const Homepage = resolve =>require(['@/components/HomePage'],resolve)
const MessageDetail = resolve =>require(['@/components/MessageDetail'],resolve)
Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: Homepage
        },
        {
            path: '/minions',
            name: 'minions',
            component: Minions
        },
        {
            path: '/test',
            name: 'Test',
            component: Test
        },
        {
            path: '/messagedetail',
            name: 'MessageDetail',
            component: MessageDetail
        }
    ]
})
