import Vue from 'vue'
import Router from 'vue-router'

//  登录
import Login from '@/page/login/login'

//  首页
import Home from '@/page/home/home'
//  借用列表
import BorrowList from '../page/borrowList/borrowList'

//  消息
import Message from '@/page/message/message'

//  我的
import Me from '@/page/me/me'
//  设置
import Setting from '@/page/setting/setting'
//  医院代码
import HospitalCode from '@/page/hospitalCode/hospitalCode'
//  修改密码
import ChangePassword from '@/page/changePassword/changePassword'
//  关于我们
import About from '../page/about/about'

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
        },
        {
            path: '/hospitalCode',
            name: 'HospitalCode',
            component: HospitalCode
        },
        {
            path: '/changePassword',
            name: 'ChangePassword',
            component: ChangePassword
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/borrowList',
            name: 'BorrowList',
            component: BorrowList
        },
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
