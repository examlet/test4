<script lang="ts" setup></script>

<template>
    <NuxtLayout name="cabinet">
        <template #breadcrumb>
            <QBreadcrumb :titles="['Кабинет', 'Профиль']" class="text-black tracking-tighter text-sm hidden sm:block" />
        </template>

        <div class="cabinet__content p-20px h-full grid grid-rows-[auto_auto_1fr] gap-5px">
            Мой профиль
        </div>
    </NuxtLayout>
</template>