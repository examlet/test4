<script lang="ts" setup>
const collapsed = ref(true)
const toggle = () => collapsed.value = !collapsed.value
const target = ref(null)
onClickOutside(target, () => collapsed.value = true)
</script>

<template>
    <div @click="toggle" ref="target" class="relative">
        <slot />

        <transition name="dropdown-content">
            <div
                v-if="!collapsed"
                class="absolute -ml-40px sm:-ml-5% mt-5px w-110% bg-[#fff] rounded-sm shadow-xl border-1px border-[#e1e3e6] p-10px ml-10px items-center px-auto"
            >
                <slot name="content" />
            </div>
        </transition>
    </div>
</template>

<style scoped>
.dropdown-content-enter-active,
.dropdown-content-leave-active {
    transition: all 0.2s;
}
.dropdown-content-enter,
.dropdown-content-leave-to {
    opacity: 0;
    transform: translateY(-5px);
}
</style>