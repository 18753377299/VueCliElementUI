/*路由守卫*/

import router from './index'
// const BASE_URL = process.env.VUE_APP_MODE

router.beforeEach(async(to, from, next) => {
    console.log(to.path)
    console.log(from)
    // console.log(next)
    next()
})

router.afterEach((to, from) => {// eslint-disable-line no-unused-vars
    // ...
})