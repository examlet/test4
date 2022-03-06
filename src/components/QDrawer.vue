<script setup lang="ts">
const props = defineProps({
    collapsed: { type: Boolean, required: true },    
    width: { type: String, required: false }
})
</script>

<template>
    <div
        bg-white-500
        shadow-md
        float-left
        right-0
        fixed
        z-2
        h-full
        flex
        flex-col
        :style="{ width: `${props.collapsed ? 0 : 290}px` }"
        style="transition: 0.3s;"
    >
        <slot />
    </div>
</template>

<style scoped>
</style>