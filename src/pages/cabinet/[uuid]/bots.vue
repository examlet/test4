<script setup lang="ts">
definePageMeta({
  middleware: ["auth"]
})
</script>

<template>
    <NuxtLayout name="uuid">
        <template #breadcrumb>
            <QBreadcrumb
                :titles="['Кабинет', 'Сообщество', 'Боты']"
                class="text-black tracking-tighter text-sm"
            />
        </template>
    </NuxtLayout>
</template>