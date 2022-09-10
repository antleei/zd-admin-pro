<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import type { GlobalConfigState } from '@/store/app'

const appStore = useAppStore()
const { getGlobalConfig } = storeToRefs(appStore)

const visible = computed({
    get: () => appStore.getGlobalConfigVisible,
    set: val => appStore.toggleGlobalConfigVisible(val),
})

const config = ref<GlobalConfigState>({
    ...getGlobalConfig.value,
})

function handleSaveConfig() {
    appStore.setGlobalConfig(config.value)
    visible.value = false
}

function handleOpened() {
    config.value = {
        ...getGlobalConfig.value,
    }
}
</script>

<template>
    <el-drawer
        v-model="visible"
        title="全局配置"
        :size="300"
        @open="handleOpened"
    >
        <template #default>
            <div class="config-item">
                <div class="config-item__title">
                    多页签
                </div>
                <div class="config-item__content">
                    <el-switch v-model="config.showTabBar" />
                </div>
            </div>
            <div class="config-item">
                <div class="config-item__title">
                    底部
                </div>
                <div class="config-item__content">
                    <el-switch v-model="config.showFooter" />
                </div>
            </div>
        </template>
        <template #footer>
            <div style="flex: auto">
                <el-button
                    type="primary"
                    @click="handleSaveConfig"
                >
                    保存配置
                </el-button>
            </div>
        </template>
    </el-drawer>
</template>

<style lang="scss" scoped>
.config-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    font-size: 14px;
}
</style>
