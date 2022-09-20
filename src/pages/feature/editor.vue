<script setup lang="ts">
const richTextValue = ref('')

// 模拟数据请求异步获取内容
onMounted(() => {
    setTimeout(() => {
        richTextValue.value = '<p>我是模拟数据请求异步设置的内容</p>'
    }, 1500)
})
</script>

<script lang="ts">
export default {
    name: 'Editor',
}
</script>

<template>
    <div class="editor-wrapper">
        <RichTextEditor
            v-model="richTextValue"
            class="editor"
        />
        <el-card class="preview">
            <template #header>
                <div class="card-header">
                    v-model 绑定的值
                </div>
            </template>
            <div v-html="richTextValue" />
        </el-card>
    </div>
</template>

<style scoped lang="scss">
.editor-wrapper {
    display: flex;
    height: 100%;
    gap: 20px;
    .editor {
        flex: 1;
    }
    .preview {
        flex: 1;
    }
}
</style>
