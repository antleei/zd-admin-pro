<script setup lang="ts">
import path from 'path'
import type { RouteMeta } from 'vue-router'

const { menu, basePath = '' } = defineProps<{
    menu: childrenType
    isNest?: boolean
    basePath?: string
}>()

const { t } = useI18n()

interface childrenType {
    title: string
    path: string
    children?: childrenType[]
    meta?: RouteMeta
}

function resolvePath(routePath: string) {
    const httpReg = /^http(s?):\/\//
    if (httpReg.test(routePath) || httpReg.test(basePath))
        return routePath || basePath

    else
        return path.resolve(basePath, routePath)
}
</script>

<template>
    <el-sub-menu
        v-if="menu.children && menu.children.length > 0"
        :index="resolvePath(menu.path)"
    >
        <template #title>
            <i
                :class="`iconfont ${menu.meta?.icon}`"
            />
            <span>{{ t(menu.meta?.title as string) }}</span>
        </template>
        <MenuItem
            v-for="sub in menu.children"
            :key="sub.path"
            :menu="sub"
            :is-nest="true"
            :base-path="resolvePath(menu.path)"
        />
    </el-sub-menu>
    <el-menu-item
        v-else
        :key="menu.path"
        :index="resolvePath(menu.path)"
    >
        <i
            :class="`iconfont ${menu.meta?.icon}`"
        />
        <template #title>
            <span>{{ t(menu.meta?.title as string) }}</span>
        </template>
    </el-menu-item>
</template>

<style scoped lang="scss">
    .iconfont {
        margin-right: 16px;
    }
</style>
