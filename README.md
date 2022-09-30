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

## 更新日志
仓库地址：https://github.com/antleei/zd-admin-pro

预览地址：https://zd-admin.cyoo.cn

### 2022.09.03

推荐库

[vueuse](https://vueuse.org/)

[unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)

[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)

[vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts)

个人项目

https://github.com/unocss/unocss、windicss

https://icones.netlify.app/

https://github.com/hannoeru/vite-plugin-pages

https://github.com/antfu/vite-plugin-inspect 

### 2022.09.17

#### Features

- [x] git 提交检查（eslint检查、提交规范检查）

- [x] 多种环境变量配置 .env.development .env.preview  .env.production

- [x] 去除mock生产环境配置

- [x] unocss  去除样式配置、样式修改为style标签写法

- [x] iconfont使用本地文件

- [x] 删除unocss后的图标处理

- [x] 去除vite-plugin-pages、vite-plugin-inspect

- [x] element图标自动导入 element-plus icons的最佳实践 https://github.com/sxzz/element-plus-best-practices  unplugin-icons
    https://github.com/sxzz/element-plus-best-practices/blob/db2dfc983ccda5570033a0ac608a1bd9d9a7f658/vite.config.ts#L21-L58
- [ ] api封装改进

- [x] 全局设置抽屉

- [x] 菜单滚动条优化

- [x] 国际化

- [x] 添加页面导航tab标签

- [x] 列表页面布局

#### 标签页设计

● 什么时候添加记录

● 删除记录跳转到哪

1. 什么时候记录路由，存放到哪里
  路由改变时记录路由，存放在pinia中，刷新页面也要保持路由的存放，同时存放一份在sessionStorage
2. 切换标签时，是否可以缓存
  在路由配置中自定义增加ignoreCache配置，使用keep-alive
3. 关闭标签时，路由跳转
  若关闭的不是当前标签，则直接关闭，不跳转；若关闭的是当前标签，关闭然后跳转至最后一个标签的路由下。

#### 问题
● keep-alive  includes问题 显示声明组件name
● 国际化的模块化处理、vscode设置优化、使用变量、参数
● 固定表头问题，fixed问题

#### 插件推荐

antfu.iconify
lokalise.i18n-ally

### 2022.09.30

#### Features

- [x] 路由动画、基于路由进行配置

- [x] 图标库使用：iconfont、unplugin-icons

- [x] echarts、富文本、拖动排序

​	  ○ 暗色模式、i18n联动

​	  ○ https://www.wangeditor.com/ - 基于slate、中文社区及文档比较友好

​	  ○ https://github.com/ckeditor/ckeditor5

​	  ○ https://mp.weixin.qq.com/s/IbXy_2fAiMbICyIfRM6Ypw

​	  ○ https://github.com/marsprince/slate-vue
#### 组件库创建
参考element-plus

组件库规范：色彩、交互等等； 主题、暗色模式

monorepo实践 单一代码库  npm版本依赖统一
https://github.com/element-plus/element-plus/blob/dev/docs/package.json

● scss、BEM规范、theme-chalk https://juejin.cn/post/7145113345765408798

● 主体包 - packages

● 文档 - vitepress

● 单元测试 - vitest

● playground - 可以没有

● 配套的工具链

● 完整的类型支持

#### 问题
路由过渡动画

i18n 生产环境format问题 {index}
echarts响应式对象有些组件不生效 比如： tooltip

#### 建议
引入新的包后，打包进行测试

