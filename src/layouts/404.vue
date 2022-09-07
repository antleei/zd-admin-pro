<script setup lang="ts">
const router = useRouter()
</script>

<template>
    <main class="layout-main">
        <div>
            404
        </div>
        <RouterView />
        <div>
            <button @click="router.back()">
                返回
            </button>
        </div>
    </main>
</template>

<style scoped lang="scss">
    .layout-main {
        height: 100%;
        text-align: center;
        color: var(--gray-700);
        .dark & {
            color: var(--gray-200);
        }
    }
</style>
