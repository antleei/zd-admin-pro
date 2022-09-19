<script setup lang="ts">

</script>

<script lang="ts">
export default {
    name: 'User',
}
</script>

<template>
    <div>
        <div>用户中心</div>
        <div>不缓存页面</div>
        <div>使用element过渡的页面</div>
        <Counter :initial="0" />
    </div>
</template>
