<script lang="ts" setup>
const formLayout = { xs: 24, sm: 12, md: 8, lg: 6, xl: 4 }

const filterData = reactive({
    name: '',
    status: 99,
    start_time: '',
    end_time: '',
})

const dateTimeRange = computed({
    get(): [string, string] {
        if (filterData.start_time && filterData.end_time)
            return [filterData.start_time, filterData.end_time]

        return ['', '']
    },
    set(val: [string, string]) {
        filterData.start_time = val ? val[0] : ''
        filterData.end_time = val ? val[1] : ''
    },
})

const statusList = [
    { label: '全部', value: 99 },
    { label: '启用', value: 1 },
    { label: '禁用', value: 0 },
]

interface User {
    date: string
    name: string
    address: string
    tag: string
}

const tableData = ref<User[]>([])

function generateData(num: number) {
    const result: User[] = []

    for (let i = 0; i < num; i++) {
        result.push({
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            tag: '家',
        })
    }
    tableData.value = result
}

generateData(20)
</script>

<script lang="ts">
export default {
    name: 'SearchTable',
}
</script>

<template>
    <el-form
        class="filter"
        :model="filterData"
    >
        <el-row :gutter="24">
            <el-col v-bind="formLayout">
                <el-form-item
                    label="姓名"
                >
                    <el-input
                        v-model="filterData.name"
                        placeholder="请输入搜索内容"
                        clearable
                    />
                </el-form-item>
            </el-col>
            <el-col v-bind="formLayout">
                <el-form-item
                    label="状态"
                >
                    <el-select
                        v-model="filterData.status"
                        placeholder="请选择"
                        clearable
                    >
                        <el-option
                            v-for="item in statusList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        />
                    </el-select>
                </el-form-item>
            </el-col>
            <el-col v-bind="formLayout">
                <el-form-item
                    label="时间选择"
                >
                    <el-date-picker
                        v-model="dateTimeRange"
                        type="datetimerange"
                        range-separator="-"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        value-format="X"
                    />
                </el-form-item>
            </el-col>
            <el-col v-bind="formLayout">
                <el-form-item>
                    <el-button
                        type="primary"
                        @click="generateData(10)"
                    >
                        10条数据
                    </el-button>
                    <el-button
                        type="primary"
                        @click="generateData(100)"
                    >
                        100条数据
                    </el-button>
                </el-form-item>
            </el-col>
        </el-row>
    </el-form>
    <div>
        <el-table :data="tableData" style="width: 100%;">
            <el-table-column
                label="序号"
                type="index"
                width="80"
                align="center"
            />
            <el-table-column
                prop="name"
                label="姓名"
                width="180"
                align="center"
            />
            <el-table-column
                prop="date"
                label="创建时间"
                width="180"
            />
            <el-table-column
                prop="address"
                label="详细地址"
            />
        </el-table>
    </div>
    <el-affix :key="tableData.length" position="bottom" :offset="0">
        <div class="pagination-wrap">
            <el-pagination
                layout="total, sizes, prev, pager, next, jumper"
                :total="1000"
            />
        </div>
    </el-affix>
</template>

<style lang="scss" scoped>
.pagination-wrap {
    background-color: #fff;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .dark & {
        background-color: var(--dark-800);
    }
}
</style>
