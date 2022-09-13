# 掌上大学后台项目

## 注意事项❗️

- 包管理器使用[pnpm](https://pnpm.js.org/)

- 如何使用element-plus的icon, 参考[ElementPlus最佳实践](https://github.com/sxzz/element-plus-best-practices/blob/db2dfc983ccda5570033a0ac608a1bd9d9a7f658/vite.config.ts#L21-L58)

    方式 1: 可以使用 `unplugin-vue-components` 插件来自动注册图标 请参阅 vite.config.ts
    ```html
    <template>
        <i-ep-apple />
        <!-- 或者 -->
        <el-icon><i-ep-circle-check /></el-icon>
    </template>
    <!-- 或者 -->

    ```
     方式 2:手动导入并注册图标组件
    ```html
    <script>
    import IconEpApple from '~icons/ep/apple'
    </script>

    <template>
        <IconEpApple />
        <!-- 或者 -->
        <el-icon>
            <IconEpApple />
        </el-icon>
    </template>
    ```

- 提交代码时，Mac如果使用nvm以及Git的GUI客户端，可能报错npm command not found，参考[这里](https://github.com/typicode/husky/issues/390#issuecomment-545855628)

```zsh
# ~/.huskyrc
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```


## 特性

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/)

- 🔥 使用 [`<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)

- 🤙🏻 默认开启 [响应性语法糖](https://vuejs.org/guide/extras/reactivity-transform.html)

- 📑 [布局系统](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)

- 📥 [API 自动加载](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 无需引入

- 📦 [组件自动化加载](https://github.com/antfu/vite-plugin-components)

- 🍍 [使用 Pinia 的状态管理](https://pinia.vuejs.org/)

- 🌍 [I18n 国际化开箱即用](https://vue-i18n.intlify.dev/)

## 运行

```bash
# 拉取代码
git clone https://github.com/antleei/zd-admin-pro

# 进入项目目录
cd zd-admin-pro

# 安装依赖
pnpm install

# 开启本地服务运行项目
pnpm run dev
```
