<script lang="ts" setup>
const tabList = ["Мои", "Доступные", "Избранные"]
const activeTab = ref(0)

const test = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "13", "14", "15"]
const count = 11
const photo_url = "https://sun9-18.userapi.com/s/v1/ig2/ZNUHd8FflAqjWD5ZaCgDp1vPNmwUYX3e9b7QUn4YBurMUCmXTY7oyFNEdU2OaDmS8oKd0Nt2FyN8qnS3F0FVExSG.jpg?size=200x200&quality=95&crop=0,0,900,900&ava=1"
</script>

<template>
    <NuxtLayout name="cabinet">
        <div class="cabinet__content p-20px h-full grid grid-rows-[auto_auto_1fr] gap-5px">
            <div class="bg-[#fff] border-1px border-[#e1e3e6] rounded p2">
                <div
                    class="cabinet__content_control grid grid-cols-1 grid-rows-3 md:grid-rows-2 md:grid-cols-[3fr_4fr] lg:grid-rows-1 lg:grid-cols-[5fr_6fr_7fr] gap-15px lg:gap-30px"
                >
                    <QButton strong class="h-40px w-full">
                        <div class="flex items-center justify-center text-sm">
                            <div class="i-carbon-rotate-clockwise-filled mr-10px" />
                            <span class="text-base">Подключить сообщество</span>
                        </div>
                    </QButton>
                    <QTabs v-model="activeTab" :tabList="tabList" class="h-40px w-full" />
                    <QInput
                        placeholder="Найти сообщество"
                        class="h-40px w-full md:col-span-full lg:col-span-1"
                    />
                </div>
            </div>

            <div class="h-full align-middle text-center md:text-left py-3px text-[#6d7885]">
                {{ count ? `${tabList[activeTab]} сообщества: ${count}` : `${tabList[activeTab]} сообщества не найдены` }}
            </div>
            
            <div class="relative h-full bg-[#fff] border-1px border-[#e1e3e6] rounded p-10px">
                <div class="absolute left-10px right-10px top-10px bottom-10px overflow-y-auto pr-10px">
                    <div class="grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr] gap-10px">
                        <div
                            v-for="(tab, index) in test"
                            :key="index"
                            class="flex w-full h-150px border-1px border-[#e1e3e6] hover:border-[#14b8a6] rounded overflow-hidden transition-colors duration-300"
                        >
                            <div
                                class="w-40% flex-col flex-grow flex-shrink-0 bg-[#f5f7f9] pt-10px"
                            >
                                <div class="ml-10px text-[#6d7885] hover:text-[#14b8a6] cursor-pointer i-carbon-star" />

                                <div class="h-65px w-65px mx-auto">
                                    <img class="rounded-50px" :src="photo_url" />
                                </div>

                                <div class="text-center text-[#6d7885] mt-5px">@partamath</div>
                                <div class="op60 text-sm text-center fw300 mx-0">170347806</div>
                            </div>
                            <div class="w-60% py-10px px-20px !truncate">
                                <div class="text-center text-[#6d7885] overflow-ellipsis">Математика ЕГЭ | PARTA</div>

                                <div class="grid grid-cols-[1fr_1fr] mt-10px">
                                    <div class="flex items-center justify-start op60 fw300 text-sm">
                                        <div class="i-carbon-unlocked h-12px w-12px mt-3px" />
                                        <div class="ml-2px">Доступы: n</div>
                                    </div>

                                    <div class="flex items-center justify-start op60 fw300 text-sm">
                                        <div class="i-carbon-email h-12px w-12px mt-3px" />
                                        <div class="ml-2px">Сообщения: n</div>
                                    </div>

                                    <div class="flex items-center justify-start op60 fw300 text-sm">
                                        <div class="i-carbon-collaborate h-12px w-12px mt-3px" />
                                        <div class="ml-2px">Клиенты: n</div>
                                    </div>

                                    <div class="flex items-center justify-start op60 fw300 text-sm">
                                        <div class="i-carbon-shopping-cart h-12px w-12px mt-3px" />
                                        <div class="ml-2px">Заказы: n</div>
                                    </div>

                                    <div class="flex items-center justify-start op60 fw300 text-sm">
                                        <div class="i-carbon-page-scroll h-12px w-12px mt-3px" />
                                        <div class="ml-2px">Подписки: n</div>
                                    </div>

                                    <div class="flex items-center justify-start op60 fw300 text-sm">
                                        <div class="i-carbon-scan h-12px w-12px mt-3px" />
                                        <div class="ml-2px">Рассылки: n</div>
                                    </div>

                                    <div class="flex items-center justify-start op60 fw300 text-sm">
                                        <div
                                            class="i-carbon-flow-stream-reference h-12px w-12px mt-3px"
                                        />
                                        <div class="ml-2px">Триггеры: n</div>
                                    </div>

                                    <div class="flex items-center justify-start op60 fw300 text-sm">
                                        <div
                                            class="i-carbon-app-connectivity h-12px w-12px mt-3px"
                                        />
                                        <div class="ml-2px">Чат-боты: n</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>