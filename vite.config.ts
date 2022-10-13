import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Modules from 'vite-plugin-use-modules'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'
import VueI18n from '@intlify/vite-plugin-vue-i18n'

export default defineConfig({
    resolve: {
        alias: {
            '@/': `${path.resolve(__dirname, 'src')}/`,
            'path': 'path-browserify',
        },
    },
    css: {
        devSourcemap: true,
    },
    plugins: [
        Vue({
            reactivityTransform: true,
        }),

        // 布局系统 https://github.com/JohnCampionJr/vite-plugin-vue-layouts
        Layouts(),

        // 模块自动加载 https://github.com/dishait/vite-plugin-use-modules
        Modules(),

        // Api自动导入 https://github.com/antfu/unplugin-auto-import
        AutoImport({
            imports: [
                'vue',
                'vue/macros',
                'vue-i18n',
                'vue-router',
                '@vueuse/core',
            ],
            dirs: ['src/composables', 'src/store'],
            vueTemplate: true,
            resolvers: [
                ElementPlusResolver(),
                // 自动导入图标组件
                IconsResolver({
                    prefix: 'Icon',
                })],
            dts: 'src/auto-imports.d.ts',
        }),

        // 组件自动按需引入 https://github.com/antfu/vite-plugin-components
        Components({
            dirs: ['src/components', '**/components/'],
            resolvers: [
                ElementPlusResolver(),
                // 自动注册图标组件
                IconsResolver({
                    enabledCollections: ['ep', 'carbon'],
                }),
            ],
            dts: 'src/components.d.ts',
        }),

        Icons({
            autoInstall: true,
        }),

        // https://github.com/vbenjs/vite-plugin-mock
        viteMockServe({
            mockPath: './mock',
            ignore: /^\_/,
            localEnabled: true,
            prodEnabled: false,
            injectCode: `
                import { setupProdMockServer } from '../mock/_createProductionServer';
                setupProdMockServer();
            `,
        }),

        // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
        VueI18n({
            runtimeOnly: true,
            compositionOnly: true,
            include: [path.resolve(__dirname, 'src/locales/**')],
        }),
    ],
    test: {
        environment: 'jsdom',
    },
})
