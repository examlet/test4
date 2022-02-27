<script lang="ts" setup>
definePageMeta({
    layout: false,
});

const submenu_hidden = ref(true)
const changeSubmenu = () => submenu_hidden.value = !submenu_hidden.value
</script>

<template>
    <NuxtLayout name="landing" class="landing">
        <div class="header">
            <div class="header__line">
                <div class="header__container wrapper">
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
                    <div class="header__menu">
                        <NuxtLink to="/">
                            <QButton class="header__button" quaternary>Возможности</QButton>
                        </NuxtLink>
                        <NuxtLink to="/">
                            <QButton class="header__button" quaternary>Тарифы</QButton>
                        </NuxtLink>
                        <NuxtLink to="/">
                            <QButton class="header__button" quaternary>Блог</QButton>
                        </NuxtLink>
                        <NuxtLink to="/auth">
                            <QButton class="" tertiary>Перейти в приложение</QButton>
                        </NuxtLink>
                    </div>

                    <div class="header__burger" @click="changeSubmenu">
                        <div class="header__burger_box space-y-1 h-full">
                            <div class="header__burger_box-inner -top-6px" />
                            <div class="header__burger_box-inner" />
                            <div class="header__burger_box-inner -bottom-6px" />
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="header__submenu"
                :class="[submenu_hidden ? '-translate-y-120%' : '-translate-y-0']"
            >
                <div class="header__submenu_container wrapper">
                    <div class="header__submenu_line mt-0">
                        <NuxtLink to="/" class="header__submenu_link">Возможности</NuxtLink>
                    </div>
                    <div class="header__submenu_line">
                        <NuxtLink to="/" class="header__submenu_link">Тарифы</NuxtLink>
                    </div>
                    <div class="header__submenu_line">
                        <NuxtLink to="/" class="header__submenu_link">Перейти в приложение</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>