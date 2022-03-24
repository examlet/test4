<script lang="ts" setup>import { storeToRefs } from 'pinia';

definePageMeta({
  middleware: ["auth"]
})

const store = useStore()

const photo_url = "https://sun9-18.userapi.com/s/v1/ig2/ZNUHd8FflAqjWD5ZaCgDp1vPNmwUYX3e9b7QUn4YBurMUCmXTY7oyFNEdU2OaDmS8oKd0Nt2FyN8qnS3F0FVExSG.jpg?size=200x200&quality=95&crop=0,0,900,900&ava=1"
</script>

<template>
    <NuxtLayout name="cabinet">
        <template #breadcrumb>
            <QBreadcrumb
                :titles="['Кабинет', 'Профиль']"
                class="text-black tracking-tighter text-sm"
            />
        </template>

        <div
            class="cabinet__content p-20px h-full grid grid-rows-[1fr_3fr] grid-cols-[1fr_auto] gap-20px"
        >
            <div class="bg-[#fff] border-1px border-[#e1e3e6] rounded p2 row-span-2 col-start-2">
                <div class="grid gap-10px p-20px">
                    <div class="h-100px w-100px mx-auto">
                        <img class="rounded-50px" :src="photo_url" />
                    </div>
                    <div class="text-sm">Отображаемое имя</div>
                    <QInput :placeholder="store.userTokenPair.username" class="h-30px w-full" />
                    <div class="text-sm">Имя пользователя</div>
                    <QInput :placeholder="store.userTokenPair.username" class="h-30px w-full" />
                    <div class="text-sm">Введите пароль</div>
                    <QInput placeholder="**********" class="h-30px w-full" />
                    <div class="text-sm">Повторите пароль</div>
                    <QInput placeholder="**********" class="h-30px w-full" />
                    <QButton class="h-40px mt-10px">Обновить</QButton>
                </div>
            </div>

            <div
                class="relative h-full bg-[#fff] border-1px border-[#e1e3e6] rounded p-10px row-start-1"
            >Показатели</div>

            <div
                class="relative h-full bg-[#fff] border-1px border-[#e1e3e6] rounded p-10px"
            >График работы</div>
        </div>
    </NuxtLayout>
</template>