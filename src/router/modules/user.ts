import type { AppRouteRecordRaw } from '../types'

const userRoutes: AppRouteRecordRaw = {
    path: '/user',
    name: 'User',
    component: () => import('@/pages/user/index.vue'),
    meta: {
        title: 'menu.user',
        icon: 'icon-user',
        requiresAuth: true,
        roles: ['admin'],
        ignoreCache: true,
    },
}

export default userRoutes
