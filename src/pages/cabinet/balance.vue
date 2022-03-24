<script lang="ts" setup>
definePageMeta({
  middleware: ["auth"]
})
</script>

<template>
    <NuxtLayout name="cabinet">
        <template #breadcrumb>
            <QBreadcrumb
                :titles="['Кабинет', 'Баланс']"
                class="text-black tracking-tighter text-sm"
            />
        </template>

        <div class="cabinet__content p-20px h-full grid grid-rows-[auto_auto_1fr] gap-5px">Баланс</div>
    </NuxtLayout>
</template>