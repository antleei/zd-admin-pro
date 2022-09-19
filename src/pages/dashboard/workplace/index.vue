<script setup lang="ts">
const userStore = useUserStore()
const { t } = useI18n()
</script>

<script lang="ts">
export default {
    name: 'Workplace',
}
</script>

<template>
    <div :key="userStore.userInfo.role">
        <el-row>
            <el-button>{{ t('workplace.button.normal') }}</el-button>
            <el-button type="danger">
                {{ t('workplace.button.danger') }}
            </el-button>
            <el-button type="primary">
                管理员和用户能看到
            </el-button>
            <el-button v-permission="['admin']" type="success">
                管理员能看到
            </el-button>
            <el-button v-permission="['user']" type="info">
                用户能看到
            </el-button>
            <el-button type="warning">
                所有人能看到
            </el-button>
        </el-row>
        <Counter :initial="0" />
        <div v-permission="['admin', 'user']" class="card-wrap">
            <el-card>
                <template #header>
                    <div class="card-header">
                        这个是管理员、用户都能看到的卡片
                    </div>
                </template>
                <div v-for="o in 4" :key="o" class="list-item">
                    {{ t('workplace.card.list') }} {{ o }}
                </div>
            </el-card>
        </div>
        <div v-permission="['admin']" class="card-wrap">
            <el-card>
                <template #header>
                    <div class="card-header">
                        这个是管理员才能看到的卡片
                    </div>
                </template>
                <div v-for="o in 4" :key="o" class="list-item">
                    {{ t('workplace.card.list') }} {{ o }}
                </div>
            </el-card>
        </div>
        <div v-permission="['admin']" class="card-wrap">
            <el-card>
                <template #header>
                    <div class="card-header">
                        这个是管理员才能看到的卡片
                    </div>
                </template>
                <div v-for="o in 4" :key="o" class="list-item">
                    {{ t('workplace.card.list') }} {{ o }}
                </div>
            </el-card>
        </div>
        <div v-permission="['admin']" class="card-wrap">
            <el-card>
                <template #header>
                    <div class="card-header">
                        这个是管理员才能看到的卡片
                    </div>
                </template>
                <div v-for="o in 4" :key="o" class="list-item">
                    {{ t('workplace.card.list') }} {{ o }}
                </div>
            </el-card>
        </div>
        <div v-permission="['admin']" class="card-wrap">
            <el-card>
                <template #header>
                    <div class="card-header">
                        这个是管理员才能看到的卡片
                    </div>
                </template>
                <div v-for="o in 4" :key="o" class="list-item">
                    {{ t('workplace.card.list') }} {{ o }}
                </div>
            </el-card>
        </div>
        <div v-permission="['admin']" class="card-wrap">
            <el-card>
                <template #header>
                    <div class="card-header">
                        这个是管理员才能看到的卡片
                    </div>
                </template>
                <div v-for="o in 4" :key="o" class="list-item">
                    {{ t('workplace.card.list') }} {{ o }}
                </div>
            </el-card>
        </div>
        <div v-permission="['admin']" class="card-wrap">
            <el-card>
                <template #header>
                    <div class="card-header">
                        这个是管理员才能看到的卡片
                    </div>
                </template>
                <div v-for="o in 4" :key="o" class="list-item">
                    {{ t('workplace.card.list') }} {{ o }}
                </div>
            </el-card>
        </div>
        <div v-permission="['admin']" class="card-wrap">
            <el-card>
                <template #header>
                    <div class="card-header">
                        这个是管理员才能看到的卡片
                    </div>
                </template>
                <div v-for="o in 4" :key="o" class="list-item">
                    {{ t('workplace.card.list') }} {{ o }}
                </div>
            </el-card>
        </div>
        <div v-permission="['admin']" class="card-wrap">
            <el-card>
                <template #header>
                    <div class="card-header">
                        这个是管理员才能看到的卡片
                    </div>
                </template>
                <div v-for="o in 4" :key="o" class="list-item">
                    {{ t('workplace.card.list') }} {{ o }}
                </div>
            </el-card>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .card-wrap {
        margin: 12px 0;
        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .list-item {
            margin-bottom: 20px;
        }
    }
</style>

