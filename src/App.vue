<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'

const { locale } = useI18n()
const currentLocale = computed(() => {
    return locale.value === 'zh-CN' ? zhCn : en
})
</script>

<template>
    <el-config-provider :locale="currentLocale">
        <RouterView />
    </el-config-provider>
</template>
