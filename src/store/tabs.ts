import { defineStore } from 'pinia'
import type { LocationQuery, RouteLocationNormalized } from 'vue-router'

export interface TabItem {
    name: string
    title: string
    fullPath: string
    query?: LocationQuery
    params?: { [key: string]: string | number }
    ignoreCache?: boolean
}

const defaultTabs: TabItem = {
    name: 'Workplace',
    title: 'menu.dashboard.workplace',
    fullPath: '/dashboard/workplace',
}

function formatTab(route: RouteLocationNormalized): TabItem {
    const { name, meta, fullPath, query } = route
    return {
        title: meta.title || '',
        name: String(name),
        fullPath,
        query,
        ignoreCache: meta.ignoreCache,
    }
}

export const useTabsStore = defineStore('tabs', () => {
    const tabList = useSessionStorage<TabItem[]>('tabs', [defaultTabs])
    const cacheTabList = computed(() => {
        return tabList.value.filter(item => !item.ignoreCache).map(item => item.name)
    })

    function addTab(route: RouteLocationNormalized) {
        if (tabList.value.some(item => item.fullPath === route.fullPath))
            return

        tabList.value.push(formatTab(route))
    }

    function closeTab(index: number) {
        tabList.value.splice(index, 1)
    }

    function setTabList(list: TabItem[]) {
        tabList.value = list
    }

    function closeOtherTabs(index: number) {
        tabList.value = index === 0 ? [defaultTabs] : [defaultTabs, tabList.value[index]]
    }

    function closeAllTabs() {
        tabList.value = [defaultTabs]
    }

    return { tabList, cacheTabList, addTab, closeTab, setTabList, closeOtherTabs, closeAllTabs }
})
