import type { AppRouteRecordRaw } from '../types'

const featureRoutes: AppRouteRecordRaw = {
    path: '/feature',
    name: 'Feature',
    meta: {
        title: 'menu.feature',
        icon: 'icon-feature',
        requiresAuth: true,
        roles: ['*'],
        sort: 2,
    },
    redirect: '/feature/editor',
    children: [
        {
            path: 'editor',
            name: 'Editor',
            component: () => import('@/pages/feature/editor/index.vue'),
            meta: {
                title: 'menu.feature.editor',
                requiresAuth: true,
                roles: ['*'],
            },
        },
        {
            path: 'chart',
            name: 'Chart',
            component: () => import('@/pages/feature/chart/index.vue'),
            meta: {
                title: 'menu.feature.chart',
                requiresAuth: true,
                roles: ['*'],
            },
        },
        {
            path: 'draggable',
            name: 'Draggable',
            component: () => import('@/pages/feature/draggable/index.vue'),
            meta: {
                title: 'menu.feature.draggable',
                requiresAuth: true,
                roles: ['*'],
            },
        },
        {
            path: 'map',
            name: 'AMap',
            component: () => import('@/pages/feature/map/index.vue'),
            meta: {
                title: 'menu.feature.map',
                requiresAuth: true,
                hideInMenu: true,
                roles: ['*'],
            },
        },
    ],
}

export default featureRoutes
