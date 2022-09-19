import type { AppRouteRecordRaw } from '../types'

const menuRoutes: AppRouteRecordRaw = {
    path: '/menu',
    name: 'Menu',
    meta: {
        title: 'menu.menu',
        icon: 'icon-menu',
        requiresAuth: true,
        roles: ['*'],
        sort: 3,
    },
    redirect: '/menu/menu1',
    children: [
        {
            path: 'menu1',
            name: 'Menu1',
            component: () => import('@/pages/menu/menu1/index.vue'),
            redirect: '/menu/menu1/menu1-1',
            meta: {
                title: 'menu.menu.menu1',
                requiresAuth: true,
                roles: ['*'],
            },
            children: [
                {
                    path: 'menu1-1',
                    name: 'Menu11',
                    component: () => import('@/pages/menu/menu1/menu1-1/index.vue'),
                    meta: {
                        title: 'menu.menu.menu1.menu1-1',
                        requiresAuth: true,
                        roles: ['*'],
                    },
                },
                {
                    path: 'menu1-2',
                    name: 'Menu12',
                    component: () => import('@/pages/menu/menu1/menu1-2/index.vue'),
                    redirect: '/menu/menu1/menu1-2/menu1-2-1',
                    meta: {
                        title: 'menu.menu.menu1.menu1-2',
                        requiresAuth: true,
                        roles: ['*'],
                    },
                    children: [
                        {
                            path: 'menu1-2-1',
                            name: 'Menu121',
                            component: () => import('@/pages/menu/menu1/menu1-2/menu1-2-1/index.vue'),
                            meta: {
                                title: 'menu.menu.menu1.menu1-2.menu1-2-1',
                                requiresAuth: true,
                                roles: ['*'],
                            },
                        },
                        {
                            path: 'menu1-2-2',
                            name: 'Menu122',
                            component: () => import('@/pages/menu/menu1/menu1-2/menu1-2-2/index.vue'),
                            meta: {
                                title: 'menu.menu.menu1.menu1-2.menu1-2-2',
                                requiresAuth: true,
                                roles: ['*'],
                            },
                        },
                    ],
                },
                {
                    path: 'menu1-3',
                    name: 'Menu13',
                    component: () => import('@/pages/menu/menu1/menu1-3/index.vue'),
                    meta: {
                        title: 'menu.menu.menu1.menu1-3',
                        requiresAuth: true,
                        roles: ['*'],
                    },
                },
            ],
        },
        {
            path: 'menu2',
            name: 'Menu2',
            component: () => import('@/pages/menu/menu2/index.vue'),
            meta: {
                title: 'menu.menu.menu2',
                requiresAuth: true,
                roles: ['*'],
            },
        },
    ],
}

export default menuRoutes
