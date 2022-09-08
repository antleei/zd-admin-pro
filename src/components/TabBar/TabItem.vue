<script setup lang="ts">
import type { TabItem } from '@/store/tabs'

const { tabData, tabIndex } = defineProps<{
    tabData: TabItem
    tabIndex: number
}>()

enum Actions {
    current = 'current',
    left = 'left',
    right = 'right',
    others = 'others',
    all = 'all',
}

const route = useRoute()
const router = useRouter()
const tabsStore = useTabsStore()
const { t } = useI18n()

const disabledCurrent = computed(() => {
    return tabIndex === 0
})

const disabledLeft = computed(() => {
    return [0, 1].includes(tabIndex)
})

const disabledRight = computed(() => {
    return tabIndex === tabsStore.tabList.length - 1
})

function goPage() {
    router.push({ ...tabData })
}

function closeTab(index: number) {
    tabsStore.closeTab(tabIndex)
    if (tabData.fullPath === route.fullPath) {
        const latest = tabsStore.tabList[index - 1]
        router.push({ name: latest.name })
    }
}

function closeOtherTabs() {
    if (tabData.fullPath !== route.fullPath)
        router.push({ ...tabData })

    tabsStore.closeOtherTabs(tabIndex)
}

function closeAllTabs() {
    router.push({ name: 'Workplace' })
    tabsStore.closeAllTabs()
}

function closeLeftTabs() {
    const copyTabList = [...tabsStore.tabList]
    const currentRouteIndex = findCurrentRouteIndex()

    copyTabList.splice(1, tabIndex - 1)
    tabsStore.setTabList(copyTabList)

    if (currentRouteIndex < tabIndex)
        router.push({ ...tabData })
}

function closeRightTabs() {
    const copyTabList = [...tabsStore.tabList]
    const currentRouteIndex = findCurrentRouteIndex()

    copyTabList.splice(tabIndex + 1)
    tabsStore.setTabList(copyTabList)

    if (currentRouteIndex > tabIndex)
        router.push({ ...tabData })
}

function findCurrentRouteIndex() {
    return tabsStore.tabList.findIndex(el => el.fullPath === route.fullPath)
}

function handleActions(action: Actions) {
    switch (action) {
        case Actions.current:
            closeTab(tabIndex)
            break
        case Actions.left:
            closeLeftTabs()
            break
        case Actions.right:
            closeRightTabs()
            break
        case Actions.others:
            closeOtherTabs()
            break
        case Actions.all:
            closeAllTabs()
            break
        default:
            break
    }
}
</script>

<template>
    <div class="tab">
        <el-dropdown
            trigger="contextmenu"
            @command="handleActions"
        >
            <el-tag
                :closable="tabData.name !== 'Workplace'"
                :type="tabData.fullPath === route.fullPath ? '' : 'info'"
                @click="goPage"
                @close="closeTab(tabIndex)"
            >
                {{ t(tabData.title) }}
            </el-tag>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item
                        :command="Actions.current"
                        :disabled="disabledCurrent"
                    >
                        <i-ep-close style="margin-right: 10px;" />
                        关闭当前标签页
                    </el-dropdown-item>
                    <el-dropdown-item
                        divided
                        :command="Actions.left"
                        :disabled="disabledLeft"
                    >
                        <i-ep-back style="margin-right: 10px;" />
                        关闭左侧标签页
                    </el-dropdown-item>
                    <el-dropdown-item
                        :command="Actions.right"
                        :disabled="disabledRight"
                    >
                        <i-ep-right style="margin-right: 10px;" />
                        关闭右侧标签页
                    </el-dropdown-item>
                    <el-dropdown-item divided :command="Actions.others">
                        <i-ep-switch style="margin-right: 10px;" />
                        关闭其他标签页
                    </el-dropdown-item>
                    <el-dropdown-item :command="Actions.all">
                        <i-ep-minus style="margin-right: 10px;" />
                        关闭全部标签页
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<style scoped lang="scss">
.tab {
    margin-right: 10px;
    .el-tag {
        cursor: pointer;
        user-select: none;
    }
}
</style>
