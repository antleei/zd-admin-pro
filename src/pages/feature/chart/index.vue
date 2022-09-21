<script setup lang="ts">
import { barChartOptions, lineChartOptions, pieChartOptions } from './echarts-option'
</script>

<script lang="ts">
export default {
    name: 'Chart',
}
</script>

<template>
    <div class="charts-wrapper">
        <el-row>
            <el-col>
                <Echarts
                    :option="lineChartOptions"
                    class="chart-item"
                />
            </el-col>
        </el-row>
        <el-row :gutter="12">
            <el-col :sm="12">
                <Echarts
                    :option="pieChartOptions"
                    class="chart-item"
                />
            </el-col>
            <el-col :sm="12">
                <Echarts
                    :option="barChartOptions"
                    class="chart-item"
                />
            </el-col>
        </el-row>
    </div>
</template>

<style scoped lang="scss">
.charts-wrapper {
    .el-col {
        height: 400px;
        margin-bottom: 12px;

        .chart-item {
            height: 100%;
            background-color: var(--main-bg);
        }
    }
}
</style>
