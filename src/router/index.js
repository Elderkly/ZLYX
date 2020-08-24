import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/home'
import Login from '@/page/login/login'
import Me from '@/page/me/me'
import Message from '@/page/message/message'
import Setting from '@/page/setting/setting'

Vue.use(Router)

const _Router = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/me',
            name: 'Me',
            component: Me
        },
        {
            path: '/message',
            name: 'Message',
            component: Message
        },
        {
            path: '/setting',
            name: 'Setting',
            component: Setting
        }
    ]
})

_Router.beforeEach((to, from, next) => {
    if (!localStorage.getItem('userInfo') && to.path.indexOf('login') === -1) {
        return next('/login')
    } else {
        return next()
    }
})

export default _Router
