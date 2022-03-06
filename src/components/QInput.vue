<script setup lang="ts">
const props = defineProps({
    placeholder: { type: String, required: false },
    type: { type: String, required: false },
})
</script>

<template>
    <input
        :placeholder="props.placeholder"
        :type="props.type || 'text'"
        autocomplete="false"
        class="bg-white text-left border-1 border-teal-500 rounded-sm outline-none active:outline-none px-4 py-2"
    />
</template>

<style scoped>
</style>
