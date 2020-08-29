import Vue from 'vue'
import Router from 'vue-router'

//  登录
import Login from '@/page/login/login'

//  首页
import Home from '@/page/home/home'
//  借用列表
import BorrowList from '@/page/borrowList/borrowList'
//  借用详情
import BorrowDetails from '@/page/borrowDetails/borrowDetails'
//  归还
import GiveBack from '@/page/giveBack/giveBack'

//  消息
import Message from '@/page/message/message'
//  接单
import OrderReceiving from '@/page/orderReceiving/orderReceiving'
//  派工
import Dispatch from '@/page/dispatch/dispatch'
//  人员搜索
import StaffSearch from '@/page/staffSearch/staffSearch'
//  审批
import Examine from '@/page/examine/examine'
//  验收
import ExamineReceive from '@/page/examineReceive/examineReceive'
//  待处理/处理中
import Pending from '../page/pending/pending'
//  配件搜索
import AccessoriesSearch from '../page/accessoriesSearch/accessoriesSearch'
//  已忽略/已验收/审核未通过
import ServiceDetails from '../page/serviceDetails/serviceDetails'

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
        {
            path: '/borrowDetails',
            name: 'BorrowDetails',
            component: BorrowDetails
        },
        {
            path: '/giveBack',
            name: 'GiveBack',
            component: GiveBack
        },
        {
            path: '/orderReceiving',
            name: 'OrderReceiving',
            component: OrderReceiving
        },
        {
            path: '/dispatch',
            name: 'Dispatch',
            component: Dispatch
        },
        {
            path: '/staffSearch',
            name: 'StaffSearch',
            component: StaffSearch
        },
        {
            path: '/examine',
            name: 'Examine',
            component: Examine
        },
        {
            path: '/examineReceive',
            name: 'ExamineReceive',
            component: ExamineReceive
        },
        {
            path: '/pending',
            name: 'Pending',
            component: Pending
        },
        {
            path: '/accessoriesSearch',
            name: 'AccessoriesSearch',
            component: AccessoriesSearch
        },
        {
            path: '/serviceDetails',
            name: 'ServiceDetails',
            component: ServiceDetails
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
_Router.afterEach((to, from) => {
    //  如果是跳转到二级页面 则滚动到顶部
    if (to.name !== 'Home' && to.name !== 'Message' && to.name !== 'Me') {
        setTimeout(() => {
            const commonBox = document.querySelector('.commonBox')
            commonBox &&  commonBox.scrollIntoView({
                block: 'start'  //元素到页面顶部，其他还有 end, center
            })
        },0)
    }
})

export default _Router
