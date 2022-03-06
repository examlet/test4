<script lang="ts" setup>
definePageMeta({
    layout: false,
});

const submenu_hidden = ref(true)
const changeSubmenu = () => submenu_hidden.value = !submenu_hidden.value
</script>

<template>
    <NuxtLayout name="landing" class="landing">
        <div class="landing__header">
            <div class="landing__header_line">
                <div class="landing__header_container landing__wrapper">
                    <div class="header__logo">
                        <!-- <NuxtLink to="/">
                            <img src="img/logo.svg" alt="QuickSales" class="header__logo" />
                        </NuxtLink> -->
                        <div class="flex items-start text-teal-600 ">
                            <div class="h-24px w-24px text-2xl">
                                <div class="i-carbon-webhook" />
                            </div>
                            <div class="ml-10px text-xl font-bold">
                                <span>QuickSales</span>
                            </div>
                        </div>
                    </div>
                    <div class="landing__header_menu">
                        <NuxtLink to="/">
                            <QButton class="landing__header_button h-30px" quaternary>Возможности</QButton>
                        </NuxtLink>
                        <NuxtLink to="/">
                            <QButton class="landing__header_button h-30px" quaternary>Тарифы</QButton>
                        </NuxtLink>
                        <NuxtLink to="/">
                            <QButton class="landing__header_button h-30px" quaternary>Блог</QButton>
                        </NuxtLink>
                        <NuxtLink to="/auth">
                            <QButton class="h-30px" tertiary>Перейти в приложение</QButton>
                        </NuxtLink>
                    </div>

                    <div class="landing__header_burger" @click="changeSubmenu">
                        <div class="landing__header_burgerBox space-y-1 h-full">
                            <div class="landing__header_burgerBoxInner -top-6px" />
                            <div class="landing__header_burgerBoxInner" />
                            <div class="landing__header_burgerBoxInner -bottom-6px" />
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="landing__header_submenu"
                :class="[submenu_hidden ? '-translate-y-120%' : '-translate-y-0']"
            >
                <div class="landing__header_submenuСontainer landing__wrapper">
                    <div class="landing__header_submenuLine mt-0">
                        <NuxtLink to="/" class="landing__header_submenuLink">Возможности</NuxtLink>
                    </div>
                    <div class="landing__header_submenuLine">
                        <NuxtLink to="/" class="landing__header_submenuLink">Тарифы</NuxtLink>
                    </div>
                    <div class="landing__header_submenuLine">
                        <NuxtLink to="/" class="landing__header_submenuLink">Блог</NuxtLink>
                    </div>
                    <div class="landing__header_submenuLine">
                        <NuxtLink to="/" class="landing__header_submenuLink">Перейти в приложение</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>