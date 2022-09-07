import type { App } from 'vue'
import { createI18n } from 'vue-i18n'

import zhCN from '@/locales/zh-CN'
import en from '@/locales/en'

const defaultLocale = localStorage.getItem('locale') || 'zh-CN'

export default (app: App) => app.use(createI18n({
    legacy: false,
    locale: defaultLocale,
    messages: {
        'zh-CN': zhCN,
        'en': en,
    },
}))
