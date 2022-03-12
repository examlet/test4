<script setup lang="ts">
const props = defineProps({
    collapsed: { type: Boolean, required: true },    
    width: { type: String, required: false }
})
</script>

<template>
    <div
        class="flex-col flex h-full z-2 fixed right-0 float-left shadow-md bg-[#fff]"
        :style="{ width: `${props.collapsed ? 0 : 290}px` }"
        style="transition: 0.3s;"
    >
        <slot />
    </div>
</template>