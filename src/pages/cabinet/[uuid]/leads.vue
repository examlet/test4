<script setup lang="ts">
definePageMeta({
  middleware: ["auth"]
})
</script>

<template>
    <NuxtLayout name="uuid">
        <template #breadcrumb>
            <QBreadcrumb
                :titles="['Кабинет', 'Сообщество', 'Клиенты']"
                class="text-black tracking-tighter text-sm"
            />
        </template>
    </NuxtLayout>
</template>