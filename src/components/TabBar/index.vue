<script setup lang="ts">
const route = useRoute()
const tabsStore = useTabsStore()

watch(
    () => route.path,
    () => {
        tabsStore.addTab(route)
    },
    { immediate: true },
)
</script>

<template>
    <el-affix :offset="60">
        <div class="tab-bar-wrap">
            <div class="tab-bar-scroll">
                <div
                    v-for="(tab, index) in tabsStore.tabList"
                    :key="tab.name"
                    class="tab-item"
                >
                    <TabItem :tab-data="tab" :tab-index="index" />
                </div>
            </div>
            <div class="action-view" />
        </div>
    </el-affix>
</template>

<style scoped lang="scss">
.tab-bar-wrap {
    display: flex;
    align-items: center;
    background-color: var(--main-bg);
    height: 32px;

    .tab-bar-scroll {
        flex: 1;
        display: flex;
        align-items: center;
        padding: 0 12px;
        overflow: auto;
        &::-webkit-scrollbar {
            display: none;
        }
    }

    .action-view {
        width: 100px;
        flex-shrink: 0;
    }
}
</style>
