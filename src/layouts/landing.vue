<script setup lang="ts">
const submenu_hidden = ref(true)
const changeSubmenu = () => submenu_hidden.value = !submenu_hidden.value
</script>

<template>
    <div class="landing">
        <div class="landing__header">
            <div class="landing__header_line">
                <div class="landing__header_container landing__wrapper">
                    <div class="header__logo">
                        <NuxtLink to="/" class="flex items-start text-teal-600 ">
                            <div class="h-24px w-24px text-2xl">
                                <div class="i-carbon-webhook" />
                            </div>
                            <div class="ml-10px text-xl font-bold">
                                <span>QuickSales</span>
                            </div>
                        </NuxtLink>
                    </div>
                    <div class="landing__header_menu">
                        <NuxtLink to="/features">
                            <QButton class="landing__header_button" quaternary>Возможности</QButton>
                        </NuxtLink>
                        <NuxtLink to="/tariffs">
                            <QButton class="landing__header_button" quaternary>Тарифы</QButton>
                        </NuxtLink>
                        <NuxtLink to="/blog">
                            <QButton class="landing__header_button" quaternary>Блог</QButton>
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
                        <NuxtLink to="/features" class="landing__header_submenuLink">
                            <div class="i-carbon-tropical-storm-tracks" />
                            <div class="ml-10px">Возможности</div>
                        </NuxtLink>
                    </div>
                    <div class="landing__header_submenuLine">
                        <NuxtLink to="/tariffs" class="landing__header_submenuLink">
                            <div class="i-carbon-calculator" />
                            <div class="ml-10px">Тарифы</div>
                        </NuxtLink>
                    </div>
                    <div class="landing__header_submenuLine">
                        <NuxtLink to="/blog" class="landing__header_submenuLink">
                            <div class="i-carbon-notebook-reference" />
                            <div class="ml-10px">Блог</div>
                        </NuxtLink>
                    </div>
                    <div class="landing__header_submenuLine">
                        <NuxtLink to="/auth" class="landing__header_submenuLink">
                            <div class="i-carbon-fingerprint-recognition" />
                            <div class="ml-10px">Перейти в приложение</div>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="landing__wrapper mt-20px landing_content">
            <slot />
        </div>
    </div>
</template>