<script setup lang="ts">
import QDropdown from "../components/QDropdown.vue";
const drawerCollapsed = ref(true);
const toggleDrawer = () => (drawerCollapsed.value = !drawerCollapsed.value);
</script>

<template>
  <div class="cabinet h-full w-full bg-[#f5f7f9] pt-48px">
    <div
      class="cabinet__header fixed top-0 left-0 right-0 w-full h-48px z-100 bg-[#fff] border-b border-[#e7e8ec] shadow"
    >
      <div
        class="cabinet__header_container flex h-48px w-full flex justify-between items-center mx-auto px-20px xl:px-32px text-sm"
      >
        <div class="flex h-full items-center text-teal-600 text-lg">
          <div class="i-carbon-webhook" />
          <div class="ml-5px text-base font-bold">
            <span>QuickSales</span>
          </div>
          
          <div class="hidden sm:flex h-full items-center">
            <hr class="h-50% w-1px border-l border-[#e1e3e6] mx-5" />
            <slot name="breadcrumb"/>
          </div>
          
        </div>

        <div class="flex h-full items-center">
          <NuxtLink to="/cabinet/profile" class="block sm:hidden i-carbon-user-profile cursor-pointer hover:text-teal-700" />

          <div class="hidden md:block text-[#6d7885] mr-20px truncate text-xs tracking-tighter fw200 select-text !selection:bg-teal-700 !selection:bg-opacity-20">
            #7a37913b-76bb-4dbe-ae60-14a50d241f57
          </div>
          <QDropdown class="hidden sm:block">
            <QButton tertiary class="flex items-center mx-5px">
              <span class="mr-5px">Вадим Лукин</span>
              <div class="text-base i-carbon-caret-down" />
            </QButton>

            <template #content>
              <NuxtLink to="/cabinet/profile" class="flex items-center hover:bg-[#f5f7f9] mb-5px px-10px rounded-sm py-2px">
                <div class="h-12px w-12px mt-1px mr-8px i-carbon-user-profile" />
                <span>Профиль</span>
              </NuxtLink>
              <NuxtLink to="/cabinet/balance" class="flex items-center hover:bg-[#f5f7f9] mb-5px px-10px rounded-sm py-2px">
                <div class="h-12px w-12px mt-1px mr-8px i-carbon-currency-ruble" />
                <span>Баланс</span>
              </NuxtLink>
              <NuxtLink to="/cabinet/help" class="flex items-center hover:bg-[#f5f7f9] mb-5px px-10px rounded-sm py-2px">
                <div class="h-12px w-12px mt-1px mr-8px i-carbon-document-unknown" />
                <span>Помощь</span>
              </NuxtLink>
              <NuxtLink to="/cabinet/support" class="flex items-center hover:bg-[#f5f7f9] mb-5px px-10px rounded-sm py-2px">
                <div class="h-12px w-12px mt-1px mr-8px i-carbon-ai-status-in-progress" />
                <span>Поддержка</span>
              </NuxtLink>
              <hr class="op20 mx-20px my-2" />
              <NuxtLink to="#" class="flex items-center hover:bg-[#f5f7f9] mb-5px px-10px rounded-sm py-2px">
                <div class="h-12px w-12px mt-1px mr-8px i-carbon-login" />
                <span>Выйти</span>
              </NuxtLink>
            </template>
          </QDropdown>

          <hr class="h-50% w-1px border-l border-[#e1e3e6] mx-5" />
          <div class="i-carbon-notification-new cursor-pointer hover:text-teal-700" />
          <hr class="h-50% w-1px border-l border-[#e1e3e6] mx-5" />
          <div
            class="i-carbon-settings transition-transform duration-300 ease-in-out cursor-pointer hover:text-teal-700"
            :class="{ 'rotate-360': !drawerCollapsed }"
            @click="toggleDrawer"
          />
        </div>
      </div>
    </div>

    <div class="cabinet__body h-full">
      <div
        v-if="!drawerCollapsed"
        class="bg-black-500 op10 z-1 fixed h-full w-full"
        @click="toggleDrawer"
      />
      <QDrawer :collapsed="drawerCollapsed" />
      <slot />
    </div>
  </div>
</template>
