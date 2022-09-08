<script setup lang="ts">

</script>

<template>
    <el-affix :offset="60">
        <div class="tab-bar-wrap">
            111
        </div>
    </el-affix>
</template>

<style scoped lang="scss">
.tab-bar-wrap {
    background-color: #fff;
    height: 32px;
    flex-shrink: 0;

    .dark & {
        background-color: var(--dark-main);
    }
}
</style>
