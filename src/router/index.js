import {createRouter, createWebHistory} from 'vue-router'
import HomeRouter from "./modules/home";
import shopManageRouter from './modules/shop-manage';


const BusinessRouter = [
    HomeRouter,
    shopManageRouter
]


const router = createRouter({
    history: createWebHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [
        {
            path: '/',
            redirect: '/Home'
        },
        ...BusinessRouter
    ]
})

// 实现原理：检测url的变化，截获url地址，然后解析来匹配路由规则
// history Api
// history.pushState({{},null,'/path'),变更地址栏
// history.go() 资源重新被加载
// history.back()
// hash Api
// 其底层源码，主要是通过添加url的hash变化的监听器来实现，通过hashchange事件的触发知道hash值发生了哪些变化，
// 通过transitionTo匹配路由，并通过路由配置，跳转到新的视图组件。
// 当浏览器历史返回或者直接输入链接跳转时，会触发hashchange事件；刷新页面时不会触发hashchange，会用load事件代理
// 因为改的是hash，所以不会向服务器发送请求

// 区别：history因为没有#,所以当用户刷新页面之类的操作，浏览器还是会给服务器发送请求。
// 为了避免出现这种情况，这个实现需要服务器的支持，需要把所有路由都重定向到根页面index.html


export default router
