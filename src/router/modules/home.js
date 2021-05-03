

const HomeRouter = {
    path: '/Home',
    name: 'Home',
    component: ()=>import('../../views/Home.vue'),
    meta: {
        index: 1
    }
}

export default HomeRouter
