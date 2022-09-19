<script setup lang="ts">
import type { RouteLocationNormalizedLoaded } from 'vue-router'

const isLargeScreen = useMediaQuery('(min-width: 1024px)')
const tabsStore = useTabsStore()
const appStore = useAppStore()

const transitionName = computed(() => {
    return (route: RouteLocationNormalizedLoaded) => {
        if (route.meta?.hideTransition)
            return ''
        return route.meta?.transitionName || 'fade-transform'
    }
})
</script>

<template>
    <el-container class="app-layout">
        <el-header class="layout-header">
            <AppHeader />
        </el-header>
        <el-container>
            <el-aside
                class="layout-aside"
                :class="{ 'is-collapse': !isLargeScreen }"
            >
                <el-scrollbar>
                    <AppMenu />
                </el-scrollbar>
            </el-aside>
            <el-main
                class="layout-main"
                :class="{ 'is-collapse': !isLargeScreen }"
            >
                <TabBar v-if="appStore.getGlobalConfig.showTabBar" />
                <div class="main-wrapper">
                    <RouterView v-slot="{ Component, route }">
                        <template v-if="Component">
                            <Transition
                                mode="out-in"
                                appear
                                :name="transitionName(route)"
                            >
                                <KeepAlive :include="tabsStore.cacheTabList">
                                    <component
                                        :is="Component"
                                        :key="route.fullPath"
                                    />
                                </KeepAlive>
                            </Transition>
                        </template>
                    </RouterView>
                </div>
                <AppFooter v-if="appStore.getGlobalConfig.showFooter" />
            </el-main>
        </el-container>
    </el-container>
</template>

<style scoped lang="scss">
.app-layout {
    height: 100%;
    color: var(--gray-700);

    .dark & {
        color: var(--gray-200);
    }

    .layout-header {
        width: 100%;
        height: 60px;
        background-color: #fff;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        padding: 0;

        .dark & {
            background-color: var(--dark-main);
        }
    }

    .layout-aside {
        width: 220px;
        height: 100%;
        background-color: #fff;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 99;
        padding-top: 60px;
        transition: width 0.3s ease-in-out;

        &.is-collapse {
            width: 64px;
        }
        .dark & {
            background-color: var(--dark-main);
        }
    }

    .layout-main {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        padding: 60px 0 0 220px;
        background-color: var(--gray-100);
        transition: padding 0.3s ease-in-out;

        .main-wrapper {
            flex: 1;
            margin: 12px;
        }

        &.is-collapse {
            padding-left: 64px;
        }

        .dark & {
            background-color: var(--dark-800);
        }
    }
}
</style>
