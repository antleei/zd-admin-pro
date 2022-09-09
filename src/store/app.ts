import { defineStore } from 'pinia'

export interface GlobalConfigState {
    showTabBar: boolean
    showFooter: boolean
}

const defaultConfig: GlobalConfigState = {
    showTabBar: true,
    showFooter: true,
}

export const useAppStore = defineStore('app', () => {
    const globalConfigVisible = ref(false)
    const globalConfig = useStorage<GlobalConfigState>('globalConfig', defaultConfig)

    const getGlobalConfig = computed(() => globalConfig.value)
    const getGlobalConfigVisible = computed(() => globalConfigVisible.value)

    /**
     * 设置
     * @param config
     */
    function setGlobalConfig(config: Partial<GlobalConfigState>) {
        globalConfig.value = { ...globalConfig.value, ...config }
    }

    /**
     * 切换设置面板
     * @param visible
     */
    function toggleGlobalConfigVisible(visible: boolean) {
        globalConfigVisible.value = visible
    }

    return { getGlobalConfig, setGlobalConfig, getGlobalConfigVisible, toggleGlobalConfigVisible }
})
