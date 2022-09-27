<script setup lang="ts">
import AMapLoader from '@amap/amap-jsapi-loader'

const map = shallowRef(null)

const initMap = () => {
    AMapLoader.load({
        // 申请好的Web端开发者Key，首次调用 load 时必填
        key: 'a71c58efa5cf80f0e01d6cbc024bb69a',
        // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        version: '2.0',
        // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        plugins: [],
    }).then((AMap) => {
        // 设置地图容器id
        map.value = new AMap.Map('map-wrapper', {
            // 是否为3D地图模式
            viewMode: '3D',
            // 初始化地图级别
            zoom: 5,
            // 初始化地图中心点位置
            center: [105.602725, 37.076636],
        })
    }).catch((e) => {
        console.log(e)
    })
}

onMounted(() => {
    initMap()
})
</script>

<script lang="ts">
export default {
    name: 'AMap',
}
</script>

<template>
    <div id="map-wrapper" />
</template>

<style scoped lang="scss">
    #map-wrapper {
        height: 100%;
    }
</style>
