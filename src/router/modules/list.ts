import type { AppRouteRecordRaw } from '../types'

const listRoutes: AppRouteRecordRaw = {
    path: '/list',
    name: 'List',
    meta: {
        title: 'menu.list',
        icon: 'icon-list',
        requiresAuth: true,
        roles: ['*'],
    },
    redirect: '/list/search-table',
    children: [
        {
            path: 'search-table',
            name: 'SearchTable',
            component: () => import('@/pages/list/search-table/index.vue'),
            meta: {
                title: 'menu.list.searchTable',
                requiresAuth: true,
                roles: ['*'],
            },
        },
        {
            path: 'card',
            name: 'CardList',
            component: () => import('@/pages/list/card/index.vue'),
            meta: {
                title: 'menu.list.cardList',
                requiresAuth: true,
                roles: ['*'],
            },
        },
    ],
}

export default listRoutes
