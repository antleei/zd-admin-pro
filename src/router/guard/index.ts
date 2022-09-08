import type { Router } from 'vue-router'
import setupUserLoginInfoGuard from './userLoginInfo'
import setupPermissionGuard from './permission'

// TODO: 设置页面标题 国际化
// function setupPageGuard(router: Router) {
//     router.afterEach((to) => {

//     })
// }

export default function createRouteGuard(router: Router) {
    // setupPageGuard(router)
    setupUserLoginInfoGuard(router)
    setupPermissionGuard(router)
}
