<script setup lang="ts">
import type { ECOption } from './echarts'
import echarts from './echarts'

const { option, width = '100%', height = '100%' } = defineProps<{
    width?: string
    height?: string
    option: ECOption
}>()

const chartRef = ref<HTMLElement>()
let chart: Nullable<echarts.ECharts> = null

const chartOption = computed(() => {
    return {
        ...option,
        darkMode: isDark.value,
    }
})

const styles = computed(() => {
    return {
        width,
        height,
    }
})

const resizeHandler = () => {
    if (chart) {
        chart.resize({
            animation: {
                duration: 300,
                easing: 'cubicInOut',
            },
        })
    }
}

const init = (dom: HTMLElement) => {
    if (chartRef.value) {
        chart = echarts.init(dom)
        chart.setOption(chartOption.value)
    }
}

watch(chartOption, (val) => {
    if (chart)
        chart.setOption(val)
}, { deep: true })

onMounted(() => {
    init(chartRef.value as HTMLElement)
    useEventListener(window, 'resize', useDebounceFn(resizeHandler, 200))
})

onActivated(() => {
    if (chart)
        chart.resize()
})
</script>

<template>
    <div ref="chartRef" :style="styles" />
</template>

