// axios-api.js
/* 从axios-request.js内引入axiosService */
import axiosService from '@/utils/interceptors'

/* 下面是POST形式 */
export function doPost(url,data){
    return axiosService({
        url: url, /* 根据实际接口地址来写 */
        method: 'post',
        data: data
    })
}
/* 下面是GET形式 */
export function doGet(url,data){
    return axiosService({
        url: url, /* 根据实际接口地址来写 */
        method: 'get',
        params
    })
}


/* 下面是POST形式 */
// export const doPost = data => {
//     return axiosService({
//         url: '/XXXX/user/xxxx', /* 根据实际接口地址来写 */
//         method: 'post',
//         data
//     })
// }

/* 下面是GET形式 */
// export const userInfo = params=> {
//     return axiosService({
//         url: '/XXXX/user/XXXXX.action',
//         method: 'get',
//         params
//     })
// }