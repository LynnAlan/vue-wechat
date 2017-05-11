import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Test from '@/components/Test'
import Minions from '@/components/Minions'
import Homepage from '@/components/HomePage'
import MessageDetail from '@/components/MessageDetail'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
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
