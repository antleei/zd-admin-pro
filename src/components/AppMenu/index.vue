<script lang="ts" setup>
const route = useRoute()
const { menuTree } = $(useMenuTree())
const isLargeScreen = useMediaQuery('(min-width: 1024px)')
</script>

<template>
    <el-menu
        router
        class="app-menu"
        :collapse="!isLargeScreen"
        :default-active="route.path"
        :collapse-transition="false"
    >
        <MenuItem
            v-for="routes in menuTree"
            :key="routes.path"
            :menu="routes"
            :base-path="routes.path"
        />
    </el-menu>
</template>

<style scoped lang="scss">
.app-menu {
    --el-menu-hover-bg-color: var(--gray-100);
    --el-menu-active-color: var(--theme-color);
    --el-menu-item-height: 50px;
    user-select: none;
    border-right: 0;
    :deep(.el-menu-item.is-active) {
        background-color: var(--gray-100);
    }

    .dark & {
        --el-menu-hover-bg-color: var(--dark-600);
        :deep(.el-menu-item.is-active) {
            background-color: var(--dark-600);
        }
    }
}
</style>
