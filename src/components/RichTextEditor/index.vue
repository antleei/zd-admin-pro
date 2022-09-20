<script setup lang="ts">
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import type { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor'
import { i18nChangeLanguage } from '@wangeditor/editor'
import { ElMessage } from 'element-plus'

const props = defineProps<{
    modelValue: string
}>()

const emit = defineEmits(['change', 'update:modelValue'])

// 内容 HTML
const valueHtml = useVModel(props, 'modelValue', emit)
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef<IDomEditor>()

// 切换语言
const { locale } = useI18n()
watchEffect(() => {
    i18nChangeLanguage(locale.value)
})

// 编辑器配置
const toolbarConfig: Partial<IToolbarConfig> = {
    excludeKeys: ['fullScreen'],
}
const editorConfig: Partial<IEditorConfig> = {
    placeholder: '请输入内容...',
    MENU_CONF: {
        uploadImage: {
            server: 'http://localhost:3000/api/upload-img',
            timeout: 60 * 1000,
            fieldName: 'custom-fileName',
            meta: { token: 'xxx', a: 100 },
            metaWithUrl: true,
            headers: { Accept: 'text/x-json' },
            maxFileSize: 10 * 1024 * 1024, // 10M
            base64LimitSize: 5 * 1024, // insert base64 format, if file's size less than 5kb

            onBeforeUpload(file: File) {
                console.log('onBeforeUpload', file)
                return file
            },
            onProgress(progress: number) {
                console.log('onProgress', progress)
            },
            onSuccess(file: File, res: any) {
                editorRef.value?.alert('上传图片成功', 'success')
                console.log('onSuccess', file, res)
            },
        },
    },
}

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null)
        return
    editor.destroy()
})

// 记录 editor 实例，重要！
const handleCreated = (editor: IDomEditor) => {
    editorRef.value = editor
}

const customAlert = (s: string, t: string) => {
    switch (t) {
        case 'success':
            ElMessage.success(s)
            break
        case 'info':
            ElMessage.info(s)
            break
        case 'warning':
            ElMessage.warning(s)
            break
        case 'error':
            ElMessage.error(s)
            break
        default:
            ElMessage.info(s)
            break
    }
}
</script>

<template>
    <el-card>
        <template #header>
            <div class="card-header">
                编辑器组件
            </div>
        </template>
        <div class="wangeditor">
            <Toolbar
                style="border-bottom: 1px solid #ccc"
                :editor="editorRef"
                :default-config="toolbarConfig"
            />
            <Editor
                v-model="valueHtml"
                style="height: 500px;"
                :default-config="editorConfig"
                @on-created="handleCreated"
                @customAlert="customAlert"
            />
        </div>
    </el-card>
</template>

<style src="@wangeditor/editor/dist/css/style.css"></style>

