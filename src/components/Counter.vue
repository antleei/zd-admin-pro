<script setup lang="ts">
const props = defineProps<{
    initial: number
}>()
const { count, inc, dec } = useCounter(props.initial)
</script>

<template>
    <div>
        <button class="inc" @click="inc()">
            +
        </button>
        {{ count }}
        <button class="dec" @click="dec()">
            -
        </button>
    </div>
</template>

<style scoped lang="scss">
.inc,.dec {
    width: 30px;
    height: 30px;
    border: 1px solid #000;
    border-radius: 4px;
    background-color: #fff;
    cursor: pointer;
    margin: 12px;
}
</style>
