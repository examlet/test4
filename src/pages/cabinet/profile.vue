<script lang="ts" setup></script>

<template>
    <NuxtLayout name="cabinet">
        <template #breadcrumb>
            <QBreadcrumb :titles="['Кабинет', 'Профиль']" class="text-black tracking-tighter text-sm" />
        </template>

        <div class="cabinet__content p-20px h-full grid grid-rows-1 grid-cols-[1fr_auto] gap-20px">
            <div class="relative h-full bg-[#fff] border-1px border-[#e1e3e6] rounded p-10px">
                <div class="absolute left-10px right-10px top-10px bottom-10px overflow-y-auto pr-10px">
                    График работы
                </div>
            </div>

            <div class="bg-[#fff] border-1px border-[#e1e3e6] rounded p2">
                <div class="cabinet__content_control grid grid-cols-1 grid-rows-1 gap-10px">
                    <div>Фамилия</div>
                    <QInput
                        placeholder="Лукин"
                        class="h-30px w-full"
                    />
                    <div>Имя</div>
                    <QInput
                        placeholder="Вадим"
                        class="h-30px w-full"
                    />
                    <div>Отчество</div>
                    <QInput
                        placeholder="Олегович"
                        class="h-30px w-full"
                    />
                    <div>Логин</div>
                    <QInput
                        placeholder="a1kk3"
                        class="h-30px w-full"
                    />
                    <div>Пароль</div>
                    <QInput
                        placeholder="**********"
                        class="h-30px w-full"
                    />
                    <div>Почта</div>
                    <QInput
                        placeholder="a1kk3@mail.ru"
                        class="h-30px w-full"
                    />
                    <div>ВКонтакте</div>
                    <QInput
                        placeholder="vk.com/a1kk3"
                        class="h-30px w-full"
                    />
                    <div>Telegram</div>
                    <QInput
                        placeholder="@a1kk3"
                        class="h-30px w-full"
                    />
                    <div>Google</div>
                    <QInput
                        placeholder="a1kk3@gmail.com"
                        class="h-30px w-full md:col-span-full lg:col-span-1"
                    />
                    <QButton class="h-40px mt-10px">
                        Сохранить
                    </QButton>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>