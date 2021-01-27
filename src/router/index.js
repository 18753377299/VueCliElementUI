import Vue from 'vue'
import Router from 'vue-router'

// import Home from '@/components/Home.vue'
// import About from '@/components/About.vue'

Vue.use(Router)

// export default new Router({
//         routes: [
//             { path: '/home', component: Home },
//             { path: '/about', component: About },
//             { path: '/', redirect: '/home' }
//         ]
//     }
// )

export const constantRoutes = [
    /*如果想让一开始就默认选定某个路由加上下面的配置就好*/
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: () => import('@/views/riskins/RiskInsMainQuery'),
        // hidden: true
    },
    {
        path: '/assetbuy',
        component: () => import('@/views/asset/RiskAssetBuyApply'),
        // hidden: true
    },
    {
        path: '/role',
        component: () => import('@/views/asset/role'),
        // hidden: true
    },

    // {
    //     path: '/dashboard',
    //     component: Layout,
    //     meta: { title: '首页', icon: 'dashboard' },
    //     redirect: '/home',
    //     children: [{
    //         path: '/home',
    //         name: 'Home',
    //         component: () => import('@/views/home'),
    //         meta: {title: '首页', icon: 'dashboard'}
    //     }]
    // },
]

const createRouter = () => new Router({
    mode: 'history', // require service support
    // base: '/riskcontrol',
    scrollBehavior: () => ({y: 0}),
    routes: constantRoutes
})

const router = createRouter()

export default router