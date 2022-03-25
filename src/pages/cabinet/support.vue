<script lang="ts" setup>
</script>

<template>
    <NuxtLayout name="cabinet">
        <template #breadcrumb>
            <QBreadcrumb
                :titles="['Кабинет', 'Поддержка']"
                class="text-black tracking-tighter text-sm"
            />
        </template>

        <div class="cabinet__content p-20px h-full grid grid-rows-[auto_auto_1fr] gap-5px">Поддержка</div>
    </NuxtLayout>
</template>