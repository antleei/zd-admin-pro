<script setup lang="ts">
import draggable from 'vuedraggable'

interface DataItem {
    id: number
    name: string
}
const dataList = ref<Array<DataItem>>([
    { name: '数据1', id: 1 },
    { name: '数据2', id: 2 },
    { name: '数据3', id: 3 },
    { name: '数据4', id: 4 },
    { name: '数据5', id: 5 },
    { name: '数据6', id: 6 },
    { name: '数据7', id: 7 },
    { name: '数据8', id: 8 },
    { name: '数据9', id: 9 },
])
</script>

<script lang="ts">
export default {
    name: 'Draggable',
}
</script>

<template>
    <div>
        <el-card>
            <template #header>
                <div class="card-header">
                    拖拽组件
                </div>
            </template>
            <div class="card-content">
                <draggable
                    v-model="dataList"
                    class="drag-wrapper"
                    item-key="id"
                    animation="300"
                    ghost-class="sortable-ghost"
                    chosen-class="sortable-chosen"
                    drag-class="sortable-drag"

                    force-fallback="true"
                >
                    <template #item="{ element }">
                        <div :class="`item` + ` ` + `item-${element.id}`">
                            {{ element.id }}
                        </div>
                    </template>
                </draggable>

                <pre class="data-src">
                    {{ dataList }}
                </pre>
            </div>
        </el-card>
    </div>
</template>

<style lang="scss" scoped>
    .card-content {
        display: flex;

        .drag-wrapper, .data-src {
            flex: 1;
        }

        .drag-wrapper {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 100px);
            grid-gap: 10px;
            .item {
                display: flex;
                justify-content: center;
                align-items: center;
                user-select: none;
                border: 1px solid var(--gray-300);
            }
            .sortable-chosen, .sortable-ghost {
                background-color: var(--gray-100);

                .dark & {
                    background-color: var(--gray-800);
                }
            }

             .sortable-drag {
                background-color: var(--gray-100);
                border: solid 2px var(--theme-color);
            }
        }
    }
</style>
