import Vue from 'vue'
import Router from 'vue-router'

const Test = resolve => require(['@/components/Test'], resolve)
const Minions = resolve => require(['@/components/Minions'], resolve)
const Homepage = resolve => require(['@/components/HomePage'], resolve)
const MessageDetail = resolve => require(['@/components/MessageDetail'], resolve)
const MailList = resolve => require(['@/components/MailList'], resolve)
const Find = resolve => require(['@/components/Find'], resolve)
const My = resolve => require(['@/components/My'], resolve)
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
            name: 'messageDetail',
            component: MessageDetail
        },
        {
            path: '/maillist',
            name: 'mailList',
            component: MailList
        },
        {
            path: '/find',
            name: 'find',
            component: Find
        },
        {
            path: '/my',
            name: 'my',
            component: My
        }
    ]
})
