import type { AppRouteRecordRaw } from '../types'

const dashboardRoutes: AppRouteRecordRaw = {
    path: '/dashboard',
    name: 'Dashboard',
    meta: {
        title: 'menu.dashboard',
        icon: 'icon-dashboard',
        requiresAuth: true,
        roles: ['*'],
    },
    redirect: '/dashboard/workplace',
    children: [
        {
            path: 'workplace',
            name: 'Workplace',
            component: () => import('@/pages/dashboard/workplace/index.vue'),
            meta: {
                title: 'menu.dashboard.workplace',
                requiresAuth: true,
                roles: ['*'],
            },
        },
        {
            path: 'monitor',
            name: 'Monitor',
            component: () => import('@/pages/dashboard/monitor/index.vue'),
            meta: {
                title: 'menu.dashboard.monitor',
                requiresAuth: true,
                roles: ['admin'],
            },
        },
    ],
}

export default dashboardRoutes
