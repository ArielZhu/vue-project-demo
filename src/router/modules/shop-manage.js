
const shopManageRouter = {
    path: '/shop-manage',
    // component: Layout,
    redirect: '/shop-manage/shop-list',
    name: 'shopManage',
    meta: {
        title: '店铺管理',
        icon: 'list'
    },
    children: [{
        path: 'shop-list',
        // component: () => import('@/views/shop-manage/shopList.vue'),
        name: 'shopManageList',
        meta: { title: '店铺列表', noCache: false }
    },{
        path: 'add-shop',
        // component: () => import('@/views/shop-manage/addShop/index.vue'),
        name: 'shopManageList',
        meta: { title: '新增|编辑大区店铺', noCache: true },
        hidden: true
    },{
        path: 'shop-detail',
        // component: () => import('@/views/shop-manage/shopDetail/index.vue'),
        name: 'shopDetail',
        meta: { title: '店铺详情', noCache: true },
        hidden: true
    }]
}

export default shopManageRouter