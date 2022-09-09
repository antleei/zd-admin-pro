<script setup lang="ts">
import { ElMessage } from 'element-plus'

const { isFullscreen, toggle } = useFullscreen()
const userStore = useUserStore()
const appStore = useAppStore()
const router = useRouter()
const { t, locale } = useI18n()

async function switchRoles() {
    const res = await userStore.switchRoles()

    router.push('/')
    ElMessage.success(`切换角色成功：${res}`)
}

async function handleCommand(command: string) {
    switch (command) {
        case 'switchRoles':
            switchRoles()
            break
        case 'logout':
            await userStore.logout()
            router.push('/login')
            break
        default:
            break
    }
}

function toggleLocales() {
    locale.value = locale.value === 'zh-CN' ? 'en' : 'zh-CN'
    localStorage.setItem('locale', locale.value)

    ElMessage.success(t('system.switchLocalTips', { locale: locale.value }))
}
</script>

<template>
    <div class="app-header">
        <h1 class="app-logo">
            <img src="/src/assets/images/logo.svg" alt="">
            <div class="app-title">
                Zd Admin Pro
            </div>
        </h1>
        <div class="right-side">
            <div
                :key="userStore.userInfo.role"
                class="icon-btn-group"
            >
                <button class="icon-btn" @click="toggleDark()">
                    <i-carbon-moon v-if="isDark" />
                    <i-carbon-sun v-else />
                </button>
                <button class="icon-btn" @click="toggleLocales()">
                    <i-carbon-language />
                </button>
                <button class="icon-btn" @click="toggle">
                    <i v-if="isFullscreen" class="iconfont icon-a-122-tuichuquanping" />
                    <i v-else class="iconfont icon-quanping" />
                </button>
                <button
                    v-permission="['admin']"
                    class="icon-btn"
                    @click="appStore.toggleGlobalConfigVisible(true)"
                >
                    <i-ep-setting />
                </button>
            </div>

            <el-dropdown
                trigger="click"
                @command="handleCommand"
            >
                <el-avatar
                    :size="32"
                    :src="userStore.userInfo.avatar"
                />
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="switchRoles">
                            <i-ep-switch style="margin-right: 12px" />
                            切换角色
                        </el-dropdown-item>
                        <el-dropdown-item command="logout">
                            <i-ep-switch-button style="margin-right: 12px" />
                            退出登录
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<style scoped lang="scss">
.app-header {
    height: 100%;
    display: flex;
    padding: 0 20px;
    justify-content: space-between;
    border-bottom: 1px solid var(--gray-200);

    .dark & {
        border-bottom-color: var(--dark-700);
    }

    .app-logo {
        display: flex;
        align-items: center;
        gap: 8px;

        img {
            width: 32px;
        }
        .app-title {
            font-size: 18px;
            font-weight: 500;
        }
    }

    .right-side {
        display: flex;
        align-items: center;
        gap: 24px;

        .icon-btn-group {
            display: flex;
            gap: 24px;

            .icon-btn {
                width: 32px;
                height: 32px;
                background-color: transparent;
                font-size: 0.9em;
                opacity: 0.75;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid var(--gray-200);
                cursor: pointer;
                transition: all 0.2s ease-in-out;
                outline: none!important;
                &:hover {
                    opacity: 1;
                }
            }
            .dark & {
                .icon-btn {
                    border-color: var(--dark-700);
                }
            }
        }
    }
}
</style>

