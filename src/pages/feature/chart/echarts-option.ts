import type { ECOption } from '@/components/Echarts/echarts'

export const barChartOptions: ECOption = {
    color: ['#7DC9FF'],
    xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                type: 'dashed',
            },
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
        },
    ],
}

export const lineChartOptions: ECOption = {
    darkMode: true,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985',
            },
        },
    },
    legend: {
        data: ['邮件', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
        icon: 'circle',
        top: '4%',
    },
    toolbox: {
        top: 12,
        right: 12,
        feature: {
            saveAsImage: {},
        },
    },
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '16%',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisTick: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    type: 'dashed',
                },
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '邮件',
            type: 'line',
            stack: 'Total',
            smooth: true,
            areaStyle: {
                opacity: 0.5,
            },
            emphasis: {
                focus: 'series',
            },
            data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: 'Total',
            smooth: true,
            areaStyle: {
                opacity: 0.5,
            },
            emphasis: {
                focus: 'series',
            },
            data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
            name: '视频广告',
            type: 'line',
            stack: 'Total',
            smooth: true,
            areaStyle: {
                opacity: 0.5,
            },
            emphasis: {
                focus: 'series',
            },
            data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
            name: '直接访问',
            type: 'line',
            stack: 'Total',
            smooth: true,
            areaStyle: {
                opacity: 0.5,
            },
            emphasis: {
                focus: 'series',
            },
            data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
            name: '搜索引擎',
            type: 'line',
            stack: 'Total',
            smooth: true,
            label: {
                show: true,
                position: 'top',
            },
            areaStyle: {
                opacity: 0.5,
            },
            emphasis: {
                focus: 'series',
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
    ],
}

export const pieChartOptions: ECOption = {
    tooltip: {
        trigger: 'item',
    },
    legend: {
        top: '5%',
        left: 'center',
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            center: ['50%', '55%'],
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            selectedMode: 'single',
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2,
            },
            label: {
                show: false,
                position: 'center',
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '20',
                    fontWeight: 'bold',
                },
            },
            labelLine: {
                show: false,
            },
            data: [
                { value: 1048, name: '搜索引擎' },
                { value: 735, name: '直接访问' },
                { value: 580, name: '邮件' },
                { value: 484, name: '联盟广告' },
                { value: 300, name: '视频广告' },
            ],
        },
    ],

}
