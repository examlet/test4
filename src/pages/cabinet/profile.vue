<script lang="ts" setup>
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
                <div class="grid gap-5px p-10px">
                    <div class="h-78px w-78px mx-auto">
                        <img class="rounded-50px" :src="photo_url" />
                    </div>
                    <div class="text-sm">Имя</div>
                    <QInput placeholder="Вадим Лукин" class="h-30px w-full" />
                    <div class="text-sm">Логин</div>
                    <QInput placeholder="a1kk3" class="h-30px w-full" />
                    <div class="text-sm">Пароль</div>
                    <QInput placeholder="**********" class="h-30px w-full" />
                    <div class="text-sm">Почта</div>
                    <QInput placeholder="a1kk3@mail.ru" class="h-30px w-full" />
                    <div class="text-sm">Телефон</div>
                    <QInput placeholder="+79879999999" class="h-30px w-full" />
                    <div class="text-sm">ВКонтакте</div>
                    <QInput placeholder="vk.com/a1kk3" class="h-30px w-full" />
                    <div class="text-sm">Telegram</div>
                    <QInput placeholder="@a1kk3" class="h-30px w-full" />
                    <div class="text-sm">Google</div>
                    <QInput
                        placeholder="a1kk3@gmail.com"
                        class="h-30px w-full md:col-span-full lg:col-span-1"
                    />
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