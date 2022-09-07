<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import { useUserStore } from '@/store'

const isLargeScreen = useMediaQuery('(min-width: 1024px)')

const router = useRouter()
const userStore = useUserStore()

const ruleFormRef = $ref<FormInstance>()
const loginForm = reactive({
    username: '',
    password: '',
})

const rules = reactive<FormRules>({
    username: [
        { required: true, message: '请输入用户名' },
    ],
    password: [
        { required: true, message: '请输入密码' },
    ],
})

function handleLogin() {
    if (!ruleFormRef)
        return
    ruleFormRef.validate(async (valid, fields) => {
        if (valid) {
            await userStore.login(loginForm)

            const { redirect, ...othersQuery } = router.currentRoute.value.query
            router.replace({
                name: (redirect as string) || 'Workplace',
                query: {
                    ...othersQuery,
                },
            })
            ElMessage.success('欢迎使用')
        }
    })
}
</script>

<template>
    <div class="login-page">
        <div
            class="left-bg"
            :class="{ 'is-collapse': !isLargeScreen }"
        >
            <img src="/src/assets/images/login-image.png" alt="">
        </div>

        <div class="login-main">
            <div class="tabs">
                <div class="tab-item active">
                    密码登录
                </div>
                <div class="tab-line" />
                <div class="tab-item">
                    验证码登录
                </div>
            </div>

            <el-form
                ref="ruleFormRef"
                :model="loginForm"
                :rules="rules"
                class="login-form"
            >
                <el-form-item prop="username">
                    <el-input
                        v-model="loginForm.username"
                        placeholder="请输入用户名"
                    />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        v-model="loginForm.password"
                        type="password"
                        show-password
                        placeholder="请输入密码"
                        @keydown.enter="handleLogin"
                    />
                </el-form-item>
                <div class="login-btn" @click="handleLogin">
                    登录
                </div>
            </el-form>

            <div class="login-actions">
                <div class="action-item">
                    注册账号
                </div>
                <div class="action-item">
                    忘记密码
                </div>
            </div>

            <div style="width: 320px">
                <el-divider>
                    第三方登录
                </el-divider>
            </div>

            <div class="oauth-btn-group">
                <div class="oauth-btn wechat">
                    <i-carbon-logo-wechat />
                </div>
                <i-carbon-logo-github class="github" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.login-page {
    height: 100%;
    display: flex;

    .left-bg {
        width: 418px;
        display: flex;
        background-color: #f1f6fb;
        align-items: center;

        &.is-collapse {
            display: none;
        }
        .dark & {
            background-color: #303133;
        }
    }

    .login-main {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .tabs {
            // text="2xl gray-400 dark:#303133" flex="! gap4" items-center
            font-size: 24px;
            color: var(--gray-400);
            display: flex;
            gap: 16px;
            align-items: center;

            .tab-item {
                &.active {
                    color: #303133;
                    .dark & {
                    color: var(--gray-400);
                    }
                }
            }

            .tab-line {
                width: 1px;
                height: 24px;
                background-color: #c0c4cc;
            }

            .dark & {
                color: #303133;
            }
        }

        .login-form {
            width: 320px;
            margin-top: 36px;

            .login-btn {
                width: 100%;
                height: 56px;
                background-color: var(--theme-color);
                color: #fff;
                border-radius: 28px;
                cursor: pointer;
                user-select: none;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 52px;
            }
        }

        .login-actions {
            width: 320px;
            height: 52px;
            font-size: 14px;
            color: var(--gray-400);
            display: flex;
            align-items: center;
            justify-content: space-between;

            .action-item {
                cursor: pointer;
                &:first-child {
                    color: var(--theme-color);
                }
            }
        }

        .oauth-btn-group {
            display: flex;
            gap: 24px;
            margin-top: 12px;

            .oauth-btn {
                width: 36px;
                height: 36px;
                color: #fff;
                cursor: pointer;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                &.wechat {
                    background-color: #46BB36;
                }
            }
            .github {
                width: 36px;
                height: 36px;
                cursor: pointer;
            }
        }
    }
}

:deep(.el-form-item) {
    margin-bottom: 32px;
    &.is-error {
        .el-input__wrapper {
            background: rgba(245,108,108,0.1);
        }
        .el-form-item__error {
            margin-top: 4px;
        }
    }

    .el-input {
        height: 44px;
    }
}

:deep(.el-divider) {
    .el-divider__text {
        color: #C0C4CC;
    }
}
</style>
