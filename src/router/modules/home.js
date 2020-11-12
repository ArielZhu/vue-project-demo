

const HomeRouter = {
    path: '/home',
    name: 'home',
    component: ()=>import('../../views/Home.vue'),
    meta: {
        index: 1
    }
}

export default HomeRouter