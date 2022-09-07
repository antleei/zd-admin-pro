<template>
    <main class="layout-main">
        <RouterView />
    </main>
</template>

<style scoped lang="scss">
    .layout-main {
        height: 100%;
        color: var(--gray-700);
        .dark & {
            color: var(--gray-200);
        }
    }
</style>
