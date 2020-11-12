import {createRouter, createWebHashHistory} from 'vue-router'
import HomeRouter from "./modules/home";
import shopManageRouter from './modules/shop-manage';


const BusinessRouter = {
    HomeRouter,
    shopManageRouter
}


const router = createRouter({
    history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        ...BusinessRouter
    ]
})

export default router
